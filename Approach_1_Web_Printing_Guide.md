# Approach 1: Web-Based Kiosk Printing Setup

This approach relies entirely on the Next.js `/kiosk-print` page. It uses the browser's built-in `window.print()` functionality to print documents. For a true kiosk, you must configure the browser to automatically accept print prompts and suppress pop-ups.

## Prerequisites
1.  Your API and Web frontend (`apps/api` and `apps/web`) must be hosted on AWS and accessible via public URLs.
2.  Your Windows 10 kiosk machine is connected to the physical printer.
3.  The physical printer is set as the "Default Printer" on the Windows 10 machine.
4.  You have Google Chrome installed on the Windows 10 kiosk.

## Step 1: Prepare the Chrome Shortcut
By default, `window.print()` will trigger a print dialog requiring a user to manually press "Print". To bypass this, Chrome must be launched with specific developer flags.

1.  On the Windows 10 desktop, right-click and select **New > Shortcut**.
2.  In the location box, enter the path to Google Chrome followed by the required flags and your AWS URL. It should look exactly like this (ensure you include the quotes exactly as shown):
    ```text
    "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --kiosk-printing "https://printit.fixerr.ai/kiosk-display?kiosk_id=main-printer"
    ```
    *   `--kiosk`: Locks Chrome into full-screen mode without an address bar.
    *   `--kiosk-printing`: Instructs Chrome to automatically hit "Print" on any system print dialogs that pop up.
    *   `kiosk_id=main-printer`: This assigns a unique name to this specific machine. You can invent any name (e.g., `fast-kiosk-1`, `library-printer`). Just ensure the physical QR code users scan matches this exact ID!
3.  Name the shortcut something like "Start Printing Kiosk".

## Step 2: System Boot Configuration (Optional but Recommended)
To make your kiosk truly autonomous, it should automatically open this browser when the machine is turned on.

1.  Press `Win + R` on the keyboard to open the Run dialog.
2.  Type `shell:startup` and hit Enter. This opens the Windows Startup folder.
3.  Copy and paste the "Start Printing Kiosk" shortcut you created in Step 1 into this folder.
4.  Now, every time the Windows machine is turned on or reboots, Chrome will automatically open in locked-down kiosk mode, ready to receive jobs.

## Caveats and Limitations You Should Know About
*   **Multiple Copies Glitch:** The codebase handles multiple copies by executing `window.print()` inside a fast JavaScript loop. Under Chrome's `--kiosk-printing` mode, firing print dialogues too fast can occasionally cause dropped jobs or browser lockups.
*   **Security:** Anyone possessing a keyboard can exit a software kiosk via shortcuts (like Alt-F4). Physical keyboard access must be restricted.
*   **No Hardware Feedback:** The Next.js app has no way of knowing if the printer actually successfully grabbed the paper or if there was a paper jam. It assumes printing worked and calls `/api/jobs/:jobId/complete`.
