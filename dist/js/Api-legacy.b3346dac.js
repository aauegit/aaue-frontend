(self["webpackChunkaauevora"]=self["webpackChunkaauevora"]||[]).push([[31],{4964:function(e,r,t){var n=t(5112),a=n("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[a]=!1,"/./"[e](r)}catch(n){}}return!1}},7850:function(e,r,t){var n=t(111),a=t(4326),o=t(5112),i=o("match");e.exports=function(e){var r;return n(e)&&(void 0!==(r=e[i])?!!r:"RegExp"==a(e))}},3929:function(e,r,t){var n=t(7854),a=t(7850),o=n.TypeError;e.exports=function(e){if(a(e))throw o("The method doesn't accept regular expressions");return e}},2222:function(e,r,t){"use strict";var n=t(2109),a=t(7854),o=t(7293),i=t(3157),u=t(111),s=t(7908),c=t(6244),l=t(6135),p=t(5417),f=t(1194),d=t(5112),g=t(7392),h=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",w=a.TypeError,y=g>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),b=f("concat"),D=function(e){if(!u(e))return!1;var r=e[h];return void 0!==r?!!r:i(e)},k=!y||!b;n({target:"Array",proto:!0,forced:k},{concat:function(e){var r,t,n,a,o,i=s(this),u=p(i,0),f=0;for(r=-1,n=arguments.length;r<n;r++)if(o=-1===r?i:arguments[r],D(o)){if(a=c(o),f+a>m)throw w(v);for(t=0;t<a;t++,f++)t in o&&l(u,f,o[t])}else{if(f>=m)throw w(v);l(u,f++,o)}return u.length=f,u}})},6699:function(e,r,t){"use strict";var n=t(2109),a=t(1318).includes,o=t(1223);n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},8862:function(e,r,t){var n=t(2109),a=t(7854),o=t(5005),i=t(2104),u=t(1702),s=t(7293),c=a.Array,l=o("JSON","stringify"),p=u(/./.exec),f=u("".charAt),d=u("".charCodeAt),g=u("".replace),h=u(1..toString),m=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,w=/^[\uDC00-\uDFFF]$/,y=function(e,r,t){var n=f(t,r-1),a=f(t,r+1);return p(v,e)&&!p(w,a)||p(w,e)&&!p(v,n)?"\\u"+h(d(e,0),16):e},b=s((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:b},{stringify:function(e,r,t){for(var n=0,a=arguments.length,o=c(a);n<a;n++)o[n]=arguments[n];var u=i(l,null,o);return"string"==typeof u?g(u,m,y):u}})},2023:function(e,r,t){"use strict";var n=t(2109),a=t(1702),o=t(3929),i=t(4488),u=t(1340),s=t(4964),c=a("".indexOf);n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~c(u(i(this)),u(o(e)),arguments.length>1?arguments[1]:void 0)}})},1126:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});t(9254);var n=t(6252),a=t(3577),o={class:"button"},i=["href"];function u(e,r,t,u,s,c){return(0,n.wg)(),(0,n.iD)("button",o,[(0,n.Uk)((0,a.zw)(t.buttonText)+" ",1),(0,n.WI)(e.$slots,"default",{},void 0,!0),t.link?((0,n.wg)(),(0,n.iD)("a",{key:0,href:t.link,rel:"noreferrer nooppener",target:"_blank"},null,8,i)):(0,n.kq)("",!0)])}var s={name:"Button",props:{buttonText:String,link:String}},c=t(3744);const l=(0,c.Z)(s,[["render",u],["__scopeId","data-v-5bd2d029"]]);var p=l},5061:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ue}});t(1539),t(8309);var n=t(6252),a=t(9963),o=t(3577),i=t(9322),u=function(e){return(0,n.dD)("data-v-7a69fe9d"),e=e(),(0,n.Cn)(),e},s={key:0,class:"login"},c=u((function(){return(0,n._)("img",{src:i,alt:""},null,-1)})),l=u((function(){return(0,n._)("label",{for:"Username"},"Username",-1)})),p={key:0},f=u((function(){return(0,n._)("label",{for:"password"},"Password",-1)})),d={key:1},g={key:1,class:"sidebarAPI"},h=u((function(){return(0,n._)("i",{class:"fas fa-pen"},null,-1)})),m=u((function(){return(0,n._)("span",null,"Criar notícia",-1)})),v=[h,m],w=u((function(){return(0,n._)("i",{class:"fas fa-edit"},null,-1)})),y=u((function(){return(0,n._)("span",null,"Editar notícia",-1)})),b=[w,y],D=u((function(){return(0,n._)("i",{class:"fas fa-trash-alt"},null,-1)})),k=u((function(){return(0,n._)("span",null,"Apagar notícia",-1)})),x=[D,k],_={key:2,class:"postBlog"},C={class:"getNoticia"},F={key:0,class:"forms"},N=u((function(){return(0,n._)("label",{for:"titulo"},"Título",-1)})),P=u((function(){return(0,n._)("label",{for:"category"},"Categoria principal",-1)})),T=(0,n.uE)('<option value="Comunicados" data-v-7a69fe9d>Comunicados</option><option value="Desporto" data-v-7a69fe9d>Desporto</option><option value="Discursos" data-v-7a69fe9d>Discursos</option><option value="Ensino" data-v-7a69fe9d>Ensino</option><option value="Geral" data-v-7a69fe9d>Geral</option><option value="Politica" data-v-7a69fe9d>Politica</option>',6),A=[T],O={for:"data"},E=u((function(){return(0,n._)("label",{for:"foto"},"Foto:",-1)})),S=u((function(){return(0,n._)("label",{for:"nomeDoficheiro"},"Nome do ficheiro",-1)})),M=u((function(){return(0,n._)("label",{for:"assinatura"},"Assinatura",-1)})),R={class:"formDeParagrafos"},z={class:"inputs"},H={for:"paragrafo"},I=["onUpdate:modelValue"],U={class:"buttonsParagraphs"},j={class:"sucesspost"},q={key:0,class:"postCreated"},Z=u((function(){return(0,n._)("h1",null,"Notícia criada com sucesso!",-1)})),B=u((function(){return(0,n._)("i",{class:"far fa-check-circle"},null,-1)}));function V(e,r,t,i,u,h){var m=(0,n.up)("Button"),w=(0,n.up)("Dropzone");return(0,n.wg)(),(0,n.iD)(n.HY,null,[u.loggedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("section",s,[(0,n._)("form",{onSubmit:r[2]||(r[2]=(0,a.iM)((function(){}),["prevent"]))},[c,l,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=function(e){return i.username=e}),name:"Username",placeholder:"Username",required:""},null,512),[[a.nr,i.username]]),u.wrongUserError?((0,n.wg)(),(0,n.iD)("span",p,"O usuário não existe")):(0,n.kq)("",!0),f,(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return i.password=e}),name:"password",placeholder:"Password",required:""},null,512),[[a.nr,i.password]]),u.wrongPasswordError?((0,n.wg)(),(0,n.iD)("span",d,"A password está errada")):(0,n.kq)("",!0),(0,n._)("div",{class:(0,o.C_)(["buttons",{isActive:i.isLoginFormFilled}])},[(0,n.Wm)(m,{class:"button",buttonText:"Iniciar sessão",onClick:h.logIn},null,8,["onClick"])],2)],32)])),u.loggedIn&&!u.formSent?((0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("ul",null,[(0,n._)("li",{onClick:r[3]||(r[3]=function(){return h.createNews&&h.createNews.apply(h,arguments)})},v),(0,n._)("li",{onClick:r[4]||(r[4]=function(){return h.editNews&&h.editNews.apply(h,arguments)})},b),(0,n._)("li",{onClick:r[5]||(r[5]=function(){return h.deleteNews&&h.deleteNews.apply(h,arguments)})},x)])])):(0,n.kq)("",!0),u.loggedIn&&!u.formSent?((0,n.wg)(),(0,n.iD)("section",_,[(0,n._)("h1",null,(0,o.zw)(u.headerText),1),(0,n._)("div",C,["Editar notícia"==u.headerText||"Eliminar notícia"==u.headerText?(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{key:0,name:"selectnoticia",id:"selectnoticia","onUpdate:modelValue":r[6]||(r[6]=function(e){return u.selectedNoticia=e})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.titulos,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e.id},(0,o.zw)(e.title),1)})),128))],512)),[[a.bM,u.selectedNoticia]]):(0,n.kq)("",!0)]),"Criar nova notícia"==u.headerText?((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("form",{onSubmit:r[11]||(r[11]=(0,a.iM)((function(){}),["prevent"]))},[N,(0,n.wy)((0,n._)("input",{type:"text",id:"titulo","onUpdate:modelValue":r[7]||(r[7]=function(e){return i.titulo=e}),placeholder:"Episódio V: O Império Contra-Ataca",required:""},null,512),[[a.nr,i.titulo]]),P,(0,n.wy)((0,n._)("select",{name:"category",id:"category","onUpdate:modelValue":r[8]||(r[8]=function(e){return i.category=e}),required:""},A,512),[[a.bM,i.category]]),(0,n._)("label",O,"Data: "+(0,o.zw)(i.diaDeHoje)+" de "+(0,o.zw)(u.mesDeHoje)+", "+(0,o.zw)(i.anoDeHoje),1),E,(0,n.Wm)(w,{onDrop:(0,a.iM)(i.drop,["prevent"]),onChange:i.selectedFile},null,8,["onDrop","onChange"]),(0,n._)("span",null,"Ficheiro: "+(0,o.zw)(i.dropzoneFile.name),1),S,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":r[9]||(r[9]=function(e){return u.nomeDoFicheiro=e}),placeholder:"40anos.jpg"},null,512),[[a.nr,u.nomeDoFicheiro]]),M,(0,n.wy)((0,n._)("input",{type:"text",id:"assinatura","onUpdate:modelValue":r[10]||(r[10]=function(e){return u.assinatura=e}),placeholder:"Mestre Yoda"},null,512),[[a.nr,u.assinatura]]),(0,n._)("div",{class:(0,o.C_)(["buttons",{isActive:i.isFormFilled}])},[(0,n.Wm)(m,{buttonText:"Publicar",onClick:h.publishNews},null,8,["onClick"])],2)],32),(0,n._)("form",R,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.numberOfParagraphs,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"paragraph",key:e},[(0,n._)("div",z,[(0,n._)("label",H,(0,o.zw)(e)+"º Parágrafo",1),(0,n.wy)((0,n._)("textarea",{type:"text",id:"paragrafo","onUpdate:modelValue":function(r){return u.paragrafo[e-1]=r},placeholder:"Há muito tempo, em uma galáxia muito, muito distante...",required:""},null,8,I),[[a.nr,u.paragrafo[e-1]]])])])})),128)),(0,n._)("div",U,[(0,n._)("i",{class:"fas fa-plus",onClick:r[12]||(r[12]=function(){return h.incrementNumberOfParagraphs&&h.incrementNumberOfParagraphs.apply(h,arguments)})}),(0,n._)("i",{class:"fas fa-times",onClick:r[13]||(r[13]=function(){return h.decrementNumberOfParagraphs&&h.decrementNumberOfParagraphs.apply(h,arguments)})})])])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),(0,n._)("section",j,[u.formSent?((0,n.wg)(),(0,n.iD)("div",q,[Z,B,(0,n.Wm)(m,{class:"button",buttonText:"Voltar",onClick:r[14]||(r[14]=function(e){return u.formSent=!1})})])):(0,n.kq)("",!0)])],64)}var Y=t(8534),J=(t(8862),t(6699),t(2023),t(2222),t(5666),t(1126)),G=function(e){return(0,n.dD)("data-v-22ed2fa1"),e=e(),(0,n.Cn)(),e},L=G((function(){return(0,n._)("span",null,"Arraste um ficheiro",-1)})),W=G((function(){return(0,n._)("span",null,"OU",-1)})),$=G((function(){return(0,n._)("label",{for:"dropzoneFile"},"Selecionar ficheiro",-1)})),K=G((function(){return(0,n._)("input",{type:"file",id:"dropzoneFile",class:"dropzoneFile"},null,-1)})),Q=[L,W,$,K];function X(e,r,t,i,u,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["dropzone",{activeDropzone:i.active}]),onDragenter:r[0]||(r[0]=(0,a.iM)((function(){return i.toggleActive&&i.toggleActive.apply(i,arguments)}),["prevent"])),onDragleave:r[1]||(r[1]=function(){return i.toggleActive&&i.toggleActive.apply(i,arguments)}),onDragover:r[2]||(r[2]=(0,a.iM)((function(){}),["prevent"])),onDrop:r[3]||(r[3]=function(){return i.toggleActive&&i.toggleActive.apply(i,arguments)})},Q,34)}var ee=t(2262),re={name:"Dropzone",setup:function(){var e=(0,ee.iH)(!1),r=function(){e.value=!e.value};return{active:e,toggleActive:r}}},te=t(3744);const ne=(0,te.Z)(re,[["render",X],["__scopeId","data-v-22ed2fa1"]]);var ae=ne,oe={name:"Api",data:function(){return{loggedIn:!1,isLoginFormFilled:!1,username:"",password:"",wrongUserError:"",wrongPasswordError:"",headerText:"Criar nova notícia",selectedNoticia:"",currentNoticia:{title:"",id:""},titulos:[],titulo:"",category:"",paragrafo:[],isFormFilled:!1,nomeDoFicheiro:"",assinatura:"",mesDeHoje:"",numberOfParagraphs:1,authToken:"",errorMessage:"",formSent:!1,noticiaId:""}},setup:function(){var e=(0,ee.iH)(""),r=function(r){e.value=r.dataTransfer.files[0]},t=function(){e.value=document.querySelector(".dropzoneFile").files[0]},a=(new Date).getDate(),o=(new Date).getFullYear(),i=function(){var e=(new Date).getMonth()+1;switch(e){case 1:return"Janeiro";case 2:return"Fevereiro";case 3:return"Março";case 4:return"Abril";case 5:return"Maio";case 6:return"Junho";case 7:return"Julho";case 8:return"Agosto";case 9:return"Setembro";case 10:return"Outubro";case 11:return"Novembro";case 12:return"Dezembro";default:break}},u=(0,ee.iH)(""),s=(0,ee.iH)(""),c=(0,ee.iH)([]),l=(0,ee.iH)(!1);(0,n.YP)([u,s,c],(function(){u.value&&s.value&&c.value?l.value=!0:l.value=!1}));var p=(0,ee.iH)(""),f=(0,ee.iH)(""),d=(0,ee.iH)(!1);return(0,n.YP)([p,f],(function(){p.value&&f.value?d.value=!0:d.value=!1})),{dropzoneFile:e,drop:r,selectedFile:t,diaDeHoje:a,getMes:i,anoDeHoje:o,isFormFilled:l,titulo:u,category:s,isLoginFormFilled:d,username:p,password:f}},watch:{selectedNoticia:function(e,r){var t=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(a in t.titulos)t.titulos[a].title==e&&(n=t.titulos[a].id);return r.next=3,t.getNoticiaInfo(n);case 3:case"end":return r.stop()}}),r)})))()}},components:{Button:J.Z,Dropzone:ae},created:function(){this.mesDeHoje=this.getMes()},methods:{logIn:function(){var e=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.isLoginFormFilled){r.next=2;break}return r.abrupt("return");case 2:e.wrongUserError=!1,e.wrongPasswordError=!1,t={username:e.username,password:e.password},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},fetch("https://aaue-blogs.onrender.com/api/user/login",n).then(function(){var r=(0,Y.Z)(regeneratorRuntime.mark((function r(t){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.json();case 2:if(n=r.sent,t.ok){r.next=6;break}return a=n&&n.message||t.status,r.abrupt("return",Promise.reject(a));case 6:e.authToken=n.token,e.loggedIn=!0;case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(r){e.errorMessage=r,e.errorMessage.includes("password")&&(e.wrongPasswordError=!0),e.errorMessage.includes("User")&&(e.wrongUserError=!0),console.error("There was an error!",r)}));case 7:case"end":return r.stop()}}),r)})))()},getCategoryColor:function(e){switch(e){case"Comunicados":return"#BAC0CB";case"Desporto":return"#BA292C";case"Discursos":return"#549EFF";case"Ensino":return"#00BD9D";case"Geral":return"#F8D01C";case"Politica":return"#FF7733";default:return"000000"}},publishNews:function(){var e=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){var t,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.isFormFilled){r.next=2;break}return r.abrupt("return");case 2:if(t=new Date,n={title:e.titulo,category:e.category,categoryColor:e.getCategoryColor(e.category),date:"".concat(t.getDate()," de ").concat(e.getMes(t.getMonth+1),", ").concat(t.getFullYear),paragraphs:e.paragrafo,imageLink:e.nomeDoFicheiro,signature:e.assinatura,token:e.authToken},!e.authToken){r.next=8;break}return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},r.next=8,fetch("https://aaue-blogs.onrender.com/api/admin/createBlogpost",a).then((function(r){r.ok&&(e.formSent=!0,e.clearInfo())})).catch((function(r){e.errorMessage=r.message,console.log(r)}));case 8:case"end":return r.stop()}}),r)})))()},incrementNumberOfParagraphs:function(){this.numberOfParagraphs++},decrementNumberOfParagraphs:function(){this.numberOfParagraphs<=1?this.numberOfParagraphs=1:(this.numberOfParagraphs--,this.paragrafo.pop())},createNews:function(){this.headerText="Criar nova notícia",this.currentNoticia="",this.clearInfo()},editNews:function(){var e=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.headerText="Editar notícia",e.currentNoticia="",r.next=4,e.getTitulosDasNoticias();case 4:case"end":return r.stop()}}),r)})))()},deleteNews:function(){var e=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.headerText="Eliminar notícia",e.currentNoticia="",r.next=4,e.getTitulosDasNoticias();case 4:case"end":return r.stop()}}),r)})))()},getTitulosDasNoticias:function(){var e=this;return(0,Y.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json"}},r.next=3,fetch("https://aaue-blogs.onrender.com/api/getAllBlogpostTitles",t).then(function(){var r=(0,Y.Z)(regeneratorRuntime.mark((function r(t){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.json();case 2:if(e.titulos=r.sent,t.ok){r.next=6;break}return n=data&&data.message||t.status,r.abrupt("return",Promise.reject(n));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()},getNoticiaInfo:function(e){var r=this;return(0,Y.Z)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},a="https://aaue-blogs.onrender.com/api/getBlogpost/".concat(e),t.next=4,fetch(a,n).then(function(){var e=(0,Y.Z)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=6;break}return a=n&&n.message||t.status,e.abrupt("return",Promise.reject(a));case 6:r.titulo=n.title,r.category=n.category,r.category=n.categoryColor,r.dataDePublicacao=n.date,r.paragrafo=n.paragraphs,r.numberOfParagraphs=n.paragraphs.length,r.assinatura=n.signature;case 13:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})))()},clearInfo:function(){this.titulo="",this.category="",this.category="",this.dataDePublicacao="",this.paragrafo=[],this.assinatura="",this.numberOfParagraphs=1}}};const ie=(0,te.Z)(oe,[["render",V],["__scopeId","data-v-7a69fe9d"]]);var ue=ie}}]);
//# sourceMappingURL=Api-legacy.b3346dac.js.map