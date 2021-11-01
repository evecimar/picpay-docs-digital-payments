(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return s})),o.d(a,"metadata",(function(){return c})),o.d(a,"toc",(function(){return d})),o.d(a,"default",(function(){return p}));var t=o(3),n=o(8),i=(o(0),o(116)),r=["components"],s={id:"oauth2-flow",title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",sidebar_label:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",hide_title:!1,description:"Aprenda como obter tokens de acesso para sua aplica\xe7\xe3o atrav\xe9s de nossos servi\xe7os oauth2.",keywords:["Pagamento logado","Autentica\xe7\xe3o","Autoriza\xe7\xe3o","Login","Token"]},c={unversionedId:"pagamento-logado/guides/oauth2-flow",id:"pagamento-logado/guides/oauth2-flow",isDocsHomePage:!1,title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",description:"Aprenda como obter tokens de acesso para sua aplica\xe7\xe3o atrav\xe9s de nossos servi\xe7os oauth2.",source:"@site/docs/pagamento-logado/guides/oauth2-flow.md",slug:"/pagamento-logado/guides/oauth2-flow",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/oauth2-flow",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/guides/oauth2-flow.md",version:"current",sidebar_label:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",sidebar:"pagamentoLogado",previous:{title:"Como come\xe7ar",permalink:"/picpay-docs-digital-payments/pagamento-logado/intro/getting-started"},next:{title:"Processando pagamentos",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/process-payments"}},d=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[{value:"Registro do aplicativo",id:"registro-do-aplicativo",children:[]},{value:"Obten\xe7\xe3o do <code>client_id</code> e <code>client_secret</code>",id:"obten\xe7\xe3o-do-client_id-e-client_secret",children:[]}]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Redirecionando usu\xe1rio para tela de login e senha",id:"redirecionando-usu\xe1rio-para-tela-de-login-e-senha",children:[]},{value:"Solicitando a autoriza\xe7\xe3o do usu\xe1rio",id:"solicitando-a-autoriza\xe7\xe3o-do-usu\xe1rio",children:[]},{value:"Obtendo o c\xf3digo de autoriza\xe7\xe3o",id:"obtendo-o-c\xf3digo-de-autoriza\xe7\xe3o",children:[]},{value:"Solicita\xe7\xe3o dos tokens",id:"solicita\xe7\xe3o-dos-tokens",children:[]},{value:"Atualiza\xe7\xe3o dos tokens",id:"atualiza\xe7\xe3o-dos-tokens",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],l={toc:d};function p(e){var a=e.components,s=Object(n.a)(e,r);return Object(i.b)("wrapper",Object(t.a)({},l,s,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(i.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea obtenha um token de acesso para processar pagamentos online com o PicPay atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),Object(i.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(i.b)("h3",{id:"registro-do-aplicativo"},"Registro do aplicativo"),Object(i.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Atualmente, para este produto, o processo de cria\xe7\xe3o de credenciais \xe9 realizado diretamente pelo time do PicPay."),Object(i.b)("p",null,"Para esta solu\xe7\xe3o de pagamentos, o e-commerce j\xe1 deve ser um parceiro do PicPay. Os dados necess\xe1rios para realizar o registro do aplicativo s\xe3o:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"E-mail de cadastro;"),Object(i.b)("li",{parentName:"ul"},"URL de redirecionamento ou URL de callback;")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"A solu\xe7\xe3o de ",Object(i.b)("strong",{parentName:"p"},"Pagamento Logado")," n\xe3o est\xe1 dispon\xedvel para todos os nossos lojistas. Se interessou? Basta entrar em contato atrav\xe9s do e-mail ",Object(i.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")," demonstrando interesse."))),Object(i.b)("h3",{id:"obten\xe7\xe3o-do-client_id-e-client_secret"},"Obten\xe7\xe3o do ",Object(i.b)("inlineCode",{parentName:"h3"},"client_id")," e ",Object(i.b)("inlineCode",{parentName:"h3"},"client_secret")),Object(i.b)("p",null,"Ap\xf3s o registro do aplicativo, o PicPay compartilhar\xe1 com o e-commerce as credenciais de acesso, na forma de um ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," e um ",Object(i.b)("inlineCode",{parentName:"p"},"client_secret"),". "),Object(i.b)("h4",{id:"um-pouco-mais-sobre-o-client_id"},"Um pouco mais sobre o ",Object(i.b)("inlineCode",{parentName:"h4"},"client_id")),Object(i.b)("p",null,"O client ID \xe9 uma sequ\xeancia exposta publicamente usada pela API de servi\xe7o para identificar o aplicativo e tamb\xe9m para criar URLs de autoriza\xe7\xe3o que s\xe3o apresentadas aos usu\xe1rios."),Object(i.b)("h4",{id:"um-pouco-mais-sobre-o-client_secret"},"Um pouco mais sobre o ",Object(i.b)("inlineCode",{parentName:"h4"},"client_secret")),Object(i.b)("p",null," O client secret \xe9 usado para autenticar a identidade do aplicativo na API de servi\xe7o quando o aplicativo solicita o acesso \xe0 conta de um usu\xe1rio e deve ser mantido privado entre o aplicativo e a API."),Object(i.b)("h2",{id:"como-funciona"},"Como funciona?"),Object(i.b)("p",null,"O fluxo b\xe1sico de autentica\xe7\xe3o e autoriza\xe7\xe3o consiste na gera\xe7\xe3o de um c\xf3digo ap\xf3s o usu\xe1rio digitar seu login/senha em uma interface do PicPay."),Object(i.b)("p",null,"Com o c\xf3digo gerado, o e-commerce deve gerar um token que ser\xe1 utilizado em toda comunica\xe7\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"server to server")," com o PicPay. Este token possibilitar\xe1 que o usu\xe1rio efetue as seguintes opera\xe7\xf5es (dependendo do escopo configurado):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Processar pagamentos;"),Object(i.b)("li",{parentName:"ul"},"Reembolsar pagamentos;"),Object(i.b)("li",{parentName:"ul"},"Obter informa\xe7\xf5es do usu\xe1rio;")),Object(i.b)("h3",{id:"redirecionando-usu\xe1rio-para-tela-de-login-e-senha"},"Redirecionando usu\xe1rio para tela de login e senha"),Object(i.b)("p",null,"Inicialmente, seu e-commerce dever\xe1 redirecionar seus clientes para a p\xe1gina de login e senha do PicPay. Para isso, seu e-commerce dever\xe1 gerar a URL, que dever\xe1 conter seu ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," e url de redirecionamento. Exemplo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/auth?client_id=xxxxxxxxxxxx&response_type=code&redirect_uri=http://yourwebsite.com/api/payments'\n\nhttps://api.picpay.com/oauth2/auth?client_id=CLIENT_ID&response_type=code&redirect_uri=CALLBACK_URL&scope=scopes\n\n")),Object(i.b)("p",null,"Breve explica\xe7\xe3o sobre os parametros da URL acima:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"client_id"),": Identificador da aplica\xe7\xe3o fornecido pelo PicPay;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"redirect_uri"),":  URL para onde o servi\xe7o redireciona o agente do usu\xe1rio ap\xf3s a concess\xe3o de um c\xf3digo de autoriza\xe7\xe3o"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"response_type")," Deve ser igual a ",Object(i.b)("inlineCode",{parentName:"li"},"code"),", especificando que seu aplicativo est\xe1 solicitando uma concess\xe3o de c\xf3digo de autoriza\xe7\xe3o")),Object(i.b)("h3",{id:"solicitando-a-autoriza\xe7\xe3o-do-usu\xe1rio"},"Solicitando a autoriza\xe7\xe3o do usu\xe1rio"),Object(i.b)("p",null,"Ao utilizar a URL do ",Object(i.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow#redirecionando-usu%C3%A1rio-para-tela-de-login-e-senha"},"passo anterior"),", o cliente ser\xe1 redirecionado para uma p\xe1gina de login e senha. Seu cliente dever\xe1 ent\xe3o efetuar o login atrav\xe9s de seu usu\xe1rio e senha do PicPay."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(1120).default})),Object(i.b)("p",null,"Ap\xf3s o login, o cliente dever\xe1 revisar as permiss\xf5es solicitadas pelo aplicativo. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"As permiss\xf5es solicitadas ir\xe3o depender das configura\xe7\xf5es de escopo setadas no momento da cria\xe7\xe3o das credenciais."))),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(1121).default})),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"O cliente poder\xe1 conceder ou n\xe3o as permiss\xf5es. Sua aplica\xe7\xe3o dever\xe1 estar preparada para receber os dois tipos de resposta."),Object(i.b)("p",{parentName:"div"},"Ap\xf3s o concentimento inicial, o PicPay n\xe3o solicitar\xe1 novamente as permiss\xf5es ao cliente. "))),Object(i.b)("h3",{id:"obtendo-o-c\xf3digo-de-autoriza\xe7\xe3o"},"Obtendo o c\xf3digo de autoriza\xe7\xe3o"),Object(i.b)("p",null,"Caso o cliente autorize o aplicativo no ",Object(i.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"passo anterior"),", o usu\xe1rio ser\xe1 redirecionado para a URL de retorno indicada."),Object(i.b)("p",null,"O c\xf3digo de autoriza\xe7\xe3o ser\xe1 enviado como um par\xe2metro junto a URL indicada e dever\xe1 ser utilizado para a gera\xe7\xe3o dos tokens no passo seguinte."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:o(1122).default})),Object(i.b)("h3",{id:"solicita\xe7\xe3o-dos-tokens"},"Solicita\xe7\xe3o dos tokens"),Object(i.b)("p",null,"Para realizar as solicita\xe7\xf5es de pagamento, reembolso ou consulta de informa\xe7\xf5es, o e-commerce dever\xe1 informar um token v\xe1lido como um dos par\xe2metros do header de cada requisi\xe7\xe3o."),Object(i.b)("p",null,"Para tanto, o e-commerce dever\xe1 solicitar um access token com o c\xf3digo de autoriza\xe7\xe3o obtido no ",Object(i.b)("em",{parentName:"p"},"passo 3")," e o ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," e o ",Object(i.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(i.b)("p",null,"Exemplo de requisi\xe7\xe3o de token:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\   \nhttps://api.picpay.com/oauth2/token \\  \n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\  \n-d "grant_type=authorization_code" \\  \n-d "client_id=CLIENT_ID" \\  \n-d "code=AUTHORIZATION_CODE"  \n-d "redirect_uri=REDIRECT_URI" \n')),Object(i.b)("p",null,"Caso esteja tudo certo, enviaremos o token como no exemplo abaixo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "ACCESS_TOKEN",\n  "expires_in": 300, // tempo em segundos\n  "refresh_expires_in": 1800,\n  "refresh_token": "REFRESH_TOKEN",\n  "token_type": "bearer",\n  "id_token": "ID_TOKEN",\n  "not-before-policy": 1585954424,\n  "session_state": "fa158d89-9228-45c6-8486-e159f28b5bd5",\n  "scope": "openid email profile"\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tempo de expira\xe7\xe3o de um token")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"O tempo de expira\xe7\xe3o do token ser\xe1 exibido em segundos. Ap\xf3s a expira\xe7\xe3o o token dever\xe1 ser atualizado atrav\xe9s do ",Object(i.b)("inlineCode",{parentName:"p"},"refresh_token"),"."),Object(i.b)("p",{parentName:"div"},"A dura\xe7\xe3o dos tokens poder\xe1 ser configurada na cria\xe7\xe3o e configura\xe7\xe3o das credenciais pelo PicPay."))),Object(i.b)("h3",{id:"atualiza\xe7\xe3o-dos-tokens"},"Atualiza\xe7\xe3o dos tokens"),Object(i.b)("p",null,"Ap\xf3s um per\xedodo pre-determinado, o ",Object(i.b)("inlineCode",{parentName:"p"},"access_token")," concedido \xe0 aplica\xe7\xe3o ir\xe1 expirar, sendo necess\xe1ria a solicita\xe7\xe3o de um novo ",Object(i.b)("inlineCode",{parentName:"p"},"access_token"),". Para isso, utiliza-se um ",Object(i.b)("inlineCode",{parentName:"p"},"refresh_token"),", gerado na mesma solicita\xe7\xe3o do ",Object(i.b)("inlineCode",{parentName:"p"},"access_token")," (ver Autentica\xe7\xe3o e Autoriza\xe7\xe3o). Abaixo um exemplo de requisi\xe7\xe3o:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\nhttps://api.picpay.com/oauth2/token \\\n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\\n-d "grant_type=refresh_token" \\\n-d "client_id=CLIENT_ID" \\\n-d "client_secret=CLIENT_SECRET" \\\n-d "refresh_token=REFRESH_TOKEN"\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Fluxo de atualiza\xe7\xe3o de tokens")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"O fluxo de atualiza\xe7\xe3o de tokens precisa ser obrigatoriamente previsto em sua aplica\xe7\xe3o dado que o ",Object(i.b)("inlineCode",{parentName:"p"},"refresh_token")," ir\xe1 expirar em algum momento. Caso o token n\xe3o seja atualizado o usu\xe1rio dever\xe1 fazer login e senha novamente."))),Object(i.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(i.b)("p",null,"Com um ",Object(i.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido, seu aplicativo poder\xe1 efetuar cobran\xe7as, reembolsos ou consultar algumas informa\xe7\xf5es b\xe1sicas dos usu\xe1rios. Confira abaixo os pr\xf3ximos passos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/pagamento-logado/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/pagamento-logado/guides/refund-payments"},"Solicitando um reembolso"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/pagamento-logado/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),Object(i.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(i.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(i.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}p.isMDXComponent=!0},1120:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/login-b117abec75beb6a04e274c2520e60852.png"},1121:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/authorization-50f9e4a649b48fe32d6f32a7e22a5d26.png"},1122:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/get-with-code-bf7db0bb4e49247abeaede6011ced180.png"},116:function(e,a,o){"use strict";o.d(a,"a",(function(){return p})),o.d(a,"b",(function(){return b}));var t=o(0),n=o.n(t);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=n.a.createContext({}),l=function(e){var a=n.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},p=function(e){var a=l(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),m=t,b=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return o?n.a.createElement(b,s(s({ref:a},d),{},{components:o})):n.a.createElement(b,s({ref:a},d))}));function b(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);