webpackJsonp([1],[function(t,e,i){function a(t){i(19)}var n=i(2)(i(14),i(23),a,null,null);t.exports=n.exports},,,function(t,e,i){"use strict";var a=i(1),n=i(24),s=i(20),r=i.n(s);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Main",component:r.a}]})},,,,,,,,,function(t,e,i){function a(t){i(18)}var n=i(2)(i(15),i(22),a,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(i(11),i(5),i(8),i(6),i(9),i(4),i(10),i(7),i(0)),n=i.n(a),s=i(1),r=i(12),o=i.n(r),c=i(3);s.a.component("icon",n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,render:function(t){return t(o.a)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1),n={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in n||(a.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(a.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,i=0;this.$children.forEach(function(t){e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),n[e]=i}},icons:n}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"main",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){function a(t){i(17)}var n=i(2)(i(16),i(21),a,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("section",{attrs:{id:"contact"}},[i("div",{staticClass:"inner"},[t._m(3),t._v(" "),i("section",{staticClass:"split"},[i("section",[i("div",{staticClass:"contact-method"},[i("span",{staticClass:"icon alt fa-envelope"},[i("icon",{attrs:{name:"envelope"}})],1),t._v(" "),i("h3",[t._v("Email")]),t._v(" "),i("a",{attrs:{href:"#"}},[t._v("snsanich@gmail.com")])])]),t._v(" "),i("section",[i("div",{staticClass:"contact-method"},[i("span",{staticClass:"icon alt fa-phone"},[i("icon",{attrs:{name:"phone"}})],1),t._v(" "),i("h3",[t._v("Phone")]),t._v(" "),i("span",[t._v("(+375) 29 129 49 50")])])]),t._v(" "),i("section",[i("div",{staticClass:"contact-method"},[i("span",{staticClass:"icon alt fa-home"},[i("icon",{attrs:{name:"home"}})],1),t._v(" "),i("h3",[t._v("Address")]),t._v(" "),t._m(4)])])])])]),t._v(" "),i("footer",{attrs:{id:"footer"}},[i("div",{staticClass:"inner"},[i("ul",{staticClass:"icons"},[i("li",[i("a",{staticClass:"icon alt fa-twitter",attrs:{href:"https://twitter.com/AGolovnya"}},[i("icon",{attrs:{name:"twitter"}}),t._v(" "),i("span",{staticClass:"label"},[t._v("Twitter")])],1)]),t._v(" "),i("li",[i("a",{staticClass:"icon alt fa-facebook",attrs:{href:"https://www.facebook.com/alexander.golovnya.5"}},[i("icon",{attrs:{name:"facebook"}}),t._v(" "),i("span",{staticClass:"label"},[t._v("Facebook")])],1)]),t._v(" "),i("li",[i("a",{staticClass:"icon alt fa-instagram",attrs:{href:"https://www.instagram.com/alexander.golovnya/"}},[i("icon",{attrs:{name:"instagram"}}),t._v(" "),i("span",{staticClass:"label"},[t._v("Instagram")])],1)]),t._v(" "),i("li",[i("a",{staticClass:"icon alt fa-github",attrs:{href:"http://github.com/snsanich"}},[i("icon",{attrs:{name:"github"}}),t._v(" "),i("span",{staticClass:"label"},[t._v("GitHub")])],1)]),t._v(" "),i("li",[i("a",{staticClass:"icon alt fa-linkedin",attrs:{href:"https://www.linkedin.com/in/alexandergolovnya"}},[i("icon",{attrs:{name:"linkedin"}}),t._v(" "),i("span",{staticClass:"label"},[t._v("LinkedIn")])],1)])]),t._v(" "),t._m(5)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"alt",attrs:{id:"header"}},[i("a",{staticClass:"logo",attrs:{href:"index.html"}},[i("strong",[t._v("Perch ")]),t._v(" for\n      "),i("span",[t._v("Brains")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{attrs:{id:"menu"}},[i("ul",{staticClass:"links"},[i("li",[i("a",{attrs:{href:"index.html"}},[t._v("Home")])])]),t._v(" "),i("ul",{staticClass:"actions vertical"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"major",attrs:{id:"banner"}},[i("div",{staticClass:"inner"},[i("header",{staticClass:"major"},[i("h1",[t._v("Hi, My name is Alexander.")])]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("By the time I wrote this blog, I have been working in IT for 9 years\n          "),i("br"),t._v(" and I like making new software 🦁!")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("form",{attrs:{method:"get",action:"mailto:example@tutorialspark.com"}},[i("div",{staticClass:"field half first"},[i("label",{attrs:{for:"subject"}},[t._v("Name")]),t._v(" "),i("input",{attrs:{type:"text",name:"subject",id:"subject"}})]),t._v(" "),i("div",{staticClass:"field half"},[i("label",{attrs:{for:"from"}},[t._v("Email")]),t._v(" "),i("input",{attrs:{type:"text",name:"from",id:"from"}})]),t._v(" "),i("div",{staticClass:"field"},[i("label",{attrs:{for:"body"}},[t._v("Message")]),t._v(" "),i("textarea",{attrs:{name:"body",id:"body",rows:"6"}})]),t._v(" "),i("ul",{staticClass:"actions"},[i("li",[i("input",{staticClass:"special",attrs:{type:"submit",value:"Send Message"}})]),t._v(" "),i("li",[i("input",{attrs:{type:"reset",value:"Clear"}})])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t._v("Naturalistov 5\n              "),i("br"),t._v(" Minsk\n              "),i("br"),t._v(" Belarus")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"copyright"},[i("li",[t._v("© Perch for Brains Corp.")]),t._v(" "),i("li",[t._v("Design concept from:\n          "),i("a",{attrs:{href:"https://html5up.net"}},[t._v("HTML5 UP")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return i("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return i("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}}],[13]);