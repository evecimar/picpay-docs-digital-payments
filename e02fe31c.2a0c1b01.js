(window.webpackJsonp=window.webpackJsonp||[]).push([[32,7],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(119);a.default=function(){return r.a.createElement(c.a,{title:"Hello"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"}},r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"pages/hello.js")," and save to reload.")))}},119:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(111),l=t(136),o=t(137),s=t(155),i=t(140),m=t(154),u=t(3),d=t(24),h=t(22),p=t(117),E=t(141),b=t(110);function f(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(h.default)(),{favicon:n,themeConfig:{image:c,metadatas:l},url:o}=a,{title:s,description:i,image:m,keywords:f,permalink:g,searchMetadatas:j}=e,y=Object(b.useTitleFormatter)(s),w=m||c,O=Object(p.a)(w,{absolute:!0}),k=Object(p.a)(n),v=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("html",{lang:v}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),i&&r.a.createElement("meta",{name:"description",content:i}),i&&r.a.createElement("meta",{property:"og:description",content:i}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:O}),w&&r.a.createElement("meta",{name:"twitter:image",content:O}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${y}`}),g&&r.a.createElement("meta",{property:"og:url",content:o+g}),g&&r.a.createElement("link",{rel:"canonical",href:o+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(E.a,Object(u.a)({tag:b.DEFAULT_SEARCH_TAG,locale:t},j)),r.a.createElement(d.a,null,l.map(((e,a)=>r.a.createElement("meta",Object(u.a)({key:`metadata_${a}`},e))))))}var g=t(142);t(55);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(g.a)(),r.a.createElement(m.a,null,r.a.createElement(f,e),r.a.createElement(l.a,null),r.a.createElement(o.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},a),!t&&r.a.createElement(i.a,null))}},138:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(129),l=t.n(c),o=t(114),s=t(22);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(o.useHistory)(),{siteConfig:m={}}=Object(s.default)(),{baseUrl:u}=m,d=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(39),t.e(43)]).then(t.bind(null,156)),t.e(25).then(t.t.bind(null,153,7))]).then((([e,a,{default:t}])=>{0!==e.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)})),a.current=!0)},h=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);