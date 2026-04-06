(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32189,(e,t,r)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65156,(e,t,r)=>{"use strict";var a=e.r(32189);function i(){}function n(){}n.resetWarningCache=i,t.exports=function(){function e(e,t,r,i,n,o){if(o!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},45009,(e,t,r)=>{t.exports=e.r(65156)()},78043,(e,t,r)=>{t.exports={L:1,M:0,Q:3,H:2}},59160,(e,t,r)=>{t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},46329,(e,t,r)=>{var a=e.r(59160);function i(e){this.mode=a.MODE_8BIT_BYTE,this.data=e}i.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},t.exports=i},15675,(e,t,r)=>{var a=e.r(78043);function i(e,t){this.totalCount=e,this.dataCount=t}i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(e,t){var r=i.getRsBlockTable(e,t);if(void 0==r)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var a=r.length/3,n=[],o=0;o<a;o++)for(var s=r[3*o+0],l=r[3*o+1],d=r[3*o+2],p=0;p<s;p++)n.push(new i(l,d));return n},i.getRsBlockTable=function(e,t){switch(t){case a.L:return i.RS_BLOCK_TABLE[(e-1)*4+0];case a.M:return i.RS_BLOCK_TABLE[(e-1)*4+1];case a.Q:return i.RS_BLOCK_TABLE[(e-1)*4+2];case a.H:return i.RS_BLOCK_TABLE[(e-1)*4+3];default:return}},t.exports=i},1444,(e,t,r)=>{function a(){this.buffer=[],this.length=0}a.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=a},66479,(e,t,r)=>{for(var a={glog:function(e){if(e<1)throw Error("glog("+e+")");return a.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return a.EXP_TABLE[e]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},i=0;i<8;i++)a.EXP_TABLE[i]=1<<i;for(var i=8;i<256;i++)a.EXP_TABLE[i]=a.EXP_TABLE[i-4]^a.EXP_TABLE[i-5]^a.EXP_TABLE[i-6]^a.EXP_TABLE[i-8];for(var i=0;i<255;i++)a.LOG_TABLE[a.EXP_TABLE[i]]=i;t.exports=a},80033,(e,t,r)=>{var a=e.r(66479);function i(e,t){if(void 0==e.length)throw Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=Array(e.length-r+t);for(var a=0;a<e.length-r;a++)this.num[a]=e[a+r]}i.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<e.getLength();n++)t[r+n]^=a.gexp(a.glog(this.get(r))+a.glog(e.get(n)));return new i(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=a.glog(this.get(0))-a.glog(e.get(0)),r=Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(var n=0;n<e.getLength();n++)r[n]^=a.gexp(a.glog(e.get(n))+t);return new i(r,0).mod(e)}},t.exports=i},29046,(e,t,r)=>{var a=e.r(59160),i=e.r(80033),n=e.r(66479),o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;o.getBCHDigit(t)-o.getBCHDigit(o.G15)>=0;)t^=o.G15<<o.getBCHDigit(t)-o.getBCHDigit(o.G15);return(e<<10|t)^o.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;o.getBCHDigit(t)-o.getBCHDigit(o.G18)>=0;)t^=o.G18<<o.getBCHDigit(t)-o.getBCHDigit(o.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return o.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case 0:return(t+r)%2==0;case 1:return t%2==0;case 2:return r%3==0;case 3:return(t+r)%3==0;case 4:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case 5:return t*r%2+t*r%3==0;case 6:return(t*r%2+t*r%3)%2==0;case 7:return(t*r%3+(t+r)%2)%2==0;default:throw Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new i([1],0),r=0;r<e;r++)t=t.multiply(new i([1,n.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:case a.MODE_KANJI:return 8;default:throw Error("mode:"+e)}if(t<27)switch(e){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw Error("mode:"+e)}if(t<41)switch(e){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw Error("mode:"+e)}throw Error("type:"+t)},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,a=0;a<t;a++)for(var i=0;i<t;i++){for(var n=0,o=e.isDark(a,i),s=-1;s<=1;s++)if(!(a+s<0)&&!(t<=a+s))for(var l=-1;l<=1;l++)!(i+l<0)&&!(t<=i+l)&&(0!=s||0!=l)&&o==e.isDark(a+s,i+l)&&n++;n>5&&(r+=3+n-5)}for(var a=0;a<t-1;a++)for(var i=0;i<t-1;i++){var d=0;e.isDark(a,i)&&d++,e.isDark(a+1,i)&&d++,e.isDark(a,i+1)&&d++,e.isDark(a+1,i+1)&&d++,(0==d||4==d)&&(r+=3)}for(var a=0;a<t;a++)for(var i=0;i<t-6;i++)e.isDark(a,i)&&!e.isDark(a,i+1)&&e.isDark(a,i+2)&&e.isDark(a,i+3)&&e.isDark(a,i+4)&&!e.isDark(a,i+5)&&e.isDark(a,i+6)&&(r+=40);for(var i=0;i<t;i++)for(var a=0;a<t-6;a++)e.isDark(a,i)&&!e.isDark(a+1,i)&&e.isDark(a+2,i)&&e.isDark(a+3,i)&&e.isDark(a+4,i)&&!e.isDark(a+5,i)&&e.isDark(a+6,i)&&(r+=40);for(var p=0,i=0;i<t;i++)for(var a=0;a<t;a++)e.isDark(a,i)&&p++;return r+10*(Math.abs(100*p/t/t-50)/5)}};t.exports=o},47413,(e,t,r)=>{var a=e.r(46329),i=e.r(15675),n=e.r(1444),o=e.r(29046),s=e.r(80033);function l(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var d=l.prototype;d.addData=function(e){var t=new a(e);this.dataList.push(t),this.dataCache=null},d.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw Error(e+","+t);return this.modules[e][t]},d.getModuleCount=function(){return this.moduleCount},d.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=i.getRSBlocks(e,this.errorCorrectLevel),r=new n,a=0,s=0;s<t.length;s++)a+=t[s].dataCount;for(var s=0;s<this.dataList.length;s++){var l=this.dataList[s];r.put(l.mode,4),r.put(l.getLength(),o.getLengthInBits(l.mode,e)),l.write(r)}if(r.getLengthInBits()<=8*a)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},d.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[r][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},d.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1)&&!(this.moduleCount<=e+r))for(var a=-1;a<=7;a++)t+a<=-1||this.moduleCount<=t+a||(0<=r&&r<=6&&(0==a||6==a)||0<=a&&a<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=a&&a<=4?this.modules[e+r][t+a]=!0:this.modules[e+r][t+a]=!1)},d.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var a=o.getLostPoint(this);(0==r||e>a)&&(e=a,t=r)}return t},d.createMovieClip=function(e,t,r){var a=e.createEmptyMovieClip(t,r);this.make();for(var i=0;i<this.modules.length;i++)for(var n=+i,o=0;o<this.modules[i].length;o++){var s=+o;this.modules[i][o]&&(a.beginFill(0,100),a.moveTo(s,n),a.lineTo(s+1,n),a.lineTo(s+1,n+1),a.lineTo(s,n+1),a.endFill())}return a},d.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},d.setupPositionAdjustPattern=function(){for(var e=o.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var a=e[t],i=e[r];if(null==this.modules[a][i])for(var n=-2;n<=2;n++)for(var s=-2;s<=2;s++)-2==n||2==n||-2==s||2==s||0==n&&0==s?this.modules[a+n][i+s]=!0:this.modules[a+n][i+s]=!1}},d.setupTypeNumber=function(e){for(var t=o.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var a=!e&&(t>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=a}for(var r=0;r<18;r++){var a=!e&&(t>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=a}},d.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,a=o.getBCHTypeInfo(r),i=0;i<15;i++){var n=!e&&(a>>i&1)==1;i<6?this.modules[i][8]=n:i<8?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(var i=0;i<15;i++){var n=!e&&(a>>i&1)==1;i<8?this.modules[8][this.moduleCount-i-1]=n:i<9?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!e},d.mapData=function(e,t){for(var r=-1,a=this.moduleCount-1,i=7,n=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var l=0;l<2;l++)if(null==this.modules[a][s-l]){var d=!1;n<e.length&&(d=(e[n]>>>i&1)==1),o.getMask(t,a,s-l)&&(d=!d),this.modules[a][s-l]=d,-1==--i&&(n++,i=7)}if((a+=r)<0||this.moduleCount<=a){a-=r,r=-r;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(e,t,r){for(var a=i.getRSBlocks(e,t),s=new n,d=0;d<r.length;d++){var p=r[d];s.put(p.mode,4),s.put(p.getLength(),o.getLengthInBits(p.mode,e)),p.write(s)}for(var c=0,d=0;d<a.length;d++)c+=a[d].dataCount;if(s.getLengthInBits()>8*c)throw Error("code length overflow. ("+s.getLengthInBits()+">"+8*c+")");for(s.getLengthInBits()+4<=8*c&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*c)&&(s.put(l.PAD0,8),!(s.getLengthInBits()>=8*c));){;s.put(l.PAD1,8)}return l.createBytes(s,a)},l.createBytes=function(e,t){for(var r=0,a=0,i=0,n=Array(t.length),l=Array(t.length),d=0;d<t.length;d++){var p=t[d].dataCount,c=t[d].totalCount-p;a=Math.max(a,p),i=Math.max(i,c),n[d]=Array(p);for(var u=0;u<n[d].length;u++)n[d][u]=255&e.buffer[u+r];r+=p;var f=o.getErrorCorrectPolynomial(c),g=new s(n[d],f.getLength()-1).mod(f);l[d]=Array(f.getLength()-1);for(var u=0;u<l[d].length;u++){var h=u+g.getLength()-l[d].length;l[d][u]=h>=0?g.get(h):0}}for(var x=0,u=0;u<t.length;u++)x+=t[u].totalCount;for(var m=Array(x),b=0,u=0;u<a;u++)for(var d=0;d<t.length;d++)u<n[d].length&&(m[b++]=n[d][u]);for(var u=0;u<i;u++)for(var d=0;d<t.length;d++)u<l[d].length&&(m[b++]=l[d][u]);return m},t.exports=l},89852,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=s(e.r(45009)),n=e.r(71645),o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}var l={bgColor:i.default.oneOfType([i.default.object,i.default.string]).isRequired,bgD:i.default.string.isRequired,fgColor:i.default.oneOfType([i.default.object,i.default.string]).isRequired,fgD:i.default.string.isRequired,size:i.default.number.isRequired,title:i.default.string,viewBoxSize:i.default.number.isRequired,xmlns:i.default.string},d=(0,n.forwardRef)(function(e,t){var r=e.bgColor,i=e.bgD,n=e.fgD,s=e.fgColor,l=e.size,d=e.title,p=e.viewBoxSize,c=e.xmlns,u=function(e,t){var r={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return o.default.createElement("svg",a({},u,{height:l,ref:t,viewBox:"0 0 "+p+" "+p,width:l,xmlns:void 0===c?"http://www.w3.org/2000/svg":c}),d?o.default.createElement("title",null,d):null,o.default.createElement("path",{d:i,fill:r}),o.default.createElement("path",{d:n,fill:s}))});d.displayName="QRCodeSvg",d.propTypes=l,r.default=d},86339,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.QRCode=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=p(e.r(45009)),n=p(e.r(78043)),o=p(e.r(47413)),s=e.r(71645),l=p(s),d=p(e.r(89852));function p(e){return e&&e.__esModule?e:{default:e}}var c={bgColor:i.default.oneOfType([i.default.object,i.default.string]),fgColor:i.default.oneOfType([i.default.object,i.default.string]),level:i.default.string,size:i.default.number,value:i.default.string.isRequired},u=(0,s.forwardRef)(function(e,t){var r=e.bgColor,i=e.fgColor,s=e.level,p=e.size,c=e.value,u=function(e,t){var r={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["bgColor","fgColor","level","size","value"]),f=new o.default(-1,n.default[void 0===s?"L":s]);f.addData(c),f.make();var g=f.modules;return l.default.createElement(d.default,a({},u,{bgColor:void 0===r?"#FFFFFF":r,bgD:g.map(function(e,t){return e.map(function(e,r){return e?"":"M "+r+" "+t+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:void 0===i?"#000000":i,fgD:g.map(function(e,t){return e.map(function(e,r){return e?"M "+r+" "+t+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:t,size:void 0===p?256:p,viewBoxSize:g.length}))});r.QRCode=u,u.displayName="QRCode",u.propTypes=c,r.default=u},80827,e=>{"use strict";var t=e.i(47167),r=e.i(43476),a=e.i(71645),i=e.i(18566),n=e.i(86339);let o=t.default.env.NEXT_PUBLIC_API_BASE_URL||"";function s(){let e=(0,i.useSearchParams)().get("kiosk_id")||"default",t=(0,i.useRouter)(),[s,l]=(0,a.useState)("http://localhost:3000"),d=(0,a.useRef)(new Set),[p,c]=(0,a.useState)(0),[u,f]=(0,a.useState)(""),[g,h]=(0,a.useState)([]),[x,m]=(0,a.useState)(0),[b,v]=(0,a.useState)(!1),y=(0,a.useRef)(null);(0,a.useEffect)(()=>{l(`${window.location.protocol}//${window.location.host}`)},[]),(0,a.useEffect)(()=>{let e=()=>{f(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let t=setInterval(e,1e3);return()=>clearInterval(t)},[]),(0,a.useEffect)(()=>{let e=setInterval(()=>c(e=>e+1),2e3);return()=>clearInterval(e)},[]),(0,a.useEffect)(()=>{let r=async()=>{try{let r=await fetch(`${o}/api/jobs/kiosk/${e}`);if(!r.ok)return;let a=await r.json();if(a.length>0){let r=a[0];if(!d.current.has(r.id)){d.current.add(r.id),t.push(`/kiosk-print?jobId=${r.id}&fileId=${r.fileId}&copies=${r.copies}&kioskId=${e}`);return}}}catch{}},a=setInterval(r,5e3);return r(),()=>clearInterval(a)},[e,t]),(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch(`${o}/api/videos`);if(e.ok){let t=await e.json();h(t)}}catch{}};e();let t=setInterval(e,3e4);return()=>clearInterval(t)},[]),(0,a.useEffect)(()=>{g.length>0&&y.current&&(y.current.load(),y.current.play().catch(()=>{})),v(!1)},[x,g]);let w=(0,a.useCallback)(()=>{v(!1),m(e=>(e+1)%g.length)},[g.length]),k=(0,a.useCallback)(()=>{v(e=>!e)},[]),C=`${s}/?kiosk_id=${e}`,B=g.length>0?`${o}/uploads/videos/${g[x%g.length].filename}`:null;return g.length>0&&B?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
                    html, body { overflow: hidden !important; height: 100% !important; margin: 0 !important; padding: 0 !important; }
                    body > * { padding: 0 !important; }

                    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                    .video-root {
                        width: 100vw; height: 100vh;
                        background: #000;
                        position: relative;
                        overflow: hidden;
                        cursor: none;
                    }

                    .video-ad {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    /* Video counter pill */
                    .video-counter {
                        position: absolute;
                        top: 24px; right: 24px;
                        background: rgba(0,0,0,0.5);
                        backdrop-filter: blur(8px);
                        border: 1px solid rgba(255,255,255,0.15);
                        border-radius: 20px;
                        padding: 6px 14px;
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 12px;
                        letter-spacing: 3px;
                        text-transform: uppercase;
                        color: rgba(255,255,255,0.5);
                        z-index: 10;
                    }

                    /* Floating QR overlay */
                    .qr-overlay {
                        position: absolute;
                        bottom: 36px; right: 36px;
                        z-index: 20;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 14px;
                        animation: overlay-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                    }
                    @keyframes overlay-in {
                        from { opacity: 0; transform: translateY(20px) scale(0.92); }
                        to   { opacity: 1; transform: translateY(0) scale(1); }
                    }

                    .qr-overlay-card {
                        background: rgba(255,255,255,0.97);
                        border-radius: 20px;
                        padding: 20px;
                        box-shadow:
                            0 0 0 1px rgba(79,218,15,0.5),
                            0 0 40px rgba(79,218,15,0.25),
                            0 24px 64px rgba(0,0,0,0.5);
                        position: relative;
                        overflow: hidden;
                    }

                    /* green scanline on overlay QR */
                    .qr-overlay-card::after {
                        content: '';
                        position: absolute;
                        left: 20px; right: 20px;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #4fda0f, transparent);
                        border-radius: 2px;
                        box-shadow: 0 0 10px #4fda0f;
                        animation: scan-overlay 2.5s ease-in-out infinite;
                    }
                    @keyframes scan-overlay {
                        0%   { top: 20px; opacity: 1; }
                        48%  { top: calc(100% - 20px); opacity: 1; }
                        50%  { opacity: 0; }
                        52%  { top: 20px; opacity: 0; }
                        54%  { opacity: 1; }
                        100% { top: 20px; opacity: 1; }
                    }

                    .qr-overlay-label {
                        background: rgba(0,0,0,0.75);
                        backdrop-filter: blur(12px);
                        border: 1px solid rgba(79,218,15,0.3);
                        border-radius: 14px;
                        padding: 12px 18px;
                        max-width: 240px;
                        text-align: right;
                    }
                    .qr-overlay-label-main {
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 16px;
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        color: #4fda0f;
                        line-height: 1.2;
                    }
                    .qr-overlay-label-sub {
                        font-family: 'Barlow', 'Helvetica Neue', sans-serif;
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(255,255,255,0.65);
                        margin-top: 4px;
                        line-height: 1.5;
                    }

                    /* double-click hint at bottom center */
                    .dbl-hint {
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-family: 'Barlow Condensed', 'Helvetica Neue', sans-serif;
                        font-size: 11px;
                        letter-spacing: 4px;
                        text-transform: uppercase;
                        color: rgba(255,255,255,0.2);
                        z-index: 5;
                        white-space: nowrap;
                        pointer-events: none;
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;700&family=Barlow+Condensed:wght@400;600;700&display=swap');
                `}),(0,r.jsxs)("div",{className:"video-root",onDoubleClick:k,children:[(0,r.jsx)("video",{ref:y,className:"video-ad",src:B,autoPlay:!0,muted:!0,playsInline:!0,onEnded:w},B),g.length>1&&(0,r.jsxs)("div",{className:"video-counter",children:[x%g.length+1," / ",g.length]}),!b&&(0,r.jsx)("div",{className:"dbl-hint",children:"double tap to scan & print"}),b&&(0,r.jsxs)("div",{className:"qr-overlay",children:[(0,r.jsxs)("div",{className:"qr-overlay-label",children:[(0,r.jsx)("div",{className:"qr-overlay-label-main",children:"Scan & Continue"}),(0,r.jsx)("div",{className:"qr-overlay-label-sub",children:"Scan the QR code and continue on your mobile screen for further steps"})]}),(0,r.jsx)("div",{className:"qr-overlay-card",children:(0,r.jsx)(n.default,{value:C,size:180,fgColor:"#3f4247",bgColor:"#ffffff",level:"H"})})]})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap');

                html, body { overflow: hidden !important; height: 100% !important; margin: 0 !important; padding: 0 !important; }
                body > * { padding: 0 !important; }

                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .kiosk-root {
                    width: 100vw; height: 100vh;
                    background: #ffffff;
                    display: flex; flex-direction: row;
                    overflow: hidden;
                    font-family: 'Barlow', sans-serif;
                    position: relative;
                }

                /* ── Background grid ── */
                .kiosk-root::before {
                    content: '';
                    position: absolute; inset: 0;
                    background-image:
                        linear-gradient(rgba(79,218,15,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(79,218,15,0.1) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* ══════════════ LEFT PANEL ══════════════ */
                .left-panel {
                    width: 58%;
                    display: flex; flex-direction: column;
                    justify-content: space-between;
                    padding: 48px 56px;
                    position: relative; z-index: 1;
                    border-right: 1px solid rgba(63,66,71,0.12);
                }

                /* subtle green ambient */
                .left-panel::after {
                    content: '';
                    position: absolute;
                    top: -200px; left: -200px;
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(79,218,15,0.06) 0%, transparent 70%);
                    pointer-events: none;
                }

                /* ── Brand bar ── */
                .brand {
                    display: flex; align-items: center;
                }
                .brand-logo {
                    width: 200px;
                    height: auto;
                    object-fit: contain;
                }

                /* ── Headline ── */
                .headline-block { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 32px 0; }
                .headline-eyebrow {
                    display: inline-flex; align-items: center; gap: 10px;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 13px; letter-spacing: 6px;
                    text-transform: uppercase; color: #3ab30a;
                    margin-bottom: 20px;
                }
                .eyebrow-dot {
                    width: 6px; height: 6px;
                    background: #4fda0f;
                    border-radius: 50%;
                    animation: blink 1.5s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.6); }
                }

                .headline {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(72px, 9vw, 110px);
                    line-height: 0.92;
                    letter-spacing: 2px;
                    color: #3f4247;
                }
                .headline em {
                    font-style: normal;
                    color: transparent;
                    -webkit-text-stroke: 2px #4fda0f;
                }
                .headline-sub {
                    margin-top: 24px;
                    font-size: 18px;
                    font-weight: 300;
                    color: rgba(63,66,71,0.55);
                    letter-spacing: 0.5px;
                    line-height: 1.6;
                    max-width: 420px;
                }

                /* ── Steps ── */
                .steps { display: flex; flex-direction: column; gap: 6px; }
                .step {
                    display: flex; align-items: center; gap: 20px;
                    padding: 16px 20px;
                    border-radius: 12px;
                    border: 1px solid transparent;
                    transition: all 0.4s ease;
                    cursor: default;
                }
                .step-active {
                    background: rgba(79,218,15,0.08);
                    border-color: rgba(79,218,15,0.3);
                }
                .step-num {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 13px; letter-spacing: 2px;
                    color: #3ab30a;
                    width: 28px; flex-shrink: 0;
                }
                .step-divider {
                    width: 1px; height: 32px;
                    background: rgba(79,218,15,0.35);
                    flex-shrink: 0;
                }
                .step-content { flex: 1; }
                .step-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 20px; font-weight: 700;
                    color: #3f4247; letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .step-sub {
                    font-size: 13px; font-weight: 400;
                    color: rgba(63,66,71,0.5);
                    margin-top: 2px;
                }
                .step-icon {
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    background: rgba(79,218,15,0.1);
                    border: 1px solid rgba(79,218,15,0.35);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .step-icon svg { width: 16px; height: 16px; stroke: #3ab30a; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

                /* ── Bottom status bar ── */
                .status-bar {
                    display: flex; align-items: center; justify-content: space-between;
                    padding-top: 24px;
                    border-top: 1px solid rgba(63,66,71,0.1);
                }
                .status-dot-row { display: flex; align-items: center; gap: 8px; }
                .status-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: #4fda0f;
                    box-shadow: 0 0 8px rgba(79,218,15,0.6);
                    animation: pulse-dot 2s ease-in-out infinite;
                }
                @keyframes pulse-dot {
                    0%, 100% { box-shadow: 0 0 8px rgba(79,218,15,0.6); }
                    50% { box-shadow: 0 0 20px rgba(79,218,15,0.8), 0 0 40px rgba(79,218,15,0.3); }
                }
                .status-text {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 13px; letter-spacing: 3px;
                    text-transform: uppercase; color: rgba(63,66,71,0.45);
                }
                .kiosk-id-badge {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 11px; letter-spacing: 4px;
                    text-transform: uppercase; color: rgba(63,66,71,0.4);
                    padding: 6px 14px;
                    border: 1px solid rgba(63,66,71,0.15);
                    border-radius: 20px;
                }
                .clock {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px; letter-spacing: 3px;
                    color: rgba(63,66,71,0.35);
                }

                /* ══════════════ RIGHT PANEL ══════════════ */
                .right-panel {
                    width: 42%;
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    padding: 48px 40px;
                    position: relative; z-index: 1;
                    background: rgba(79,218,15,0.03);
                }

                /* diagonal accent stripe */
                .right-panel::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: linear-gradient(135deg, transparent 60%, rgba(79,218,15,0.05) 100%);
                    pointer-events: none;
                }

                .qr-wrapper {
                    display: flex; flex-direction: column;
                    align-items: center; gap: 28px;
                    position: relative;
                }

                /* Outer pulsing ring */
                .qr-ring-outer {
                    position: absolute;
                    width: 340px; height: 340px;
                    border-radius: 50%;
                    border: 1px solid rgba(79,218,15,0.25);
                    animation: ring-expand 3s ease-out infinite;
                }
                .qr-ring-outer:nth-child(2) { animation-delay: 1.5s; }
                @keyframes ring-expand {
                    0% { transform: scale(0.85); opacity: 0.7; }
                    100% { transform: scale(1.25); opacity: 0; }
                }

                .qr-card {
                    position: relative;
                    background: #fff;
                    border-radius: 24px;
                    padding: 28px;
                    box-shadow:
                        0 0 0 1px rgba(79,218,15,0.35),
                        0 0 40px rgba(79,218,15,0.12),
                        0 16px 48px rgba(63,66,71,0.12);
                }

                /* Corner accents */
                .qr-card::before, .qr-card::after {
                    content: '';
                    position: absolute;
                    width: 24px; height: 24px;
                    border-color: #4fda0f; border-style: solid;
                }
                .qr-card::before {
                    top: -1px; left: -1px;
                    border-width: 3px 0 0 3px;
                    border-radius: 4px 0 0 0;
                }
                .qr-card::after {
                    bottom: -1px; right: -1px;
                    border-width: 0 3px 3px 0;
                    border-radius: 0 0 4px 0;
                }

                /* scan-line effect */
                .qr-scanline {
                    position: absolute;
                    left: 28px; right: 28px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #4fda0f, transparent);
                    animation: scan 3s ease-in-out infinite;
                    z-index: 10;
                    border-radius: 2px;
                    box-shadow: 0 0 12px #4fda0f;
                }
                @keyframes scan {
                    0% { top: 28px; opacity: 1; }
                    48% { top: calc(100% - 28px); opacity: 1; }
                    50% { opacity: 0; }
                    52% { top: 28px; opacity: 0; }
                    54% { opacity: 1; }
                    100% { top: 28px; opacity: 1; }
                }

                /* ── CTA label ── */
                .scan-cta {
                    display: flex; flex-direction: column; align-items: center; gap: 8px;
                }
                .scan-cta-main {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 32px; letter-spacing: 6px;
                    color: #3f4247; text-transform: uppercase;
                }
                .scan-cta-main span { color: #3ab30a; }
                .scan-cta-sub {
                    font-size: 13px; font-weight: 400;
                    color: rgba(63,66,71,0.5);
                    letter-spacing: 2px; text-transform: uppercase;
                }
                .scan-arrow {
                    display: flex; align-items: center; gap: 6px;
                    color: #3ab30a;
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
                    margin-top: 4px;
                    animation: arrow-bounce 2s ease-in-out infinite;
                }
                @keyframes arrow-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .scan-arrow svg { width: 14px; height: 14px; stroke: #3ab30a; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

                /* ── Price badge ── */
                .price-badge {
                    margin-top: 12px;
                    display: flex; align-items: center; gap: 12px;
                    padding: 12px 24px;
                    background: rgba(79,218,15,0.1);
                    border: 1px solid rgba(79,218,15,0.3);
                    border-radius: 40px;
                }
                .price-badge-label {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 12px; letter-spacing: 3px;
                    text-transform: uppercase; color: rgba(63,66,71,0.55);
                }
                .price-badge-value {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 22px; letter-spacing: 2px;
                    color: #3ab30a;
                }
                .price-badge-divider {
                    width: 1px; height: 20px;
                    background: rgba(79,218,15,0.3);
                }
            `}),(0,r.jsxs)("div",{className:"kiosk-root",children:[(0,r.jsxs)("div",{className:"left-panel",children:[(0,r.jsx)("div",{className:"brand",children:(0,r.jsx)("img",{src:"/logo.svg",alt:"Print It Logo",className:"brand-logo"})}),(0,r.jsxs)("div",{className:"headline-block",children:[(0,r.jsxs)("div",{className:"headline-eyebrow",children:[(0,r.jsx)("span",{className:"eyebrow-dot"}),"Ready to Print"]}),(0,r.jsxs)("h1",{className:"headline",children:["Print",(0,r.jsx)("br",{}),(0,r.jsx)("em",{children:"Anything."}),(0,r.jsx)("br",{}),"Instantly."]}),(0,r.jsx)("p",{className:"headline-sub",children:"Upload your document, pay via NayaPay, and collect your printout — all in under 2 minutes."})]}),(0,r.jsx)("div",{className:"steps",children:[{n:"01",label:"Scan the QR Code",sub:"Point your phone camera"},{n:"02",label:"Upload & Pay",sub:"Via NayaPay transfer"},{n:"03",label:"Collect Your Print",sub:"Ready in seconds"}].map((e,t)=>(0,r.jsxs)("div",{className:`step ${t===p%3?"step-active":""}`,children:[(0,r.jsx)("div",{className:"step-num",children:e.n}),(0,r.jsx)("div",{className:"step-divider"}),(0,r.jsxs)("div",{className:"step-content",children:[(0,r.jsx)("div",{className:"step-label",children:e.label}),(0,r.jsx)("div",{className:"step-sub",children:e.sub})]}),(0,r.jsxs)("div",{className:"step-icon",children:[0===t&&(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"7",height:"7"}),(0,r.jsx)("rect",{x:"14",y:"3",width:"7",height:"7"}),(0,r.jsx)("rect",{x:"3",y:"14",width:"7",height:"7"}),(0,r.jsx)("rect",{x:"14",y:"14",width:"3",height:"3"})]}),1===t&&(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,r.jsx)("polyline",{points:"17 8 12 3 7 8"}),(0,r.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),2===t&&(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})})]})]},t))}),(0,r.jsxs)("div",{className:"status-bar",children:[(0,r.jsxs)("div",{className:"status-dot-row",children:[(0,r.jsx)("div",{className:"status-dot"}),(0,r.jsx)("span",{className:"status-text",children:"System Online"})]}),(0,r.jsx)("div",{className:"clock",children:u}),(0,r.jsxs)("div",{className:"kiosk-id-badge",children:["ID: ",e]})]})]}),(0,r.jsx)("div",{className:"right-panel",children:(0,r.jsxs)("div",{className:"qr-wrapper",children:[(0,r.jsx)("div",{className:"qr-ring-outer"}),(0,r.jsx)("div",{className:"qr-ring-outer"}),(0,r.jsxs)("div",{className:"qr-card",children:[(0,r.jsx)("div",{className:"qr-scanline"}),(0,r.jsx)(n.default,{value:C,size:260,fgColor:"#3f4247",bgColor:"#ffffff",level:"H"})]}),(0,r.jsxs)("div",{className:"scan-cta",children:[(0,r.jsxs)("div",{className:"scan-cta-main",children:["Scan to ",(0,r.jsx)("span",{children:"Start"})]}),(0,r.jsx)("div",{className:"scan-cta-sub",children:"Open camera & point at QR"}),(0,r.jsxs)("div",{className:"scan-arrow",children:[(0,r.jsx)("svg",{viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 5v14M5 12l7 7 7-7"})}),"point & scan"]})]}),(0,r.jsxs)("div",{className:"price-badge",children:[(0,r.jsx)("span",{className:"price-badge-label",children:"Starts from"}),(0,r.jsx)("div",{className:"price-badge-divider"}),(0,r.jsx)("span",{className:"price-badge-value",children:"PKR 10 / page"})]})]})})]})]})}function l(){return(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",color:"#3ab30a",fontFamily:"monospace",letterSpacing:"4px",fontSize:"14px"},children:"INITIALIZING..."}),children:(0,r.jsx)(s,{})})}function d(){return(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,r.jsx)(l,{})})}e.s(["default",()=>d])}]);