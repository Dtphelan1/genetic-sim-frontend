(this["webpackJsonpgenetic-sim-frontend"]=this["webpackJsonpgenetic-sim-frontend"]||[]).push([[0],{29:function(e,t,a){},50:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),l=(a(55),a(9)),c=a(106),u=a(114),s=a(119),m=a(108),p=a(82),f=a(110),d=a(109),v=a(45),g=a.n(v),E=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function h(e){var t=E(),a=e.apps,n=e.displayText,i=e.setCurrentApp;return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(d.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(g.a,null)),r.a.createElement(p.a,{variant:"h6",className:t.title},"SimGen"),a.map((function(e){return r.a.createElement(f.a,{key:e,color:"inherit",onClick:function(){return i(e)}},n[e])})))))}var b=a(20),y=a.n(b),O=a(26),S=a(113),j=a(111),x=a(27),w=a.n(x),N=a(115),B=Object(c.a)({root:{width:250}});function q(e){var t=B(),a=e.value,n=e.setValue,i=e.type,o=e.title,l=e.min,c=e.max,u=e.step,s=(c-l)/100,m=l;function f(e){return e*s+m}var d,v=[{value:0,label:"".concat(l," Generations")},{value:100,label:"".concat(c," Generations")}];return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{id:"".concat(i,"-slider-"),gutterBottom:!0},o),r.a.createElement(j.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(j.a,{item:!0,xs:!0},r.a.createElement(N.a,{defaultValue:0,getAriaValueText:function(e){return"".concat(f(e)," Generations")},"aria-labelledby":"discrete-slider-always",onChange:function(e,t){n(f(t))},step:u,marks:v,value:(d=a,(d-m)/s),valueLabelFormat:function(e){return"".concat(f(e))},valueLabelDisplay:"auto"}))))}function k(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,JSON.stringify(t)))}q.defaultProps={min:100,max:1e3,step:10};var V=a(112),G=a(116),C=a(118),P=a(120),A=Object(c.a)({root:{width:"100%"}});function D(e){var t=A(),a=e.value,n=e.setValue,i=e.type,o=e.title,l=e.isError;return r.a.createElement(C.a,{className:t.root},r.a.createElement(G.a,{id:"".concat(i,"-frequency-standard-adornment"),value:a,onChange:function(e){var t=Number(e.target.value);t>100?t=100:t<0&&(t=0),n(t)},endAdornment:r.a.createElement(V.a,{position:"end"},"%"),"aria-describedby":"".concat(i,"-frequency-input-helper-text"),error:l(),inputProps:{"aria-label":"frequency"}}),r.a.createElement(P.a,{id:"".concat(i,"-frequency-input-helper-text")},o))}D.defaultProps={value:0};a(29);var I=Object(c.a)((function(e){return{freqInput:{width:250},gridContainer:{margin:e.spacing(2)},gridElements:{padding:e.spacing(2)}}}));var R=Object(c.a)((function(e){return{freqInput:{width:250},gridContainer:{margin:e.spacing(2)},gridElements:{padding:e.spacing(2)}}}));Object(c.a)((function(e){return{freqInput:{width:250},gridContainer:{margin:e.spacing(2)},gridElements:{padding:e.spacing(2)}}}));var F={GenotypeSimulator:function(){var e=I(),t={hetero:{title:"Frequency of Heterozygous"},homoD:{title:"Frequency of Homozygous Dominant"},homoR:{title:"Frequency of Homozygous Recessive"}};function a(e){return function(t){if(!Number.isNaN(t))return e(t)}}var i=r.a.useState(33),o=Object(l.a)(i,2),c=o[0],u=o[1];t.hetero.value=c,t.hetero.setValue=a(u);var s=r.a.useState(33),m=Object(l.a)(s,2),d=m[0],v=m[1];t.homoD.value=d,t.homoD.setValue=a(v);var g=r.a.useState(34),E=Object(l.a)(g,2),h=E[0],b=E[1];t.homoR.value=h,t.homoR.setValue=a(b);var x=Object(n.useState)(100),N=Object(l.a)(x,2),B=N[0],V=N[1],G=Object(n.useState)([]),C=Object(l.a)(G,2),P=C[0],A=C[1];function R(){return!(c+d+h===100)}function F(){return(F=Object(O.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={hetero:c,homoD:d,homoR:h,generations:B},"http://127.0.0.1:5000/","runPopSim",e.next=5,w.a.get("http://127.0.0.1:5000/runPopSim",{params:t});case 5:a=e.sent,A(a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(S.a,{maxWidth:"lg"},r.a.createElement(j.a,{container:!0,className:e.gridContainer},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h3"},"Genotype Frequencies"),r.a.createElement(p.a,{variant:"subtitle1",gutterBottom:!0},"Decide what our population's initial genotypes frequencies are and how many different generations to create to see what happens over time")),r.a.createElement(j.a,{item:!0,xs:6,className:e.gridElements},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Input Parameters"),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},Object.keys(t).map((function(a){var n=t[a],i=n.title,o=n.value,l=n.setValue;return r.a.createElement(j.a,{item:!0,key:a,className:e.freqInput},r.a.createElement(D,{type:a,title:i,value:o,setValue:l,isError:R}))})),r.a.createElement(q,{type:"generations",title:"Number of Generations",value:B,step:50,min:100,max:1e3,setValue:V}),r.a.createElement(f.a,{variant:"contained",color:"primary",disabled:R(),onClick:function(){return F.apply(this,arguments)}},R()?"Ensure Geneotype Percents Add to 100":"Submit"))),r.a.createElement(j.a,{item:!0,xs:6,className:e.gridElements},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Output Data"),r.a.createElement(k,{data:P}))))},PunnetSquareSimulator:function(){var e=R(),t={parentA:{title:"Alleles for Parent A"},parentB:{title:"Alleles for Parent B"}};function a(e){return function(t){if(t.length<2)return e(t)}}var i=r.a.useState("BB"),o=Object(l.a)(i,2),c=o[0],u=o[1];t.parentA.value=c,t.parentA.setValue=a(u);var s=r.a.useState("Bb"),m=Object(l.a)(s,2),d=m[0],v=m[1];t.parentB.value=d,t.parentB.setValue=a(v);var g=Object(n.useState)(100),E=Object(l.a)(g,2),h=E[0],b=E[1],x=Object(n.useState)({}),N=Object(l.a)(x,2),B=N[0],V=N[1];function G(){return 2!==c.length&&2!==d.length}function C(){return(C=Object(O.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={parentA:c,parentB:d,generations:h},"runOffspringSim",e.next=4,w.a.get("http://127.0.0.1:5000/runOffspringSim",{params:t});case 4:a=e.sent,V(a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(S.a,{maxWidth:"lg"},r.a.createElement(j.a,{container:!0,className:e.gridContainer},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"h3"},"Punnet Square Simulator"),r.a.createElement(p.a,{variant:"subtitle1",gutterBottom:!0},"Run experiments")),r.a.createElement(j.a,{item:!0,xs:6,className:e.gridElements},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Input Parameters"),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},Object.keys(t).map((function(a){var n=t[a],i=n.title,o=n.value,l=n.setValue;return r.a.createElement(j.a,{item:!0,key:a,className:e.freqInput},r.a.createElement(D,{type:a,title:i,value:o,setValue:l,isError:G}))})),r.a.createElement(q,{type:"generations",title:"Number of Generations",value:h,step:50,min:100,max:1e3,setValue:b}),r.a.createElement(f.a,{variant:"contained",color:"primary",disabled:G(),onClick:function(){return C.apply(this,arguments)}},G()?"Make sure your alleles are correct":"Generate Offspring"))),r.a.createElement(j.a,{item:!0,xs:6,className:e.gridElements},r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Output Data"),r.a.createElement(k,{data:B}))))}},W={GenotypeSimulator:"Genotype Simulator",PunnetSquareSimulator:"Punnet Square Simulator"};var z=function(){var e=Object(n.useState)("GenotypeSimulator"),t=Object(l.a)(e,2),a=t[0],i=t[1],o=F[a];return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null),r.a.createElement(h,{apps:Object.keys(F),displayText:W,setCurrentApp:i}),r.a.createElement(o,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.661287ff.chunk.js.map