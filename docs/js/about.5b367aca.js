(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0584":function(t,e,s){"use strict";var i=s("37c0"),a=s.n(i);a.a},"18eb":function(t,e,s){"use strict";var i=s("a534"),a=s.n(i);a.a},"1f89":function(t,e,s){"use strict";var i=s("99c4"),a=s.n(i);e["default"]=a.a},"37c0":function(t,e,s){},"45de":function(t,e,s){},"4ab2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.allItems.length>0?s("lotBody"):t.isError?s("main",{staticClass:"item_list"},[s("Error")],1):s("main",{staticClass:"item_list"})},a=[],l=s("3fb9"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"lot fl"},[s("div",{staticClass:"lot_img"},[s("img",{attrs:{src:t.selectedItem.image,alt:""}})]),s("div",{staticClass:"lot_data"},[s("h1",{staticClass:"lot_title"},[t._v(t._s(t.selectedItem.name))]),s("div",{staticClass:"lot_nav"},[s("router-link",{staticClass:"lot_nav_btn",class:{"router-link-active":this.$route.fullPath==="/lot/"+t.selectedItem.name+"/"},attrs:{to:"/lot/"+t.selectedItem.name+"/specifications"}},[t._v("Specifications")]),s("router-link",{staticClass:"lot_nav_btn",attrs:{to:"/lot/"+t.selectedItem.name+"/team"}},[t._v("Team")]),s("router-link",{staticClass:"lot_nav_btn",attrs:{to:"/lot/"+t.selectedItem.name+"/rent"}},[t._v("Rent terms")])],1),s("router-view"),s("div",{staticClass:"lot_rent fl"},[s("div",[t._v(" Rent for "),s("span",{staticClass:"price"},[t._v(t._s(t.selectedItem.rent.toLocaleString("ru-RU"))+" $/h")])]),s("button",{staticClass:"btn"},[t._v("Rent now")])])],1)])},o=[],c=s("2f62"),r={name:"lotBody",computed:Object(c["c"])(["selectedItem"]),methods:Object(c["d"])(["updateItem"]),mounted:function(){this.updateItem(this.$route.params.id)}},m=r,u=(s("4faa"),s("2877")),_=Object(u["a"])(m,n,o,!1,null,null,null),d=_.exports,f={name:"lot",components:{Error:l["a"],lotBody:d},computed:Object(c["c"])(["allItems","isError"])},p=f,v=(s("c45b"),Object(u["a"])(p,i,a,!1,null,null,null));e["default"]=v.exports},"4faa":function(t,e,s){"use strict";var i=s("5cd5"),a=s.n(i);a.a},5776:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lot_option_select"},[s("p",{staticClass:"lot__description lot_text"},[t._v(t._s(t.selectedItem.term_text))]),s("div",{staticClass:"lot_terms"},[s("h2",[t._v("Additional conditions:")]),s("ul",{staticClass:"lot_rent__terms lot_text"},t._l(t.conditions,(function(e){return s("li",{key:e.id,staticClass:"term"},[t._v(" "+t._s(e.text)+" ")])})),0)])])},a=[],l=s("2f62"),n={name:"Terms",computed:Object(l["c"])(["selectedItem"]),data:function(){return{conditions:[{id:1,text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},{id:2,text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."},{id:3,text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."}]}}},o=n,c=(s("18eb"),s("2877")),r=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=r.exports},"5cd5":function(t,e,s){},9833:function(t,e,s){t.exports=s.p+"img/team_3.1748336b.png"},"99c4":function(t,e,s){t.exports={lot_option_select:"specifications_lot_option_select_apDp0",lot_spec__features:"specifications_lot_spec__features_36Cae",feature:"specifications_feature_23vVR",lot_ico:"specifications_lot_ico_1zB6d",feature_title:"specifications_feature_title_3uLJ7",feature_text:"specifications_feature_text_3p7Kk"}},a51e:function(t,e,s){t.exports=s.p+"img/team_2.e47f5dc5.png"},a534:function(t,e,s){},b300:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.$style.lot_option_select},[s("p",{staticClass:"lot__description lot_text"},[t._v(" "+t._s(t.selectedItem.specifications_text)+" ")]),s("div",{class:t.$style.lot_spec__features},[s("h2",[t._v("Features:")]),t._l(t.features,(function(e){return s("div",{key:e.id,staticClass:"fl",class:t.$style.feature},[s("div",{staticClass:"fl",class:t.$style.lot_ico,domProps:{innerHTML:t._s(e.ico)}}),s("div",{class:t.$style.feature_description},[s("h3",{class:t.$style.feature_title},[t._v(t._s(e.title))]),s("p",{staticClass:"lot_text",class:t.$style.feature_text},[t._v(" "+t._s(e.desc)+" ")])])])}))],2)])},a=[],l=s("2f62"),n={name:"Specifications",computed:Object(l["c"])(["selectedItem"]),data:function(){return{features:[{id:1,title:"A challenge for a true champion",desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",ico:'<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z" fill="#677B8F"/></svg>'},{id:2,title:"Pilot's sweaty hands",desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",ico:'<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9413 18.752C18.4867 20.1627 21.096 23.4187 21.584 27.3333H0.416004C0.904004 23.4187 3.51334 20.1627 7.05867 18.752L11 24.6667L14.9413 18.752ZM19 0.666656V8.66666C19 13.0853 15.4187 16.6667 11 16.6667C6.58134 16.6667 3 13.0853 3 8.66666V0.666656H19ZM16.3333 8.66666H5.66667C5.66667 11.6133 8.05334 14 11 14C13.9467 14 16.3333 11.6133 16.3333 8.66666Z" fill="#677B8F"/></svg>'}]}}},o=n,c=s("1f89"),r=s("2877");function m(t){this["$style"]=c["default"].locals||c["default"]}var u=Object(r["a"])(o,i,a,!1,m,null,null);e["default"]=u.exports},c45b:function(t,e,s){"use strict";var i=s("45de"),a=s.n(i);a.a},efeb:function(t,e,s){t.exports=s.p+"img/team_1.2b67a5aa.png"},f279:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lot_option_select"},[s("p",{staticClass:"lot__description lot_text"},[t._v(t._s(t.selectedItem.team_text))]),s("div",{staticClass:"lot_team"},[s("h2",[t._v("Qualified specialists")]),s("div",{staticClass:"lot_team__members fl"},t._l(t.members,(function(e){return s("div",{key:e.id,staticClass:"member"},[s("img",{staticClass:"member_phote",attrs:{src:e.photo,alt:""}}),s("h3",{staticClass:"member_name"},[t._v(" "+t._s(e.name)+" ")]),s("h4",{staticClass:"mamber_profession"},[t._v(" "+t._s(e.profession)+" ")])])})),0),s("p",{staticClass:"lot_text lot_team__text"},[t._v(t._s(t.member_text))])])])},a=[],l=s("efeb"),n=s.n(l),o=s("a51e"),c=s.n(o),r=s("9833"),m=s.n(r),u=s("2f62"),_={name:"Team",computed:Object(u["c"])(["selectedItem"]),data:function(){return{members:[{id:1,name:"Marvin McKinney",profession:"Pilot assistant",photo:n.a},{id:2,name:"Savannah Nguyen",profession:"Mechanic",photo:c.a},{id:3,name:"Courtney Henry",profession:"Stewardess",photo:m.a}],member_text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}}},d=_,f=(s("0584"),s("2877")),p=Object(f["a"])(d,i,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.5b367aca.js.map