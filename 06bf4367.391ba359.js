(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),p=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(a),u=o,g=l["".concat(i,".").concat(u)]||l[u]||m[u]||r;return a?n.a.createElement(g,s(s({ref:t},d),{},{components:a})):n.a.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cancel-transactions-7b9356ad54ff92c07cb3f7ae747c99f3.gif"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(8),r=(a(0),a(115)),i={id:"getting-started",title:"Como come\xe7ar",sidebar_label:"Como come\xe7ar",hide_title:!1,description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",keywords:["Pagamento logado","Pagamento","Login"]},s={unversionedId:"pagamento-logado/intro/getting-started",id:"pagamento-logado/intro/getting-started",isDocsHomePage:!1,title:"Como come\xe7ar",description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",source:"@site/docs/pagamento-logado/intro/getting-started.md",slug:"/pagamento-logado/intro/getting-started",permalink:"/picpay-docs-digital-payments/pagamento-logado/intro/getting-started",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/intro/getting-started.md",version:"current",sidebar_label:"Como come\xe7ar",sidebar:"pagamentoLogado",previous:{title:"Vis\xe3o geral",permalink:"/picpay-docs-digital-payments/pagamento-logado/intro/overview"},next:{title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/oauth2-flow"}},c=[{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Testando sua integra\xe7\xe3o",id:"testando-sua-integra\xe7\xe3o",children:[]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(r.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Atualmente, a solu\xe7\xe3o de ",Object(r.b)("strong",{parentName:"p"},"Pagamento Logado")," n\xe3o est\xe1 dispon\xedvel para todos os nossos lojistas. Se interessou? Basta entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")," demonstrando interesse."),Object(r.b)("h2",{id:"testando-sua-integra\xe7\xe3o"},"Testando sua integra\xe7\xe3o"),Object(r.b)("p",null,"Atualmente o PicPay n\xe3o disponibiliza ambiente de SandBox. Todos os testes ser\xe3o feitos no ambiente de produ\xe7\xe3o e n\xe3o geram qualquer \xf4nus ao desenvolvedor/lojista, sendo que todos os pagamentos realizados podem ser imediatamente estornados (atrav\xe9s de nossa API de cancelamento ou pelo painel lojista)."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:a(207).default})),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/oauth2-flow"},"Autentica\xe7\xe3o e autoriza\xe7\xe3o"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/refund-payments"},"Solicitando um reembolso"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")))}p.isMDXComponent=!0}}]);