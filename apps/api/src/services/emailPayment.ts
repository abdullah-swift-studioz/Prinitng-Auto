import imap from 'imap-simple';
import { simpleParser } from 'mailparser';

interface PaymentMatch {
    matched: boolean;
    amount?: number;
    senderTitle?: string;
}

// IMAP SINCE requires DD-Mon-YYYY (e.g. "31-Mar-2026"), not ISO format
const formatImapDate = (date: Date): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

// Multiple fallbacks for extracting amount from email text
const extractAmount = (text: string): number | null => {
    // Fallback 1: "Amount Received\n\nRs. 6,500"
    const blockMatch = text.match(/Amount\s+Received[\s\S]{0,30}?Rs\.?\s*([\d,]+)/i);
    if (blockMatch) {
        console.log('[Amount] Matched via "Amount Received" block');
        return parseInt(blockMatch[1].replace(/,/g, ''), 10);
    }

    // Fallback 2: "You got Rs. 6,500 from..."
    const inlineMatch = text.match(/You\s+got\s+Rs\.?\s*([\d,]+)/i);
    if (inlineMatch) {
        console.log('[Amount] Matched via "You got Rs." inline');
        return parseInt(inlineMatch[1].replace(/,/g, ''), 10);
    }

    // Fallback 3: "PKR 6,500" or "PKR6500"
    const pkrMatch = text.match(/PKR\s*([\d,]+)/i);
    if (pkrMatch) {
        console.log('[Amount] Matched via "PKR" prefix');
        return parseInt(pkrMatch[1].replace(/,/g, ''), 10);
    }

    // Fallback 4: "Rs. 6,500" anywhere (least specific, last resort)
    const genericMatch = text.match(/Rs\.?\s*([\d,]+)/i);
    if (genericMatch) {
        console.log('[Amount] Matched via generic "Rs." pattern');
        return parseInt(genericMatch[1].replace(/,/g, ''), 10);
    }

    return null;
};

// Multiple fallbacks for extracting the SENDER's account title from email text
// NayaPay emails are sent to the receiver (merchant), so we need the sender = customer
const extractSenderTitle = (text: string): string | null => {
    // Fallback 1: "Source Acc. Title\n\nAbdullah Ali"
    const sourceAccMatch = text.match(/Source\s+Acc(?:ount)?\.?\s+Title[\s\n:]+([^\n]+)/i);
    if (sourceAccMatch) {
        console.log('[Sender] Matched via "Source Acc. Title"');
        return sourceAccMatch[1].trim();
    }

    // Fallback 2: "Sender\n\nAbdullah Ali" or "Sent By\n\nAbdullah Ali"
    const senderLabelMatch = text.match(/(?:Sender|Sent\s+By|From\s+Name)[\s\n:]+([^\n]+)/i);
    if (senderLabelMatch) {
        console.log('[Sender] Matched via sender label field');
        return senderLabelMatch[1].trim();
    }

    // Fallback 3: "You got Rs. 6,500 from Abdullah Ali 🎉"
    const fromInlineMatch = text.match(/You\s+got\s+Rs\.?\s*[\d,]+\s+from\s+([^\n]+)/i);
    if (fromInlineMatch) {
        // Strip trailing emoji and whitespace
        const name = fromInlineMatch[1].replace(/[\s\u{1F300}-\u{1FFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+$/u, '').trim();
        if (name) {
            console.log('[Sender] Matched via "You got Rs. X from" inline');
            return name;
        }
    }

    // Fallback 4: Subject line "Payment received from Abdullah Ali"
    const subjectMatch = text.match(/(?:received|transfer)\s+from\s+([A-Za-z\s]+?)(?:\s+of|\s+for|\s*\n|$)/i);
    if (subjectMatch) {
        console.log('[Sender] Matched via subject/text "received from" phrase');
        return subjectMatch[1].trim();
    }

    return null;
};

const titlesMatch = (emailTitle: string, userTitle: string): boolean => {
    const a = emailTitle.toUpperCase().trim();
    const b = userTitle.toUpperCase().trim();
    // Either direction — handles partial names, abbreviations
    return a.includes(b) || b.includes(a);
};

export const checkPayment = async (targetAmountPKR: number, targetSenderTitlePart: string): Promise<PaymentMatch> => {
    const config = {
        imap: {
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASSWORD,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            authTimeout: 10000
        }
    };

    if (!config.imap.user || !config.imap.password) {
        console.error('EMAIL_USER or EMAIL_PASSWORD not set');
        return { matched: false };
    }

    let connection: any;
    try {
        connection = await imap.connect(config as any);
        await connection.openBox('INBOX');

        const searchCriteria = [
            ['FROM', 'service@nayapay.com'],
            ['SINCE', formatImapDate(new Date())]
        ];

        // Fetch full raw message so simpleParser can handle any MIME structure
        const fetchOptions = {
            bodies: [''],
            markSeen: false
        };

        const messages = await connection.search(searchCriteria, fetchOptions);
        console.log(`NayaPay: Found ${messages.length} candidate email(s) today.`);

        for (const item of messages) {
            const rawPart = item.parts.find((part: any) => part.which === '');
            if (!rawPart) {
                console.warn('No raw body part found, skipping message.');
                continue;
            }

            const mail = await simpleParser(rawPart.body);

            // Prefer plain text; fall back to HTML stripped of tags
            let text = mail.text || '';
            if (!text && mail.html) {
                text = mail.html
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/&nbsp;/g, ' ')
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>');
            }
            text = text.replace(/\r\n/g, '\n');

            if (!text) {
                console.warn('Email has no parseable text content, skipping.');
                continue;
            }

            console.log(`--- Email preview (first 600 chars) ---\n${text.substring(0, 600)}\n---`);

            const emailAmount = extractAmount(text);
            const senderTitle = extractSenderTitle(text);

            console.log(`Parsed -> Amount: ${emailAmount}, Sender: ${senderTitle}`);
            console.log(`Target -> Amount: ${targetAmountPKR}, Sender: ${targetSenderTitlePart}`);

            if (emailAmount == null) {
                console.warn('Could not extract amount from this email, skipping.');
                continue;
            }

            const isAmountMatch = emailAmount === targetAmountPKR;

            let isTitleMatch: boolean;
            if (senderTitle) {
                isTitleMatch = titlesMatch(senderTitle, targetSenderTitlePart);
            } else {
                // Could not extract sender name — fall back to amount-only match with a warning
                console.warn('Could not extract sender title; falling back to amount-only match.');
                isTitleMatch = true;
            }

            console.log(`Amount match: ${isAmountMatch}, Title match: ${isTitleMatch}`);

            if (isAmountMatch && isTitleMatch) {
                connection.end();
                return {
                    matched: true,
                    amount: emailAmount,
                    senderTitle: senderTitle || undefined
                };
            }
        }

        connection.end();
        return { matched: false };

    } catch (error) {
        console.error('Email Check Error (NayaPay):', error);
        if (connection) {
            try { connection.end(); } catch (_) {}
        }
        return { matched: false };
    }
};
