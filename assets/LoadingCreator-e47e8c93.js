var d=Object.defineProperty;var i=(e,n,o)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var a=(e,n,o)=>(i(e,typeof n!="symbol"?n+"":n,o),o);import{d as s,h as c,o as l,c as r,a as t,t as p,p as u,e as _,q as m,s as h}from"./index-2256cc31.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const f=e=>(u("data-v-fda9e274"),e=e(),_(),e),g={class:"m-loading"},y={class:"m-loading-process"},I=f(()=>t("div",{id:"load"},[t("div",null,"G"),t("div",null,"N"),t("div",null,"I"),t("div",null,"D"),t("div",null,"A"),t("div",null,"O"),t("div",null,"L")],-1)),S=s({__name:"loading",props:{num:{type:Number,default:0}},setup(e){return c(()=>{}),(n,o)=>(l(),r("div",g,[t("div",y,p(e.num)+"%",1),I]))}});const x=v(S,[["__scopeId","data-v-fda9e274"]]);class C{constructor(){a(this,"container");this.container=document.createElement("div")}show(){let n=m(x);this.container&&(h(n,this.container),document.body.appendChild(this.container))}hide(){this.container&&(document.body.removeChild(this.container),this.container=null)}update(n){let o=document.querySelector(".m-loading-process");o&&(o.innerHTML=`${n}%`)}}let L=new C;export{L as l};