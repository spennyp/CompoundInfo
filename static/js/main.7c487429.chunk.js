(this.webpackJsonpcompoundinfo=this.webpackJsonpcompoundinfo||[]).push([[0],{316:function(e,t,n){"use strict";n.r(t);var r,o,c=n(0),i=n(59),a=n.n(i),l=n(13),d=n(19),s=n(18),u=s.d.div(r||(r=Object(d.a)(["\n\twidth: 100%;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n\twhite-space: nowrap;\n\tpadding: 10px 0;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: ",";\n\n\tscrollbar-width: none;\n\t&::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n\n\t& > * {\n\t\tmargin: 2px; \n\t}\n"])),(function(e){return e.justify})),f=s.d.button(o||(o=Object(d.a)(["\n\tpadding: 6px;\n\tborder-radius: ",";\n\tborder: solid ",";\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-size: ",";\n\tline-height: 20px;\n"])),(function(e){return e.theme.border.radius}),(function(e){var t=e.theme;return t.border.thickness+" "+t.color.border1}),(function(e){var t=e.active,n=e.theme;return t?n.color.active1:n.color.bg1}),(function(e){var t=e.active,n=e.theme;return t?n.color.bg1:n.color.secondary1}),(function(e){return e.theme.fontSize.subheading})),b=n(168),p=n(321),m=n(322),h=n(165),j=n(166),x=n(69);function v(e,t){var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate();if(t){n+=" "+e.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"})}return n}function O(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.toFixed(2).toString()+(t?"%":"")}var g,y,w,k,C,D,T,S,F,A,P,E,M=[{name:"BAT",cAddress:"0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e"},{name:"COMP",cAddress:"0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4"},{name:"DAI",cAddress:"0x5d3a536e4d6dbd6114cc1ead35777bab948e3643"},{name:"ETH",cAddress:"0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5"},{name:"UNI",cAddress:"0x35a18000230da775cac24873d00ff85bccded550"},{name:"ZRX",cAddress:"0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407"},{name:"USDC",cAddress:"0x39aa39c021dfbae8fac545936693ac917d5e7563"},{name:"USDT",cAddress:"0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9"},{name:"WBTC",cAddress:"0xccf4429db6322d5c611ee964527d42e5d685dd6a"},{name:"WBTC2",cAddress:"0xccf4429db6322d5c611ee964527d42e5d685dd6a"}],z=[{name:"1D",days:1},{name:"1W",days:7},{name:"1M",days:30},{name:"3M",days:90},{name:"1Y",days:365},{name:"All",days:null}],B="https://api.flipsidecrypto.com/api/v2/queries/ebad7f35-11e0-4561-9346-fa87c88d7598/data/latest",W="https://api.flipsidecrypto.com/api/v2/queries/dc338ecd-cdce-4c0b-ae9e-ac7978c2469e/data/latest",L=n(6),I={stroke:"gray",strokeWidth:2,strokeDasharray:"5,5"},J={r:5},H=s.d.div(g||(g=Object(d.a)(["\n\tbackground-color: red;\n\ttext-align: center;\n\tpadding: 5px 0;\n\twidth: ","px;\n\tcolor: ",";\n\tborder: solid ",";\n\tborder-radius: ",";\n\tbackground-color: ",";\n\tfont-size: ",";\n\ttransform: translate(","px);\n"])),(function(e){return e.toolTipWidth}),(function(e){return e.theme.color.secondary1}),(function(e){var t=e.theme;return t.border.thickness+" "+t.color.border1}),(function(e){return e.theme.border.radius}),(function(e){return e.theme.color.bg1}),(function(e){return e.theme.fontSize.body}),(function(e){return e.translationX}));function K(e){var t,n=e.coordinate,r=e.toolTipWidth,o=e.viewBox,i=e.setHoverDate,a=e.showTime,l=e.payload,d=l?null===(t=l[0])||void 0===t?void 0:t.payload.blockTime:null;if(Object(c.useEffect)((function(){i(d)}),[d,i]),d){var s=v(new Date(d),a),u=n.x+r/2,f=o.width+o.left,b=u>f?f-u:0;return Object(L.jsx)(H,{toolTipWidth:r,translationX:b,children:s})}return null}function N(e){var t=e.x,n=e.y,r=e.payload,o=e.showTime,c=v(new Date(r.value),o);return Object(L.jsx)("text",{x:t,y:n+15,textAnchor:"middle",children:c})}function U(e){var t=e.data,n=e.selectedCoinsAndColors,r=e.setHoverDate;var o=n.map((function(e,t){return Object(L.jsx)(b.a,{type:"monotone",dataKey:e.name,stroke:e.color,dot:!1,activeDot:J,isAnimationActive:!1},t)})),c=function(){if(!t)return!1;var e=new Date(t.slice(-1)[0].blockTime),n=new Date(t[0].blockTime);return(e.getTime()-n.getTime())/864e5<8}(),i=c?150:90,a=-i/2;return Object(L.jsx)(p.a,{width:"100%",height:300,children:Object(L.jsxs)(m.a,{margin:{right:20,left:0,top:0,bottom:0},data:t,children:[o,Object(L.jsx)(h.a,{dataKey:"blockTime",tick:Object(L.jsx)(N,{showTime:c}),tickCount:3}),Object(L.jsx)(j.a,{datekey:"price",padding:{top:30},orientation:"left"}),Object(L.jsx)(x.a,{cursor:I,position:{y:0},content:Object(L.jsx)(K,{toolTipWidth:i,setHoverDate:r,showTime:c}),isAnimationActive:!1,offset:a})]})})}var X=Object(s.d)(f)(y||(y=Object(d.a)(["\n\tbackground-color: ",";\n\twidth: 104px;\n\theight: 48px;\n\tdisplay: flex;\n\n\t","\n"])),(function(e){return e.theme.color.bg1}),(function(e){return e.active&&Object(s.c)(w||(w=Object(d.a)(["\n\t\twidth: ",";\n\t\tborder-width: 2px;\t\n\t\tborder-color: ",";\n\t"])),(function(e){return e.allowDeselect?"143px":"120px"}),(function(e){return e.selectedColor}))})),q=s.d.div(k||(k=Object(d.a)(["\n\tdisplay: flex;\n\tbox-sizing: content-box;\n\theight: 100%;\n\tfloat: left;\n\topacity: 1;\n\twidth: 12px;\n\tpadding-left: 4px;\n\tpadding-right: 4px;\n\n\t","\n"])),(function(e){return e.hidden&&Object(s.c)(C||(C=Object(d.a)(["\n\t\topacity: 0;\t\n\t\twidth: 0;\n\t\tpadding: 0;\n\t"])))})),R=s.d.div(D||(D=Object(d.a)(["\n\tbackground-color: ",";\t\n\twidth: 12px;\n\theight: 12px;\n\tborder-radius: 6px;\n\tmargin: auto;\n"])),(function(e){return e.selectedColor})),Y=s.d.div(T||(T=Object(d.a)(["\n\tpadding-left: 5px;\n\tdisplay: flex;\n\tbox-sizing: content-box;\n\theight: 100%;\n\twidth: 24px;\n"]))),_=s.d.img(S||(S=Object(d.a)(["\n\twidth: 24px;\n\theight: 24px;\n\tfloat: left;\n\tmargin: auto;\n"]))),Z=s.d.div(F||(F=Object(d.a)(["\n\tdisplay: flex;\n\tbox-sizing: content-box;\n\tflex-direction: column;\n\twidth: 50px;\n\tpadding-left: 5px;\n\tfont-size: ",";\n"])),(function(e){return e.theme.fontSize.subheading})),G=s.d.div(A||(A=Object(d.a)(["\n\tcolor: ",";\n\tdisplay: flex;\n\theight: 50%;\t\n\talign-items: flex-end;\n"])),(function(e){return e.theme.color.primary1})),Q=s.d.div(P||(P=Object(d.a)(["\n\tcolor: ",";\n\theight: 50%;\n\ttext-align: left;\n"])),(function(e){return e.theme.color.secondary1})),V=s.d.img(E||(E=Object(d.a)(["\n\theight: 16px;\n\twidth: 16px;\n\tmargin: auto;\n"])));var $,ee=function(e){return Object(L.jsxs)(X,{selectedColor:e.color,active:e.selected,onClick:e.onClick,allowDeselect:e.allowDeselect,children:[Object(L.jsx)(q,{hidden:!e.selected,children:Object(L.jsx)(R,{selectedColor:e.color})}),Object(L.jsx)(Y,{children:Object(L.jsx)(_,{src:"/compound-info"+"img/coins/".concat(e.name,".svg")})}),Object(L.jsxs)(Z,{children:[Object(L.jsx)(G,{children:e.name}),Object(L.jsx)(Q,{children:e.value})]}),Object(L.jsx)(q,{hidden:!e.selected||!e.allowDeselect,children:Object(L.jsx)(V,{src:"/compound-infoimg/closeIcon.svg"})})]})};function te(e){var t=e.coinList,n=e.selectedCoinColors,r=e.updateSelectedCoins,o=Object(c.useState)(n.reverse()),i=Object(l.a)(o,2),a=i[0],d=i[1],s=Object(c.useState)(function(e){return e.map((function(e,t){return{name:e.name,color:null,selectedPosition:null}}))}(t)),f=Object(l.a)(s,2),b=f[0],p=f[1],m=Object(c.useRef)(!1),h=Object(c.useCallback)((function(){return b.reduce((function(e,t){return null!==t.selectedPosition?e+1:e}),0)}),[b]),j=Object(c.useCallback)((function(e){var r,o=a.slice(),c=JSON.parse(JSON.stringify(b)),i=n.length,l=c[e].selectedPosition,s=h();if(null===l)r=Math.min(s+1,i);else{if(!t[e].allowDeselect||1===s)return;r=null}for(var u=0;u<c.length;u++){var f=c[u].selectedPosition;l&&f>l?c[u].selectedPosition=f-1:r===i&&f===i&&(c[u].selectedPosition=null,o.push(b[u].color),c[u].color=null)}c[e].selectedPosition=r,r?c[e].color=o.pop():(o.push(b[e].color),c[e].color=null),c.sort((function(e,t){return e.selectedPosition===t.selectedPosition?0:null===e.selectedPosition?1:null===t.selectedPosition?-1:e.selectedPosition-t.selectedPosition})),d(o),p(c)}),[a,b,h,t,n]);Object(c.useEffect)((function(){if(!m.current){var e=!0;t.forEach((function(t,n){t.allowDeselect||(j(n),e=!1)})),e&&j(0),m.current=!0}}),[j,t]),Object(c.useEffect)((function(){var e=b.filter((function(e){return null!==e.selectedPosition}));e=e.map((function(e){return{name:e.name,color:e.color}})),r(e)}),[b,r]);var x=h(),v=b.map((function(e,n){var r=t.filter((function(t){return t.name===e.name}))[0],o=r.allowDeselect&&x>1;return Object(L.jsx)(ee,{name:e.name,color:e.color,selected:null!==e.selectedPosition,value:O(r.value?r.value:0),onClick:function(){return j(n)},allowDeselect:o},n)}));return Object(L.jsx)(u,{children:v})}var ne=s.d.div($||($=Object(d.a)(["\n\tborder: solid ",";\n\tborder-radius: ",";\n\tmax-width: 1024px;\n\tpadding: 15px;\n\tmargin: auto;\n"])),(function(e){var t=e.theme;return t.border.thickness+" "+t.color.border1}),(function(e){return e.theme.border.radius}));function re(e){return e.map((function(e){return{name:e.name,value:0}}))}function oe(e){var t=e.title,n=e.coins,r=e.selectedCoinColors,o=e.dataSelectors,i=e.timeSelectors,a=e.activeCoin,d=e.useData,s=Object(c.useState)(o[0]),b=Object(l.a)(s,2),p=b[0],m=b[1],h=Object(c.useState)(i[0]),j=Object(l.a)(h,2),x=j[0],v=j[1],O=Object(c.useState)([]),g=Object(l.a)(O,2),y=g[0],w=g[1],k=Object(c.useState)(0),C=Object(l.a)(k,2),D=C[0],T=C[1],S=Object(c.useState)(re(n)),F=Object(l.a)(S,2),A=F[0],P=F[1],E=d(p,x);Object(c.useEffect)((function(){var e=null===E||void 0===E?void 0:E.slice(-1)[0],t=null===E||void 0===E?void 0:E.filter((function(e){return e.blockTime===D}))[0];if(e){var r=re(n);r=r.map((function(n){var r,o=n.name;n.value;return r=1===y.filter((function(e){return e.name===o})).length&&D&&t?t[o]:e[o],{name:o,value:r}})),P(r)}}),[y,D,E,n]);var M=Object(c.useCallback)((function(e){w(e)}),[]),z=Object(c.useMemo)((function(){return o.map((function(e,t){return Object(L.jsx)(f,{active:p===e,onClick:function(){return m(e)},children:e.name},t)}))}),[p,o,m]),B=Object(c.useMemo)((function(){return i.map((function(e,t){return Object(L.jsx)(f,{active:x===e,onClick:function(){return v(e)},children:e.name},t)}))}),[x,i,v]),W=n.map((function(e){var t=A.filter((function(t){return t.name===e.name}))[0].value;return{name:e.name,value:t,allowDeselect:e.name!==(null===a||void 0===a?void 0:a.name)}}));return Object(L.jsxs)(ne,{children:[t,Object(L.jsxs)(u,{children:[Object(L.jsx)(u,{children:z}),Object(L.jsx)(u,{justify:"flex-end",children:B})]}),Object(L.jsx)(U,{data:E,selectedCoinsAndColors:y,setHoverDate:function(e){return T(e)}}),"Compare to:",Object(L.jsx)(te,{coinList:W,selectedCoinColors:r,updateSelectedCoins:M})]})}var ce=["green","blue","red","orange","pink"],ie=M[5],ae=[{name:"Supply"},{name:"Borrow"}],le=n(41),de=n.n(le),se=n(110),ue=n(86),fe=Object(c.createContext)();function be(e){var t=Object(c.useState)({}),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(c.useCallback)((function(e){o(Object(ue.a)(Object(ue.a)({},r),{},{apyData:e}))}),[r]);return Object(L.jsx)(fe.Provider,Object(ue.a)({value:[r,{updateApyData:i}]},e))}function pe(e,t){var n=Object(c.useContext)(fe),r=Object(l.a)(n,2),o=r[0],i=r[1].updateApyData,a=Object(c.useState)(null),d=Object(l.a)(a,2),s=d[0],u=d[1],f=null===o||void 0===o?void 0:o.apyData;return Object(c.useEffect)((function(){function e(){return(e=Object(se.a)(de.a.mark((function e(){var t;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=5;break}return e.next=3,me();case 3:t=e.sent,i(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,i]),Object(c.useEffect)((function(){if(f){var n=function(e,t,n){if(!e)return null;var r=null!==n.days&&n.days<=8?e.shortTerm.slice():e.longTerm.slice(),o=new Date;null===n.days?o=new Date(1700,1,1):o.setDate(o.getDate()-n.days);return r=(r=r.map((function(e){return Object.assign(e.values[t.name.toLowerCase()],{blockTime:e.blockTime})}))).filter((function(e){return new Date(e.blockTime)>=o}))}(f,e,t);u(n)}}),[e,t,f,u]),s}function me(){return he.apply(this,arguments)}function he(){return(he=Object(se.a)(de.a.mark((function e(){var t,n,r,o,c;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(e,t){return e.includes(t)?-1:t.includes(e)?1:[e,t].sort()[0]===e?-1:1},console.log("fetching apy data"),t=W,n=B,r={},c=M.map((function(e){return e.name})).sort(o),e.next=8,Promise.all([["shortTerm",t],["longTerm",n]].map((function(e){var t=Object(l.a)(e,2),n=t[0],i=t[1];return fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e[0]).filter((function(e){return"BLOCK_TIME"!==e}));t.sort(o);var i=t.length+1;e=e.map((function(e){for(var n={blockTime:e.BLOCK_TIME,values:{borrow:{},supply:{},totalBorrow:{},totalSupply:{}}},r=0;r<i/4-1;r++)n.values.borrow[c[r]]=e[t[4*r]],n.values.supply[c[r]]=e[t[4*r+1]],n.values.totalBorrow[c[r]]=e[t[4*r+2]],n.values.totalSupply[c[r]]=e[t[4*r+3]];return n})),r[n]=e})).catch((function(e){return console.log(e)}))}))).catch((function(e){return console.log(e)}));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je,xe=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(oe,{title:"Market APY",selectedCoinColors:ce,dataSelectors:ae,activeCoin:ie,coins:M,timeSelectors:z,useData:pe})})},ve=function(e,t){return{primaryWhite:"#FFFFFF",color:{white:"#000000",black:"#FFFFFF",bg1:e?"#000000":"#FFFFFF",primary1:e?"#":"#212B36",secondary1:e?"#":"#586069",active1:e?"#":"#0366D6",border1:e?"#FFFFFF":"#DEDFE1"},fontSize:{displayXL:"48px",displayL:"30px",displayM:"26px",displayS:"20px",heading:"18px",subheading:"14px",body:"16px"},border:{thickness:"1px",radius:"6px"},mediaWidth:{upToExtraSmall:500,upToSmall:700,upToMedium:960,upToLarge:1280}}};function Oe(e){var t=e.children;return Object(L.jsx)(s.a,{theme:ve(!1),children:t})}var ge=Object(s.b)(je||(je=Object(d.a)(["\n\thtml, div {\n\t\tfont-family: 'Inter', sans-serif;\n\t}\n\n\thtml, body, #root {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tfont-weight: 400;\n\t\toverflow: hidden;\n\t}\n\n\tdiv {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.hidden {\n\t\topacity: 0;\n\t}\n"])));a.a.render(Object(L.jsx)(be,{children:Object(L.jsxs)(Oe,{children:[Object(L.jsx)(ge,{}),Object(L.jsx)(xe,{})]})}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.7c487429.chunk.js.map