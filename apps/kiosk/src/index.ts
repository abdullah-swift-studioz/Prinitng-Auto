import axios from 'axios';
import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

const KIOSK_ID = process.env.KIOSK_ID || 'default';
const API_URL = process.env.API_URL || 'http://localhost:3004/api';
const TEMP_DIR = path.join(__dirname, '../temp_downloads');

if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
}

console.log(`🚀 Kiosk Client Started | ID: ${KIOSK_ID} | API: ${API_URL}`);

// Poll every 5 seconds
cron.schedule('*/5 * * * * *', async () => {
    try {
        // 1. Check for jobs
        console.log('🔍 Checking for jobs...');
        const res = await axios.get(`${API_URL}/jobs/kiosk/${KIOSK_ID}`);
        const jobs = res.data;

        if (jobs.length > 0) {
            console.log(`📦 Found ${jobs.length} pending jobs.`);

            for (const job of jobs) {
                await processJob(job);
            }
        }
    } catch (error) {
        // Keep silent on connection errors to avoid log spam, or log briefly
        // console.error('Connection error:', error.message);
    }
});

async function processJob(job: any) {
    console.log(`Processing Job #${job.id} (File: ${job.fileId})`);

    // 2. Download File
    const fileUrl = `${API_URL.replace('/api', '')}/uploads/${job.fileId}`;
    const filePath = path.join(TEMP_DIR, `job_${job.id}_${job.fileId}`);

    try {
        console.log(`⬇️  Downloading from ${fileUrl}...`);
        const writer = fs.createWriteStream(filePath);
        const response = await axios({
            url: fileUrl,
            method: 'GET',
            responseType: 'stream'
        });

        response.data.pipe(writer);

        await new Promise<void>((resolve, reject) => {
            writer.on('finish', () => resolve());
            writer.on('error', (err) => reject(err));
        });

        console.log(`✅ Downloaded to ${filePath}`);

        // 3. Execute Print Command
        console.log(`🖨️  Sending to printer (${job.copies} copies)...`);

        try {
            if (process.platform === 'win32') {
                // Windows: use PowerShell to print via default printer
                // Loop for copies since PowerShell Print verb doesn't support copy count
                const escapedPath = filePath.replace(/'/g, "''");
                for (let i = 0; i < job.copies; i++) {
                    await execPromise(
                        `powershell -command "Start-Process -FilePath '${escapedPath}' -Verb Print -Wait"`
                    );
                }
            } else {
                // macOS / Linux
                await execPromise(`lp -n ${job.copies} "${filePath}"`);
            }
            console.log(`✅ Sent to printer successfully`);
        } catch (printError) {
            console.error('❌ Printing failed (Is a printer configured?):', printError);
        }

        // 4. Mark as Complete
        await axios.post(`${API_URL}/jobs/${job.id}/complete`);
        console.log(`🏁 Job #${job.id} marked as COMPLETED`);

    } catch (error) {
        console.error(`❌ Failed to process job #${job.id}:`, error);
    }
}
