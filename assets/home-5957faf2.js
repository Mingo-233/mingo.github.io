import{d as g,c as o,a as s,t as c,b as r,F as w,r as k,o as t,u as y,p as L,e as I,f as x,g as S,h as N,i as b,j as _,k as h}from"./index-2256cc31.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import j from"./banner-fb9d48f8.js";const C={class:"m-part-moulde"},T={class:"m-part-moulde__title"},$={key:0,class:"m-part-moulde__subtitle"},A={class:"m-part-moulde__list"},M=["onClick"],P=["src"],B={class:"list-warrper__name"},D={class:"list-warrper__info ell-3"},V=g({__name:"partMoudle",props:{title:null,subTitlt:null,moudleList:null},setup(a){const e=a,p="https://oss-mingo-bucket.oss-cn-hangzhou.aliyuncs.com/webgl-lib/lib/webglDafult.png",d=y();function u(n){n.includes("http")?window.open(n):d.push(n)}return(n,i)=>(t(),o("div",C,[s("div",T,c(e.title),1),e.subTitlt?(t(),o("div",$,c(e.subTitlt),1)):r("",!0),s("div",A,[(t(!0),o(w,null,k(e.moudleList,(l,v)=>(t(),o("div",{class:"list-warrper",key:v},[s("div",{class:"list-warrper__preview",onClick:R=>u(l.path)},[l.img?(t(),o("img",{key:0,src:l.img,alt:"preview"},null,8,P)):(t(),o("img",{key:1,src:p,alt:""}))],8,M),s("div",B,c(l.name),1),s("div",D,c(l.info),1)]))),128))])]))}});const m=f(V,[["__scopeId","data-v-9dacf724"]]),E=a=>(L("data-v-317438e9"),a=a(),I(),a),F={class:"m-footer"},G=E(()=>s("div",null,[x(" 2023 © Powered by "),s("a",{href:"https://github.com/Mingo-233",target:"_blank"},"Mingo"),x(" | "),s("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"浙ICP备2023007880号-1")],-1)),J=[G],z=g({__name:"footer",setup(a){return(e,p)=>(t(),o("div",F,J))}});const q=f(z,[["__scopeId","data-v-317438e9"]]),K={class:"m-home"},O=g({__name:"home",setup(a){const e="https://oss-mingo-bucket.oss-cn-hangzhou.aliyuncs.com/webgl-lib/lib/glsl-default-img.png";let p=[{name:"小恐龙游戏",img:"https://s1.ax1x.com/2023/03/21/ppUomQK.jpg",info:"按下任意键开始，空格跳跃",path:"/t-rex"},{name:"惊喜盲盒模版",img:"https://s1.ax1x.com/2023/07/02/pCDxFfJ.jpg",info:"鼠标左键移动人物,空白盒材质可替换为对象照片贴图",path:"/zone"}],d=[{name:"从一个点开始",img:e,info:"GLSL编写顶点着色器和片元着色器，实现效果鼠标点击任意位置，位置随机颜色点",path:"http://mingo.wang/code/2.html"},{name:"线段",img:e,info:"LINES：基本线段、LINE_STRIP：带状线段、LINE_LOOP：环状线段",path:"http://mingo.wang/code/4.html"},{name:"渐变三角形",img:e,info:"GLSL编写顶点着色器和片元着色器，鼠标点击3处，生成随机颜色渐变三角形。使用2个buffer，分别传递顶点位置和颜色信息",path:"http://mingo.wang/code/3.html"},{name:"渐变三角形",img:e,info:"同上，但使用1个buffer，传递顶点位置和颜色信息",path:"http://mingo.wang/code/5.html"}],u=[{name:"地月环绕模型",img:"https://s1.ax1x.com/2023/04/01/ppWdNAe.png",info:"阴影 法线、镜面贴图 标签",path:"/earth-moon"},{name:"3d编辑器",img:"",info:"聚焦 target切换",path:"/worktop"},{name:"3d编辑器2",img:"",info:"旋转group下所有子模型,不改变group信息",path:"/worktop?scene=editor2"},{name:"波纹shader",img:"",info:"自定义着色器材质",path:"/wave"},{name:"天空盒",img:"https://s1.ax1x.com/2023/07/02/pCDv9Gd.png",info:"如题",path:"/hdr"},{name:"模板基类",img:"https://s1.ax1x.com/2023/03/18/ppJqwVJ.jpg",info:"vite+threejs 模板项目",path:"/box"},{name:"文字标签实现",img:"https://s1.ax1x.com/2023/03/28/pp6AKW8.jpg",info:"Sprite css2d css3d 三种方式实现文字标签，模型一添加鼠标拾取交互",path:"/raycaster"}];const n=[{name:"星球城市",img:"https://s1.ax1x.com/2023/03/18/ppJqvIs.jpg",info:"远观为蔚蓝色星球，近观为夕阳下的城市大厦",path:"/planet-world"}],i=S(!1);return N(()=>{setTimeout(()=>{i.value=!0},1e3)}),(l,v)=>(t(),o("div",K,[b(j),i.value?(t(),_(m,{key:0,title:"趣味展品","moudle-list":h(p)},null,8,["moudle-list"])):r("",!0),i.value?(t(),_(m,{key:1,title:"GLSL Shaders",subTitlt:"着色器练习案例，纯html静态文件，右键可看源码","moudle-list":h(d)},null,8,["moudle-list"])):r("",!0),i.value?(t(),_(m,{key:2,title:"个人随笔练习","moudle-list":h(u)},null,8,["moudle-list"])):r("",!0),i.value?(t(),_(m,{key:3,title:"友情赞助","moudle-list":n})):r("",!0),b(q)]))}});const H=f(O,[["__scopeId","data-v-ab0129f3"]]);export{H as default};