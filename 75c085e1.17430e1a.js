(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{117:function(e,o,t){"use strict";t.d(o,"a",(function(){return u})),t.d(o,"b",(function(){return b}));var a=t(0),n=t.n(a);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var o=n.a.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=p(e.components);return n.a.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},m=n.a.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?n.a.createElement(b,i(i({ref:o},l),{},{components:t})):n.a.createElement(b,i({ref:o},l))}));function b(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},262:function(e,o,t){"use strict";t.r(o),o.default=t.p+"assets/images/postman-environment-69ae205661a8221c87fc5398a1606660.png"},91:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return i})),t.d(o,"metadata",(function(){return s})),t.d(o,"toc",(function(){return l})),t.d(o,"default",(function(){return u}));var a=t(3),n=t(8),r=(t(0),t(117)),c=["components"],i={id:"postman-collection",title:"Postman Collection",description:"Collection do Postman para pagamento logado",hide_table_of_contents:!0},s={unversionedId:"pagamento-logado/resources/postman-collection",id:"pagamento-logado/resources/postman-collection",isDocsHomePage:!1,title:"Postman Collection",description:"Collection do Postman para pagamento logado",source:"@site/docs/pagamento-logado/resources/postman-collection.md",slug:"/pagamento-logado/resources/postman-collection",permalink:"/picpay-docs-digital-payments/pagamento-logado/resources/postman-collection",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/resources/postman-collection.md",version:"current",sidebar:"pagamentoLogado",previous:{title:"API Reference",permalink:"/picpay-docs-digital-payments/pagamento-logado/resources/api-reference"}},l=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"O que posso fazer com esta collection?",id:"o-que-posso-fazer-com-esta-collection",children:[]},{value:"Talk is cheap, show me the code!",id:"talk-is-cheap-show-me-the-code",children:[{value:"Obtendo a collection",id:"obtendo-a-collection",children:[]},{value:"Configurar suas chaves de integra\xe7\xe3o",id:"configurar-suas-chaves-de-integra\xe7\xe3o",children:[]}]},{value:"N\xe3o achou o que precisava?",id:"n\xe3o-achou-o-que-precisava",children:[]}],p={toc:l};function u(e){var o=e.components,i=Object(n.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},p,i,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste breve guia vamos descrever como utilizar o Postman como ferramente de apoio em sua integra\xe7\xe3o."),Object(r.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(r.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Atualmente, a solu\xe7\xe3o de Pagamento Logado n\xe3o est\xe1 dispon\xedvel para todos os nossos lojistas. Se interessou? Basta entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")," demonstrando interesse."),Object(r.b)("h2",{id:"o-que-posso-fazer-com-esta-collection"},"O que posso fazer com esta collection?"),Object(r.b)("p",null,"Em nossa collection, disponibilizamos os seguintes end-points:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"End-point para gera\xe7\xe3o de tokens;"),Object(r.b)("li",{parentName:"ul"},"End-point de atualiza\xe7\xe3o de tokens;"),Object(r.b)("li",{parentName:"ul"},"End-point para reembolso;"),Object(r.b)("li",{parentName:"ul"},"End-point para cobran\xe7a;"),Object(r.b)("li",{parentName:"ul"},"End-point para obter informa\xe7\xf5es de usu\xe1rios;")),Object(r.b)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code!"),Object(r.b)("h3",{id:"obtendo-a-collection"},"Obtendo a collection"),Object(r.b)("p",null,"Tamb\xe9m \xe9 um f\xe3 de postman como n\xf3s? Acesse nossa collection atrav\xe9s do bot\xe3o abaixo: "),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/e5b4593f331d1cb7fd49"},Object(r.b)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),Object(r.b)("h3",{id:"configurar-suas-chaves-de-integra\xe7\xe3o"},"Configurar suas chaves de integra\xe7\xe3o"),Object(r.b)("p",null,"Ap\xf3s importar nossa collection, voc\xea poder\xe1 configurar suas chaves dentro nas configura\xe7\xf5es de ambientes como exibido abaixo:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:t(262).default})),Object(r.b)("h2",{id:"n\xe3o-achou-o-que-precisava"},"N\xe3o achou o que precisava?"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")))}u.isMDXComponent=!0}}]);