(function(e){function t(t){for(var o,a,s=t[0],u=t[1],c=t[2],l=0,h=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);m&&m(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("5c0b"),n("2877")),s={},u=Object(a["a"])(s,i,r,!1,null,null,null),c=u.exports,m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Arena")],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{attrs:{id:"Arena"}}),n("button",{on:{click:e.addCreature}},[e._v("Add")]),n("button",{on:{click:e.animate}},[e._v("animate")]),n("button",{on:{click:e.stopAnimation}},[e._v("stop")]),n("button",{on:{click:e.clearArena}},[e._v("clear")])])},p=[],v=(n("d81d"),n("d4ec")),w=n("bee2"),g=800,y=g/16*9,b={screenSize:g,height:y,floor:y-100,ceiling:0,gravity:2,friction:.25,maxSpeed:15,spawnPoint:g/2},A=function(){function e(){Object(v["a"])(this,e),this.size=20,this.posX=b.spawnPoint,this.posY=0,this.momentumY=0,this.momentumX=0,this.stepSize=1}return Object(w["a"])(e,[{key:"draw",value:function(){var e=document.getElementById("Arena"),t=e.getContext("2d");t.fillStyle="red",t.fillRect(this.posX,this.posY,this.size,this.size)}},{key:"gravityAndFriction",value:function(){this.momentumY<=b.maxSpeed&&(this.momentumY+=b.gravity),this.momentumY<0&&(this.momentumY+=b.gravity/2),this.momentumX<0&&(this.momentumX+=b.friction),this.momentumX>0&&(this.momentumX-=b.friction)}},{key:"updatePosition",value:function(){this.posY+=this.momentumY,this.posX+=this.momentumX}},{key:"move",value:function(e){this.momentumX<=b.maxSpeed&&("ArrowLeft"===e.key&&(this.momentumX-=this.stepSize),"ArrowRight"===e.key&&(this.momentumX+=this.stepSize),"ArrowUp"===e.key&&this.jump())}},{key:"jump",value:function(){(this.momentumY>10||this.momentumY<10)&&(this.momentumY+=2*b.maxSpeed)}},{key:"collision",value:function(){var e=document.getElementById("Arena");this.posY>b.floor&&(this.momentumY=-this.momentumY,this.posY=b.floor),this.posY<b.ceiling&&(this.momentumY=-this.momentumY,this.posY=b.ceiling),(this.posX<=0||this.posX>=e.width-this.size)&&(this.momentumX=-this.momentumX,(this.posX<0||this.posX>e.width-this.size)&&(this.posX+=this.momentumX))}}]),e}(),k={name:"Arena",data:function(){return{backgroundColor:"#000000",creatures:[],animationID:0}},mounted:function(){var e=this;window.addEventListener("load",this.eventDrawCanvas),window.addEventListener("resize",this.eventDrawCanvas),window.addEventListener("keydown",(function(t){t.preventDefault(),e.moveCreatures(t)}))},methods:{eventDrawCanvas:function(){this.clearCanvas(),this.eventCanvasResize(window),this.eventCanvasReStyle(window),this.drawCreatures(window)},clearCanvas:function(){var e=document.getElementById("Arena"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height)},eventCanvasResize:function(){var e=document.getElementById("Arena");e.height=b.height,e.width=b.screenSize},eventCanvasReStyle:function(){var e=document.getElementById("Arena");e.style.backgroundColor=this.backgroundColor},addCreature:function(e){this.creatures.push(new A),this.eventDrawCanvas(e)},moveCreatures:function(e){this.creatures.map((function(t){return t.move(e)}))},drawCreatures:function(){this.creatures.map((function(e){return e.gravityAndFriction(),e.updatePosition(),e.collision(),e.draw(document.getElementById("Arena")),null}))},clearArena:function(){this.clearCanvas(),this.creatures=[],this.stopAnimation()},stopAnimation:function(){cancelAnimationFrame(this.animationID)},animate:function(){return this.animationID=requestAnimationFrame(this.animate),this.eventDrawCanvas(),null}}},C=k,X=Object(a["a"])(C,f,p,!1,null,null,null),Y=X.exports,S={name:"Home",components:{Arena:Y}},j=S,O=Object(a["a"])(j,h,d,!1,null,null,null),_=O.exports;o["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:_}],z=new l["a"]({mode:"history",base:"/",routes:x}),E=z,P=n("2f62");o["a"].use(P["a"]);var D=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:E,store:D,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.50d069b5.js.map