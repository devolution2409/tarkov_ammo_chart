(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/tarkov_ammo_chart/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3647:function(t,e,a){"use strict";var n=a("9297"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("1321"),i=a.n(o),r=a("3003"),s=a("43f9"),l=a.n(s),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[0==t.loading?a("div",{attrs:{id:"chart"}},[a("div",{staticClass:"md-layout"},[a("md-field",{staticClass:"md-layout-item"},[a("label",{attrs:{for:"xAxis"}},[t._v("X Axis")]),a("md-select",{attrs:{name:"xAxis",id:"xAxis"},model:{value:t.x,callback:function(e){t.x=e},expression:"x"}},[a("md-option",{attrs:{disabled:"",value:""}},[t._v("Select x axis")]),a("md-option",{attrs:{value:"fleshDamage"}},[t._v("Flesh Damage")]),a("md-option",{attrs:{value:"penetration"}},[t._v("Penetration")]),a("md-option",{attrs:{value:"armorDamagePercent"}},[t._v("Armor Damage %")]),a("md-option",{attrs:{value:"accuracyModifier"}},[t._v("Accuracy Modifier %")]),a("md-option",{attrs:{value:"recoilModifier"}},[t._v("Recoil Modifier %")]),a("md-option",{attrs:{value:"fragmentationChance"}},[t._v("Fragmentation Chance %")])],1)],1),a("md-field",{staticClass:"md-layout-item"},[a("label",{attrs:{for:"yAxis"}},[t._v("Y Axis")]),a("md-select",{attrs:{name:"yAxis",id:"yAxis"},model:{value:t.y,callback:function(e){t.y=e},expression:"y"}},[a("md-option",{attrs:{disabled:"",value:""}},[t._v("Select y axis")]),a("md-option",{attrs:{value:"fleshDamage"}},[t._v("Flesh Damage")]),a("md-option",{attrs:{value:"penetration"}},[t._v("Penetration")]),a("md-option",{attrs:{value:"armorDamagePercent"}},[t._v("Armor Damage %")]),a("md-option",{attrs:{value:"accuracyModifier"}},[t._v("Accuracy Modifier %")]),a("md-option",{attrs:{value:"recoilModifier"}},[t._v("Recoil Modifier %")]),a("md-option",{attrs:{value:"fragmentationChance"}},[t._v("Fragmentation Chance %")])],1)],1)],1),a("apexchart",{staticClass:"dank",attrs:{type:"scatter",options:t.options,height:"500%",series:t.series}})],1):t._e(),1==t.loading?a("div",{staticClass:"lds-dual-ring"}):t._e()])},f=[],m=(a("99af"),a("4160"),a("caad"),a("a15b"),a("d81d"),a("4fad"),a("b64b"),a("d3b7"),a("ac1f"),a("466d"),a("841c"),a("1276"),a("159b"),a("96cf"),a("1da1")),p=a("5530"),v=a("3835"),h={name:"HelloWorld",props:{msg:String},methods:{paramsAsURI:function(t){return"?".concat(Object.entries(t).map((function(t){var e=Object(v["a"])(t,2),a=e[0],n=e[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(n))})).join("&"))},sanitize:function(t){var e=/\|(\d+)|<font color="\w+">(.+)<\/font>|style=".+" \| (\d+)|data-sort-value="{{#expr:.+}}" \|(.+)/,a=t.match(e),n=(null===a||void 0===a?void 0:a[4])||(null===a||void 0===a?void 0:a[3])||(null===a||void 0===a?void 0:a[2])||(null===a||void 0===a?void 0:a[1])||null;if(null!==n){var o=n.match(/(\d+)x(\d+)/);null!==o&&(n=o[2])}return n},changeSeries:function(t,e){var a=this;console.log(t,e);var n=["fleshDamage","penetration","armorDamagePercent","accuracyModifier","recoilModifier","fragmentationChance"];if(!n.includes(t)||!n.includes(e))return 1;var o=[];Object.keys(this.ammoData).forEach((function(n){var i=[];Object.keys(a.ammoData[n]).forEach((function(o){i.push([a.ammoData[n][o][t],a.ammoData[n][o][e]])})),o.push({name:n,data:i})})),this.series=o;var i={annotations:{borderWidth:1,borderRadius:2,textAnchor:"end",offsetX:0,offsetY:15,style:{background:"gray"}},axis:{show:!0,type:"numeric"},axisTitle:{rotate:-90,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"16px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-title"}}},r=this;return i.annotations.yaxis="penetration"===e?[{y:0,y2:10,fillColor:"#ff1744",label:Object(p["a"])({text:"Flesh"},i.annotations)},{y:10,y2:20,fillColor:"#ff3d00",label:Object(p["a"])({text:"Class 1"},i.annotations)},{y:20,y2:30,fillColor:"#ff9100",label:Object(p["a"])({text:"Class 2"},i.annotations)},{y:30,y2:40,fillColor:"#ffea00",label:Object(p["a"])({text:"Class 3"},i.annotations)},{y:40,y2:50,fillColor:"#76ff03",label:Object(p["a"])({text:"Class 4"},i.annotations)},{y:50,y2:60,fillColor:"#00e676",label:Object(p["a"])({text:"Class 5"},i.annotations)},{y:60,y2:100,fillColor:"#00e5ff",label:Object(p["a"])(Object(p["a"])({text:"Class 6"},i.annotations),{},{offsetY:-150})}]:[],this.options={theme:{mode:"dark",palette:"palette1"},tooltip:{custom:function(a){var n=a.series,o=a.seriesIndex,i=a.dataPointIndex,s=a.w,l=s.globals.seriesNames[o],c=n[o][i],u=s.globals.seriesX[o][i],d=r.ammoData[l],f="unknown";console.log(u,c);for(var m=0,p=Object.entries(d);m<p.length;m++){var h=Object(v["a"])(p[m],2),g=h[0],b=h[1];if(b[t]-u===0&&b[e]-c===0){f=g;break}}var y="<strong>".concat(f,"</strong><br>").concat(t,":").concat(u,"<br>").concat(e,":").concat(c);return y}},xaxis:Object(p["a"])({type:"numeric",min:0,max:200,title:Object(p["a"])({text:t},i.axisTitle)},i.axis),yaxis:Object(p["a"])({min:0,max:100,title:Object(p["a"])({text:e},i.axisTitle)},i.axis),subtitle:{text:"",align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"12px",fontWeight:"normal",fontFamily:void 0,color:"#9699a2"}},annotations:Object(p["a"])({},i.annotations)},0}},data:function(){return{loading:!0,options:{},series:[],x:"fleshDamage",y:"penetration"}},watch:{ammoData:function(t){t instanceof Object&&!1===this.loading&&this.changeSeries("fleshDamage","penetration")},x:function(){this.loading=!0,this.changeSeries(this.x,this.y),this.loading=!1},y:function(){this.loading=!0,this.changeSeries(this.x,this.y),this.loading=!1}},computed:{},asyncComputed:{ammoData:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a,n,o,i,r,s,l,c,u,d,f,m,p,v,h,g,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,a="https://escapefromtarkov.gamepedia.com/api.php",n={action:"query",prop:"revisions",titles:"Ballistics",rvslots:"*",rvprop:"content",formatversion:"2",format:"json",origin:"*"},o="===Table===",console.log("URL should be :".concat(a).concat(t.paramsAsURI(n))),i="".concat(a).concat(t.paramsAsURI(n)),e.next=8,fetch(i,{method:"get"});case 8:return r=e.sent,console.log("Fetch should be completed"),e.next=12,r.json();case 12:for(r=e.sent,s=r.query.pages[0].revisions[0].slots.main.content,l=s.search(o),c=s.substring(l,s.length),console.log(l,s.length),u=c.split("\n"),console.log(c),d=u.length,f=/rowspan="(\d+)".+\[\[(.+)]]|\[\[(.+)]]|rowspan="\d+" \|(.+)/,p={},v=0;v<d;v+=1)h=u[v].match(f),void 0!==h&&null!=h&&v+6<=d&&(g=u[v+1].match(f),console.log(h),void 0!==g&&null!=g?(m=(null===h||void 0===h?void 0:h[2])||(null===h||void 0===h?void 0:h[4])||m,console.log("peenus".concat(m)),p[m]=p[m]||{}):(b=null===h||void 0===h?void 0:h[2],null==b&&void 0===b||(p[m][b]={fleshDamage:t.sanitize(u[v+1]),penetration:t.sanitize(u[v+2]),armorDamagePercent:t.sanitize(u[v+3]),accuracyModifier:t.sanitize(u[v+4]),recoilModifier:t.sanitize(u[v+5]),fragmentationChance:t.sanitize(u[v+6])})));return t.loading=!1,e.abrupt("return",new Promise((function(t){return t(p)})));case 25:case"end":return e.stop()}}),e)})))()}}},g=h,b=(a("3647"),a("2877")),y=Object(b["a"])(g,d,f,!1,null,"cef67e5a",null),x=y.exports,j={name:"App",components:{HelloWorld:x}},O=j,_=(a("5c0b"),Object(b["a"])(O,c,u,!1,null,null,null)),C=_.exports;a("51de"),a("0759");n["default"].use(l.a),n["default"].config.productionTip=!1,n["default"].use(r["a"]),n["default"].component("apexchart",i.a),new n["default"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},9297:function(t,e,a){},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.b5b1f47f.js.map