# Approach 2: Background Service Kiosk Setup (Recommended)

This approach separates the visual user interface from the physical printing mechanism. Your AWS server hosts the Next.js frontend for users to interact with, while a lightweight Node.js script runs invisibly in the background on the Windows 10 kiosk machine, pulling print jobs directly from AWS and communicating with the hardware.

## Advantages Over Approach 1
*   **100% Reliable Background Printing:** Uses native Windows PowerShell commands rather than browser dialogs.
*   **Superior Handling of Multiple Copies:** Loops through shell executions perfectly without freezing or glitching out Chrome print queues.
*   **Clean Kiosk Web View:** The website runs purely to display QR codes or instructions.

## Step-by-Step Setup

### Step 1: Physical Printer Setup
1.  Connect your printer to the Windows 10 kiosk.
2.  Install all necessary printer drivers.
3.  Go to **Settings > Devices > Printers & scanners**, find your printer, and ensure it is designated as the **Default Printer**.

### Step 2: Kiosk Code Preparation
On the Windows 10 kiosk machine:
1.  Download and install Node.js (https://nodejs.org/).
2.  Copy ONLY the `apps/kiosk` folder from your codebase onto this machine (e.g., to `C:\Printing-Auto-Kiosk`).
3.  Open a terminal inside that folder.
4.  Run `npm install` to grab the dependencies.
5.  Run `npm run build` to compile the TypeScript files into JavaScript (this generates the `dist/` folder).

### Step 3: Connect to AWS
The kiosk client needs to know where to find your server.
1.  Inside the `apps/kiosk` folder, create a new file named `.env`.
2.  Add your API location and specific Kiosk Identifier to this file:
    ```env
    API_URL=https://api.YOUR-AWS-URL.com/api
    KIOSK_ID=YOUR_UNIQUE_KIOSK_ID
    ```
    *(Note: `KIOSK_ID` must precisely match the ID you set up in your admin panel.)*

### Step 4: Automate the Background Service
You want this client running constantly, even if the machine restarts. We will use PM2, an industry-standard process manager.
1.  In your terminal, globally install PM2: 
    ```bash
    npm install -g pm2
    ```
2.  Start the kiosk script using PM2:
    ```bash
    pm2 start dist/index.js --name "printing-kiosk-service"
    ```
3.  Install the PM2 Windows Startup utility:
    ```bash
    npm install pm2-windows-startup -g
    ```
4.  Run the installation command to register PM2 as a Windows service:
    ```bash
    pm2-startup install
    ```
5.  Save the current process list so PM2 remembers to launch it on reboot:
    ```bash
    pm2 save
    ```

### Step 5: Screen Setup
The printing backend is now permanently active. To handle the visual portion:
1.  Open the web browser on the Windows kiosk.
2.  Navigate to your AWS frontend, specifically the display view: `https://YOUR-AWS-WEB-URL.com/kiosk-display?kiosk_id=YOUR_UNIQUE_KIOSK_ID`
3.  Press `F11` (or use a browser locking tool) to lock the screen into place.

Whenever a job enters the AWS system, the invisible PM2 script will download the PDF and securely print it—all without the Next.js screen ever changing.
