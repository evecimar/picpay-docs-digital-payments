(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t(128),i=t(251),o=t(126);var m=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(172);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,o=Object(c.default)().siteConfig.title,u=a.blogDescription,d=a.blogTitle,p="/"===a.permalink?o:d;return r.a.createElement(l.a,{title:p,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(m,{metadata:a})))))}},128:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(120),l=t(146),i=t(147),o=t(162),m=t(149),s=t(161),u=t(3),d=t(23),p=t(21),E=t(130),h=t(150),g=t(119);function f(e){var a=Object(p.default)(),t=a.siteConfig,n=a.i18n.currentLocale,c=t.favicon,l=t.themeConfig,i=l.image,o=l.metadatas,m=t.url,s=e.title,f=e.description,b=e.image,v=e.keywords,_=e.permalink,w=e.searchMetadatas,j=Object(g.useTitleFormatter)(s),N=b||i,k=Object(E.a)(N,{absolute:!0}),y=Object(E.a)(c),O=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("html",{lang:O}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),c&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:k}),N&&r.a.createElement("meta",{name:"twitter:image",content:k}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),_&&r.a.createElement("meta",{property:"og:url",content:m+_}),_&&r.a.createElement("link",{rel:"canonical",href:m+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(h.a,Object(u.a)({tag:g.DEFAULT_SEARCH_TAG,locale:n},w)),r.a.createElement(d.a,null,o.map((function(e,a){return r.a.createElement("meta",Object(u.a)({key:"metadata_"+a},e))}))))}var b=t(151);t(57);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(b.a)(),r.a.createElement(s.a,null,r.a.createElement(f,e),r.a.createElement(l.a,null),r.a.createElement(i.a,null),r.a.createElement(o.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},a),!t&&r.a.createElement(m.a,null))}},148:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(137),l=t.n(c),i=t(129),o=t(21);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),m=Object(i.useHistory)(),s=Object(o.default)().siteConfig,u=(void 0===s?{}:s).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(45),t.e(48)]).then(t.bind(null,163)),t.e(0).then(t.t.bind(null,58,7))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,m.push(n)}})}(a,t,n)})),a.current=!0)},p=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:c}))}}}]);