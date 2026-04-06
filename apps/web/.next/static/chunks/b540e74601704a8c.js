(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,a)=>{t.exports=e.r(76562)},64219,e=>{"use strict";var t=e.i(47167),a=e.i(43476),s=e.i(71645),o=e.i(18566);let r=t.default.env.NEXT_PUBLIC_API_BASE_URL||"";function i(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)().get("kiosk_id")||"default",[i,n]=(0,s.useState)(null),[l,p]=(0,s.useState)(0),[c,d]=(0,s.useState)([]),[u,f]=(0,s.useState)(!0),[x,m]=(0,s.useState)(""),[b,g]=(0,s.useState)(""),[h,y]=(0,s.useState)(!1),[j,w]=(0,s.useState)(""),[v,k]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let a=localStorage.getItem("kiosk_token");a?(n(a),N(a)):e.push(`/?kiosk_id=${t}`)},[]);let N=async e=>{try{let t=await fetch(`${r}/api/wallet/balance`,{headers:{Authorization:`Bearer ${e}`}}),a=await t.json();t.ok&&(p(a.balance),d(a.topUps))}catch(e){console.error("Failed to fetch wallet data",e)}finally{f(!1)}},S=async e=>{e.preventDefault(),y(!0),w(""),k(!1);try{let e=await fetch(`${r}/api/wallet/request-topup`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({amount:x,nayapayAccountTitle:b})}),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to submit request");k(!0),m(""),g(""),await N(i)}catch(e){w(e.message)}finally{y(!1)}};return u?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
            `}),(0,a.jsxs)("div",{className:"wallet-root",children:[(0,a.jsx)("div",{className:"wallet-header",children:(0,a.jsx)("button",{className:"back-btn",onClick:()=>e.push(`/?kiosk_id=${t}`),children:"← Back to Menu"})}),(0,a.jsxs)("div",{className:"wallet-content",children:[(0,a.jsxs)("div",{className:"balance-card",children:[(0,a.jsx)("div",{className:"balance-label",children:"Available Balance"}),(0,a.jsxs)("div",{className:"balance-amount",children:["Rs ",l]})]}),(0,a.jsx)("h2",{className:"section-title",children:"Add Funds"}),(0,a.jsxs)("form",{className:"topup-form",onSubmit:S,children:[j&&(0,a.jsx)("div",{className:"msg-box msg-error",children:j}),v&&(0,a.jsx)("div",{className:"msg-box msg-success",children:"Top-up request sent for approval!"}),(0,a.jsx)("p",{style:{fontSize:"14px",color:"#666",lineHeight:1.4},children:"Transfer funds via NayaPay and submit the request here. Admin will approve it shortly."}),(0,a.jsxs)("div",{style:{background:"#f8fafc",border:"1px solid #e2e8f0",padding:"16px",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"8px",marginTop:"8px"},children:[(0,a.jsx)("div",{style:{fontSize:"12px",textTransform:"uppercase",fontStyle:"italic",letterSpacing:"1px",color:"#64748b"},children:"Transfer To:"}),[["Account","Ayesha Awais"],["NayaPay #","03234563464"],["ID","ayesha.624@nayapay"]].map(([e,t])=>(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)("span",{style:{fontSize:"14px",color:"#64748b",fontWeight:500},children:e}),(0,a.jsx)("span",{style:{fontSize:"15px",color:"#0f172a",fontWeight:600},children:t})]},e))]}),(0,a.jsx)("input",{type:"number",className:"form-input",placeholder:"Amount transfered (Rs)",required:!0,min:"1",value:x,onChange:e=>m(e.target.value)}),(0,a.jsx)("input",{type:"text",className:"form-input",placeholder:"Your NayaPay Account Title",required:!0,value:b,onChange:e=>g(e.target.value)}),(0,a.jsx)("button",{type:"submit",className:"submit-btn",disabled:h,children:h?"Submitting...":"Submit Request"})]}),c.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"section-title",children:"History"}),(0,a.jsx)("div",{className:"topup-list",children:c.map(e=>(0,a.jsxs)("div",{className:"topup-item",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"topup-amount",children:["Rs ",e.amount]}),(0,a.jsx)("div",{style:{fontSize:"12px",color:"#888",marginTop:"2px"},children:new Date(e.createdAt).toLocaleDateString()})]}),(0,a.jsx)("div",{className:`topup-status status-${e.status}`,children:e.status})]},e.id))})]})]})]})]})}function n(){return(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,a.jsx)(i,{})})}e.s(["default",()=>n])}]);