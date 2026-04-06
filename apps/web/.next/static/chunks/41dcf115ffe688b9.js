(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,n)=>{t.exports=e.r(76562)},6515,63448,1906,e=>{"use strict";var t=e.i(71645),n=(0,t.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),r=function(e,t,n){var r=n.get(e);return r?r(t):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}e.s(["IconContext",()=>n,"renderPathForWeight",()=>r],63448);var i=(0,t.forwardRef)(function(e,r){var i=e.alt,a=e.color,l=e.size,s=e.weight,d=e.mirrored,c=e.children,u=e.renderPath,f=o(e,["alt","color","size","weight","mirrored","children","renderPath"]),p=(0,t.useContext)(n),k=p.color,h=void 0===k?"currentColor":k,x=p.size,m=p.weight,g=p.mirrored,y=o(p,["color","size","weight","mirrored"]);return t.default.createElement("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:null!=l?l:x,height:null!=l?l:x,fill:null!=a?a:h,viewBox:"0 0 256 256",transform:d||void 0!==g&&g?"scale(-1, 1)":void 0},y,f),!!i&&t.default.createElement("title",null,i),c,t.default.createElement("rect",{width:"256",height:"256",fill:"none"}),u(null!=s?s:void 0===m?"regular":m,null!=a?a:h))});i.displayName="IconBase",e.s(["default",0,i],1906);var a=new Map;a.set("bold",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("rect",{x:"64",y:"40",width:"128",height:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.default.createElement("rect",{x:"64",y:"156",width:"128",height:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.default.createElement("path",{d:"M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.default.createElement("circle",{cx:"188",cy:"116",r:"16"}))}),a.set("duotone",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("path",{d:"M210.7,80H45.3C35.8,80,28,87.2,28,96v80H64V152H192v24h36V96C228,87.2,220.2,80,210.7,80Z",opacity:"0.2"}),t.default.createElement("rect",{x:"64",y:"40",width:"128",height:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("rect",{x:"64",y:"152",width:"128",height:"68",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("path",{d:"M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("circle",{cx:"188",cy:"116",r:"12"}))}),a.set("fill",function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement("path",{d:"M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,188,128Z"}))}),a.set("light",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"64 80 64 40 192 40 192 80",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.default.createElement("rect",{x:"64",y:"152",width:"128",height:"68",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.default.createElement("path",{d:"M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.default.createElement("circle",{cx:"188",cy:"116",r:"10"}))}),a.set("thin",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"64 80 64 40 192 40 192 80",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.default.createElement("rect",{x:"64",y:"152",width:"128",height:"68",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.default.createElement("path",{d:"M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.default.createElement("circle",{cx:"188",cy:"116",r:"8"}))}),a.set("regular",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"64 80 64 40 192 40 192 80",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("rect",{x:"64",y:"152",width:"128",height:"68",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("path",{d:"M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("circle",{cx:"188",cy:"116",r:"12"}))});var l=function(e,t){return r(e,t,a)},s=(0,t.forwardRef)(function(e,n){return t.default.createElement(i,Object.assign({ref:n},e,{renderPath:l}))});s.displayName="Printer",e.s(["Printer",0,s],6515)},10974,76014,e=>{"use strict";var t=e.i(71645),n=e.i(63448),r=e.i(1906),o=new Map;o.set("bold",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),o.set("duotone",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),t.default.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),o.set("fill",function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))}),o.set("light",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),o.set("thin",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),o.set("regular",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var i=function(e,t){return(0,n.renderPathForWeight)(e,t,o)},a=(0,t.forwardRef)(function(e,n){return t.default.createElement(r.default,Object.assign({ref:n},e,{renderPath:i}))});a.displayName="CheckCircle",e.s(["CheckCircle",0,a],10974);var l=new Map;l.set("bold",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.default.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),l.set("duotone",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t.default.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),l.set("fill",function(){return t.default.createElement(t.default.Fragment,null,t.default.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))}),l.set("light",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.default.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),l.set("thin",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.default.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),l.set("regular",function(e){return t.default.createElement(t.default.Fragment,null,t.default.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t.default.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var s=function(e,t){return(0,n.renderPathForWeight)(e,t,l)},d=(0,t.forwardRef)(function(e,n){return t.default.createElement(r.default,Object.assign({ref:n},e,{renderPath:s}))});d.displayName="Clock",e.s(["Clock",0,d],76014)},90290,e=>{"use strict";var t=e.i(47167),n=e.i(43476),r=e.i(71645),o=e.i(18566),i=e.i(63448),a=e.i(1906),l=new Map;l.set("bold",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("path",{d:"M80,128a80,80,0,1,1,144,48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("polyline",{points:"118.1 161.9 152 128 185.9 161.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"152",y1:"208",x2:"152",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),l.set("duotone",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",opacity:"0.2"}),r.default.createElement("path",{d:"M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M80,128a80,80,0,1,1,144,48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"118.1 161.9 152 128 185.9 161.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"152",y1:"208",x2:"152",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),l.set("fill",function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Zm31.5,111.6a8.3,8.3,0,0,1-5.7,2.3,8,8,0,0,1-5.6-2.3L160,131.3V192a8,8,0,0,1-16,0V131.3l-20.3,20.3a8,8,0,0,1-11.3-11.3l33.9-34a8.1,8.1,0,0,1,11.4,0l33.9,34A8,8,0,0,1,191.6,151.6Z"}))}),l.set("light",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("path",{d:"M80,128a80,80,0,1,1,144,48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("polyline",{points:"118.1 161.9 152 128 185.9 161.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"152",y1:"208",x2:"152",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),l.set("thin",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("path",{d:"M80,128a80,80,0,1,1,144,48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("polyline",{points:"118.1 161.9 152 128 185.9 161.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"152",y1:"208",x2:"152",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),l.set("regular",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M80,128a80,80,0,1,1,144,48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"118.1 161.9 152 128 185.9 161.9",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"152",y1:"208",x2:"152",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var s=function(e,t){return(0,i.renderPathForWeight)(e,t,l)},d=(0,r.forwardRef)(function(e,t){return r.default.createElement(a.default,Object.assign({ref:t},e,{renderPath:s}))});d.displayName="CloudArrowUp";var c=new Map;c.set("bold",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("polyline",{points:"228 164 196 164 196 220",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"224",y1:"196",x2:"196",y2:"196",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("polyline",{points:"148 36 148 100 212 100",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("path",{d:"M44,124V44a8,8,0,0,1,8-8H156l56,56v32",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("path",{d:"M112,220V164h16a28,28,0,0,1,0,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("path",{d:"M36,204H52a20,20,0,0,0,0-40H36v56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),c.set("duotone",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("polygon",{points:"152 32 152 88 208 88 152 32",opacity:"0.2"}),r.default.createElement("path",{d:"M48,128V40a8,8,0,0,1,8-8h96l56,56v40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"152 32 152 88 208 88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M48,200H64a16,16,0,0,0,0-32H48v48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"216 168 188 168 188 216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"212",y1:"196",x2:"188",y2:"196",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M128,216a24,24,0,0,0,0-48H114v48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),c.set("fill",function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M64,160H48a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm132-16v12h16a8,8,0,0,1,0,16H196v12a8,8,0,0,1-16,0V168a8,8,0,0,1,8-8h28a8,8,0,0,1,0,16Zm-68-16H114a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h14a32,32,0,0,0,0-64Zm0,48h-6V176h6a16,16,0,0,1,0,32ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z"}))}),c.set("light",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M48,128V40a8,8,0,0,1,8-8h96l56,56v40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("polyline",{points:"152 32 152 88 208 88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("path",{d:"M48,200H64a16,16,0,0,0,0-32H48v48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("polyline",{points:"216 168 188 168 188 216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"212",y1:"196",x2:"188",y2:"196",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("path",{d:"M128,216a24,24,0,0,0,0-48H114v48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),c.set("thin",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M48,128V40a8,8,0,0,1,8-8h96l56,56v40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("polyline",{points:"152 32 152 88 208 88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("path",{d:"M48,200H64a16,16,0,0,0,0-32H48v48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("polyline",{points:"216 168 188 168 188 216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"212",y1:"196",x2:"188",y2:"196",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("path",{d:"M128,216a24,24,0,0,0,0-48H114v48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),c.set("regular",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M48,128V40a8,8,0,0,1,8-8h96l56,56v40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"152 32 152 88 208 88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M48,200H64a16,16,0,0,0,0-32H48v48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("polyline",{points:"216 168 188 168 188 216",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"212",y1:"196",x2:"188",y2:"196",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("path",{d:"M128,216a24,24,0,0,0,0-48H114v48Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var u=function(e,t){return(0,i.renderPathForWeight)(e,t,c)},f=(0,r.forwardRef)(function(e,t){return r.default.createElement(a.default,Object.assign({ref:t},e,{renderPath:u}))});f.displayName="FilePdf";var p=e.i(10974),k=new Map;k.set("bold",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.default.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),k.set("duotone",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),k.set("fill",function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.3,58.7a7.8,7.8,0,0,0,5.6-2.3l22.6-22.6a8,8,0,1,0-11.3-11.3L167.6,77.1a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,173.3,90.7ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))}),k.set("light",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.default.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),k.set("thin",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.default.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),k.set("regular",function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"195.9",y1:"60.1",x2:"173.3",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.default.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h=function(e,t){return(0,i.renderPathForWeight)(e,t,k)},x=(0,r.forwardRef)(function(e,t){return r.default.createElement(a.default,Object.assign({ref:t},e,{renderPath:h}))});x.displayName="Spinner";var m=e.i(6515),g=e.i(76014);let y=t.default.env.NEXT_PUBLIC_API_BASE_URL||"",b=`
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
`;function j(){let e=(0,o.useSearchParams)(),t=(0,o.useRouter)(),i=e.get("kiosk_id")||"default",[a,l]=(0,r.useState)(null),[s,c]=(0,r.useState)(null),[u,k]=(0,r.useState)(null),[h,j]=(0,r.useState)(""),[L,E]=(0,r.useState)(1),[v,w]=(0,r.useState)("IDLE"),[N,W]=(0,r.useState)(!1),[M,C]=(0,r.useState)(null),P=s?s.pageCount*L*10:0;(0,r.useEffect)(()=>{if(!u||"SUCCESS"!==v&&"AWAITING_ADMIN"!==v)return;let e=setInterval(async()=>{try{let e=await fetch(`${y}/api/jobs/${u}`);if(!e.ok)return;let t=await e.json();"AWAITING_ADMIN"===v&&"PAID"===t.status?w("SUCCESS"):"SUCCESS"===v&&"COMPLETED"===t.status&&w("COMPLETED")}catch{}},3e3);return()=>clearInterval(e)},[v,u]);let A=async e=>{let t=e.target.files?.[0];if(!t)return;l(t),C(null),w("UPLOADING");let n=new FormData;n.append("file",t);try{let e=await fetch(`${y}/api/upload`,{method:"POST",body:n}),t=await e.json();e.ok?(c(t),w("CONFIGURING")):(C(t.error||`Upload failed (${e.status})`),w("IDLE"))}catch(e){C("Cannot reach the server. Make sure the API is running."),w("IDLE")}},H=async()=>{if(s&&!N){W(!0);try{let e=await fetch(`${y}/api/jobs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileId:s.fileId,pageCount:s.pageCount,copies:L,kioskId:i})}),t=await e.json();e.ok&&(k(t.id),w("PAYING"))}catch{}finally{W(!1)}}},F=async()=>{if(u&&h.trim()){w("VERIFYING_PAYMENT");try{let e=await fetch(`${y}/api/jobs/${u}/verify-payment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accountTitle:h.trim()})});w(e.ok?"SUCCESS":"AWAITING_ADMIN")}catch{w("AWAITING_ADMIN")}}};return"VERIFYING_PAYMENT"===v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:b}),(0,n.jsx)("div",{className:"page-bg"}),(0,n.jsx)("div",{className:"fs-shell",children:(0,n.jsxs)("div",{className:"fs-inner",children:[(0,n.jsxs)("div",{className:"ring-wrap",children:[(0,n.jsx)("div",{className:"ring-bg"}),(0,n.jsx)("div",{className:"ring-spin"}),(0,n.jsx)("div",{className:"ring-center",children:(0,n.jsx)(x,{size:32,weight:"bold",color:"#4fda0f"})})]}),(0,n.jsx)("h2",{className:"fs-headline",children:"Verifying Payment"}),(0,n.jsx)("p",{className:"fs-body",children:"Checking your NayaPay transaction. This takes a few seconds…"}),(0,n.jsxs)("div",{className:"fs-card",children:[(0,n.jsxs)("div",{className:"fs-price",children:["PKR ",P]}),u&&(0,n.jsxs)("div",{className:"fs-job-id",children:["Job #",u]})]})]})})]}):"AWAITING_ADMIN"===v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:b}),(0,n.jsx)("div",{className:"page-bg"}),(0,n.jsx)("div",{className:"fs-shell",children:(0,n.jsxs)("div",{className:"fs-inner",children:[(0,n.jsxs)("div",{className:"pending-wrap",children:[(0,n.jsx)("div",{className:"pending-pulse"}),(0,n.jsx)("div",{className:"pending-border",children:(0,n.jsx)(g.Clock,{size:46,weight:"duotone",color:"#f59e0b"})})]}),(0,n.jsx)("h2",{className:"fs-headline",children:"Payment Under Review"}),(0,n.jsx)("p",{className:"fs-body",children:"We couldn't auto-verify your payment. Our team has been notified and is reviewing it — you'll be moved to the print queue automatically."}),(0,n.jsxs)("div",{className:"fs-card",children:[(0,n.jsxs)("div",{className:"fs-price",children:["PKR ",P]}),h&&(0,n.jsx)("div",{className:"fs-account",children:h}),u&&(0,n.jsxs)("div",{className:"fs-job-id",children:["Job #",u]})]}),(0,n.jsxs)("div",{className:"live-row",children:[(0,n.jsx)("span",{className:"live-dot dot-amber"}),"Waiting for approval — updates automatically"]}),(0,n.jsxs)("p",{className:"wait-note",children:["Typical wait: 1–5 minutes."," ",(0,n.jsx)("strong",{children:"Do not close this screen."})]})]})})]}):"SUCCESS"===v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:b}),(0,n.jsx)("div",{className:"page-bg"}),(0,n.jsx)("div",{className:"fs-shell",children:(0,n.jsxs)("div",{className:"fs-inner",children:[(0,n.jsxs)("div",{className:"ring-wrap",children:[(0,n.jsx)("div",{className:"ring-bg"}),(0,n.jsx)("div",{className:"ring-spin"}),(0,n.jsx)("div",{className:"ring-center",children:(0,n.jsx)(m.Printer,{size:34,weight:"duotone",color:"#4fda0f"})})]}),(0,n.jsx)("h2",{className:"fs-headline",children:"Payment Confirmed!"}),(0,n.jsxs)("p",{className:"fs-body",children:["Sending ",L," ",1===L?"copy":"copies"," to the printer. Please wait near the machine."]}),(0,n.jsxs)("div",{className:"fs-card",children:[(0,n.jsxs)("div",{className:"fs-price",children:["PKR ",P]}),u&&(0,n.jsxs)("div",{className:"fs-job-id",children:["Job #",u]})]}),(0,n.jsxs)("div",{className:"live-row",children:[(0,n.jsx)("span",{className:"live-dot dot-green"}),"Printing in progress"]})]})})]}):"COMPLETED"===v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:b}),(0,n.jsx)("div",{className:"page-bg"}),(0,n.jsx)("div",{className:"fs-shell",children:(0,n.jsxs)("div",{className:"fs-inner",children:[(0,n.jsx)("div",{className:"done-icon",children:(0,n.jsx)(p.CheckCircle,{size:54,weight:"fill",color:"#4fda0f"})}),(0,n.jsx)("h2",{className:"fs-headline",children:"All Done!"}),(0,n.jsx)("p",{className:"fs-body",children:"Your documents are ready. Please collect them from the printer."}),(0,n.jsx)("button",{className:"btn-dark",style:{marginTop:8},onClick:()=>t.push(`/?kiosk_id=${i}`),children:"Print Another Document"})]})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:b}),(0,n.jsx)("div",{className:"page-bg"}),(0,n.jsxs)("div",{className:"up-shell",children:[(0,n.jsxs)("header",{className:"up-header",children:[(0,n.jsx)("img",{src:"/logo.jpeg",alt:"Print It",className:"up-logo"}),(0,n.jsx)("span",{className:"up-kiosk-id",children:i})]}),(0,n.jsxs)("div",{className:"up-body",children:[("IDLE"===v||"UPLOADING"===v)&&(0,n.jsx)("div",{className:"up-zone-wrap",children:"UPLOADING"===v?(0,n.jsxs)("div",{className:"up-uploading",children:[(0,n.jsx)("div",{className:"up-spinner-bg",children:(0,n.jsx)(x,{size:30,weight:"bold",color:"#4fda0f",className:"animate-spin"})}),(0,n.jsx)("p",{className:"up-analyzing",children:"Analyzing document…"})]}):(0,n.jsxs)(n.Fragment,{children:[M&&(0,n.jsx)("div",{style:{padding:"12px 16px",marginBottom:"12px",background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:"12px",color:"#dc2626",fontSize:"13px",lineHeight:1.5},children:M}),(0,n.jsxs)("label",{className:"up-drop-label",children:[(0,n.jsx)("div",{className:"up-icon-bg",children:(0,n.jsx)(d,{size:36,color:"#3ab30a"})}),(0,n.jsx)("p",{className:"up-tap-text",children:"Tap to select file"}),(0,n.jsx)("p",{className:"up-file-types",children:"PDF, JPG, or PNG"}),(0,n.jsx)("input",{type:"file",onChange:A,style:{display:"none"},accept:".pdf,image/*"})]})]})}),("CONFIGURING"===v||"PAYING"===v)&&s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"cfg-file",children:[(0,n.jsx)("div",{className:"cfg-file-icon",children:(0,n.jsx)(f,{size:28,color:"#3ab30a"})}),(0,n.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,n.jsx)("div",{className:"cfg-file-name",children:a?.name}),(0,n.jsxs)("div",{className:"cfg-file-meta",children:[s.pageCount," pages · ",((a?.size||0)/1024/1024).toFixed(2)," MB"]})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"sec-label",children:"Copies"}),(0,n.jsxs)("div",{className:"copies-row",children:[(0,n.jsx)("button",{className:"copies-btn",onClick:()=>E(e=>Math.max(1,e-1)),disabled:L<=1||"PAYING"===v,children:"−"}),(0,n.jsx)("div",{className:"copies-divider"}),(0,n.jsx)("span",{className:"copies-val",children:L}),(0,n.jsx)("div",{className:"copies-divider"}),(0,n.jsx)("button",{className:"copies-btn",onClick:()=>E(e=>e+1),disabled:"PAYING"===v,children:"+"})]})]}),(0,n.jsxs)("div",{className:"price-card",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"price-label",children:"Total"}),(0,n.jsxs)("div",{className:"price-val",children:["PKR ",P]})]}),(0,n.jsxs)("div",{className:"price-breakdown",children:[(0,n.jsxs)("div",{className:"price-line",children:[s.pageCount," pages × ",L," ",1===L?"copy":"copies"]}),(0,n.jsxs)("div",{className:"price-line",children:["PKR ",10," per page"]})]})]}),"PAYING"===v&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"pay-box",children:[(0,n.jsxs)("div",{className:"pay-heading",children:["Transfer exactly PKR ",P," to:"]}),[["Account","Ayesha Awais"],["NayaPay #","03234563464"],["ID","ayesha.624@nayapay"],["IBAN","PK26NAYA1234503234563464"]].map(([e,t])=>(0,n.jsxs)("div",{className:"pay-row",children:[(0,n.jsx)("span",{className:"pay-row-label",children:e}),(0,n.jsx)("span",{className:"pay-row-val",children:t})]},e)),(0,n.jsx)("p",{className:"pay-note",children:"Send the exact amount to enable auto-verification."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"input-label",children:"Your NayaPay Account Title"}),(0,n.jsx)("input",{type:"text",className:"account-input",placeholder:"e.g. Muhammad Ali",value:h,onChange:e=>j(e.target.value),autoComplete:"off",autoCorrect:"off"}),(0,n.jsx)("p",{className:"input-hint",children:"Must match the name shown in your NayaPay account exactly."})]})]})]}),(0,n.jsx)("div",{className:"scroll-spacer"})]}),("CONFIGURING"===v||"PAYING"===v)&&(0,n.jsxs)("div",{className:"up-footer",children:["CONFIGURING"===v&&(0,n.jsx)("button",{className:"btn-green",onClick:H,disabled:N,children:N?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{size:20,className:"animate-spin"}),"  Processing…"]}):(0,n.jsx)("span",{className:"btn-green-text",children:"Proceed to Payment"})}),"PAYING"===v&&(0,n.jsx)("button",{className:"btn-dark-green",onClick:F,disabled:!h.trim(),children:"I Have Paid"})]})]})]})}function L(){return(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,n.jsx)(j,{})})}e.s(["default",()=>L],90290)}]);