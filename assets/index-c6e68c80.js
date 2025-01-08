var E=Object.defineProperty;var T=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>(T(a,typeof e!="symbol"?e+"":e,t),t);import{T as R,d as _,B as P,H as q,S as C,C as F,R as L,a as D,A as I,P as N,b as j,M as H,D as G,c as m,V as M,e as x,f as c,g as O,h as V,i as W}from"./index-f9af0687.js";import{g as b,s as f,a as u,r as X}from"./common-5ae3aca4.js";import{d as U,h as Y,l as $,c as J,o as K,a as Q}from"./index-b3c877f3.js";import"./LoadingCreator-3ff16b20.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./lodash-05a5e143.js";const S=[],z=[],Z=()=>{for(let a=1;a<44;a++)S.push(`/lib/zone/photos/${a}.jpg`);return ee(),z},ee=async()=>{let a=new R;S.forEach(e=>{a.load(e,t=>{z.push(t)},t=>{},t=>{console.error("加载出错："+e)})})},te=8;let p=!1;const y=5,k=1;let r=[];const g=45,oe=40,{createMouseInput:se,desotryMouseInput:ie}=X("click",!0);let ae=window.location.href,n=[],A=!1;ae.includes("lanlan")&&(n=Z(),A=!0);let v=!1;function w(){var a=Math.floor(Math.random()*256),e=Math.floor(Math.random()*256),t=Math.floor(Math.random()*256),s=a.toString(16).padStart(2,"0"),i=e.toString(16).padStart(2,"0"),h=t.toString(16).padStart(2,"0"),l="#"+s+i+h;return l}class re{constructor(e){o(this,"basic");o(this,"scene");o(this,"camera");o(this,"renderer");o(this,"controls");o(this,"sizes");o(this,"useShader",!0);o(this,"clock");o(this,"helper");o(this,"debug");o(this,"resources");o(this,"emitter");o(this,"option");o(this,"material");o(this,"box");o(this,"rabbitModel");o(this,"person");o(this,"floorMaterial");o(this,"boxHelper");o(this,"mixers",[]);o(this,"runAction");o(this,"audio");this.option=e,this.emitter=new _.EventEmitter,this.basic=new P(e.dom),this.scene=this.basic.scene,this.renderer=this.basic.renderer,this.controls=this.basic.controls,this.camera=this.basic.camera,this.helper=new q(this.scene),this.sizes=new C(this),this.clock=new F,this.resources=new L({textures:[{name:"sand",path:"/lib/tRex/sand.jpg"},{name:"snowDiff",path:"/lib/zone/snow/snowDiff.jpg"}],models:[{name:"person",path:"./lib/zone/boxman.glb"},{name:"rabbit",path:"./lib/zone/rabbit.glb"}]},()=>{this.initialize(),this.createLight(),console.log("资源加载完成",this.resources),this.createPerson(),this.createRabbit(),this.createFloor(),this.controls.update(),this.render()}),this.audio=this.resources.loadMusic("lib/zone/music/gbqq.mp3"),se(this.camera,this.scene,t=>{if(console.log("intersects",t),t.length>0){let s;for(let d=0;d<t.length;d++)if(t[d].object.name==="floor"){s=t[d];break}if(!s)return;const{point:i}=s,B=this.person.position.clone().distanceTo(i)/te;b.killTweensOf(this.person.position),b.to(this.person.position,{x:i.x,y:i.y,z:i.z,duration:B,ease:"none",onStart:()=>{this.person.lookAt(i),this.runAction.play()},onUpdate:()=>{},onComplete:()=>{this.runAction.stop(),this.person.position.clone().distanceTo(this.rabbitModel.position)<100&&!v&&(v=!0,this.enableEarthquake(),f(1500).then(()=>{this.audio.play(),this.replaceFloor(),this.meteoriteShower()}))}})}})}debugEvent(){this.debug.addButton({title:"run",label:"target"}).on("click",e=>{this.runAction.isRunning()?this.runAction.stop():this.runAction.play()}),this.debug.addButton({title:"地震",label:"target"}).on("click",e=>{this.enableEarthquake()}),this.debug.addButton({title:"相机位置",label:"target"}).on("click",e=>{console.log("相机位置",this.camera.position),this.mockImg()}),this.debug.addButton({title:"陨石雨",label:"target"}).on("click",e=>{this.meteoriteShower()}),this.debug.addButton({title:"替换",label:"target"}).on("click",e=>{this.replaceFloor()}),this.debug.addButton({title:"音乐",label:"target"}).on("click",e=>{this.audio.play()})}initialize(){this.scene.background=new D("#111"),this.camera.position.set(50,50,50),this.renderer.domElement.style.touchAction="auto",this.emitter.on("resize",()=>{this.renderer.setSize(Number(this.sizes.viewport.width),Number(this.sizes.viewport.height)),this.camera.aspect=Number(this.sizes.viewport.width)/Number(this.sizes.viewport.height),this.camera.updateProjectionMatrix()})}mockImg(){let e=document.createElement("img");console.log(n[0]),e.src=n[0]}createLight(){const e=new I(4210752,1);this.scene.add(e);const t=new N(16777215,1,0);t.position.set(20,180,15),this.scene.add(t)}enableEarthquake(){let e=this.camera.position.clone();setTimeout(()=>{p=!1,console.log("镜头晃动",e),this.basic.camera.position.set(e.x,e.y,e.z)},1e3),p=!p}replaceFloor(){let e=()=>{this.floorMaterial.opacity<=1&&(this.floorMaterial.opacity=this.floorMaterial.opacity+.2,setTimeout(e,100))},t=()=>{if(this.floorMaterial.opacity=this.floorMaterial.opacity-.2,this.floorMaterial.opacity<=0){this.floorMaterial.map=this.resources.textures.snowDiff,this.floorMaterial.map.wrapS=m,this.floorMaterial.map.wrapT=m,this.floorMaterial.map.repeat=new M(5,5),e();return}setTimeout(t,100)};setTimeout(t,100)}createFloor(){const e=new j(500,500,32,32),t=new H({color:16777215,side:G,map:this.resources.textures.sand,transparent:!0});t.map.wrapS=m,t.map.wrapT=m,t.map.repeat=new M(5,5),this.floorMaterial=t;const s=new x(e,this.floorMaterial);s.name="floor",s.rotateX(-Math.PI/2),this.scene.add(s)}createBox(){let e,t,s;if(A){const l=n.length;e=new c({map:n[u(l)]}),t=new c({map:n[u(l)]}),s=new c({map:n[u(l)]})}else e=new c({color:w()}),t=new c({color:w()}),s=new c({color:w()});let i=u(10)+5;return new x(new O(i,i,i),[e,t,s,e,t,s])}boxFallDown(e,t=3){b.to(e.position,{x:e.position.x,y:5,z:e.position.z,duration:t,ease:"bounce",onStart:()=>{},onComplete:()=>{}})}createPerson(){let e=this.resources.models.person,t=e.scene;t.scale.set(10,10,10),console.log(e),this.person=t,this.scene.add(t);const s=new V(t),i=W.findByName(e.animations,"run");if(console.log(i),i){const h=s.clipAction(i);this.runAction=h}this.mixers.push(s)}createRabbit(){let t=this.resources.models.rabbit.scene;t.position.set(0,7,-40),this.rabbitModel=t,this.scene.add(t)}async meteoriteShower(){for(;r.length<g;){const e=this.createBox();e.position.set(Math.random()*200-100,50,Math.random()*200-100),e.visible=!1,r.push(e),this.scene.add(e)}for(let e=0;e<g;e++)r[e].visible=!0,this.boxFallDown(r[e]),await f(500);this.check()}async check(){for(;r.length>=oe;){const e=r.shift();e&&this.scene.remove(e)}for(;r.length<=g;){const e=this.createBox();e.position.set(Math.random()*200-100,50,Math.random()*200-100),e.visible=!0,r.push(e),this.scene.add(e),this.boxFallDown(e),await f(500)}console.log(r.length),this.check()}earthquake(){if(!p)return;let e=Math.random()*2-1,t=Math.random()*2-1;var s=Math.sin(e*k)*y,i=Math.sin(t*k)*y;this.basic.camera.position.x+=s,this.basic.camera.position.y+=i}destory(){this.debug.dispose(),ie()}render(){const e=this.clock.getDelta();if(requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera),this.mixers.length>0)for(const t of this.mixers)t.update(e);p&&this.earthquake()}}const ne=Q("div",{id:"threejs-canvas"},null,-1),le=[ne],fe=U({__name:"index",setup(a){let e;return Y(()=>{const t=document.querySelector("#threejs-canvas");e=new re({dom:t})}),$(()=>{e.destory()}),(t,s)=>(K(),J("div",null,le))}});export{fe as default};
