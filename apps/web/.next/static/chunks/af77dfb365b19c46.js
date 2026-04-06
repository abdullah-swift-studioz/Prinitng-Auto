(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,a)=>{t.exports=e.r(76562)},81612,e=>{"use strict";var t=e.i(47167),a=e.i(43476),i=e.i(71645),s=e.i(18566);let n=t.default.env.NEXT_PUBLIC_API_BASE_URL||"";function r(){let e=(0,s.useRouter)(),t=(0,s.useSearchParams)().get("kiosk_id")||"default",[r,o]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),[d,f]=(0,i.useState)(""),[p,u]=(0,i.useState)(!1),h=async a=>{a.preventDefault(),u(!0),f("");try{let a=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:l})}),i=await a.json();if(!a.ok)throw Error(i.error||"Login failed");localStorage.setItem("kiosk_token",i.token),localStorage.setItem("kiosk_user_email",i.user.email),e.push(`/?kiosk_id=${t}`)}catch(e){f(e.message)}finally{u(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
            `}),(0,a.jsxs)("div",{className:"auth-root",children:[(0,a.jsx)("div",{className:"auth-header",children:(0,a.jsx)("button",{className:"back-btn",onClick:()=>e.push(`/?kiosk_id=${t}`),children:"← Back"})}),(0,a.jsxs)("div",{className:"auth-content",children:[(0,a.jsx)("h1",{className:"auth-title",children:"Login"}),(0,a.jsxs)("form",{className:"auth-form",onSubmit:h,children:[(0,a.jsx)("input",{type:"email",className:"auth-input",placeholder:"Email address",required:!0,value:r,onChange:e=>o(e.target.value)}),(0,a.jsx)("input",{type:"password",className:"auth-input",placeholder:"Password",required:!0,value:l,onChange:e=>c(e.target.value)}),d&&(0,a.jsx)("div",{className:"error-msg",children:d}),(0,a.jsx)("button",{type:"submit",className:"submit-btn",disabled:p,children:(0,a.jsx)("span",{className:"submit-btn-text",children:p?"Logging in...":"Sign In"})})]}),(0,a.jsxs)("div",{className:"auth-switch",children:["Don't have an account? ",(0,a.jsx)("button",{className:"switch-link",onClick:()=>e.push(`/signup?kiosk_id=${t}`),children:"Sign Up"})]})]})]})]})}function o(){return(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,a.jsx)(r,{})})}e.s(["default",()=>o])}]);