(window.webpackJsonp=window.webpackJsonp||[]).push([[31,7],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(119),c=a(206),i=a(116);var s=function(e){const{nextItem:t,prevItem:a}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},o=a(167),m=a(244),d=a(201);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:i}=t,{title:u,description:E,nextItem:p,prevItem:h,editUrl:g}=i,{hide_table_of_contents:f}=n;return r.a.createElement(l.a,{title:u,description:E,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:a})),r.a.createElement("main",{className:"col col--8"},r.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,g&&r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(d.a,null),"Edit this page")),(p||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:p,prevItem:h}))),!f&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{toc:t.toc})))))}},119:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(111),c=a(136),i=a(137),s=a(155),o=a(140),m=a(154),d=a(3),u=a(24),E=a(22),p=a(117),h=a(141),g=a(110);function f(e){const{siteConfig:t,i18n:{currentLocale:a}}=Object(E.default)(),{favicon:n,themeConfig:{image:l,metadatas:c},url:i}=t,{title:s,description:o,image:m,keywords:f,permalink:v,searchMetadatas:b}=e,_=Object(g.useTitleFormatter)(s),N=m||l,j=Object(p.a)(N,{absolute:!0}),O=Object(p.a)(n),w=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("html",{lang:w}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),o&&r.a.createElement("meta",{name:"description",content:o}),o&&r.a.createElement("meta",{property:"og:description",content:o}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:j}),N&&r.a.createElement("meta",{name:"twitter:image",content:j}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${_}`}),v&&r.a.createElement("meta",{property:"og:url",content:i+v}),v&&r.a.createElement("link",{rel:"canonical",href:i+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(h.a,Object(d.a)({tag:g.DEFAULT_SEARCH_TAG,locale:a},b)),r.a.createElement(u.a,null,c.map(((e,t)=>r.a.createElement("meta",Object(d.a)({key:`metadata_${t}`},e))))))}var v=a(142);a(55);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return Object(v.a)(),r.a.createElement(m.a,null,r.a.createElement(f,e),r.a.createElement(c.a,null),r.a.createElement(i.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},t),!a&&r.a.createElement(o.a,null))}},138:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(129),c=a.n(l),i=a(114),s=a(22);t.a=e=>{const t=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(i.useHistory)(),{siteConfig:m={}}=Object(s.default)(),{baseUrl:d}=m,u=()=>{t.current||(Promise.all([fetch(`${d}search-doc.json`).then((e=>e.json())),fetch(`${d}lunr-index.json`).then((e=>e.json())),Promise.all([a.e(39),a.e(43)]).then(a.bind(null,156)),a.e(25).then(a.t.bind(null,153,7))]).then((([e,t,{default:a}])=>{0!==e.length&&((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=d+a.url;document.createElement("a").href=n,o.push(n)}})})(e,t,a)})),t.current=!0)},E=Object(n.useCallback)((t=>{l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:E,onKeyDown:E,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:E,onBlur:E,ref:l}))}},201:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(111),i=a(58),s=a.n(i);t.a=({className:e,...t})=>l.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(s.a.iconEdit,e)},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(111);var c=function(e,t,a){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!c;){const e=i[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===o&&(r&&r.classList.remove(t),e.classList.add(t),l(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(57),s=a.n(i);const o="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return c(o,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(s.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:e}))}}}]);