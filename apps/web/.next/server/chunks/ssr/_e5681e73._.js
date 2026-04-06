module.exports=[82520,(a,b,c)=>{"use strict";b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24560,(a,b,c)=>{"use strict";var d=a.r(82520);function e(){}function f(){}f.resetWarningCache=e,b.exports=function(){function a(a,b,c,e,f,g){if(g!==d){var h=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function b(){return a}a.isRequired=a;var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:e};return c.PropTypes=c,c}},41212,(a,b,c)=>{b.exports=a.r(24560)()},98945,(a,b,c)=>{b.exports={L:1,M:0,Q:3,H:2}},22079,(a,b,c)=>{b.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},71920,(a,b,c)=>{var d=a.r(22079);function e(a){this.mode=d.MODE_8BIT_BYTE,this.data=a}e.prototype={getLength:function(a){return this.data.length},write:function(a){for(var b=0;b<this.data.length;b++)a.put(this.data.charCodeAt(b),8)}},b.exports=e},71779,(a,b,c)=>{var d=a.r(98945);function e(a,b){this.totalCount=a,this.dataCount=b}e.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e.getRSBlocks=function(a,b){var c=e.getRsBlockTable(a,b);if(void 0==c)throw Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,f=[],g=0;g<d;g++)for(var h=c[3*g+0],i=c[3*g+1],j=c[3*g+2],k=0;k<h;k++)f.push(new e(i,j));return f},e.getRsBlockTable=function(a,b){switch(b){case d.L:return e.RS_BLOCK_TABLE[(a-1)*4+0];case d.M:return e.RS_BLOCK_TABLE[(a-1)*4+1];case d.Q:return e.RS_BLOCK_TABLE[(a-1)*4+2];case d.H:return e.RS_BLOCK_TABLE[(a-1)*4+3];default:return}},b.exports=e},48965,(a,b,c)=>{function d(){this.buffer=[],this.length=0}d.prototype={get:function(a){var b=Math.floor(a/8);return(this.buffer[b]>>>7-a%8&1)==1},put:function(a,b){for(var c=0;c<b;c++)this.putBit((a>>>b-c-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}},b.exports=d},37756,(a,b,c)=>{for(var d={glog:function(a){if(a<1)throw Error("glog("+a+")");return d.LOG_TABLE[a]},gexp:function(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return d.EXP_TABLE[a]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},e=0;e<8;e++)d.EXP_TABLE[e]=1<<e;for(var e=8;e<256;e++)d.EXP_TABLE[e]=d.EXP_TABLE[e-4]^d.EXP_TABLE[e-5]^d.EXP_TABLE[e-6]^d.EXP_TABLE[e-8];for(var e=0;e<255;e++)d.LOG_TABLE[d.EXP_TABLE[e]]=e;b.exports=d},5363,(a,b,c)=>{var d=a.r(37756);function e(a,b){if(void 0==a.length)throw Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}e.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var f=0;f<a.getLength();f++)b[c+f]^=d.gexp(d.glog(this.get(c))+d.glog(a.get(f)));return new e(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=d.glog(this.get(0))-d.glog(a.get(0)),c=Array(this.getLength()),f=0;f<this.getLength();f++)c[f]=this.get(f);for(var f=0;f<a.getLength();f++)c[f]^=d.gexp(d.glog(a.get(f))+b);return new e(c,0).mod(a)}},b.exports=e},14334,(a,b,c)=>{var d=a.r(22079),e=a.r(5363),f=a.r(37756),g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;g.getBCHDigit(b)-g.getBCHDigit(g.G15)>=0;)b^=g.G15<<g.getBCHDigit(b)-g.getBCHDigit(g.G15);return(a<<10|b)^g.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;g.getBCHDigit(b)-g.getBCHDigit(g.G18)>=0;)b^=g.G18<<g.getBCHDigit(b)-g.getBCHDigit(g.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return g.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case 0:return(b+c)%2==0;case 1:return b%2==0;case 2:return c%3==0;case 3:return(b+c)%3==0;case 4:return(Math.floor(b/2)+Math.floor(c/3))%2==0;case 5:return b*c%2+b*c%3==0;case 6:return(b*c%2+b*c%3)%2==0;case 7:return(b*c%3+(b+c)%2)%2==0;default:throw Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new e([1],0),c=0;c<a;c++)b=b.multiply(new e([1,f.gexp(c)],0));return b},getLengthInBits:function(a,b){if(1<=b&&b<10)switch(a){case d.MODE_NUMBER:return 10;case d.MODE_ALPHA_NUM:return 9;case d.MODE_8BIT_BYTE:case d.MODE_KANJI:return 8;default:throw Error("mode:"+a)}if(b<27)switch(a){case d.MODE_NUMBER:return 12;case d.MODE_ALPHA_NUM:return 11;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 10;default:throw Error("mode:"+a)}if(b<41)switch(a){case d.MODE_NUMBER:return 14;case d.MODE_ALPHA_NUM:return 13;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 12;default:throw Error("mode:"+a)}throw Error("type:"+b)},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;d<b;d++)for(var e=0;e<b;e++){for(var f=0,g=a.isDark(d,e),h=-1;h<=1;h++)if(!(d+h<0)&&!(b<=d+h))for(var i=-1;i<=1;i++)!(e+i<0)&&!(b<=e+i)&&(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;d<b-1;d++)for(var e=0;e<b-1;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;d<b;d++)for(var e=0;e<b-6;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;e<b;e++)for(var d=0;d<b-6;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;e<b;e++)for(var d=0;d<b;d++)a.isDark(d,e)&&k++;return c+10*(Math.abs(100*k/b/b-50)/5)}};b.exports=g},46057,(a,b,c)=>{var d=a.r(71920),e=a.r(71779),f=a.r(48965),g=a.r(14334),h=a.r(5363);function i(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var j=i.prototype;j.addData=function(a){var b=new d(a);this.dataList.push(b),this.dataCache=null},j.isDark=function(a,b){if(a<0||this.moduleCount<=a||b<0||this.moduleCount<=b)throw Error(a+","+b);return this.modules[a][b]},j.getModuleCount=function(){return this.moduleCount},j.make=function(){if(this.typeNumber<1){var a=1;for(a=1;a<40;a++){for(var b=e.getRSBlocks(a,this.errorCorrectLevel),c=new f,d=0,h=0;h<b.length;h++)d+=b[h].dataCount;for(var h=0;h<this.dataList.length;h++){var i=this.dataList[h];c.put(i.mode,4),c.put(i.getLength(),g.getLengthInBits(i.mode,a)),i.write(c)}if(c.getLengthInBits()<=8*d)break}this.typeNumber=a}this.makeImpl(!1,this.getBestMaskPattern())},j.makeImpl=function(a,b){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var c=0;c<this.moduleCount;c++){this.modules[c]=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++)this.modules[c][d]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,b),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=i.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,b)},j.setupPositionProbePattern=function(a,b){for(var c=-1;c<=7;c++)if(!(a+c<=-1)&&!(this.moduleCount<=a+c))for(var d=-1;d<=7;d++)b+d<=-1||this.moduleCount<=b+d||(0<=c&&c<=6&&(0==d||6==d)||0<=d&&d<=6&&(0==c||6==c)||2<=c&&c<=4&&2<=d&&d<=4?this.modules[a+c][b+d]=!0:this.modules[a+c][b+d]=!1)},j.getBestMaskPattern=function(){for(var a=0,b=0,c=0;c<8;c++){this.makeImpl(!0,c);var d=g.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},j.createMovieClip=function(a,b,c){var d=a.createEmptyMovieClip(b,c);this.make();for(var e=0;e<this.modules.length;e++)for(var f=+e,g=0;g<this.modules[e].length;g++){var h=+g;this.modules[e][g]&&(d.beginFill(0,100),d.moveTo(h,f),d.lineTo(h+1,f),d.lineTo(h+1,f+1),d.lineTo(h,f+1),d.endFill())}return d},j.setupTimingPattern=function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=a%2==0);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=b%2==0)},j.setupPositionAdjustPattern=function(){for(var a=g.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var f=-2;f<=2;f++)for(var h=-2;h<=2;h++)-2==f||2==f||-2==h||2==h||0==f&&0==h?this.modules[d+f][e+h]=!0:this.modules[d+f][e+h]=!1}},j.setupTypeNumber=function(a){for(var b=g.getBCHTypeNumber(this.typeNumber),c=0;c<18;c++){var d=!a&&(b>>c&1)==1;this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;c<18;c++){var d=!a&&(b>>c&1)==1;this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},j.setupTypeInfo=function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=g.getBCHTypeInfo(c),e=0;e<15;e++){var f=!a&&(d>>e&1)==1;e<6?this.modules[e][8]=f:e<8?this.modules[e+1][8]=f:this.modules[this.moduleCount-15+e][8]=f}for(var e=0;e<15;e++){var f=!a&&(d>>e&1)==1;e<8?this.modules[8][this.moduleCount-e-1]=f:e<9?this.modules[8][15-e-1+1]=f:this.modules[8][15-e-1]=f}this.modules[this.moduleCount-8][8]=!a},j.mapData=function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,f=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;i<2;i++)if(null==this.modules[d][h-i]){var j=!1;f<a.length&&(j=(a[f]>>>e&1)==1),g.getMask(b,d,h-i)&&(j=!j),this.modules[d][h-i]=j,-1==--e&&(f++,e=7)}if((d+=c)<0||this.moduleCount<=d){d-=c,c=-c;break}}},i.PAD0=236,i.PAD1=17,i.createData=function(a,b,c){for(var d=e.getRSBlocks(a,b),h=new f,j=0;j<c.length;j++){var k=c[j];h.put(k.mode,4),h.put(k.getLength(),g.getLengthInBits(k.mode,a)),k.write(h)}for(var l=0,j=0;j<d.length;j++)l+=d[j].dataCount;if(h.getLengthInBits()>8*l)throw Error("code length overflow. ("+h.getLengthInBits()+">"+8*l+")");for(h.getLengthInBits()+4<=8*l&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(!1);for(;!(h.getLengthInBits()>=8*l)&&(h.put(i.PAD0,8),!(h.getLengthInBits()>=8*l));){;h.put(i.PAD1,8)}return i.createBytes(h,d)},i.createBytes=function(a,b){for(var c=0,d=0,e=0,f=Array(b.length),i=Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),f[j]=Array(k);for(var m=0;m<f[j].length;m++)f[j][m]=255&a.buffer[m+c];c+=k;var n=g.getErrorCorrectPolynomial(l),o=new h(f[j],n.getLength()-1).mod(n);i[j]=Array(n.getLength()-1);for(var m=0;m<i[j].length;m++){var p=m+o.getLength()-i[j].length;i[j][m]=p>=0?o.get(p):0}}for(var q=0,m=0;m<b.length;m++)q+=b[m].totalCount;for(var r=Array(q),s=0,m=0;m<d;m++)for(var j=0;j<b.length;j++)m<f[j].length&&(r[s++]=f[j][m]);for(var m=0;m<e;m++)for(var j=0;j<b.length;j++)m<i[j].length&&(r[s++]=i[j][m]);return r},b.exports=i},39503,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},e=h(a.r(41212)),f=a.r(72131),g=h(f);function h(a){return a&&a.__esModule?a:{default:a}}var i={bgColor:e.default.oneOfType([e.default.object,e.default.string]).isRequired,bgD:e.default.string.isRequired,fgColor:e.default.oneOfType([e.default.object,e.default.string]).isRequired,fgD:e.default.string.isRequired,size:e.default.number.isRequired,title:e.default.string,viewBoxSize:e.default.number.isRequired,xmlns:e.default.string},j=(0,f.forwardRef)(function(a,b){var c=a.bgColor,e=a.bgD,f=a.fgD,h=a.fgColor,i=a.size,j=a.title,k=a.viewBoxSize,l=a.xmlns,m=function(a,b){var c={};for(var d in a)!(b.indexOf(d)>=0)&&Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}(a,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return g.default.createElement("svg",d({},m,{height:i,ref:b,viewBox:"0 0 "+k+" "+k,width:i,xmlns:void 0===l?"http://www.w3.org/2000/svg":l}),j?g.default.createElement("title",null,j):null,g.default.createElement("path",{d:e,fill:c}),g.default.createElement("path",{d:f,fill:h}))});j.displayName="QRCodeSvg",j.propTypes=i,c.default=j},57474,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.QRCode=void 0;var d=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},e=k(a.r(41212)),f=k(a.r(98945)),g=k(a.r(46057)),h=a.r(72131),i=k(h),j=k(a.r(39503));function k(a){return a&&a.__esModule?a:{default:a}}var l={bgColor:e.default.oneOfType([e.default.object,e.default.string]),fgColor:e.default.oneOfType([e.default.object,e.default.string]),level:e.default.string,size:e.default.number,value:e.default.string.isRequired},m=(0,h.forwardRef)(function(a,b){var c=a.bgColor,e=a.fgColor,h=a.level,k=a.size,l=a.value,m=function(a,b){var c={};for(var d in a)!(b.indexOf(d)>=0)&&Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}(a,["bgColor","fgColor","level","size","value"]),n=new g.default(-1,f.default[void 0===h?"L":h]);n.addData(l),n.make();var o=n.modules;return i.default.createElement(j.default,d({},m,{bgColor:void 0===c?"#FFFFFF":c,bgD:o.map(function(a,b){return a.map(function(a,c){return a?"":"M "+c+" "+b+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:void 0===e?"#000000":e,fgD:o.map(function(a,b){return a.map(function(a,c){return a?"M "+c+" "+b+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:b,size:void 0===k?256:k,viewBoxSize:o.length}))});c.QRCode=m,m.displayName="QRCode",m.propTypes=l,c.default=m},26110,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(50944),e=a.i(57474);let f=process.env.NEXT_PUBLIC_API_BASE_URL||"";function g(){let a=(0,d.useSearchParams)().get("kiosk_id")||"default",g=(0,d.useRouter)(),[h,i]=(0,c.useState)("http://localhost:3000"),j=(0,c.useRef)(new Set),[k,l]=(0,c.useState)(0),[m,n]=(0,c.useState)(""),[o,p]=(0,c.useState)([]),[q,r]=(0,c.useState)(0),[s,t]=(0,c.useState)(!1),u=(0,c.useRef)(null);(0,c.useEffect)(()=>{},[]),(0,c.useEffect)(()=>{let a=()=>{n(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};a();let b=setInterval(a,1e3);return()=>clearInterval(b)},[]),(0,c.useEffect)(()=>{let a=setInterval(()=>l(a=>a+1),2e3);return()=>clearInterval(a)},[]),(0,c.useEffect)(()=>{let b=async()=>{try{let b=await fetch(`${f}/api/jobs/kiosk/${a}`);if(!b.ok)return;let c=await b.json();if(c.length>0){let b=c[0];if(!j.current.has(b.id)){j.current.add(b.id),g.push(`/kiosk-print?jobId=${b.id}&fileId=${b.fileId}&copies=${b.copies}&kioskId=${a}`);return}}}catch{}},c=setInterval(b,5e3);return b(),()=>clearInterval(c)},[a,g]),(0,c.useEffect)(()=>{let a=async()=>{try{let a=await fetch(`${f}/api/videos`);if(a.ok){let b=await a.json();p(b)}}catch{}};a();let b=setInterval(a,3e4);return()=>clearInterval(b)},[]),(0,c.useEffect)(()=>{o.length>0&&u.current&&(u.current.load(),u.current.play().catch(()=>{})),t(!1)},[q,o]);let v=(0,c.useCallback)(()=>{t(!1),r(a=>(a+1)%o.length)},[o.length]),w=(0,c.useCallback)(()=>{t(a=>!a)},[]),x=`${h}/?kiosk_id=${a}`,y=o.length>0?`${f}/uploads/videos/${o[q%o.length].filename}`:null;return o.length>0&&y?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
                `}),(0,b.jsxs)("div",{className:"video-root",onDoubleClick:w,children:[(0,b.jsx)("video",{ref:u,className:"video-ad",src:y,autoPlay:!0,muted:!0,playsInline:!0,onEnded:v},y),o.length>1&&(0,b.jsxs)("div",{className:"video-counter",children:[q%o.length+1," / ",o.length]}),!s&&(0,b.jsx)("div",{className:"dbl-hint",children:"double tap to scan & print"}),s&&(0,b.jsxs)("div",{className:"qr-overlay",children:[(0,b.jsxs)("div",{className:"qr-overlay-label",children:[(0,b.jsx)("div",{className:"qr-overlay-label-main",children:"Scan & Continue"}),(0,b.jsx)("div",{className:"qr-overlay-label-sub",children:"Scan the QR code and continue on your mobile screen for further steps"})]}),(0,b.jsx)("div",{className:"qr-overlay-card",children:(0,b.jsx)(e.default,{value:x,size:180,fgColor:"#3f4247",bgColor:"#ffffff",level:"H"})})]})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
            `}),(0,b.jsxs)("div",{className:"kiosk-root",children:[(0,b.jsxs)("div",{className:"left-panel",children:[(0,b.jsx)("div",{className:"brand",children:(0,b.jsx)("img",{src:"/logo.svg",alt:"Print It Logo",className:"brand-logo"})}),(0,b.jsxs)("div",{className:"headline-block",children:[(0,b.jsxs)("div",{className:"headline-eyebrow",children:[(0,b.jsx)("span",{className:"eyebrow-dot"}),"Ready to Print"]}),(0,b.jsxs)("h1",{className:"headline",children:["Print",(0,b.jsx)("br",{}),(0,b.jsx)("em",{children:"Anything."}),(0,b.jsx)("br",{}),"Instantly."]}),(0,b.jsx)("p",{className:"headline-sub",children:"Upload your document, pay via NayaPay, and collect your printout — all in under 2 minutes."})]}),(0,b.jsx)("div",{className:"steps",children:[{n:"01",label:"Scan the QR Code",sub:"Point your phone camera"},{n:"02",label:"Upload & Pay",sub:"Via NayaPay transfer"},{n:"03",label:"Collect Your Print",sub:"Ready in seconds"}].map((a,c)=>(0,b.jsxs)("div",{className:`step ${c===k%3?"step-active":""}`,children:[(0,b.jsx)("div",{className:"step-num",children:a.n}),(0,b.jsx)("div",{className:"step-divider"}),(0,b.jsxs)("div",{className:"step-content",children:[(0,b.jsx)("div",{className:"step-label",children:a.label}),(0,b.jsx)("div",{className:"step-sub",children:a.sub})]}),(0,b.jsxs)("div",{className:"step-icon",children:[0===c&&(0,b.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,b.jsx)("rect",{x:"3",y:"3",width:"7",height:"7"}),(0,b.jsx)("rect",{x:"14",y:"3",width:"7",height:"7"}),(0,b.jsx)("rect",{x:"3",y:"14",width:"7",height:"7"}),(0,b.jsx)("rect",{x:"14",y:"14",width:"3",height:"3"})]}),1===c&&(0,b.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,b.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,b.jsx)("polyline",{points:"17 8 12 3 7 8"}),(0,b.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),2===c&&(0,b.jsx)("svg",{viewBox:"0 0 24 24",children:(0,b.jsx)("polyline",{points:"20 6 9 17 4 12"})})]})]},c))}),(0,b.jsxs)("div",{className:"status-bar",children:[(0,b.jsxs)("div",{className:"status-dot-row",children:[(0,b.jsx)("div",{className:"status-dot"}),(0,b.jsx)("span",{className:"status-text",children:"System Online"})]}),(0,b.jsx)("div",{className:"clock",children:m}),(0,b.jsxs)("div",{className:"kiosk-id-badge",children:["ID: ",a]})]})]}),(0,b.jsx)("div",{className:"right-panel",children:(0,b.jsxs)("div",{className:"qr-wrapper",children:[(0,b.jsx)("div",{className:"qr-ring-outer"}),(0,b.jsx)("div",{className:"qr-ring-outer"}),(0,b.jsxs)("div",{className:"qr-card",children:[(0,b.jsx)("div",{className:"qr-scanline"}),(0,b.jsx)(e.default,{value:x,size:260,fgColor:"#3f4247",bgColor:"#ffffff",level:"H"})]}),(0,b.jsxs)("div",{className:"scan-cta",children:[(0,b.jsxs)("div",{className:"scan-cta-main",children:["Scan to ",(0,b.jsx)("span",{children:"Start"})]}),(0,b.jsx)("div",{className:"scan-cta-sub",children:"Open camera & point at QR"}),(0,b.jsxs)("div",{className:"scan-arrow",children:[(0,b.jsx)("svg",{viewBox:"0 0 24 24",children:(0,b.jsx)("path",{d:"M12 5v14M5 12l7 7 7-7"})}),"point & scan"]})]}),(0,b.jsxs)("div",{className:"price-badge",children:[(0,b.jsx)("span",{className:"price-badge-label",children:"Starts from"}),(0,b.jsx)("div",{className:"price-badge-divider"}),(0,b.jsx)("span",{className:"price-badge-value",children:"PKR 10 / page"})]})]})})]})]})}function h(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#ffffff",color:"#3ab30a",fontFamily:"monospace",letterSpacing:"4px",fontSize:"14px"},children:"INITIALIZING..."}),children:(0,b.jsx)(g,{})})}function i(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{style:{height:"100svh",background:"#ffffff"}}),children:(0,b.jsx)(h,{})})}a.s(["default",()=>i])}];

//# sourceMappingURL=_e5681e73._.js.map