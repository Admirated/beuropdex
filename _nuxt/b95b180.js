(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4],{833:function(t,e,n){var content=n(837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(97).default)("59b72bb5",content,!0,{sourceMap:!1})},834:function(t,e,n){var content=n(839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(97).default)("938245a2",content,!0,{sourceMap:!1})},835:function(t,e,n){var content=n(845);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(97).default)("ae23f566",content,!0,{sourceMap:!1})},836:function(t,e,n){"use strict";n(833)},837:function(t,e,n){var o=n(96)(!1);o.push([t.i,".btn{background-color:#6fc;text-decoration:none;text-align:center;line-height:50px;height:50px;border:none;display:inline-flex;justify-content:center;align-items:center;min-width:180px;transition:.35s ease;color:#fff;border-radius:10px;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(max-width:1280px){.btn{font-size:16px;min-width:160px;line-height:46px;height:46px}}.btn:hover{color:#fff;background-color:#36e38c}.btn[disabled]{background-color:#6c737f;color:#3e495c;cursor:not-allowed}",""]),t.exports=o},838:function(t,e,n){"use strict";n(834)},839:function(t,e,n){var o=n(96)(!1);o.push([t.i,".popup[data-v-a0fd0e30]{z-index:999;background:rgba(16,16,16,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:fixed;width:100%;height:100%;top:0;left:0;padding:16px;overflow:hidden;overflow-y:auto;align-items:flex-start;margin:0}.popup[data-v-a0fd0e30],.popup__close[data-v-a0fd0e30]{display:flex;justify-content:center}.popup__close[data-v-a0fd0e30]{flex:0 0 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:30px;right:30px;z-index:1;width:30px;height:30px;align-items:center;cursor:pointer;border-radius:5px;background:#0d3b68;transition:.35s ease}@media(max-width:1280px){.popup__close[data-v-a0fd0e30]{top:25px;right:25px}}.popup__close[data-v-a0fd0e30]:hover{background:#36e38c}.popup__close[data-v-a0fd0e30]:active{transform:scale(.95)}.popup__wrap[data-v-a0fd0e30]{padding:30px;background:#0c1a32;border-radius:15px;position:relative;width:100%;max-width:480px;display:flex;flex-direction:column;align-items:stretch;height:auto;margin:auto;box-shadow:0 0 15px rgba(0,0,0,.1);transition:all .25s ease-out}@media(max-width:1280px){.popup__wrap[data-v-a0fd0e30]{padding:25px}}.popup__wrap-header[data-v-a0fd0e30]{flex:0 0 auto;font-size:24px;font-weight:600;line-height:30px;color:#fc0}@media(max-width:575px){.popup__wrap-header[data-v-a0fd0e30]{font-size:20px}}.popup__wrap-header[data-v-a0fd0e30]:not(:empty){margin-bottom:30px}@media(max-width:1280px){.popup__wrap-header[data-v-a0fd0e30]:not(:empty){margin-bottom:25px}}.popup__wrap-title[data-v-a0fd0e30]{flex-grow:1}.popup__wrap-main[data-v-a0fd0e30]{max-height:100%;flex-grow:1;padding-top:30px;border-top:1px solid #fff}@media(max-width:1280px){.popup__wrap-main[data-v-a0fd0e30]{padding-top:25px}}.popup__wrap-main[data-v-a0fd0e30]:empty{display:none}.fade-enter-active[data-v-a0fd0e30],.fade-leave-active[data-v-a0fd0e30]{transition:.25s ease-out}.fade-enter-active .popup__wrap[data-v-a0fd0e30],.fade-leave-active .popup__wrap[data-v-a0fd0e30]{transform:translateY(0)}.fade-enter[data-v-a0fd0e30],.fade-leave-to[data-v-a0fd0e30]{opacity:0}.fade-enter .popup__wrap[data-v-a0fd0e30],.fade-leave-to .popup__wrap[data-v-a0fd0e30]{transform:translateY(10px)}",""]),t.exports=o},840:function(t,e,n){"use strict";n.r(e);var o=n(46),r=Object(o.b)({props:{isDisabled:{type:Boolean,required:!1,default:!1}},setup(t,e){const n=Object(o.f)(t.isDisabled);Object(o.i)((()=>t.isDisabled),((t,e)=>{n.value=t}));return{buttonHandler:t=>{t.preventDefault(),t.stopPropagation(),e.emit("buttonHandler",t)},disabledProps:n}}}),l=(n(836),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",attrs:{disabled:t.disabledProps},on:{click:function(e){return t.buttonHandler(e)}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},841:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:Boolean,default:!1}},methods:{confirm:function(){this.$emit("confirm"),this.$emit("input",!1)},closePopup:function(){this.$emit("close"),this.$emit("input",!1),document.body.classList.remove("no-scroll")},escKeyUp:function(t){"Escape"===t.code&&this.closePopup()}}},r=(n(838),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.value?n("div",{staticClass:"popup",on:{click:t.closePopup}},[n("div",{staticClass:"popup__wrap",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"btn-close popup__close",on:{click:t.closePopup}},[n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",stroke:"#F0F0F2",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10.5659 1.43188L1.43262 10.5652","stroke-width":"1.14286","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M10.5697 10.5713L1.42871 1.42847","stroke-width":"1.14286","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),n("div",{staticClass:"popup__wrap-header"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"popup__wrap-main"},[t._t("default")],2)])]):t._e()])}),[],!1,null,"a0fd0e30",null);e.default=component.exports},842:function(t,e,n){t.exports=n.p+"img/exchange-1.875a19e.png"},843:function(t,e,n){t.exports=n.p+"img/exchange-2.5080ba0.png"},844:function(t,e,n){"use strict";n(835)},845:function(t,e,n){var o=n(96)(!1);o.push([t.i,".trade__navigate-wrapper{margin-bottom:30px}.trade__navigate,.trade__navigate-wrapper{display:flex;align-items:center;justify-content:center}.trade__navigate{background-color:#0c1a32;border-radius:10px}.trade__navigate li a{line-height:40px;display:block;padding:0 15px;color:#fff;border-radius:10px;min-width:100px;text-align:center}.trade__navigate li a.active{pointer-events:none;background-color:#6fc}.trade__top{display:flex;justify-content:space-between;align-items:flex-start}.trade__top .title{line-height:34px}.trade__top .slogan{margin-top:7px}.trade__top-content{flex-grow:1}.trade__top-icons{flex:0 0 auto;margin-left:15px}.trade__top-icon{width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.35s ease}.trade__top-icon:hover{opacity:.75}.trade__top-icon:active{transform:scale(.9)}.trade__top-icon img{width:24px}*+.trade__form,.trade__content:not(:empty){margin-top:30px}.trade__form .btn{width:100%;margin-top:20px}.trade__form .form+.list-info{margin-top:5px}.trade__form .list-info+.list-info{margin-top:20px}.trade-settings h6{font-weight:700;margin-bottom:15px;color:#fc0}.trade-settings label{margin-bottom:10px}.trade-settings__header .transaction-speed ul{display:flex;flex-wrap:wrap;margin-left:-5px;margin-right:-5px}@media(max-width:575px){.trade-settings__header .transaction-speed ul{margin-left:-3px;margin-right:-3px}}.trade-settings__header .transaction-speed ul li{padding-left:5px;padding-right:5px;flex:0 0 auto}@media(max-width:575px){.trade-settings__header .transaction-speed ul li{padding-left:3px;padding-right:3px}}.trade-settings__header .transaction-speed ul li .item{background-color:#0d3b68;text-align:center;line-height:30px;border-radius:15px;padding:0 20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.15s ease}@media(max-width:575px){.trade-settings__header .transaction-speed ul li .item{padding:0 12px;font-size:14px}}.trade-settings__header .transaction-speed ul li .item.active{pointer-events:none;background-color:#36e38c}.trade-settings__content{margin-top:30px;padding-top:30px;border-top:1px solid #fff}.trade-settings__content .slippage-tolerance ul{display:flex;flex-wrap:wrap;margin-left:-5px;margin-right:-5px}@media(max-width:575px){.trade-settings__content .slippage-tolerance ul{margin-left:-3px;margin-right:-3px}}.trade-settings__content .slippage-tolerance ul li{padding-left:5px;padding-right:5px;flex:0 0 auto}@media(max-width:575px){.trade-settings__content .slippage-tolerance ul li{padding-left:3px;padding-right:3px}}.trade-settings__content .slippage-tolerance ul li .item{background-color:#0d3b68;text-align:center;line-height:30px;border-radius:15px;padding:0 20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.15s ease}@media(max-width:575px){.trade-settings__content .slippage-tolerance ul li .item{padding:0 12px;font-size:14px}}.trade-settings__content .slippage-tolerance ul li .item.active{pointer-events:none;background-color:#36e38c}.trade-settings__content .slippage-tolerance__input{display:flex;align-items:center;flex:0 0 100px;max-width:100px}.trade-settings__content .slippage-tolerance__input input{flex-grow:1;padding:0 10px;text-align:center;height:30px;border-radius:15px}.trade-settings__content .slippage-tolerance__input span{flex:0 0 auto;margin-left:5px;color:#36e38c}.switch-list{margin-top:30px}.switch-list li{display:flex;align-items:center;justify-content:space-between}.switch-list li+li{margin-top:15px}",""]),t.exports=o},846:function(t,e,n){"use strict";n.r(e);n(24),n(54),n(49);var o={data:function(){return{dialogSettings:!1,dialogRecentTransactions:!1,switchExpertMode:!1,switchMultihops:!1,transactionSpeed:[{name:"Standard",value:5,active:!0},{name:"Fast",value:6,active:!1},{name:"Instant",value:7,active:!1}],slippageTolerance:{static:[{id:1,parcent:.1,active:!0},{id:2,parcent:.5,active:!1},{id:3,parcent:1,active:!1}],custom:null}}},methods:{showDialogSettings:function(){this.dialogSettings=!0,document.body.classList.add("no-scroll")},showRecentTransactions:function(){this.dialogRecentTransactions=!0,document.body.classList.add("no-scroll")},switchExpertModeHandler:function(){this.switchExpertMode=!this.switchExpertMode},switchMultihopsHandler:function(){this.switchMultihops=!this.switchMultihops},transactionSpeedHandler:function(t){this.transactionSpeed.forEach((function(e){e.name!==t.name?e.active=!1:e.active=!0}))},slippageToleranceHandler:function(t){this.slippageTolerance.static.forEach((function(e){e.id!==t.id?e.active=!1:e.active=!0}))}}},r=(n(844),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container bg"},[o("div",{staticClass:"trade trade--exchange wrapper"},[o("div",{staticClass:"trade__navigate-wrapper"},[o("ul",{staticClass:"trade__navigate"},[o("li",[o("nuxt-link",{attrs:{"active-class":"active",to:"/exchange","no-prefetch":""}},[o("span",[t._v("Swap")])])],1),t._v(" "),o("li",[o("nuxt-link",{attrs:{"active-class":"active",to:"/liquidity","no-prefetch":""}},[o("span",[t._v("Liquidity")])])],1)])]),t._v(" "),o("div",{staticClass:"block-content"},[o("div",{staticClass:"trade__top"},[o("div",{staticClass:"trade__top-content"},[o("h2",{staticClass:"title"},[t._t("title")],2),t._v(" "),o("div",{staticClass:"slogan"},[t._t("sub-title")],2)]),t._v(" "),o("div",{staticClass:"trade__top-icons"},[o("span",{staticClass:"trade__top-icon",on:{click:t.showDialogSettings}},[o("img",{attrs:{src:n(842),alt:"settings"}})]),t._v(" "),o("span",{staticClass:"trade__top-icon",on:{click:t.showRecentTransactions}},[o("img",{attrs:{src:n(843),alt:"Recent Transactions"}})]),t._v(" "),o("SharedDialog",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Settings")]},proxy:!0}]),model:{value:t.dialogSettings,callback:function(e){t.dialogSettings=e},expression:"dialogSettings"}},[t._v(" "),o("div",{staticClass:"trade-settings"},[o("div",{staticClass:"trade-settings__header"},[o("h6",[t._v("GLOBAL")]),t._v(" "),o("div",{staticClass:"transaction-speed"},[o("label",[t._v("Default Transaction Speed (GWEI)")]),t._v(" "),o("ul",t._l(t.transactionSpeed,(function(e,n){return o("li",{key:n},[o("div",{staticClass:"item",class:{active:e.active},on:{click:function(n){return t.transactionSpeedHandler(e)}}},[t._v("\n                        "+t._s(e.name)+" ("+t._s(e.value)+")\n                      ")])])})),0)])]),t._v(" "),o("div",{staticClass:"trade-settings__content"},[o("h6",[t._v("SWAPS & LIQUIDITY")]),t._v(" "),o("div",{staticClass:"slippage-tolerance"},[o("label",[t._v("Slippage Tolerance")]),t._v(" "),o("ul",[t._l(t.slippageTolerance.static,(function(e){return o("li",{key:e.id},[o("div",{staticClass:"item",class:{active:e.active},on:{click:function(n){return t.slippageToleranceHandler(e)}}},[t._v("\n                        "+t._s(e.parcent)+"%\n                      ")])])})),t._v(" "),o("li",[o("div",{staticClass:"slippage-tolerance__input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.slippageTolerance.custom,expression:"slippageTolerance.custom"}],attrs:{type:"number",name:"slippage-tolerance",placeholder:"0.50"},domProps:{value:t.slippageTolerance.custom},on:{input:function(e){e.target.composing||t.$set(t.slippageTolerance,"custom",e.target.value)}}}),t._v(" "),o("span",[t._v("%")])])])],2)]),t._v(" "),o("ul",{staticClass:"switch-list"},[o("li",[o("div",{staticClass:"name"},[t._v("Expert Mode")]),t._v(" "),o("div",{staticClass:"switch"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.switchExpertMode},on:{input:t.switchExpertModeHandler}}),t._v(" "),o("span")])]),t._v(" "),o("li",[o("div",{staticClass:"name"},[t._v("Disable Multihops")]),t._v(" "),o("div",{staticClass:"switch"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.switchMultihops},on:{input:t.switchMultihopsHandler}}),t._v(" "),o("span")])])])])])]),t._v(" "),o("SharedDialog",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Recent Transactions")]},proxy:!0}]),model:{value:t.dialogRecentTransactions,callback:function(e){t.dialogRecentTransactions=e},expression:"dialogRecentTransactions"}},[t._v("\n            Empty Contents\n          ")])],1)]),t._v(" "),o("div",{staticClass:"trade__content"},[t._t("content")],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SharedDialog:n(841).default})},847:function(t,e,n){t.exports=n.p+"img/form-from.75a20e6.png"},848:function(t,e,n){t.exports=n.p+"img/form-to.afac1cb.png"},851:function(t,e,n){var content=n(862);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(97).default)("75c3b48e",content,!0,{sourceMap:!1})},861:function(t,e,n){"use strict";n(851)},862:function(t,e,n){var o=n(96)(!1);o.push([t.i,".liquidity__info .no-connected[data-v-f3a66196]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;background-color:#3e495c;padding:40px 30px;text-align:center;font-size:20px}.liquidity__info .no-connected button[data-v-f3a66196]{margin-top:10px;margin-bottom:0}@media(max-width:1280px){.liquidity__info .no-connected[data-v-f3a66196]{font-size:18px;padding:25px}}@media(max-width:575px){.liquidity__info .no-connected[data-v-f3a66196]{font-size:16px}}.liquidity__bottom[data-v-f3a66196]{margin-top:30px;font-size:14px}.liquidity__bottom>*+*[data-v-f3a66196]{margin-top:10px}.liquidity__wrapper .btn[data-v-f3a66196]{margin-bottom:30px}",""]),t.exports=o},871:function(t,e,n){"use strict";n.r(e);var o=n(46),r=n(184),l=n.n(r),c=Object(o.b)({setup(t,e){const n=Object(o.h)(),r=Object(o.f)(),c=Object(o.f)(),d=Object(o.f)(),v=Object(o.f)(),_=Object(o.f)(),m=Object(o.f)(!1),f=Object(o.f)(!1),h=Object(o.f)(""),x=Object(o.f)(),w=Object(o.e)([]),y=Object(o.a)((()=>n.getters["wallet/walletAddress"])),k=Object(o.a)((()=>n.getters["wallet/web3"])),C=Object(o.a)((()=>n.getters["wallet/contractRouterInstance"]())),T=Object(o.a)((()=>n.getters["wallet/contractRouterAddress"])),B=Object(o.a)((()=>n.getters["wallet/contractPairInstance"]())),A=Object(o.a)((()=>n.getters["wallet/contractPairAddress"])),O=Object(o.a)((()=>n.getters["wallet/contractBeuropInstance"]())),j=Object(o.a)((()=>n.getters["wallet/contractBeuropAddress"])),L=Object(o.a)((()=>n.getters["wallet/contractWBNBInstance"]())),I=Object(o.a)((()=>n.getters["wallet/contractWBNBAddress"])),S=Object(o.a)((()=>0!==y.value.length)),H=Object(o.a)((()=>"0"===x.value)),P=async()=>{const t=r.value;if(console.log(t),!t||t<=0)return void setTimeout((()=>{c.value=NaN}),200);const e=await B.value.methods.getReserves().call(),{_reserve0:n,_reserve1:o}=e;console.log({_reserve0:n,_reserve1:o});const v=l.a.utils.toWei(t,"ether"),_=await C.value.methods.getAmountOut(v,n,o).call();return console.log("amountOut: ",_),c.value=parseFloat(l.a.utils.fromWei(_,"gwei")).toFixed(6),d.value=0,{amountIn:v,amountOut:_}},R=async()=>{const t=c.value;if(console.log(t),!t||t<=0)return void setTimeout((()=>{r.value=NaN}),200);const e=await B.value.methods.getReserves().call(),{_reserve1:n,_reserve0:o}=e;console.log({_reserve0:o,_reserve1:n});const v=l.a.utils.toWei(t,"gwei"),_=await C.value.methods.getAmountOut(v,n,o).call();return console.log({amountIn:v,amountOut:_}),r.value=parseFloat(l.a.utils.fromWei(_,"ether")).toFixed(6),d.value=1,{amountIn:v,amountOut:_}},M=async()=>{let t;const e=await D(y.value,B.value,T.value),{value:n}=e;return parseInt(n)>parseInt(x.value)?(h.value="Remove liquidity",t="remove"):(h.value="Approve BEPR-LP",t="approve"),{allowance:e,type:t}},D=async(t,e,n)=>{if(!t)return;return{value:await e.methods.allowance(t,n).call(),tokenContract:e}},E=async()=>{x.value=await n.dispatch("wallet/checkCakeLPBalance"),console.log(x.value)},N=async()=>{const{valueWBNB:t,valueBeurop:e}=await n.dispatch("wallet/checkBallance");v.value=parseFloat(l.a.utils.fromWei(t,"ether")).toFixed(3),_.value=parseFloat(l.a.utils.fromWei(e,"gwei")).toFixed(3)};return Object(o.i)((()=>y.value),(async(t,e)=>{console.log("currentWallet: prev: ",e),console.log("currentWallet: cur: ",t),await E(),await M()})),Object(o.d)((async()=>{y.value&&(await N(),await E(),await M())})),{isDisabled:S,firstToken:r,secondToken:c,firstTokenHandler:P,secondTokenHandler:R,showLiquidity:m,liquidityHandler:async()=>{let t,data;const e=Math.floor((new Date).getTime()/1e3)+1200;switch(d.value&&d.value){case 0:{t=await P();const n=parseInt((.99*parseInt(t.amountOut,10)).toString(),10),o=(.99*parseFloat(t.amountIn.toString())).toString();data=await C.value.methods.addLiquidity(I.value,j.value,t.amountIn,t.amountOut,o,n,y.value,e).encodeABI();break}case 1:{t=await R();const n=Math.round(.99*parseInt(t.amountOut,10)).toString(),o=(.99*parseFloat(t.amountIn.toString())).toString();data=await C.value.methods.addLiquidity(j.value,I.value,t.amountIn,t.amountOut,o,n,y.value,e).encodeABI();break}}try{const t=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:y.value,to:T.value,data:data}]});let e;const n=k.value(),o=()=>{clearInterval(l)},l=setInterval((async()=>{e=await n.eth.getTransactionReceipt(t),console.log("receipt: ",e),e&&(o(),r.value=NaN,c.value=NaN,await N(),await E())}),1e3)}catch(t){console.error(t)}},showLiquidityHandler:async()=>{m.value=!0;const t=[D(y.value,O.value,T.value),D(y.value,L.value,T.value)];for(let i=0;i<t.length;i++){const e=await t[i];e.value===l.a.utils.toWei("0")&&(f.value=!0),w.push({...e})}},removeLiquidityHandler:async()=>{const{type:t,allowance:e}=await M();if("remove"===t){const t=Math.floor((new Date).getTime()/1e3)+1200,data=await C.value.methods.removeLiquidity(j.value,I.value,x.value,0,0,y.value,t).encodeABI();try{const t=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:y.value,to:T.value,data:data}]});let e;const n=k.value(),o=()=>{clearInterval(l)},l=setInterval((async()=>{e=await n.eth.getTransactionReceipt(t),console.log("receipt: ",e),e&&(o(),r.value=NaN,c.value=NaN,await E())}),1e3)}catch(t){console.error(t)}}else{const t=e.tokenContract,n="115792089237316195423570985008687907853269984665640564039457584007913129639935",data=t.methods.approve(T.value,n).encodeABI();try{const e=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:y.value,to:t._address,data:data}]});let n;const o=k.value(),r=()=>{clearInterval(l)},l=setInterval((async()=>{n=await o.eth.getTransactionReceipt(e),console.log("receipt: ",n),n&&!0===n.status&&(r(),h.value="Remove liquidity")}),1e3)}catch(t){console.error(t)}}},isRemoveLiquidityDisabled:H,removeLiquidityBtnText:h,approveHandler:async()=>{await w.forEach((async t=>{if(t.value===l.a.utils.toWei("0")){const e=t.tokenContract,n="115792089237316195423570985008687907853269984665640564039457584007913129639935",data=e.methods.approve(T.value,n).encodeABI();try{const t=await window.ethereum.request({method:"eth_sendTransaction",params:[{from:y.value,to:e._address,data:data}]});let n;const o=k.value(),r=()=>{clearInterval(l)},l=setInterval((async()=>{n=await o.eth.getTransactionReceipt(t),console.log("receipt: ",n),n&&!0===n.status&&(r(),f.value=!1)}),1e3)}catch(t){console.error(t)}}}))},isApproveBtnVisible:f,contractRouterInstance:C,contractRouterAddress:T,contractBeuropInstance:O,contractBeuropAddress:j,contractWBNBInstance:L,contractWBNBAddress:I,contractPairInstance:B,contractPairAddress:A,convertValueFromWei:t=>parseFloat(l.a.utils.fromWei(t,"ether")).toFixed(6),wbnbAmount:v,cakeLpAmount:x,beuropAmount:_,wbnbAmountButtonHandler:async t=>{t.preventDefault(),r.value=await v.value,await P()},beuropAmountButtonHandler:async t=>{t.preventDefault(),c.value=await _.value,await R()}}}}),d=(n(861),n(48)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TradeContainer",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Liquidity")]},proxy:!0},{key:"sub-title",fn:function(){return[t._v("Add liquidity to receive LP tokens")]},proxy:!0},{key:"content",fn:function(){return[o("div",{staticClass:"liquidity"},[t.showLiquidity?o("div",{staticClass:"trade__form"},[o("form",{staticClass:"form"},[o("div",{staticClass:"input-wrapper"},[o("div",{staticClass:"input-wrapper__head"},[o("label"),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.wbnbAmount,expression:"!!wbnbAmount"}]},[o("span",[t._v("Balance: "+t._s(t.wbnbAmount))]),t._v(" "),o("button",{on:{click:t.wbnbAmountButtonHandler}},[t._v("max")])])]),t._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input__icon"},[o("img",{attrs:{src:n(847),alt:"from"}})]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.firstToken,expression:"firstToken"}],ref:"_firstToken",attrs:{type:"number",name:"from",min:"0",placeholder:"0.0"},domProps:{value:t.firstToken},on:{input:[function(e){e.target.composing||(t.firstToken=e.target.value)},t.firstTokenHandler]}})])]),t._v(" "),o("div",{staticClass:"input-wrapper"},[o("div",{staticClass:"input-wrapper__head"},[o("label"),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.beuropAmount,expression:"!!beuropAmount"}]},[o("span",[t._v("Balance: "+t._s(t.beuropAmount))]),t._v(" "),o("button",{on:{click:t.beuropAmountButtonHandler}},[t._v("max")])])]),t._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input__icon"},[o("img",{attrs:{src:n(848),alt:"to"}})]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.secondToken,expression:"secondToken"}],ref:"_secondToken",attrs:{type:"number",name:"to",min:"0",placeholder:"0.0"},domProps:{value:t.secondToken},on:{input:[function(e){e.target.composing||(t.secondToken=e.target.value)},t.secondTokenHandler]}})])])]),t._v(" "),o("ul",{staticClass:"list-info"},[o("li",[o("div",{staticClass:"left"},[t._v("Slippage Tolerance")]),t._v(" "),o("div",{staticClass:"right"},[t._v("1%")])]),t._v(" "),o("li",[o("div",{staticClass:"left"},[t._v("Your Liquidity")]),t._v(" "),o("div",{staticClass:"right"},[t._v("\n              "+t._s("0"!==t.cakeLpAmount?t.convertValueFromWei(t.cakeLpAmount)+" BEPR-LP":t.cakeLpAmount+" BEPR-LP")+"\n            ")])])]),t._v(" "),t.isApproveBtnVisible?[o("SharedButton",{attrs:{"is-disabled":!t.isDisabled},on:{buttonHandler:t.approveHandler}},[t._v("Approve")])]:[o("SharedButton",{attrs:{"is-disabled":!t.isDisabled},on:{buttonHandler:t.liquidityHandler}},[t._v("Add Liquidity")])]],2):o("div",{staticClass:"liquidity__wrapper"},[o("SharedButton",{attrs:{"is-disabled":!t.isDisabled},on:{buttonHandler:t.showLiquidityHandler}},[t._v("Add liquidity")]),t._v(" "),o("label",[t._v("Your Liquidity")]),t._v(" "),o("div",{staticClass:"liquidity__info"},[o("div",{staticClass:"no-connected"},[t.cakeLpAmount?[t._v("\n              "+t._s("0"!==t.cakeLpAmount?t.convertValueFromWei(t.cakeLpAmount)+" BEPR-LP":t.cakeLpAmount+" BEPR-LP")+"\n              "),o("SharedButton",{attrs:{"is-disabled":t.isRemoveLiquidityDisabled},on:{buttonHandler:t.removeLiquidityHandler}},[t._v(t._s(t.removeLiquidityBtnText)+"\n              ")])]:[t._v("\n              Connect to a wallet to view your liquidity.\n            ")]],2)]),t._v(" "),o("div",{staticClass:"liquidity__bottom"},[o("p",[t._v("Don't see a pool you joined? Import it.")]),t._v(" "),o("p",[t._v("\n            Or, if you staked your BBQ tokens in a farm, unstake them to see\n            them here.\n          ")])])],1)])]},proxy:!0}])})}),[],!1,null,"f3a66196",null);e.default=component.exports;installComponents(component,{SharedButton:n(840).default,TradeContainer:n(846).default})}}]);