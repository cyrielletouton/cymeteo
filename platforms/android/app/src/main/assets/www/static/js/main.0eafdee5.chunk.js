(this["webpackJsonpcom.cyrielle.meteo"]=this["webpackJsonpcom.cyrielle.meteo"]||[]).push([[0],{22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},28:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(6),i=a.n(o),c=(a(27),a(28),a(29),a(55)),l=(a(16),a(52)),s=a(53),m=a(54),u=a(9),h=a(10),d=a(11),p=a(12),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a),e=t.call(this);var n=new Date,r=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear();return e.state={date:r},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"datedujour"},this.state.date)}}]),a}(r.a.Component),g=a(21),v=a(46),E=a(47),y=a(48),M=a(56),w=a(49),b=a(50),I=a(51),j=function(e){var t=Object(n.useState)(!0),a=Object(g.a)(t,2),o=a[0],i=a[1];return r.a.createElement("div",null,r.a.createElement(v.a,{color:"faded",light:!0},r.a.createElement(E.a,{href:"/",className:"mr-auto"},"CyM\xe9t\xe9o ",r.a.createElement("i",{className:"fas fa-binoculars"})),r.a.createElement(y.a,{onClick:function(){return i(!o)},className:"mr-2"}),r.a.createElement(M.a,{isOpen:!o,navbar:!0},r.a.createElement(w.a,{navbar:!0},r.a.createElement(b.a,null,r.a.createElement(I.a,{href:"/"},"Mes villes")),r.a.createElement(b.a,null,r.a.createElement(I.a,{href:"/"},"Actualit\xe9s")),r.a.createElement(b.a,null,r.a.createElement(I.a,{href:"/"},"Mer")),r.a.createElement(b.a,null,r.a.createElement(I.a,{href:"/"},"Montagne"))))))},C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 - 2020 - Cyrielle ",r.a.createElement("i",{className:"far fa-smile-wink"})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root")),i.a.render(r.a.createElement(C,null),document.getElementById("root"));var N=function(){var e,t,a,n,o,i,u,h;function d(n){var r,o;n.preventDefault(),""!==(o="search"==n.currentTarget.getAttribute("name")?document.getElementById("city").value:"")?r="https://api.openweathermap.org/data/2.5/find?appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&q="+o:""!==e&&""!==t&&(r="https://api.openweathermap.org/data/2.5/find?appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&lat="+e+"&lon="+t),""!==r?fetch(r).then((function(e){return e.json()})).then((function(e){if(200==e.cod){console.log(e);var t=e.list[0];a="<h1>"+t.name+"<h1>",a+='<h2> <img src="icons/'+t.weather[0].icon+'.png" id="iconsmeteo" alt="icon meteo"></h2>',a+="<h2>"+t.weather[0].description+". "+Math.round(t.main.temp)+" \xb0C</h2>",a+='<h2 className="maxtemp"> Max <i class="fas fa-temperature-high"></i> : '+Math.round(t.main.temp_max)+" \xb0C</h2>",a+='<h2 class="mintemp"> Min <i class="fas fa-temperature-low"></i> : '+Math.round(t.main.temp_min)+" \xb0C</h2>",a+='<h2> Humidit\xe9 <i class="fas fa-tint"></i> : '+t.main.humidity+"% </h2>",document.getElementById("meteo").innerHTML=a}else 401==e.cod&&console.log(e.message)})).catch((function(e){console.log(e),console.log("Erreur de communication avec l'API")})):console.log("Vous devez saisir une ville ou vous g\xe9olocaliser")}return navigator.geolocation.watchPosition((function(a){e=a.coords.latitude,t=a.coords.longitude}),(function(e){alert("code:"+e.code+"\nmessage:"+e.message+"\n")}),{enableHighAccuracy:!0,timeout:3e4}),r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",null,"METEO"),r.a.createElement(f,{id:"dateactuelle"}),r.a.createElement("div",{id:"meteo",dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("div",{id:"geoloc"}," "))),r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"ville"},r.a.createElement(m.a,{className:"recherche"},r.a.createElement("form",null,r.a.createElement(c.a,{type:"text",name:"city",id:"city",placeholder:"Recherche ville..."}),r.a.createElement("button",{name:"search",type:"submit",id:"search",onClick:d}," ",r.a.createElement("i",{className:"fas fa-search"})," ")))),r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement("form",null,r.a.createElement("button",{name:"geoloc",id:"btnGeoloc",type:"button",onClick:d},"Me g\xe9olocaliser ",r.a.createElement("i",{className:"fas fa-map-marker-alt"}))))),r.a.createElement(s.a,{id:"separator"}),r.a.createElement("p",{id:"prochain"}," Quel temps dans les prochains jours ?"),r.a.createElement("form",null,r.a.createElement("button",{name:"previsionnn",id:"previsionnn",type:"button",onClick:function(a){var r,c;a.preventDefault(),""!==(r="previsionnn"==a.currentTarget.getAttribute("name")?document.getElementById("city").value:"")?c="https://api.openweathermap.org/data/2.5/forecast?&appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&q="+r:""!==e&&""!==t&&(c="https://api.openweathermap.org/data/2.5/forecast?&appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&lat="+e+"&lon="+t),""!==c?fetch(c).then((function(e){return e.json()})).then((function(e){if(200==e.cod){console.log(e);var t=e.city;h="<h1> "+t.name+"</h1>",document.getElementById("previsionsnom").innerHTML=h;var a=e.list[6];n="<h2> Demain : <h2>",n+='<h2> <img src="icons/'+a.weather[0].icon+'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>',n+="<h2>"+a.weather[0].description+"</h2>",n+="<h2>"+Math.round(a.main.temp)+" \xb0C </h2>",document.getElementById("previsionsa24").innerHTML=n;var r=e.list[12];o="<h2> Apr\xe8s-demain : <h2>",o+='<h2> <img src="icons/'+r.weather[0].icon+'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>',o+="<h2>"+r.weather[0].description+"</h2>",o+="<h2>"+Math.round(r.main.temp)+" \xb0C </h2>",document.getElementById("previsionsa48").innerHTML=o;var c=e.list[18];i="<h2> Dans 3 jours : <h2>",i+='<h2> <img src="icons/'+c.weather[0].icon+'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>',i+="<h2>"+c.weather[0].description+"</h2>",i+="<h2>"+Math.round(c.main.temp)+" \xb0C </h2>",document.getElementById("previsionsa72").innerHTML=i;var l=e.list[24];u="<h2> Dans 4 jours :<h2>",u+='<h2> <img src="icons/'+l.weather[0].icon+'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>',u+="<h2>"+l.weather[0].description+"</h2>",u+="<h2>"+Math.round(l.main.temp)+" \xb0C </h2>",document.getElementById("previsionsa96").innerHTML=u}else 401==e.cod&&console.log(e.message)})).catch((function(e){console.log(e),console.log("Erreur de communication avec l'API")})):console.log("Vous devez saisir une ville ou vous g\xe9olocaliser")}},"Les pr\xe9visions"))),r.a.createElement("section",{id:"sectionprevisions"},r.a.createElement("div",{id:"previsionsnom",dangerouslySetInnerHTML:{__html:h}}),r.a.createElement("div",{id:"resultatsprevisions"},r.a.createElement("div",{id:"previsionsa24",dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{id:"previsionsa48",dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("div",{id:"previsionsa72",dangerouslySetInnerHTML:{__html:i}}),r.a.createElement("div",{id:"previsionsa96",dangerouslySetInnerHTML:{__html:u}}))),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0eafdee5.chunk.js.map