"use strict";(self["webpackChunkaauevora"]=self["webpackChunkaauevora"]||[]).push([[289],{1128:function(t,e,i){i.d(e,{Z:function(){return E}});i(7042);var n=i(6252),r=i(9963),o=i(3577),a=function(t){return(0,n.dD)("data-v-5c198c9a"),t=t(),(0,n.Cn)(),t},s={class:"sidebar"},c=a((function(){return(0,n._)("i",{class:"fas fa-search"},null,-1)})),u=a((function(){return(0,n._)("input",{class:"searchBar",type:"search",placeholder:"Pesquisar ..."},null,-1)})),l=[c,u],d=a((function(){return(0,n._)("h1",null,"Notícias recentes",-1)})),g=a((function(){return(0,n._)("hr",null,null,-1)})),f={key:1,class:"artigosLoading"},v={key:2,class:"artigos"},m={key:3},p={key:4},w={key:5,class:"categorias"},h=(0,n.Uk)("Comunicados"),_=(0,n.Uk)("Desporto"),k=(0,n.Uk)("Discursos"),L=(0,n.Uk)("Ensino"),C=(0,n.Uk)("Geral"),y=(0,n.Uk)("Política");function D(t,e,i,a,c,u){var D=(0,n.up)("SidebarNewsTitleLoading"),N=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",s,[c.isComplete?((0,n.wg)(),(0,n.iD)("form",{key:0,class:"search",method:"get",onSubmit:e[0]||(e[0]=(0,r.iM)((function(){}),["prevent"]))},l,32)):(0,n.kq)("",!0),d,g,c.noticiasAreLoading?((0,n.wg)(),(0,n.iD)("ul",f,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(5,(function(t){return(0,n.Wm)(D,{key:t})})),64))])):((0,n.wg)(),(0,n.iD)("ul",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.noticias.slice(0,5),(function(t){return(0,n.wg)(),(0,n.iD)("li",{key:t._id},[(0,n.Wm)(N,{to:u.getRoute(t._id),onClick:function(e){return u.setNoticia(t)&&u.snapToElement(".headerTitle")}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(t.title),1)]})),_:2},1032,["to","onClick"])])})),128))])),c.isComplete?((0,n.wg)(),(0,n.iD)("h1",m,"Categorias")):(0,n.kq)("",!0),c.isComplete?((0,n.wg)(),(0,n.iD)("hr",p)):(0,n.kq)("",!0),c.isComplete?((0,n.wg)(),(0,n.iD)("ul",w,[(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[h]})),_:1})]),(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[_]})),_:1})]),(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[k]})),_:1})]),(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[L]})),_:1})]),(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[C]})),_:1})]),(0,n._)("li",null,[(0,n.Wm)(N,{to:"/"},{default:(0,n.w5)((function(){return[y]})),_:1})])])):(0,n.kq)("",!0)])}var N=i(4811),P=function(t){return(0,n.dD)("data-v-5606451a"),t=t(),(0,n.Cn)(),t},b={class:"titleContainer"},x=P((function(){return(0,n._)("div",{class:"textLoading firstLine"},null,-1)})),T=P((function(){return(0,n._)("div",{class:"textLoading middleLine"},null,-1)})),U=P((function(){return(0,n._)("div",{class:"textLoading lastLine"},null,-1)})),A=[x,T,U];function S(t,e,i,r,o,a){return(0,n.wg)(),(0,n.iD)("li",b,A)}var q={},I=i(3744);const W=(0,I.Z)(q,[["render",S],["__scopeId","data-v-5606451a"]]);var R=W,Z={name:"Sidebar",data:function(){return{isComplete:!1,noticiasAreLoading:!0}},components:{SidebarNewsTitleLoading:R},created:function(){var t=this;this.noticiasAreLoading&&setTimeout((function(){t.noticiasAreLoading&&(t.noticiasAreLoading=t.$store.getters.getIsNoticiasLoading)}),400)},computed:{noticias:function(){return this.$store.getters.getAllNoticias}},methods:{snapToElement:N.Dp,getRoute:function(t){return"/noticias/".concat(t)},setNoticia:function(t){this.$store.commit("setCurrentNoticia",t),(0,N.Dp)("body")}}};const H=(0,I.Z)(Z,[["render",D],["__scopeId","data-v-5c198c9a"]]);var E=H},6776:function(t,e,i){i.r(e),i.d(e,{default:function(){return q}});var n=i(6252),r={class:"noticias"},o={key:0,class:"newsColumn"},a={key:1,class:"newsColumn"};function s(t,e,i,s,c,u){var l=(0,n.up)("HeaderTitle"),d=(0,n.up)("NoticiasCardPreviewLoading"),g=(0,n.up)("NoticiasCardPreview"),f=(0,n.up)("Sidebar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l,{title:"Notícias",image:u.getImgURL("noticias.jpg")},null,8,["image"]),(0,n._)("section",r,[c.noticiasAreLoading?((0,n.wg)(),(0,n.iD)("div",o,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(10,(function(t){return(0,n.Wm)(d,{key:t})})),64))])):((0,n.wg)(),(0,n.iD)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.noticias,(function(t){return(0,n.wg)(),(0,n.j4)(g,{key:t._id,postID:t._id,imgURL:u.getImgURL("noticias/".concat(t.imageLink)),titulo:t.title,data:t.date,categoryColor:t.categoryColor,textPreview:t.paragraphs[0],onClick:function(e){return u.setNoticia(t)}},null,8,["postID","imgURL","titulo","data","categoryColor","textPreview","onClick"])})),128))])),(0,n.Wm)(f)])],64)}var c=i(3577),u=["src"],l={class:"contentPreview"},d={class:"publishedOn"},g=(0,n.Uk)(" Publicado a "),f={class:"data"},v={class:"textPreviewNoticia"};function m(t,e,i,r,o,a){var s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(s,{to:a.route,class:"cardPreview",onClick:e[0]||(e[0]=function(t){return a.snapToElement(".headerTitle")})},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:i.imgURL,alt:""},null,8,u),(0,n._)("div",l,[(0,n._)("h1",null,(0,c.zw)(i.titulo),1),(0,n._)("hr",{style:(0,c.j5)({borderColor:i.categoryColor})},null,4),(0,n._)("h2",d,[g,(0,n._)("span",f,(0,c.zw)(i.data),1)]),(0,n._)("p",v,(0,c.zw)(i.textPreview),1)])]})),_:1},8,["to"])}var p=i(8439),w=i(4811),h={name:"NoticiasCardPreview",props:{postID:{type:String,required:!0},imgURL:{type:String,required:!0},titulo:{type:String,required:!0},data:{type:String,required:!0},categoryColor:{type:String,required:!0},textPreview:{type:String}},computed:{route:function(){return"/noticias/".concat(this.postID)}},mounted:function(){var t,e=document.querySelectorAll(".textPreviewNoticia"),i=(0,p.Z)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value,r=300,o=n.innerText.length>r?"...":"";n.innerText=n.innerText.substring(0,r)+o}}catch(a){i.e(a)}finally{i.f()}},methods:{snapToElement:w.Dp}},_=i(3744);const k=(0,_.Z)(h,[["render",m]]);var L=k,C={class:"cardPreviewLoading"},y=(0,n.uE)('<div class="imageLoading"></div><div class="contentPreview"><h1 class="title"></h1><h1 class="title2"></h1><hr><h2 class="publishedOn"></h2><p class="textPreviewNoticia"></p><p class="textPreviewNoticia textPreviewNoticia2"></p></div>',2),D=[y];function N(t,e,i,r,o,a){return(0,n.wg)(),(0,n.iD)("div",C,D)}var P={name:"NoticiasCardPreviewLoading"};const b=(0,_.Z)(P,[["render",N]]);var x=b,T=i(1128),U=i(7107),A={name:"Noticias",data:function(){return{noticiasAreLoading:!0,activatedNavbar:!1}},components:{NoticiasCardPreview:L,NoticiasCardPreviewLoading:x,HeaderTitle:U.Z,Sidebar:T.Z},computed:{noticias:function(){return this.$store.getters.getAllNoticias}},created:function(){var t=this;this.noticiasAreLoading&&setTimeout((function(){t.noticiasAreLoading&&(t.noticiasAreLoading=t.$store.getters.getIsNoticiasLoading)}),400)},methods:{getImgURL:w.q8,setNoticia:function(t){this.$store.commit("setCurrentNoticia",t)}}};const S=(0,_.Z)(A,[["render",s]]);var q=S}}]);
//# sourceMappingURL=Noticias-legacy.3dbc5948.js.map