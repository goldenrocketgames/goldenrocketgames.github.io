(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),i=t(4651),l=t(7426);var u={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,_=l.useIntersection({rootMargin:"200px"}),E=r(_,2),x=E[0],N=E[1],j=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=N&&t&&c.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,N,g,t,o]);var k={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,y,m,g)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:o&&o.locale,w=o&&o.isLocaleDomain&&c.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);k.href=w||c.addBasePath(c.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=o.useRef(),u=o.useState(!1),s=r(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},6506:function(e,n,t){"use strict";t.r(n);var r=t(5671),o=t(3144),a=t(9340),c=t(6215),i=t(1120),l=t(7294),u=t(1664),s=t(5893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,i.Z)(e);if(n){var o=(0,i.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}var d=function(e){(0,a.Z)(t,e);var n=f(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,o.Z)(t,[{key:"render",value:function(){return(0,s.jsx)("section",{className:"error-area",children:(0,s.jsx)("div",{className:"d-table",children:(0,s.jsx)("div",{className:"d-table-cell",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"error-content",children:[(0,s.jsx)("img",{src:"/images/404.png",alt:"error"}),(0,s.jsx)("h3",{children:"Page Not Found"}),(0,s.jsx)("p",{children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),(0,s.jsx)(u.default,{href:"/",children:(0,s.jsx)("a",{className:"default-btn-one",children:"Go to Home"})})]})})})})})}}]),t}(l.Component);n.default=d},2448:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(6506)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=2448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);