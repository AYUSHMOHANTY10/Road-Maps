(()=>{function L(d){return(d||"").replace(/^\d+-/,"")}function R(d){let t=d>>16&255,e=d>>8&255,r=d&255;return`rgb(${t},${e},${r})`}function p(d,t={},e){let r=document.createElementNS("http://www.w3.org/2000/svg",d);for(let o in t)!t.hasOwnProperty(o)||r.setAttribute(o,t[o]);return e&&e.appendChild(r),r}var m=2.7,O=4,T=2,I={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]},v=class{constructor(t,e){this.svgRoot=t,this.fontFamily=e,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(t,e){let r=t.typeID;r in this?this[r](t,e):console.log(`'${r}' control type not implemented`)}parseColor(t,e){return t===void 0?`rgb(${e})`:R(t)}parseFontProperties(t){var e,r,o;return{style:(e=t.properties)!=null&&e.italic?"italic":"normal",weight:(r=t.properties)!=null&&r.bold?"bold":"normal",size:(o=t.properties)!=null&&o.size?t.properties.size+"px":"13px",family:this.fontFamily}}measureText(t,e){return this.canvasRenderingContext2D.font=e,this.canvasRenderingContext2D.measureText(t)}drawRectangle(t,e){var r,o,i,s,a,n;p("rect",{x:parseInt(t.x)+m/2,y:parseInt(t.y)+m/2,width:parseInt((r=t.w)!=null?r:t.measuredW)-m,height:parseInt((o=t.h)!=null?o:t.measuredH)-m,rx:T,fill:this.parseColor((i=t.properties)==null?void 0:i.color,"255,255,255"),"fill-opacity":(a=(s=t.properties)==null?void 0:s.backgroundAlpha)!=null?a:1,stroke:this.parseColor((n=t.properties)==null?void 0:n.borderColor,"0,0,0"),"stroke-width":m},e)}addText(t,e,r,o){var i,s;let a=(i=t.properties.text)!=null?i:"",n=parseInt(t.x),l=parseInt(t.y),c=this.parseFontProperties(t),u=this.measureText(a,`${c.style} ${c.weight} ${c.size} ${c.family}`),f=o==="center"?n+((s=t.w)!=null?s:t.measuredW)/2-u.width/2:n,b=l+t.measuredH/2+u.actualBoundingBoxAscent/2,w=p("text",{x:f,y:b,fill:r,"font-style":c.style,"font-weight":c.weight,"font-size":c.size},e);if(!a.includes("{color:")){let g=p("tspan",{},w);g.textContent=a;return}a.split(/{color:|{color}/).forEach(g=>{if(g.includes("}")){let[h,$]=g.split("}");if(!h.startsWith("#")){let k=parseInt(h.slice(-1));h=isNaN(k)?I[h][0]:I[h][k]}let E=p("tspan",{fill:h},w);E.textContent=$}else{let h=p("tspan",{},w);h.textContent=g}})}TextArea(t,e){this.drawRectangle(t,e)}Canvas(t,e){this.drawRectangle(t,e)}Label(t,e){var r;this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0"),"left")}TextInput(t,e){var r;this.drawRectangle(t,e),this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.textColor,"0,0,0"),"center")}Arrow(t,e){var r,o,i;let s=parseInt(t.x),a=parseInt(t.y),{p0:n,p1:l,p2:c}=t.properties,u;((r=t.properties)==null?void 0:r.stroke)==="dotted"?u="0.8 12":((o=t.properties)==null?void 0:o.stroke)==="dashed"&&(u="28 46");let f={x:(c.x-n.x)*l.x,y:(c.y-n.y)*l.x};p("path",{d:`M${s+n.x} ${a+n.y}Q${s+n.x+f.x+f.y*l.y*3.6} ${a+n.y+f.y+-f.x*l.y*3.6} ${s+c.x} ${a+c.y}`,fill:"none",stroke:this.parseColor((i=t.properties)==null?void 0:i.color,"0,0,0"),"stroke-width":O,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":u},e)}Icon(t,e){var r;let o=parseInt(t.x),i=parseInt(t.y),s=10;p("circle",{cx:o+s,cy:i+s,r:s,fill:this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0")},e),t.properties.icon.ID==="check-circle"&&p("path",{d:`M${o+4.5} ${i+s}L${o+8.5} ${i+s+4} ${o+15} ${i+s-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},e)}HRule(t,e){var r,o,i,s;let a=parseInt(t.x),n=parseInt(t.y),l;((r=t.properties)==null?void 0:r.stroke)==="dotted"?l="0.8, 8":((o=t.properties)==null?void 0:o.stroke)==="dashed"&&(l="18, 30"),p("path",{d:`M${a} ${n}L${a+parseInt((i=t.w)!=null?i:t.measuredW)} ${n}`,fill:"none",stroke:this.parseColor((s=t.properties)==null?void 0:s.color,"0,0,0"),"stroke-width":m,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":l},e)}__group__(t,e){var r;let o=(r=t?.properties)==null?void 0:r.controlName,i=L(o),s=localStorage.getItem(i)==="done",a=p("g",{...o?{class:`clickable-group ${s?"done":""}`,"data-group-id":o}:{}},e);t.children.controls.control.sort((n,l)=>n.zOrder-l.zOrder).forEach(n=>{n.x=parseInt(n.x,10)+parseInt(t.x,10),n.y=parseInt(n.y,10)+parseInt(t.y,10),this.render(n,a)})}};async function C(d,t={}){if(t={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...t},t.fontURL){let l=new FontFace(t.fontFamily,`url(${t.fontURL})`);await l.load(),document.fonts.add&&document.fonts.add(l)}let e=d.mockup,r=e.measuredW-e.mockupW-t.padding,o=e.measuredH-e.mockupH-t.padding,i=parseInt(e.mockupW)+t.padding*2,s=parseInt(e.mockupH)+t.padding*2,a=p("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${r} ${o} ${i} ${s}`,style:"font-family: balsamiq"}),n=new v(a,t.fontFamily);return e.controls.control.sort((l,c)=>l.zOrder-c.zOrder).forEach(l=>{n.render(l,a)}),a}var y=class{constructor(){this.overlayId="topic-overlay",this.contentId="topic-content",this.loaderId="topic-loader",this.topicBodyId="topic-body",this.handleTopicClick=this.handleTopicClick.bind(this),this.close=this.close.bind(this),this.loading=this.loading.bind(this),this.populate=this.populate.bind(this),this.handleOverlayClick=this.handleOverlayClick.bind(this),this.init=this.init.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get contentEl(){return document.getElementById(this.contentId)}get overlayEl(){return document.getElementById(this.overlayId)}loading(){this.loaderEl.classList.remove("hidden"),this.contentEl.replaceChildren(""),this.overlayEl.classList.remove("hidden")}close(){this.overlayEl.classList.add("hidden"),this.loaderEl.classList.remove("hidden"),this.contentEl.replaceChildren("")}populate(t){this.contentEl.replaceChildren(t),this.loaderEl.classList.add("hidden")}fetchTopicHtml(t,e){let r=e.replace(/^\d+-/,"").replaceAll(/:/g,"/"),o=`/${t}/${r}/`;return fetch(o).then(i=>i.text()).then(i=>new DOMParser().parseFromString(i,"text/html").getElementById("main-content"))}handleTopicClick(t){let{roadmapId:e,topicId:r}=t.detail;if(!r||!e){console.log("Missing topic or roadmap: ",t.detail);return}if(/^ext_link/.test(r)){window.open(`https://${r.replace("ext_link:","")}`);return}this.loading(),this.fetchTopicHtml(e,r).then(o=>{this.populate(o)}).catch(o=>{console.error(o),this.populate("Error loading the content!")})}handleOverlayClick(t){t.target.closest(`#${this.topicBodyId}`)||this.close()}init(){window.addEventListener("topic.click",this.handleTopicClick),window.addEventListener("click",this.handleOverlayClick),window.addEventListener("keydown",t=>{t.key.toLowerCase()==="escape"&&this.close()})}};var x=class{constructor(t){this.roadmapId=t.roadmapId,this.jsonUrl=t.jsonUrl,this.containerId="roadmap-svg",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.fetchRoadmapSvg=this.fetchRoadmapSvg.bind(this),this.handleRoadmapClick=this.handleRoadmapClick.bind(this)}fetchRoadmapSvg(t){return t?fetch(t).then(function(e){return e.json()}).then(function(e){return C(e)}):(console.error("jsonUrl not defined in frontmatter"),null)}onDOMLoaded(){this.fetchRoadmapSvg(this.jsonUrl).then(t=>{document.getElementById(this.containerId).replaceChildren(t)}).catch(console.error)}handleRoadmapClick(t){let e=t.target.closest("g")||{},r=e.dataset?e.dataset.groupId:"";!r||(t.stopImmediatePropagation(),window.dispatchEvent(new CustomEvent("topic.click",{detail:{topicId:r,roadmapId:this.roadmapId}})))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleRoadmapClick)}};window.initRoadmap=function(d){new x(d).init(),new y().init()};})();
//# sourceMappingURL=roadmap.js.map