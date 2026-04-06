module.exports=[9270,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.AppRouterContext},36313,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HooksClientContext},18341,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ServerInsertedHtml},18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},46940,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944);function e(){let a=(0,d.useRouter)(),e=(0,d.useSearchParams)().get("kiosk_id")||"default",[f,g]=(0,c.useState)(null),[h,i]=(0,c.useState)(null),[j,k]=(0,c.useState)(!0);return((0,c.useEffect)(()=>{let a=localStorage.getItem("kiosk_token"),b=localStorage.getItem("kiosk_user_email");a&&(g(a),i(b)),k(!1)},[]),j)?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .home-root {
                    height: 100svh;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                .home-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(79,218,15,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79,218,15,0.08) 1px, transparent 1px);
                    background-size: 32px 32px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* header */
                .home-header {
                    position: relative;
                    z-index: 1;
                    padding: 44px 28px 0;
                    flex-shrink: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .home-logo {
                    width: 100px;
                    height: auto;
                    object-fit: contain;
                    display: block;
                }
                .logout-btn {
                    font-size: 13px; font-weight: 600; color: #ef4444; background: rgba(239, 68, 68, 0.1);
                    padding: 6px 12px; border-radius: 8px; border: none; cursor: pointer;
                }

                /* hero — fills remaining space */
                .home-hero {
                    flex: 1;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 28px;
                }
                .home-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    color: #3ab30a;
                    margin-bottom: 16px;
                }
                .eyebrow-dot {
                    width: 6px; height: 6px;
                    background: #4fda0f;
                    border-radius: 50%;
                    flex-shrink: 0;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.6); }
                }
                .home-headline {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(64px, 20vw, 120px);
                    line-height: 0.9;
                    letter-spacing: 2px;
                    color: #3f4247;
                    margin-bottom: 20px;
                }
                .home-headline em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 2.5px #4fda0f;
                }
                .home-sub {
                    font-size: 16px;
                    font-weight: 300;
                    color: rgba(63,66,71,0.52);
                    line-height: 1.65;
                    letter-spacing: 0.3px;
                }
                .home-email {
                    font-weight: 600; color: #3f4247;
                }

                /* footer CTA — always at bottom */
                .home-footer {
                    position: relative;
                    z-index: 1;
                    padding: 0 28px 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .start-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 20px 24px;
                    background: #4fda0f;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease, box-shadow 0.12s ease;
                    box-shadow: 0 8px 32px rgba(79,218,15,0.4);
                    -webkit-tap-highlight-color: transparent;
                }
                .start-btn:active {
                    transform: scale(0.97);
                    box-shadow: 0 2px 12px rgba(79,218,15,0.25);
                }
                .start-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 24px;
                    letter-spacing: 4px;
                    color: #ffffff;
                    text-transform: uppercase;
                }
                .start-btn-arrow {
                    width: 22px; height: 22px;
                    stroke: #ffffff;
                    fill: none;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    flex-shrink: 0;
                }

                .secondary-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: #3f4247;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .secondary-btn:active { transform: scale(0.97); opacity: 0.9; }
                .secondary-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #ffffff;
                    text-transform: uppercase;
                }

                .guest-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: transparent;
                    border: 1.5px solid rgba(63,66,71,0.2);
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .guest-btn:active { transform: scale(0.97); background: rgba(63,66,71,0.05); }
                .guest-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #3f4247;
                    text-transform: uppercase;
                }

                .kiosk-id-pill {
                    margin-top: 10px;
                    text-align: center;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 11px;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: rgba(63,66,71,0.28);
                }
            `}),(0,b.jsxs)("div",{className:"home-root",children:[(0,b.jsxs)("div",{className:"home-header",children:[(0,b.jsx)("img",{src:"/logo.svg",alt:"Print It",className:"home-logo"}),f&&(0,b.jsx)("button",{className:"logout-btn",onClick:()=>{localStorage.removeItem("kiosk_token"),localStorage.removeItem("kiosk_user_email"),g(null),i(null)},children:"Log Out"})]}),(0,b.jsxs)("div",{className:"home-hero",children:[(0,b.jsxs)("div",{className:"home-eyebrow",children:[(0,b.jsx)("span",{className:"eyebrow-dot"}),"Ready to Print"]}),f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("h1",{className:"home-headline",children:["Welcome",(0,b.jsx)("br",{}),(0,b.jsx)("em",{children:"Back."})]}),(0,b.jsxs)("p",{className:"home-sub",children:["Logged in as ",(0,b.jsx)("span",{className:"home-email",children:h}),". Use your wallet balance to instantly print without waiting."]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("h1",{className:"home-headline",children:["Print",(0,b.jsx)("br",{}),(0,b.jsx)("em",{children:"Anything."}),(0,b.jsx)("br",{}),"Instantly."]}),(0,b.jsx)("p",{className:"home-sub",children:"Upload your document and pay via NayaPay. Login to use your pre-funded wallet for instant prints."})]})]}),(0,b.jsxs)("div",{className:"home-footer",children:[f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("button",{className:"start-btn",onClick:()=>a.push(`/upload?kiosk_id=${e}`),children:[(0,b.jsx)("span",{className:"start-btn-text",children:"Start Printing"}),(0,b.jsxs)("svg",{className:"start-btn-arrow",viewBox:"0 0 24 24",children:[(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,b.jsx)("polyline",{points:"12 5 19 12 12 19"})]})]}),(0,b.jsx)("button",{className:"secondary-btn",onClick:()=>a.push(`/wallet?kiosk_id=${e}`),children:(0,b.jsx)("span",{className:"secondary-btn-text",children:"My Wallet"})})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{className:"start-btn",onClick:()=>a.push(`/login?kiosk_id=${e}`),children:(0,b.jsx)("span",{className:"start-btn-text",children:"Login / Sign Up"})}),(0,b.jsx)("button",{className:"guest-btn",onClick:()=>a.push(`/upload?kiosk_id=${e}`),children:(0,b.jsx)("span",{className:"guest-btn-text",children:"Continue as Guest"})})]}),(0,b.jsxs)("p",{className:"kiosk-id-pill",children:["Kiosk ID: ",e]})]})]})]})}function f(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{style:{height:"100svh",display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",fontFamily:"monospace",letterSpacing:"4px",fontSize:"13px",color:"#3ab30a"},children:"INITIALIZING..."}),children:(0,b.jsx)(e,{})})}a.s(["default",()=>f])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__58c97094._.js.map