(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,n,t){},112:function(e,n,t){},115:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(17),o=t.n(l),i=t(117),s=t(119),c=t(116),u=t(15),p=t(6),m=t.n(p),f=t(16),d=t(9),g=t(10),b=t(12),h=t(11),x=t(13),v=t(50),E=t.n(v),y=t(14),w=(t(28),t(51)),O=t.n(w).a.create({baseURL:"https://api.github.com/"}),k=t(22),j=t(20),N=t.n(j),_=t(4),F=t(5);function S(){var e=Object(_.a)(["\n  width: 250px;\n  background: white;\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: 10px;\n  position: relative;\n  flex-wrap: wrap;\n\n  small {\n    color: #666;\n  }\n\n  header {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    margin-bottom: 20px;\n    flex-wrap: wrap;\n    padding: 0 20px;\n  }\n\n  img {\n    width: 70px;\n    margin-bottom: 5px;\n  }\n\n  ul {\n    list-style: none;\n\n    li {\n      margin-bottom: 5px;\n      padding: 10px;\n\n      &:last-child {\n        margin: 0;\n      }\n\n      &:nth-child(odd) {\n        background: rgb(240, 243, 247);\n      }\n    }\n  }\n\n  button {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    border: 0;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    right: 3px;\n    top: 3px;\n    background: rgb(240, 243, 247);\n    border-radius: 3px;\n  }\n  a {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    color: dodgerblue;\n    border: 0;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .link {\n    left: 3px;\n    top: 3px;\n    /* background: dodgerblue; */\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n  flex-wrap: wrap;\n\n  section {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    max-width: 1200px;\n  }\n\n  .head {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    max-width: 90%;\n    background: white;\n    border-radius: 3px;\n    flex-wrap: wrap;\n    margin: 5px;\n\n    img {\n      max-width: 80px;\n      max-height: 80px;\n    }\n\n    aside {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 5px;\n\n        p {\n          color: rgb(92, 119, 206);\n        }\n\n        small {\n          margin-left: 5px;\n        }\n      }\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin: 10px;\n\n      small {\n        color: #666;\n      }\n    }\n  }\n"]);return C=function(){return e},e}var A=F.b.div(C()),I=F.b.div(S());N.a.locale("pt-br");var U=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={favorites:[]},t.notifyFavorite=function(e){return y.toast.success("".concat(e," adicionado aos seus favoritos."))},t.saveRepo=function(){var e=Object(f.a)(m.a.mark(function e(n){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.props.favorites.find(function(e){return e.full_name===n.full_name})){e.next=6;break}return e.next=4,t.props.rmFavorite(n.full_name);case 4:return localStorage.setItem("@myrepos:Favorites",JSON.stringify(t.props.favorites)),e.abrupt("return");case 6:return a=n.full_name.split("/"),r=Object(k.a)(a,2),r[1],e.next=9,t.props.addFavorite(n);case 9:localStorage.setItem("@myrepos:Favorites",JSON.stringify(t.props.favorites));case 10:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({favorites:this.props.favorites||[]})}},{key:"render",value:function(){var e=this,n=this.props,t=n.repos,a=n.user;return a?r.a.createElement(A,null,r.a.createElement(y.ToastContainer,null),r.a.createElement("section",null,r.a.createElement("header",{key:a.id,className:"head"},r.a.createElement("aside",null,r.a.createElement("img",{src:a.avatar_url,alt:a.name}),r.a.createElement("div",null,r.a.createElement("strong",null,a.login),r.a.createElement("small",null,a.html_url),a.following||a.followers?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("small",null,"Following ",a.following)," ",r.a.createElement("small",null,"Followers ",a.followers)," ")):null))),a.company||a.location||a.blog?r.a.createElement("header",{className:"head"},r.a.createElement("aside",null,r.a.createElement("div",null,a.company?r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-building"})),r.a.createElement("small",null,a.company)):null,a.location?r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-map-marked"})),r.a.createElement("small",null,a.location)):null,a.blog?r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-blog"})),r.a.createElement("small",null,a.blog)):null))):null,a.bio?r.a.createElement("header",{className:"head"},r.a.createElement("aside",null,r.a.createElement("div",null,r.a.createElement("small",null,a.bio)))):null),r.a.createElement("section",null,t.map(function(n){return r.a.createElement(I,{key:n.id},r.a.createElement("header",null,r.a.createElement("strong",null,n.name),r.a.createElement("small",null,n.full_name)),r.a.createElement("ul",null,r.a.createElement("li",null,n.stargazers_count," ",r.a.createElement("small",null,"stars")),r.a.createElement("li",null,n.forks," ",r.a.createElement("small",null,"forks")),r.a.createElement("li",null,n.open_issues_count," ",r.a.createElement("small",null,"issues")),r.a.createElement("li",null,N()(n.updated_at).fromNow()," ",r.a.createElement("small",null,"last commit")),r.a.createElement("li",null,n.language," ",r.a.createElement("small",null,"language"))),r.a.createElement("button",{title:"Favorite",onClick:function(){return e.saveRepo(n)}},e.props.favorites.find(function(e){return e.id===n.id})?r.a.createElement("i",{style:{color:"red"},className:"fas fa-heart"}):r.a.createElement("i",{style:{color:"#666"},className:"fas fa-heart"})),r.a.createElement("a",{title:"Acessar",href:n.html_url,target:"_blank",rel:"noopener noreferrer",className:"link"},r.a.createElement("i",{className:"fas fa-anchor"})))}))):null}}]),n}(a.Component),D=Object(u.b)(function(e){return{favorites:e.favorites}},function(e){return{rmFavorite:function(n){return e({type:"RM_FAVORITE",payload:{name:n}})},addFavorite:function(n){return e({type:"ADD_FAVORITE",payload:{repository:n}})}}})(U);function R(){var e=Object(_.a)(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* margin: 10px 0; */\n\n  span {\n    margin-top: 10px;\n  }\n\n  form {\n    width: 100%;\n    max-width: 450px;\n    display: flex;\n\n    input {\n      flex: 1;\n      height: 30px;\n      margin-right: 5px;\n      color: #333;\n      padding: 0 15px;\n      border: ",";\n    }\n\n    button {\n      width: 40px;\n      height: 30px;\n      background: rgb(92, 119, 206);\n      color: white;\n      border: 0;\n    }\n  }\n"]);return R=function(){return e},e}var M=F.b.div(R(),function(e){return e.inputError?"2px dashed red":0}),L=(t(102),function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={inputUser:"",lastInputUser:"",error:!1,errorStyle:!1,repositories:[],user:null,reposLenght:0,loading:!1,pageCount:0,currentPage:1},t.notify=function(e,n){return Object(y.toast)(" Foram encontrados "+e+" reposit\xf3rios p\xfablicos de "+n+" !")},t.handleUser=function(){var e=Object(f.a)(m.a.mark(function e(n){var a,r,l,o,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({error:!1,loading:!0}),a=t.state.inputUser,e.prev=3,e.next=6,O("/users/".concat(a,"/repos"));case 6:return r=e.sent,l=r.data,e.next=10,O("/users/".concat(a));case 10:o=e.sent,i=o.data,t.notify(i.public_repos,i.name),t.setState({repositories:l||[],user:i,pageCount:i.public_repos/30}),e.next=21;break;case 16:if(e.prev=16,e.t0=e.catch(3),!e.t0.response||404!==e.t0.response.status){e.next=20;break}return e.abrupt("return",t.setState({error:"Usu\xe1rio n\xe3o existe.",errorStyle:!0}));case 20:return e.abrupt("return",t.setState({error:e.t0.message,errorStyle:!0}));case 21:return e.prev=21,t.setState({loading:!1}),e.finish(21);case 24:case"end":return e.stop()}},e,null,[[3,16,21,24]])}));return function(n){return e.apply(this,arguments)}}(),t.handlePageClick=function(){var e=Object(f.a)(m.a.mark(function e(n){var a,r,l,o,i,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.lastInputUser,r=n.selected+1,e.next=4,O("/users/".concat(a,"/repos?page=").concat(r));case 4:return l=e.sent,o=l.data,e.next=8,O("/users/".concat(a));case 8:i=e.sent,s=i.data,console.log("page: ",r),t.setState({repositories:o||[],user:s,pageCount:s.public_repos/30});case 12:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.inputUser,l=n.user,o=n.error,i=n.repositories,s=n.loading;return r.a.createElement(a.Fragment,null,r.a.createElement(M,{inputError:o},r.a.createElement(y.ToastContainer,null),r.a.createElement("form",{onSubmit:this.handleUser},r.a.createElement("input",{onChange:function(n){return e.setState({inputUser:n.target.value.trim(),lastInputUser:n.target.value.trim()})},value:t,placeholder:"Type a name of user.",type:"text"})," ",s?r.a.createElement("button",{disabled:!0},r.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-angle-double-right"}))," "),r.a.createElement("span",null,o||null)),r.a.createElement(D,{repos:i,user:l}),r.a.createElement(E.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}}]),n}(r.a.Component));function T(){var e=Object(_.a)(["\n  width: 250px;\n  background: white;\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: 10px;\n  position: relative;\n\n  small {\n    color: #666;\n  }\n  header {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n  img {\n    width: 70px;\n    margin-bottom: 5px;\n    border-radius: 3px;\n  }\n  ul {\n    list-style: none;\n    li {\n      margin-bottom: 5px;\n      padding: 10px;\n      &:last-child {\n        margin: 0;\n      }\n      &:nth-child(odd) {\n        background: rgb(240, 243, 247);\n      }\n    }\n  }\n  button,\n  a {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    color: white;\n    border: 0;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .update {\n    right: 3px;\n    top: 3px;\n    background: rgb(105, 192, 34);\n  }\n  .delete {\n    right: 3px;\n    top: 36px;\n    background: rgb(236, 54, 8);\n  }\n  .link {\n    color:dodgerblue;\n    left: 3px;\n    top: 3px;\n  }\n"]);return T=function(){return e},e}function J(){var e=Object(_.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 20px;\n  flex-wrap: wrap;\n"]);return J=function(){return e},e}var z=F.b.div(J()),V=F.b.div(T());N.a.locale("pt-br");var P=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).handleDelete=function(){var e=Object(f.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.notifyDelete(n),e.next=3,t.props.rmFavorite(n);case 3:localStorage.setItem("@myrepos:Favorites",JSON.stringify(t.props.favorites));case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.handleUpdate=function(){var e=Object(f.a)(m.a.mark(function e(n){var a,r,l,o,i,s,c,u;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.favorites.filter(function(e){return e.id===n}),r=Object(k.a)(a,1),l=r[0].full_name,o=l.split("/"),i=Object(k.a)(o,2),s=i[1],t.notifyUpdate(s),e.next=5,O("/repos/".concat(l));case 5:return c=e.sent,u=c.data,e.next=9,t.props.upFavorite(n,u);case 9:localStorage.setItem("@myrepos:Favorites",JSON.stringify(t.props.favorites));case 10:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.notifyDelete=function(e){return y.toast.warn(e+" exclu\xeddo com sucesso!")},t.notifyUpdate=function(e){return y.toast.info(e+" atualizado!")},t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.favorites||[];this.setState({favorites:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(z,null,r.a.createElement(y.ToastContainer,null),this.props.favorites.map(function(n){return r.a.createElement(V,{key:n.id},r.a.createElement("header",null,r.a.createElement("img",{src:n.owner.avatar_url,alt:n.name}),r.a.createElement("strong",null,n.name),r.a.createElement("small",null,n.full_name)),r.a.createElement("ul",null,r.a.createElement("li",null,n.stargazers_count," ",r.a.createElement("small",null,"stars")),r.a.createElement("li",null,n.forks," ",r.a.createElement("small",null,"forks")),r.a.createElement("li",null,n.open_issues_count," ",r.a.createElement("small",null,"issues")),r.a.createElement("li",null,N()(n.updated_at).fromNow()," ",r.a.createElement("small",null,"last commit")),r.a.createElement("li",null,n.language," ",r.a.createElement("small",null,"language"))),r.a.createElement("button",{title:"Atualizar",className:"update",onClick:function(){return e.handleUpdate(n.id)}},r.a.createElement("i",{className:"fa fa-hammer"})),r.a.createElement("button",{title:"Apagar",className:"delete",onClick:function(){return e.handleDelete(n.full_name)}},r.a.createElement("i",{className:"fa fa-bug"})),r.a.createElement("a",{title:"Acessar",href:n.html_url,target:"_blank",rel:"noopener noreferrer",className:"link"},r.a.createElement("i",{className:"fas fa-anchor"})))}))}}]),n}(a.Component),q=Object(u.b)(function(e){return{favorites:e.favorites}},function(e){return{rmFavorite:function(n){return e({type:"RM_FAVORITE",payload:{name:n}})},upFavorite:function(n,t){return e({type:"UP_FAVORITE",payload:{id:n,repository:t}})}}})(P);t(104);function H(){var e=Object(_.a)(["\n  * {\n        padding: 0; margin: 0;\n        box-sizing: border-box;\n        outline: 0;\n        -webkit-hyphens: auto;\n        -moz-hyphens: auto;\n        -ms-hyphens: auto;\n        hyphens: auto;\n    }\n    body {\n        text-rendering: optimizeLegibility !important;\n        -webkit-font-smoothing: antialiased !important;\n        background: rgb(233, 236, 240);\n        font-family: Arial, Helvetica, sans-serif;\n        margin-bottom: 50px;\n    }\n\n    #root {\n        display: flex;\n        flex-direction:column;\n        align-items:center;\n    }\n"]);return H=function(){return e},e}var B=Object(F.a)(H()),W=t(19),G=t(57),K=JSON.parse(localStorage.getItem("@myrepos:Favorites"))||[];var Q=Object(W.b)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_FAVORITE":return[].concat(Object(G.a)(e),[n.payload.repository]);case"RM_FAVORITE":return e.filter(function(e){return e.full_name!==n.payload.name});case"UP_FAVORITE":return e.map(function(e){return e.id===n.payload.id?n.payload.repository:e});default:return e}}}),X=Object(W.c)(Q);function Y(){var e=Object(_.a)(["\n  display: flex;\n  justify-content:center;\n  align-items: center;\n  width: 100%;\n\n  p {\n    margin-right: 10px;\n  }\n\n  .color{\n    color: #666;\n    /* animation: colors 0.5s ease infinite; */\n  }\n\n  @keyframes colors {\n    0% {\n      color: red;\n    }\n\n    100% {\n      color: blue;\n    }\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(_.a)(["\n    width: 100%;\n    color: white;\n    height: 50px;\n    background: rgb(92, 119, 206);\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    margin-bottom: 10px;\n"]);return Z=function(){return e},e}var $=F.b.header(Z()),ee=F.b.div(Y()),ne=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={favoritesLenght:0},t.getFavorites=function(){return JSON.parse(localStorage.getItem("@myrepos:Favorites"))?JSON.parse(localStorage.getItem("@myrepos:Favorites")).length:0},t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({favoritesLenght:this.getFavorites()})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement($,null,r.a.createElement("h3",null,"Voc\xea tem ",this.props.favoritesLength," favoritos.")),r.a.createElement(ee,null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-heart color"})," Favorite"),r.a.createElement("p",null,r.a.createElement("i",{style:{color:"green"},className:"fa fa-hammer"})," Update"),r.a.createElement("p",null,r.a.createElement("i",{style:{color:"red"},className:"fa fa-bug"})," Delete"),r.a.createElement("p",null,r.a.createElement("i",{style:{color:"dodgerblue"},className:"fas fa-anchor"})," Link")))}}]),n}(a.Component),te=Object(u.b)(function(e){return{favoritesLength:e.favorites.length}})(ne),ae=t(118),re=t(54),le=t.n(re);function oe(){var e=Object(_.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: rgb(92, 119, 206);\n  color: white;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n\n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  i {\n    font-size: 20px;\n  }\n\n  button#openModal {\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: white;\n  }\n"]);return oe=function(){return e},e}var ie=F.b.div(oe()),se=(t(112),function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(b.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={modalIsOpen:!1},t.openModal=function(){t.setState({modalIsOpen:!0})},t.closeModal=function(){t.setState({modalIsOpen:!1})},t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(le.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,className:"modalWrapper",overlayClassName:"modalOverlay",ariaHideApp:!1},r.a.createElement("small",null,"Developed by: @adenilson-santos"),r.a.createElement("section",null,r.a.createElement("a",{title:"Acessar",href:"https://adenilson-santos.github.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square"})),r.a.createElement("a",{title:"Acessar",href:"https://www.linkedin.com/in/adenilson-santos",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement(ie,null,r.a.createElement(ae.a,{exact:!0,to:"/",activeStyle:{display:"none"}},r.a.createElement("i",{className:"fas fa-arrow-left"})),r.a.createElement("button",{id:"openModal",onClick:this.openModal},r.a.createElement("i",{className:"fas fa-coffee"})),r.a.createElement(ae.a,{exact:!0,to:"/favorites",activeStyle:{display:"none"}},r.a.createElement("i",{className:"fas fa-arrow-right"}))))}}]),n}(r.a.Component)),ce=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,{store:X},r.a.createElement(B,null),r.a.createElement(te,null),r.a.createElement(s.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:L}),r.a.createElement(c.a,{exact:!0,path:"/favorites",component:q})),r.a.createElement(se,null)))};o.a.render(r.a.createElement(ce,null),document.getElementById("root"))},60:function(e,n,t){e.exports=t(115)}},[[60,2,1]]]);
//# sourceMappingURL=main.42919520.chunk.js.map