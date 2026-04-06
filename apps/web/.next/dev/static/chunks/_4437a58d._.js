(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/upload/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CloudArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/CloudArrowUp.esm.js [app-client] (ecmascript) <export default as CloudArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FilePdf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePdf$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/FilePdf.esm.js [app-client] (ecmascript) <export default as FilePdf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CheckCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/CheckCircle.esm.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Spinner.esm.js [app-client] (ecmascript) <export default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Printer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Printer.esm.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Clock$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Clock.esm.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || '';
const PRICE_PER_PAGE_PKR = 10;
const STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }

    /* ─── shared grid bg ─────────────────────────────────────────────────────── */
    .page-bg {
        position: fixed; inset: 0;
        background: #ffffff;
        z-index: -1;
    }
    .page-bg::after {
        content: '';
        position: absolute; inset: 0;
        background-image:
            linear-gradient(rgba(79,218,15,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,218,15,0.07) 1px, transparent 1px);
        background-size: 32px 32px;
    }

    /* ─── full-screen status pages ───────────────────────────────────────────── */
    .fs-shell {
        height: 100svh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 28px;
        font-family: 'Barlow', sans-serif;
        position: relative;
        gap: 0;
    }
    .fs-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
    }
    .fs-headline {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(36px, 10vw, 52px);
        letter-spacing: 2px;
        color: #3f4247;
        text-align: center;
        line-height: 1;
    }
    .fs-body {
        font-size: 15px;
        font-weight: 300;
        color: rgba(63,66,71,0.52);
        text-align: center;
        line-height: 1.65;
        width: 100%;
    }
    .fs-card {
        width: 100%;
        padding: 22px 24px;
        border: 1px solid rgba(63,66,71,0.1);
        border-radius: 18px;
        text-align: center;
        background: rgba(79,218,15,0.03);
        box-shadow: 0 0 0 1px rgba(79,218,15,0.1), 0 2px 16px rgba(63,66,71,0.05);
    }
    .fs-price {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(42px, 12vw, 60px);
        letter-spacing: 2px;
        color: #3f4247;
        line-height: 1;
    }
    .fs-job-id {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase;
        color: rgba(63,66,71,0.28);
        margin-top: 8px;
    }
    .fs-account {
        font-size: 14px; color: rgba(63,66,71,0.45); margin-top: 4px;
    }

    /* spinner ring */
    .ring-wrap {
        position: relative;
        width: 100px; height: 100px;
        flex-shrink: 0;
    }
    .ring-bg {
        position: absolute; inset: 0; border-radius: 50%;
        border: 3px solid rgba(79,218,15,0.15);
    }
    .ring-spin {
        position: absolute; inset: 0; border-radius: 50%;
        border: 3px solid #4fda0f;
        border-top-color: transparent;
        animation: do-spin 0.9s linear infinite;
    }
    @keyframes do-spin { to { transform: rotate(360deg); } }
    .ring-center {
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
    }

    /* pending ring */
    .pending-wrap {
        position: relative;
        width: 100px; height: 100px;
        flex-shrink: 0;
    }
    .pending-pulse {
        position: absolute; inset: 0; border-radius: 50%;
        background: rgba(245,158,11,0.1);
        animation: do-ping 2.5s ease-out infinite;
    }
    @keyframes do-ping {
        0% { transform: scale(1); opacity: 0.7; }
        100% { transform: scale(1.5); opacity: 0; }
    }
    .pending-border {
        position: absolute; inset: 0; border-radius: 50%;
        border: 2px solid rgba(245,158,11,0.35);
        display: flex; align-items: center; justify-content: center;
    }

    /* completed icon */
    .done-icon {
        width: 100px; height: 100px; border-radius: 50%;
        background: rgba(79,218,15,0.08);
        border: 2px solid rgba(79,218,15,0.3);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
    }

    /* live row */
    .live-row {
        display: flex; align-items: center; gap: 8px;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; letter-spacing: 0.5px;
        color: rgba(63,66,71,0.5);
    }
    .live-dot {
        width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
    }
    .dot-green {
        background: #4fda0f;
        animation: glow 2s ease-in-out infinite;
        box-shadow: 0 0 8px rgba(79,218,15,0.6);
    }
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 8px rgba(79,218,15,0.6); }
        50% { box-shadow: 0 0 20px rgba(79,218,15,0.9); }
    }
    .dot-amber {
        background: #f59e0b;
        animation: amber-pulse 2s ease-in-out infinite;
    }
    @keyframes amber-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

    .wait-note {
        font-size: 12px; color: rgba(63,66,71,0.32);
        text-align: center; line-height: 1.65; width: 100%;
    }
    .wait-note strong { color: rgba(63,66,71,0.48); }

    /* ─── main upload / configure / pay shell ────────────────────────────────── */
    .up-shell {
        height: 100svh;
        display: flex;
        flex-direction: column;
        font-family: 'Barlow', sans-serif;
        position: relative;
    }

    /* fixed header */
    .up-header {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 44px 24px 16px;
        border-bottom: 1px solid rgba(63,66,71,0.08);
        background: rgba(255,255,255,0.92);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        position: relative;
        z-index: 10;
    }
    .up-logo { width: 86px; height: auto; object-fit: contain; display: block; }
    .up-kiosk-id {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase;
        color: rgba(63,66,71,0.38);
        padding: 5px 14px;
        border: 1px solid rgba(63,66,71,0.14);
        border-radius: 20px;
    }

    /* scrollable content */
    .up-body {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding: 24px 24px 0;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    /* upload zone — fills height when IDLE */
    .up-zone-wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
    }
    .up-drop-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 18px;
        flex: 1;
        min-height: 280px;
        border: 2px dashed rgba(79,218,15,0.32);
        border-radius: 20px;
        cursor: pointer;
        padding: 40px 24px;
        transition: border-color 0.18s, background 0.18s;
        -webkit-tap-highlight-color: transparent;
    }
    .up-drop-label:active {
        border-color: #4fda0f;
        background: rgba(79,218,15,0.04);
    }
    .up-icon-bg {
        width: 72px; height: 72px;
        border-radius: 20px;
        background: rgba(79,218,15,0.1);
        display: flex; align-items: center; justify-content: center;
    }
    .up-tap-text {
        font-size: 18px; font-weight: 600; color: #3f4247; text-align: center;
    }
    .up-file-types {
        font-size: 14px; color: rgba(63,66,71,0.4); text-align: center;
    }

    .up-uploading {
        flex: 1; min-height: 280px;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 16px;
    }
    .up-spinner-bg {
        width: 72px; height: 72px; border-radius: 50%;
        background: rgba(79,218,15,0.08);
        border: 1px solid rgba(79,218,15,0.2);
        display: flex; align-items: center; justify-content: center;
    }
    .up-analyzing {
        font-size: 15px; color: rgba(63,66,71,0.5);
    }

    /* file info card */
    .cfg-file {
        display: flex; align-items: center; gap: 14px;
        padding: 14px 16px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        flex-shrink: 0;
    }
    .cfg-file-icon {
        padding: 10px;
        background: rgba(79,218,15,0.1);
        border-radius: 10px;
        flex-shrink: 0;
    }
    .cfg-file-name {
        font-weight: 600; font-size: 14px; color: #3f4247;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .cfg-file-meta {
        font-size: 12px; color: rgba(63,66,71,0.45); margin-top: 2px;
    }

    /* section label */
    .sec-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
        margin-bottom: 10px;
    }

    /* copies */
    .copies-row {
        display: flex; align-items: center; gap: 0;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        overflow: hidden;
    }
    .copies-btn {
        flex: 1;
        height: 64px;
        background: transparent;
        border: none;
        font-size: 28px; font-weight: 300;
        color: #3ab30a;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: background 0.12s;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }
    .copies-btn:disabled { opacity: 0.28; cursor: not-allowed; }
    .copies-btn:not(:disabled):active { background: rgba(79,218,15,0.12); }
    .copies-divider {
        width: 1px; height: 36px;
        background: rgba(79,218,15,0.2);
        flex-shrink: 0;
    }
    .copies-val {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 52px; letter-spacing: 2px;
        color: #3f4247;
        min-width: 80px; text-align: center; line-height: 1;
        padding: 0 8px;
    }

    /* price card */
    .price-card {
        display: flex; justify-content: space-between; align-items: center;
        padding: 20px 20px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.18);
        border-radius: 16px;
        flex-shrink: 0;
    }
    .price-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
    }
    .price-val {
        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(36px, 10vw, 48px); letter-spacing: 2px;
        color: #3f4247; line-height: 1; margin-top: 4px;
    }
    .price-breakdown { text-align: right; }
    .price-line {
        font-size: 13px; color: rgba(63,66,71,0.4); line-height: 1.7;
    }

    /* payment box */
    .pay-box {
        padding: 20px;
        background: rgba(79,218,15,0.05);
        border: 1px solid rgba(79,218,15,0.22);
        border-radius: 16px;
        display: flex; flex-direction: column; gap: 14px;
        flex-shrink: 0;
    }
    .pay-heading {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
        color: #3ab30a;
    }
    .pay-row {
        display: flex; justify-content: space-between; align-items: center; gap: 10px;
    }
    .pay-row-label {
        font-size: 13px; color: rgba(63,66,71,0.45); flex-shrink: 0;
    }
    .pay-row-val {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 13px; font-weight: 700; color: #3f4247;
        background: rgba(79,218,15,0.08);
        padding: 4px 10px; border-radius: 6px;
        text-align: right; word-break: break-all;
    }
    .pay-note {
        font-size: 12px; color: rgba(63,66,71,0.4);
        border-top: 1px solid rgba(79,218,15,0.14);
        padding-top: 10px;
    }

    /* input */
    .input-label {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 11px; letter-spacing: 4px;
        text-transform: uppercase; color: rgba(63,66,71,0.4);
        display: block; margin-bottom: 8px;
    }
    .account-input {
        width: 100%;
        padding: 16px;
        background: #ffffff;
        border: 1.5px solid rgba(63,66,71,0.16);
        border-radius: 14px;
        font-family: 'Barlow', sans-serif;
        font-size: 16px; color: #3f4247;
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
    }
    .account-input::placeholder { color: rgba(63,66,71,0.28); }
    .account-input:focus {
        border-color: #4fda0f;
        box-shadow: 0 0 0 3px rgba(79,218,15,0.12);
    }
    .input-hint {
        font-size: 12px; color: rgba(63,66,71,0.38); margin-top: 6px;
    }

    /* sticky footer with action button */
    .up-footer {
        flex-shrink: 0;
        padding: 16px 24px 36px;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-top: 1px solid rgba(63,66,71,0.07);
    }

    /* buttons */
    .btn-green {
        width: 100%;
        padding: 19px 24px;
        background: #4fda0f;
        border: none; border-radius: 16px;
        display: flex; align-items: center; justify-content: center; gap: 8px;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        box-shadow: 0 6px 24px rgba(79,218,15,0.35);
        -webkit-tap-highlight-color: transparent;
    }
    .btn-green:disabled { opacity: 0.35; cursor: not-allowed; box-shadow: none; }
    .btn-green:not(:disabled):active { transform: scale(0.98); }
    .btn-green-text {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
    }

    .btn-dark-green {
        width: 100%;
        padding: 19px 24px;
        background: #3ab30a;
        border: none; border-radius: 16px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        box-shadow: 0 6px 24px rgba(58,179,10,0.3);
        -webkit-tap-highlight-color: transparent;
    }
    .btn-dark-green:disabled { opacity: 0.32; cursor: not-allowed; box-shadow: none; }
    .btn-dark-green:not(:disabled):active { transform: scale(0.98); }

    .btn-dark {
        width: 100%;
        padding: 19px 24px;
        background: #3f4247;
        border: none; border-radius: 16px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 22px; letter-spacing: 3px;
        color: #ffffff; text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.12s, transform 0.1s;
        -webkit-tap-highlight-color: transparent;
    }
    .btn-dark:active { transform: scale(0.98); opacity: 0.88; }

    /* spacer at bottom of scrollable area so content isn't hidden behind footer */
    .scroll-spacer { height: 8px; flex-shrink: 0; }
`;
function UploadPageContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const kioskId = searchParams.get('kiosk_id') || 'default';
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metadata, setMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jobId, setJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accountTitle, setAccountTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copies, setCopies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('IDLE');
    const [isCreatingJob, setIsCreatingJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [walletBal, setWalletBal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalPrice = metadata ? metadata.pageCount * copies * PRICE_PER_PAGE_PKR : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadPageContent.useEffect": ()=>{
            const t = localStorage.getItem('kiosk_token');
            if (t) {
                setToken(t);
                fetch(`${API_BASE}/api/wallet/balance`, {
                    headers: {
                        Authorization: `Bearer ${t}`
                    }
                }).then({
                    "UploadPageContent.useEffect": (r)=>r.json()
                }["UploadPageContent.useEffect"]).then({
                    "UploadPageContent.useEffect": (d)=>{
                        if (d.balance !== undefined) setWalletBal(d.balance);
                    }
                }["UploadPageContent.useEffect"]).catch({
                    "UploadPageContent.useEffect": ()=>{}
                }["UploadPageContent.useEffect"]);
            }
        }
    }["UploadPageContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadPageContent.useEffect": ()=>{
            if (!jobId || status !== 'SUCCESS' && status !== 'AWAITING_ADMIN') return;
            const interval = setInterval({
                "UploadPageContent.useEffect.interval": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/jobs/${jobId}`);
                        if (!res.ok) return;
                        const job = await res.json();
                        if (status === 'AWAITING_ADMIN' && job.status === 'PAID') {
                            setStatus('SUCCESS');
                        } else if (status === 'SUCCESS' && job.status === 'COMPLETED') {
                            setStatus('COMPLETED');
                        }
                    } catch  {}
                }
            }["UploadPageContent.useEffect.interval"], 3000);
            return ({
                "UploadPageContent.useEffect": ()=>clearInterval(interval)
            })["UploadPageContent.useEffect"];
        }
    }["UploadPageContent.useEffect"], [
        status,
        jobId
    ]);
    const handleFileChange = async (e)=>{
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;
        setFile(selectedFile);
        setUploadError(null);
        setStatus('UPLOADING');
        const formData = new FormData();
        formData.append('file', selectedFile);
        try {
            const res = await fetch(`${API_BASE}/api/upload`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                setMetadata(data);
                setStatus('CONFIGURING');
            } else {
                setUploadError(data.error || `Upload failed (${res.status})`);
                setStatus('IDLE');
            }
        } catch (err) {
            setUploadError('Cannot reach the server. Make sure the API is running.');
            setStatus('IDLE');
        }
    };
    const handleCreateJob = async ()=>{
        if (!metadata || isCreatingJob) return;
        setIsCreatingJob(true);
        try {
            const reqBody = {
                fileId: metadata.fileId,
                pageCount: metadata.pageCount,
                copies,
                kioskId
            };
            const res = await fetch(`${API_BASE}/api/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            });
            const job = await res.json();
            if (res.ok) {
                setJobId(job.id);
                setStatus('PAYING');
            }
        } catch  {} finally{
            setIsCreatingJob(false);
        }
    };
    const handleWalletPayment = async ()=>{
        if (!jobId || !token) return;
        setStatus('VERIFYING_PAYMENT');
        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/pay-wallet`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                setStatus('SUCCESS');
            } else {
                setUploadError('Wallet payment failed or insufficient balance.');
                setStatus('PAYING');
            }
        } catch  {
            setUploadError('Network error');
            setStatus('PAYING');
        }
    };
    const handleVerifyPayment = async ()=>{
        if (!jobId || !accountTitle.trim()) return;
        setStatus('VERIFYING_PAYMENT');
        try {
            const res = await fetch(`${API_BASE}/api/jobs/${jobId}/verify-payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accountTitle: accountTitle.trim()
                })
            });
            setStatus(res.ok ? 'SUCCESS' : 'AWAITING_ADMIN');
        } catch  {
            setStatus('AWAITING_ADMIN');
        }
    };
    // ─── Full-screen: Verifying ───────────────────────────────────────────────
    if (status === 'VERIFYING_PAYMENT') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: STYLES
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 631,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 632,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fs-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ring-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-bg"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 636,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__["Spinner"], {
                                        size: 32,
                                        weight: "bold",
                                        color: "#4fda0f"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 635,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fs-headline",
                            children: "Verifying Payment"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 642,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fs-body",
                            children: "Checking your NayaPay transaction. This takes a few seconds…"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 643,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fs-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-price",
                                    children: [
                                        "PKR ",
                                        totalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 25
                                }, this),
                                jobId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-job-id",
                                    children: [
                                        "Job #",
                                        jobId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 644,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                    lineNumber: 634,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 633,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    // ─── Full-screen: Awaiting Admin ─────────────────────────────────────────
    if (status === 'AWAITING_ADMIN') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: STYLES
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 657,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 658,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fs-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pending-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pending-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 662,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pending-border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Clock$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 46,
                                        weight: "duotone",
                                        color: "#f59e0b"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 661,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fs-headline",
                            children: "Payment Under Review"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 667,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fs-body",
                            children: "We couldn't auto-verify your payment. Our team has been notified and is reviewing it — you'll be moved to the print queue automatically."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 668,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fs-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-price",
                                    children: [
                                        "PKR ",
                                        totalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 25
                                }, this),
                                accountTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-account",
                                    children: accountTitle
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 42
                                }, this),
                                jobId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-job-id",
                                    children: [
                                        "Job #",
                                        jobId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 675,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 672,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "live-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "live-dot dot-amber"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 25
                                }, this),
                                "Waiting for approval — updates automatically"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 677,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "wait-note",
                            children: [
                                "Typical wait: 1–5 minutes.",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Do not close this screen."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 681,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                    lineNumber: 660,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 659,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    // ─── Full-screen: Printing ────────────────────────────────────────────────
    if (status === 'SUCCESS') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: STYLES
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 694,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 695,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fs-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ring-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-bg"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-spin"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ring-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Printer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        size: 34,
                                        weight: "duotone",
                                        color: "#4fda0f"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 702,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 701,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 698,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fs-headline",
                            children: "Payment Confirmed!"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 705,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fs-body",
                            children: [
                                "Sending ",
                                copies,
                                " ",
                                copies === 1 ? 'copy' : 'copies',
                                " to the printer. Please wait near the machine."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 706,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fs-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-price",
                                    children: [
                                        "PKR ",
                                        totalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 711,
                                    columnNumber: 25
                                }, this),
                                jobId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fs-job-id",
                                    children: [
                                        "Job #",
                                        jobId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 712,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 710,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "live-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "live-dot dot-green"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 715,
                                    columnNumber: 25
                                }, this),
                                "Printing in progress"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 714,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                    lineNumber: 697,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 696,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    // ─── Full-screen: Completed ───────────────────────────────────────────────
    if (status === 'COMPLETED') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: STYLES
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 727,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 728,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fs-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "done-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CheckCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 54,
                                weight: "fill",
                                color: "#4fda0f"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 732,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 731,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fs-headline",
                            children: "All Done!"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 734,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fs-body",
                            children: "Your documents are ready. Please collect them from the printer."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 735,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-dark",
                            style: {
                                marginTop: 8
                            },
                            onClick: ()=>router.push(`/?kiosk_id=${kioskId}`),
                            children: "Print Another Document"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                            lineNumber: 738,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                    lineNumber: 730,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 729,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    // ─── Upload / Configure / Pay flow ───────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: STYLES
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 754,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-bg"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 755,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "up-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "up-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.jpeg",
                                alt: "Print It",
                                className: "up-logo"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 761,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "up-kiosk-id",
                                children: kioskId
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 762,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                        lineNumber: 759,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "up-body",
                        children: [
                            (status === 'IDLE' || status === 'UPLOADING') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "up-zone-wrap",
                                children: status === 'UPLOADING' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "up-uploading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "up-spinner-bg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__["Spinner"], {
                                                size: 30,
                                                weight: "bold",
                                                color: "#4fda0f",
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 774,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "up-analyzing",
                                            children: "Analyzing document…"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                            lineNumber: 776,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 772,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        uploadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '12px 16px',
                                                marginBottom: '12px',
                                                background: 'rgba(239,68,68,0.08)',
                                                border: '1px solid rgba(239,68,68,0.25)',
                                                borderRadius: '12px',
                                                color: '#dc2626',
                                                fontSize: '13px',
                                                lineHeight: 1.5
                                            },
                                            children: uploadError
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "up-drop-label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "up-icon-bg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CloudArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudArrowUp$3e$__["CloudArrowUp"], {
                                                        size: 36,
                                                        color: "#3ab30a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "up-tap-text",
                                                    children: "Tap to select file"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "up-file-types",
                                                    children: "PDF, JPG, or PNG"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    onChange: handleFileChange,
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    accept: ".pdf,image/*"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                            lineNumber: 794,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 770,
                                columnNumber: 25
                            }, this),
                            (status === 'CONFIGURING' || status === 'PAYING') && metadata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cfg-file",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cfg-file-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FilePdf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePdf$3e$__["FilePdf"], {
                                                    size: 28,
                                                    color: "#3ab30a"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 817,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cfg-file-name",
                                                        children: file?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cfg-file-meta",
                                                        children: [
                                                            metadata.pageCount,
                                                            " pages · ",
                                                            ((file?.size || 0) / 1024 / 1024).toFixed(2),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 816,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sec-label",
                                                children: "Copies"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "copies-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "copies-btn",
                                                        onClick: ()=>setCopies((c)=>Math.max(1, c - 1)),
                                                        disabled: copies <= 1 || status === 'PAYING',
                                                        children: "−"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "copies-divider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "copies-val",
                                                        children: copies
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "copies-divider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "copies-btn",
                                                        onClick: ()=>setCopies((c)=>c + 1),
                                                        disabled: status === 'PAYING',
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "price-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "price-label",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "price-val",
                                                        children: [
                                                            "PKR ",
                                                            totalPrice
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 854,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "price-breakdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "price-line",
                                                        children: [
                                                            metadata.pageCount,
                                                            " pages × ",
                                                            copies,
                                                            " ",
                                                            copies === 1 ? 'copy' : 'copies'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "price-line",
                                                        children: [
                                                            "PKR ",
                                                            PRICE_PER_PAGE_PKR,
                                                            " per page"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                        lineNumber: 853,
                                        columnNumber: 29
                                    }, this),
                                    status === 'PAYING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            uploadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '10px',
                                                    background: '#fee2e2',
                                                    color: '#dc2626',
                                                    borderRadius: '12px',
                                                    fontSize: '13px'
                                                },
                                                children: uploadError
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 868,
                                                columnNumber: 41
                                            }, this),
                                            token !== null && walletBal !== null && walletBal >= totalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pay-box",
                                                style: {
                                                    borderColor: '#4fda0f'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pay-heading",
                                                        children: "Instant Wallet Payment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pay-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pay-row-label",
                                                                children: "Available Balance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 877,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pay-row-val",
                                                                children: [
                                                                    "PKR ",
                                                                    walletBal
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "pay-note",
                                                        children: "You have enough funds. Pay instantly below."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                lineNumber: 874,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pay-box",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pay-heading",
                                                                children: [
                                                                    "Transfer exactly PKR ",
                                                                    totalPrice,
                                                                    " to:"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 885,
                                                                columnNumber: 49
                                                            }, this),
                                                            [
                                                                [
                                                                    'Account',
                                                                    'Ayesha Awais'
                                                                ],
                                                                [
                                                                    'NayaPay #',
                                                                    '03234563464'
                                                                ],
                                                                [
                                                                    'ID',
                                                                    'ayesha.624@nayapay'
                                                                ],
                                                                [
                                                                    'IBAN',
                                                                    'PK26NAYA1234503234563464'
                                                                ]
                                                            ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pay-row",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pay-row-label",
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                            lineNumber: 895,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pay-row-val",
                                                                            children: value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                            lineNumber: 896,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, label, true, {
                                                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                    lineNumber: 894,
                                                                    columnNumber: 53
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "pay-note",
                                                                children: "Send the exact amount to enable auto-verification."
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "input-label",
                                                                children: "Your NayaPay Account Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "account-input",
                                                                placeholder: "e.g. Muhammad Ali",
                                                                value: accountTitle,
                                                                onChange: (e)=>setAccountTitle(e.target.value),
                                                                autoComplete: "off",
                                                                autoCorrect: "off"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "input-hint",
                                                                children: "Must match the name shown in your NayaPay account exactly."
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scroll-spacer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 928,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                        lineNumber: 766,
                        columnNumber: 17
                    }, this),
                    (status === 'CONFIGURING' || status === 'PAYING') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "up-footer",
                        children: [
                            status === 'CONFIGURING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-green",
                                onClick: handleCreateJob,
                                disabled: isCreatingJob,
                                children: isCreatingJob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spinner$3e$__["Spinner"], {
                                            size: 20,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 41
                                        }, this),
                                        "  Processing…"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "btn-green-text",
                                    children: "Proceed to Payment"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                    lineNumber: 942,
                                    columnNumber: 39
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 935,
                                columnNumber: 29
                            }, this),
                            status === 'PAYING' && (token !== null && walletBal !== null && walletBal >= totalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-dark-green",
                                onClick: handleWalletPayment,
                                children: [
                                    "Pay PKR ",
                                    totalPrice,
                                    " Instantly"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 948,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-dark-green",
                                onClick: handleVerifyPayment,
                                disabled: !accountTitle.trim(),
                                children: "I Have Paid"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                                lineNumber: 955,
                                columnNumber: 33
                            }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/upload/page.tsx",
                        lineNumber: 933,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/upload/page.tsx",
                lineNumber: 756,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(UploadPageContent, "F6r7LDt/8J4Rm4DKfKklHjddDtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadPageContent;
function UploadPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: '100svh',
                background: '#ffffff'
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/upload/page.tsx",
            lineNumber: 973,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadPageContent, {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/upload/page.tsx",
            lineNumber: 974,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/upload/page.tsx",
        lineNumber: 973,
        columnNumber: 9
    }, this);
}
_c1 = UploadPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "UploadPageContent");
__turbopack_context__.k.register(_c1, "UploadPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconContext",
    ()=>IconContext,
    "renderPathForWeight",
    ()=>renderPathForWeight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var IconContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: false
});
var renderPathForWeight = function renderPathForWeight(weight, color, pathsByWeight) {
    var path = pathsByWeight.get(weight);
    if (!!path) return path(color);
    console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
    return null;
};
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "objectWithoutPropertiesLoose",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
 //# sourceMappingURL=_rollupPluginBabelHelpers.js.map
}),
"[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js [app-client] (ecmascript)");
;
;
;
var IconBase = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    var alt = props.alt, color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath = props.renderPath, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectWithoutPropertiesLoose"])(props, [
        "alt",
        "color",
        "size",
        "weight",
        "mirrored",
        "children",
        "renderPath"
    ]);
    var _useContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"]), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectWithoutPropertiesLoose"])(_useContext, [
        "color",
        "size",
        "weight",
        "mirrored"
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", Object.assign({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size != null ? size : contextSize,
        height: size != null ? size : contextSize,
        fill: color != null ? color : contextColor,
        viewBox: "0 0 256 256",
        transform: mirrored || contextMirrored ? "scale(-1, 1)" : undefined
    }, restContext, restProps), !!alt && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, alt), children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        width: "256",
        height: "256",
        fill: "none"
    }), renderPath(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
const __TURBOPACK__default__export__ = IconBase;
 //# sourceMappingURL=IconBase.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/CloudArrowUp.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,144,48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "118.1 161.9 152 128 185.9 161.9",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "152",
        y1: "208",
        x2: "152",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        opacity: "0.2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,144,48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "118.1 161.9 152 128 185.9 161.9",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "152",
        y1: "208",
        x2: "152",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Zm31.5,111.6a8.3,8.3,0,0,1-5.7,2.3,8,8,0,0,1-5.6-2.3L160,131.3V192a8,8,0,0,1-16,0V131.3l-20.3,20.3a8,8,0,0,1-11.3-11.3l33.9-34a8.1,8.1,0,0,1,11.4,0l33.9,34A8,8,0,0,1,191.6,151.6Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,144,48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "118.1 161.9 152 128 185.9 161.9",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "152",
        y1: "208",
        x2: "152",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,144,48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "118.1 161.9 152 128 185.9 161.9",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "152",
        y1: "208",
        x2: "152",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M80,128a80,80,0,1,1,144,48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "118.1 161.9 152 128 185.9 161.9",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "152",
        y1: "208",
        x2: "152",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var CloudArrowUp = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
CloudArrowUp.displayName = "CloudArrowUp";
const __TURBOPACK__default__export__ = CloudArrowUp;
 //# sourceMappingURL=CloudArrowUp.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/CloudArrowUp.esm.js [app-client] (ecmascript) <export default as CloudArrowUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudArrowUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CloudArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CloudArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/CloudArrowUp.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/icons/FilePdf.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "228 164 196 164 196 220",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "196",
        x2: "196",
        y2: "196",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "148 36 148 100 212 100",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M44,124V44a8,8,0,0,1,8-8H156l56,56v32",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M112,220V164h16a28,28,0,0,1,0,56Z",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M36,204H52a20,20,0,0,0,0-40H36v56",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polygon", {
        points: "152 32 152 88 208 88 152 32",
        opacity: "0.2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,128V40a8,8,0,0,1,8-8h96l56,56v40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "152 32 152 88 208 88",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,200H64a16,16,0,0,0,0-32H48v48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "216 168 188 168 188 216",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "212",
        y1: "196",
        x2: "188",
        y2: "196",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,216a24,24,0,0,0,0-48H114v48Z",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm132-16v12h16a8,8,0,0,1,0,16H196v12a8,8,0,0,1-16,0V168a8,8,0,0,1,8-8h28a8,8,0,0,1,0,16Zm-68-16H114a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h14a32,32,0,0,0,0-64Zm0,48h-6V176h6a16,16,0,0,1,0,32ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,128V40a8,8,0,0,1,8-8h96l56,56v40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "152 32 152 88 208 88",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,200H64a16,16,0,0,0,0-32H48v48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "216 168 188 168 188 216",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "212",
        y1: "196",
        x2: "188",
        y2: "196",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,216a24,24,0,0,0,0-48H114v48Z",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,128V40a8,8,0,0,1,8-8h96l56,56v40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "152 32 152 88 208 88",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,200H64a16,16,0,0,0,0-32H48v48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "216 168 188 168 188 216",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "212",
        y1: "196",
        x2: "188",
        y2: "196",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,216a24,24,0,0,0,0-48H114v48Z",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,128V40a8,8,0,0,1,8-8h96l56,56v40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "152 32 152 88 208 88",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M48,200H64a16,16,0,0,0,0-32H48v48",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "216 168 188 168 188 216",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "212",
        y1: "196",
        x2: "188",
        y2: "196",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,216a24,24,0,0,0,0-48H114v48Z",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var FilePdf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
FilePdf.displayName = "FilePdf";
const __TURBOPACK__default__export__ = FilePdf;
 //# sourceMappingURL=FilePdf.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/FilePdf.esm.js [app-client] (ecmascript) <export default as FilePdf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePdf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FilePdf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FilePdf$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/FilePdf.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/icons/CheckCircle.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "172 104 113.3 160 84 132",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        opacity: "0.2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "172 104 113.3 160 84 132",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "172 104 113.3 160 84 132",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "172 104 113.3 160 84 132",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "172 104 113.3 160 84 132",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var CheckCircle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
CheckCircle.displayName = "CheckCircle";
const __TURBOPACK__default__export__ = CheckCircle;
 //# sourceMappingURL=CheckCircle.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/CheckCircle.esm.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CheckCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CheckCircle$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/CheckCircle.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/icons/Spinner.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.3,58.7a7.8,7.8,0,0,0,5.6-2.3l22.6-22.6a8,8,0,1,0-11.3-11.3L167.6,77.1a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,173.3,90.7ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "32",
        x2: "128",
        y2: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "60.1",
        x2: "173.3",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "224",
        y1: "128",
        x2: "192",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "195.9",
        y1: "195.9",
        x2: "173.3",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "128",
        y1: "224",
        x2: "128",
        y2: "192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "195.9",
        x2: "82.7",
        y2: "173.3",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "32",
        y1: "128",
        x2: "64",
        y2: "128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
        x1: "60.1",
        y1: "60.1",
        x2: "82.7",
        y2: "82.7",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var Spinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
Spinner.displayName = "Spinner";
const __TURBOPACK__default__export__ = Spinner;
 //# sourceMappingURL=Spinner.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/Spinner.esm.js [app-client] (ecmascript) <export default as Spinner>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Spinner$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Spinner.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/icons/Printer.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "40",
        width: "128",
        height: "40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "156",
        width: "128",
        height: "64",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "188",
        cy: "116",
        r: "16"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M210.7,80H45.3C35.8,80,28,87.2,28,96v80H64V152H192v24h36V96C228,87.2,220.2,80,210.7,80Z",
        opacity: "0.2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "40",
        width: "128",
        height: "40",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "152",
        width: "128",
        height: "68",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "188",
        cy: "116",
        r: "12"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,188,128Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "64 80 64 40 192 40 192 80",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "152",
        width: "128",
        height: "68",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "188",
        cy: "116",
        r: "10"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "64 80 64 40 192 40 192 80",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "152",
        width: "128",
        height: "68",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "188",
        cy: "116",
        r: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "64 80 64 40 192 40 192 80",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
        x: "64",
        y: "152",
        width: "128",
        height: "68",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "188",
        cy: "116",
        r: "12"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var Printer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
Printer.displayName = "Printer";
const __TURBOPACK__default__export__ = Printer;
 //# sourceMappingURL=Printer.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/Printer.esm.js [app-client] (ecmascript) <export default as Printer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Printer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Printer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Printer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Printer.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/phosphor-react/dist/icons/Clock.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/lib/IconBase.esm.js [app-client] (ecmascript)");
;
;
;
/* GENERATED FILE */ var pathsByWeight = /*#__PURE__*/ new Map();
pathsByWeight.set("bold", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "128 72 128 128 184 128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24"
    }));
});
pathsByWeight.set("duotone", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        opacity: "0.2"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeMiterlimit: "10",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "128 72 128 128 184 128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
pathsByWeight.set("fill", function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"
    }));
});
pathsByWeight.set("light", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "128 72 128 128 184 128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12"
    }));
});
pathsByWeight.set("thin", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "128 72 128 128 184 128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8"
    }));
});
pathsByWeight.set("regular", function(color) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: color,
        strokeMiterlimit: "10",
        strokeWidth: "16"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polyline", {
        points: "128 72 128 128 184 128",
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
    }));
});
var renderPath = function renderPath(weight, color) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderPathForWeight"])(weight, color, pathsByWeight);
};
var Clock = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$lib$2f$IconBase$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], Object.assign({
        ref: ref
    }, props, {
        renderPath: renderPath
    }));
});
Clock.displayName = "Clock";
const __TURBOPACK__default__export__ = Clock;
 //# sourceMappingURL=Clock.esm.js.map
}),
"[project]/node_modules/phosphor-react/dist/icons/Clock.esm.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Clock$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Clock$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Clock.esm.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_4437a58d._.js.map