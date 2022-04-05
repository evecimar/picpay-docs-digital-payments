/*! For license information please see 2.2a2973e2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(67),o=a.n(c);t.a=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:o.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(118),o=a(117),l=a(245),i=a(68),s=a.n(i);t.a=function(){var e,t=Object(l.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,i=Object(o.useThemeConfig)().announcementBar;if(!i)return null;var u=i.content,d=i.backgroundColor,f=i.textColor,m=i.isCloseable;return!u||m&&a?null:r.a.createElement("div",{className:s.a.announcementBar,style:{backgroundColor:d,color:f},role:"banner"},r.a.createElement("div",{className:Object(c.a)(s.a.announcementBarContent,(e={},e[s.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:u}}),m?r.a.createElement("button",{type:"button",className:s.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},146:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(118),i=a(122),s=a(117),u=a(126),d=a(72),f=a.n(d);function m(e){var t=e.to,a=e.href,c=e.label,l=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(u.a)(t),f=Object(u.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:l?f:a}:{to:d},s),c)}var h=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,c=t.logo,i=void 0===c?{}:c,d=Object(u.a)(i.src);return e?o.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},r&&r.length>0&&o.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(m,e))}))):null)}))),(i||a)&&o.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&o.a.createElement("div",{className:"margin-bottom--sm"},i.href?o.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},o.a.createElement(h,{alt:i.alt,url:d})):o.a.createElement(h,{alt:i.alt,url:d})),a?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(24);function o(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(c.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}},148:function(e,t,a){"use strict";var n=a(0);a(73);t.a=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])}},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(0),r=a.n(n),c=a(7),o=a(117),l="light",i="dark",s=function(e){return e===i?i:l},u=function(){return c.a.canUseDOM?s(document.documentElement.getAttribute("data-theme")):l},d=function(e){try{localStorage.setItem("theme",s(e))}catch(t){console.error(t)}},f=function(){var e=Object(o.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(u),c=r[0],f=r[1],m=Object(n.useCallback)((function(){f(l),d(l)}),[]),h=Object(n.useCallback)((function(){f(i),d(i)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&f(s(e))}catch(a){console.error(a)}}),[f]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;f(t?i:l)}))}),[]),{isDarkTheme:c===i,setLightTheme:m,setDarkTheme:h}},m=a(247);var h=function(e){var t=f(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(m.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},v="docusaurus.tab.",b=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(v))e[n.substring(v.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},p="docusaurus.announcement.dismiss",g="docusaurus.announcement.id",k=function(){var e=Object(o.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(p,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(g);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(g,t),n&&localStorage.setItem(p,"false"),(n||"false"===localStorage.getItem(p))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},O=a(246);var j=function(e){var t=b(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=k(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(O.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function E(e){var t=e.children;return r.a.createElement(h,null,r.a.createElement(j,null,r.a.createElement(o.DocsPreferredVersionContextProvider,null,t)))}},161:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),o=a(118),l=a(145),i=a(351),s=a.n(i),u=a(117),d=a(22),f=a(69),m=a.n(f),h=function(e){var t=e.icon,a=e.style;return c.a.createElement("span",{className:Object(o.a)(m.a.toggle,m.a.dark),style:a},t)},v=function(e){var t=e.icon,a=e.style;return c.a.createElement("span",{className:Object(o.a)(m.a.toggle,m.a.light),style:a},t)},b=function(e){var t=Object(u.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=Object(d.default)().isClient;return c.a.createElement(s.a,Object(n.a)({disabled:!i,icons:{checked:c.a.createElement(h,{icon:a,style:r}),unchecked:c.a.createElement(v,{icon:o,style:l})}},e))},p=a(180),g=a(125),k=a(248),O=function(e){var t=Object(g.useLocation)(),a=Object(r.useState)(!e),n=a[0],c=a[1],o=Object(r.useRef)(!1),l=Object(r.useState)(0),i=l[0],s=l[1],u=Object(r.useState)(0),d=u[0],f=u[1],m=Object(r.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(k.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(r.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(r.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}},j=a(249),E=a(250),y=a(8),_=a(169);function C(e){var t=e.mobile,a=Object(y.a)(e,["mobile"]),r=Object(d.default)(),o=r.siteConfig.baseUrl,l=r.i18n,i=l.defaultLocale,s=l.currentLocale,u=l.locales,f=l.localeConfigs,m=Object(g.useLocation)().pathname;function h(e){return f[e].label}var v=s===i?o:o.replace("/"+s+"/","/"),b=m.replace(o,"");var p=u.map((function(e){var t=""+function(e){return e===i?""+v:""+v+e+"/"}(e)+b;return{isNavLink:!0,label:h(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===s?"dropdown__link--active":""}})),k=t?"Languages":h(s);return c.a.createElement(_.a,Object(n.a)({},a,{mobile:t,label:k,items:p}))}var N={default:function(){return _.a},localeDropdown:function(){return C},docsVersion:function(){return a(355).default},docsVersionDropdown:function(){return a(356).default},doc:function(){return a(357).default}};function w(e){var t=e.type,a=Object(y.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=N[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return c.a.createElement(n,a)}var T=a(341),S=a(251),L=a(71),I=a.n(L),x="right";t.a=function(){var e,t,a=Object(u.useThemeConfig)(),i=a.navbar,s=i.items,d=i.hideOnScroll,f=i.style,m=a.colorMode.disableSwitch,h=Object(r.useState)(!1),v=h[0],g=h[1],k=Object(r.useState)(!1),y=k[0],_=k[1],C=Object(p.a)(),N=C.isDarkTheme,L=C.setLightTheme,B=C.setDarkTheme,D=O(d),P=D.navbarRef,M=D.isNavbarVisible;Object(j.a)(v);var A=Object(r.useCallback)((function(){g(!0)}),[g]),V=Object(r.useCallback)((function(){g(!1)}),[g]),X=Object(r.useCallback)((function(e){return e.target.checked?B():L()}),[L,B]),H=Object(E.a)();Object(r.useEffect)((function(){H===E.b.desktop&&g(!1)}),[H]);var R=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:x)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:x)}))}}(s),U=R.leftItems,F=R.rightItems;return c.a.createElement("nav",{ref:P,className:Object(o.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===f,"navbar--primary":"primary"===f,"navbar-sidebar--show":v},e[I.a.navbarHideable]=d,e[I.a.navbarHidden]=!M,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=s&&0!==s.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},c.a.createElement(S.a,null)),c.a.createElement(T.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(o.a)("navbar__title",(t={},t[I.a.hideLogoText]=y,t))}),U.map((function(e,t){return c.a.createElement(w,Object(n.a)({},e,{key:t}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},F.map((function(e,t){return c.a.createElement(w,Object(n.a)({},e,{key:t}))})),!m&&c.a.createElement(b,{className:I.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:X}),c.a.createElement(l.a,{handleSearchBarToggle:_,isSearchBarExpanded:y}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(T.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:V}),!m&&v&&c.a.createElement(b,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:X})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},s.map((function(e,t){return c.a.createElement(w,Object(n.a)({mobile:!0},e,{onClick:V,key:t}))})))))))}},169:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(118),i=a(122),s=a(126),u=a(125),d=a(117);function f(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:m?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function m(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),h=m[0],v=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":h})},o.a.createElement(f,Object(n.a)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!h))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(f,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},l)))})))):o.a.createElement(f,Object(n.a)({className:b(i)},s))}function h(e){var t,a,i=e.items,s=e.className,m=(e.position,Object(r.a)(e,["items","className","position"])),h=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,b=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),p=b[0],g=b[1],k=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(n.a)({className:k(s)},m)));var O=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(a=h.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(f,Object(n.a)({role:"button",className:k(s,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:p?void 0:O}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(n.a)({activeClassName:"menu__link--active",className:k(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:m;return o.a.createElement(c,n)}},180:function(e,t,a){"use strict";var n=a(0),r=a(247);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},245:function(e,t,a){"use strict";var n=a(0),r=a(246);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},246:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},247:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},248:function(e,t,a){"use strict";var n=a(0),r=a(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},249:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},250:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},251:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},341:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(122),i=a(118),s=a(22),u=a(180),d=a(70),f=a.n(d),m=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,m=void 0===d?"":d,h=Object(r.a)(e,["sources","className","alt"]),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:m,className:Object(i.a)(f.a.themedImage,f.a["themedImage--"+e],l)},h))})))},h=a(126),v=a(117),b=a(181);t.a=function(e){var t=Object(s.default)().isClient,a=Object(v.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,f=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(h.a)(u.href||"/"),k=u.target?{target:u.target}:Object(b.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},O={light:Object(h.a)(u.src),dark:Object(h.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,k),u.src&&o.a.createElement(m,{key:t,className:d,sources:O,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:f},c))}},351:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(135)),i=f(a(1)),s=f(a(352)),u=f(a(353)),d=a(354);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},352:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},353:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},354:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},355:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(169),i=a(139),s=a(117);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(i.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=f?f:m)&&void 0!==t?t:h,b=null!=a?a:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:b,to:p}))}},356:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(169),i=a(139),s=a(117),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),k=Object(s.useDocsPreferredVersion)(d),O=k.preferredVersion,j=k.savePreferredVersionName;var E=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:O)&&void 0!==t?t:g,y=c?"Versions":E.label,_=c?void 0:u(E).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:y,to:_,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},357:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),c=a(0),o=a.n(c),l=a(169),i=a(139),s=a(118),u=a(117);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(m),b=v.activeVersion,p=v.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,k=Object(i.useLatestVersion)(m),O=null!==(t=null!=b?b:g)&&void 0!==t?t:k,j=O.docs.find((function(e){return e.id===c}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+O.name+".\nAvailable docIds=\n- "+O.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===j.sidebar,a)),label:null!=f?f:j.id,to:j.path}))}}}]);