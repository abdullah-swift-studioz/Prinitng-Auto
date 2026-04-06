module.exports=[9270,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.AppRouterContext},36313,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.HooksClientContext},18341,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored.contexts.ServerInsertedHtml},18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},69719,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944);let e=process.env.NEXT_PUBLIC_API_BASE_URL||"";function f(){let a=(0,d.useRouter)(),f=(0,d.useSearchParams)().get("kiosk_id")||"default",[g,h]=(0,c.useState)(null),[i,j]=(0,c.useState)(0),[k,l]=(0,c.useState)([]),[m,n]=(0,c.useState)(!0),[o,p]=(0,c.useState)(""),[q,r]=(0,c.useState)(""),[s,t]=(0,c.useState)(!1),[u,v]=(0,c.useState)(""),[w,x]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let b=localStorage.getItem("kiosk_token");b?(h(b),y(b)):a.push(`/?kiosk_id=${f}`)},[]);let y=async a=>{try{let b=await fetch(`${e}/api/wallet/balance`,{headers:{Authorization:`Bearer ${a}`}}),c=await b.json();b.ok&&(j(c.balance),l(c.topUps))}catch(a){console.error("Failed to fetch wallet data",a)}finally{n(!1)}},z=async a=>{a.preventDefault(),t(!0),v(""),x(!1);try{let a=await fetch(`${e}/api/wallet/request-topup`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g}`},body:JSON.stringify({amount:o,nayapayAccountTitle:q})}),b=await a.json();if(!a.ok)throw Error(b.error||"Failed to submit request");x(!0),p(""),r(""),await y(g)}catch(a){v(a.message)}finally{t(!1)}};return m?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body { height: 100%; }

                .wallet-root {
                    height: 100svh;
                    background: #fdfdfd;
                    position: relative;
                    overflow-y: auto;
                    font-family: 'Barlow', sans-serif;
                    padding-bottom: 40px;
                }
                .wallet-header {
                    padding: 44px 28px 20px;
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

                .wallet-content {
                    padding: 0 28px;
                }
                
                .balance-card {
                    background: #4fda0f;
                    padding: 32px 24px;
                    border-radius: 24px;
                    color: white;
                    margin-top: 16px;
                    margin-bottom: 32px;
                    box-shadow: 0 8px 32px rgba(79,218,15,0.3);
                }
                .balance-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 14px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.8;
                    margin-bottom: 8px;
                }
                .balance-amount {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 64px;
                    line-height: 1;
                    letter-spacing: 2px;
                }

                .section-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 32px;
                    color: #3f4247;
                    letter-spacing: 1.5px;
                    margin-bottom: 16px;
                }

                .topup-form {
                    background: white;
                    border: 1px solid rgba(63,66,71,0.1);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 32px;
                }
                
                .form-input {
                    padding: 16px 20px;
                    background: #f4f5f7;
                    border: 1px solid transparent;
                    border-radius: 12px;
                    font-family: 'Barlow', sans-serif;
                    font-size: 16px;
                    color: #3f4247;
                }
                .form-input:focus {
                    outline: none; background: #ffffff;
                    border-color: #4fda0f;
                    box-shadow: 0 0 0 4px rgba(79,218,15,0.1);
                }

                .submit-btn {
                    padding: 16px;
                    background: #3f4247;
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 20px;
                    letter-spacing: 2px;
                    cursor: pointer;
                }
                .submit-btn:active { transform: scale(0.98); }

                .topup-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .topup-item {
                    background: white;
                    border: 1px solid rgba(63,66,71,0.1);
                    padding: 16px;
                    border-radius: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .topup-amount {
                    font-weight: 600;
                    color: #3f4247;
                    font-size: 18px;
                }
                .topup-status {
                    font-size: 12px;
                    font-weight: 700;
                    padding: 4px 10px;
                    border-radius: 20px;
                    text-transform: uppercase;
                }
                .status-PENDING { background: #fef08a; color: #854d0e; }
                .status-APPROVED { background: #dcfce7; color: #166534; }
                .status-REJECTED { background: #fee2e2; color: #991b1b; }
                
                .msg-box {
                    padding: 12px; border-radius: 8px; font-size: 14px; margin-bottom: 4px;
                }
                .msg-error { background: #fee2e2; color: #ef4444; }
                .msg-success { background: #dcfce7; color: #22c55e; }
            `}),(0,b.jsxs)("div",{className:"wallet-root",children:[(0,b.jsx)("div",{className:"wallet-header",children:(0,b.jsx)("button",{className:"back-btn",onClick:()=>a.push(`/?kiosk_id=${f}`),children:"← Back to Menu"})}),(0,b.jsxs)("div",{className:"wallet-content",children:[(0,b.jsxs)("div",{className:"balance-card",children:[(0,b.jsx)("div",{className:"balance-label",children:"Available Balance"}),(0,b.jsxs)("div",{className:"balance-amount",children:["Rs ",i]})]}),(0,b.jsx)("h2",{className:"section-title",children:"Add Funds"}),(0,b.jsxs)("form",{className:"topup-form",onSubmit:z,children:[u&&(0,b.jsx)("div",{className:"msg-box msg-error",children:u}),w&&(0,b.jsx)("div",{className:"msg-box msg-success",children:"Top-up request sent for approval!"}),(0,b.jsx)("p",{style:{fontSize:"14px",color:"#666",lineHeight:1.4},children:"Transfer funds via NayaPay and submit the request here. Admin will approve it shortly."}),(0,b.jsxs)("div",{style:{background:"#f8fafc",border:"1px solid #e2e8f0",padding:"16px",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},children:[(0,b.jsx)("div",{style:{fontSize:"12px",textTransform:"uppercase",fontStyle:"italic",letterSpacing:"1px",color:"#64748b"},children:"Transfer To:"}),[["Account","Ayesha Awais"],["NayaPay #","03234563464"],["ID","ayesha.624@nayapay"]].map(([a,c])=>(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsx)("span",{style:{fontSize:"14px",color:"#64748b",fontWeight:500},children:a}),(0,b.jsx)("span",{style:{fontSize:"15px",color:"#0f172a",fontWeight:600},children:c})]},a))]}),(0,b.jsx)("input",{type:"number",className:"form-input",placeholder:"Amount transfered (Rs)",required:!0,min:"1",value:o,onChange:a=>p(a.target.value)}),(0,b.jsx)("input",{type:"text",className:"form-input",placeholder:"Your NayaPay Account Title",required:!0,value:q,onChange:a=>r(a.target.value)}),(0,b.jsx)("button",{type:"submit",className:"submit-btn",disabled:s,children:s?"Submitting...":"Submit Request"})]}),k.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{className:"section-title",children:"History"}),(0,b.jsx)("div",{className:"topup-list",children:k.map(a=>(0,b.jsxs)("div",{className:"topup-item",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"topup-amount",children:["Rs ",a.amount]}),(0,b.jsx)("div",{style:{fontSize:"12px",color:"#888",marginTop:"2px"},children:new Date(a.createdAt).toLocaleDateString()})]}),(0,b.jsx)("div",{className:`topup-status status-${a.status}`,children:a.status})]},a.id))})]})]})]})]})}function g(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,b.jsx)(f,{})})}a.s(["default",()=>g])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef23ac91._.js.map