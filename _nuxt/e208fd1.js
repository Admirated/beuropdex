(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{833:function(e,t,n){var content=n(837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(97).default)("59b72bb5",content,!0,{sourceMap:!1})},836:function(e,t,n){"use strict";n(833)},837:function(e,t,n){var o=n(96)(!1);o.push([e.i,".btn{background-color:#6fc;text-decoration:none;text-align:center;line-height:50px;height:50px;border:none;display:inline-flex;justify-content:center;align-items:center;min-width:180px;transition:.35s ease;color:#fff;border-radius:10px;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(max-width:1280px){.btn{font-size:16px;min-width:160px;line-height:46px;height:46px}}.btn:hover{color:#fff;background-color:#36e38c}.btn[disabled]{background-color:#6c737f;color:#3e495c;cursor:not-allowed}",""]),e.exports=o},840:function(e,t,n){"use strict";n.r(t);var o=n(46),r=Object(o.b)({props:{isDisabled:{type:Boolean,required:!1,default:!1}},setup(e,t){const n=Object(o.f)(e.isDisabled);Object(o.i)((()=>e.isDisabled),((e,t)=>{n.value=e}));return{buttonHandler:e=>{e.preventDefault(),e.stopPropagation(),t.emit("buttonHandler",e)},disabledProps:n}}}),l=(n(836),n(48)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"btn",attrs:{disabled:e.disabledProps},on:{click:function(t){return e.buttonHandler(t)}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);