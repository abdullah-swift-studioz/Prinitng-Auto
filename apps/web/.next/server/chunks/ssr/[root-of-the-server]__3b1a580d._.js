module.exports=[9270,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.AppRouterContext},36313,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HooksClientContext},18341,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ServerInsertedHtml},18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},5833,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944);let e=process.env.NEXT_PUBLIC_API_BASE_URL||"";function f(){let a=(0,d.useRouter)(),f=(0,d.useSearchParams)().get("kiosk_id")||"default",[g,h]=(0,c.useState)(""),[i,j]=(0,c.useState)(""),[k,l]=(0,c.useState)(""),[m,n]=(0,c.useState)(!1),o=async b=>{b.preventDefault(),n(!0),l("");try{let b=await fetch(`${e}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g,password:i})}),c=await b.json();if(!b.ok)throw Error(c.error||"Login failed");localStorage.setItem("kiosk_token",c.token),localStorage.setItem("kiosk_user_email",c.user.email),a.push(`/?kiosk_id=${f}`)}catch(a){l(a.message)}finally{n(!1)}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .auth-root {
                    height: 100svh;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                .auth-header {
                    position: relative;
                    z-index: 1;
                    padding: 44px 28px 20px;
                    flex-shrink: 0;
                }
                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: none;
                    background: transparent;
                    color: #3f4247;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .auth-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 0 28px;
                    justify-content: center;
                    z-index: 1;
                }
                .auth-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 64px;
                    line-height: 0.9;
                    letter-spacing: 2px;
                    color: #3f4247;
                    margin-bottom: 24px;
                }

                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .auth-input {
                    width: 100%;
                    padding: 16px 20px;
                    background: #f4f5f7;
                    border: 1px solid transparent;
                    border-radius: 12px;
                    font-family: 'Barlow', sans-serif;
                    font-size: 16px;
                    color: #3f4247;
                    transition: all 0.2s ease;
                }
                .auth-input:focus {
                    outline: none;
                    background: #ffffff;
                    border-color: #4fda0f;
                    box-shadow: 0 0 0 4px rgba(79,218,15,0.1);
                }
                
                .submit-btn {
                    margin-top: 8px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    background: #4fda0f;
                    border: none;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: transform 0.12s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .submit-btn:active { transform: scale(0.97); }
                .submit-btn-text {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px;
                    letter-spacing: 3px;
                    color: #ffffff;
                    text-transform: uppercase;
                }

                .auth-switch {
                    margin-top: 24px;
                    text-align: center;
                    font-size: 15px;
                    color: #8c8f96;
                }
                .switch-link {
                    color: #4fda0f;
                    font-weight: 600;
                    background: none; border: none; padding: 0;
                    cursor: pointer;
                }
                
                .error-msg {
                    color: #ef4444; font-size: 14px; margin-top: 8px; text-align: center;
                }
            `}),(0,b.jsxs)("div",{className:"auth-root",children:[(0,b.jsx)("div",{className:"auth-header",children:(0,b.jsx)("button",{className:"back-btn",onClick:()=>a.push(`/?kiosk_id=${f}`),children:"← Back"})}),(0,b.jsxs)("div",{className:"auth-content",children:[(0,b.jsx)("h1",{className:"auth-title",children:"Login"}),(0,b.jsxs)("form",{className:"auth-form",onSubmit:o,children:[(0,b.jsx)("input",{type:"email",className:"auth-input",placeholder:"Email address",required:!0,value:g,onChange:a=>h(a.target.value)}),(0,b.jsx)("input",{type:"password",className:"auth-input",placeholder:"Password",required:!0,value:i,onChange:a=>j(a.target.value)}),k&&(0,b.jsx)("div",{className:"error-msg",children:k}),(0,b.jsx)("button",{type:"submit",className:"submit-btn",disabled:m,children:(0,b.jsx)("span",{className:"submit-btn-text",children:m?"Logging in...":"Sign In"})})]}),(0,b.jsxs)("div",{className:"auth-switch",children:["Don't have an account? ",(0,b.jsx)("button",{className:"switch-link",onClick:()=>a.push(`/signup?kiosk_id=${f}`),children:"Sign Up"})]})]})]})]})}function g(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,b.jsx)(f,{})})}a.s(["default",()=>g])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b1a580d._.js.map