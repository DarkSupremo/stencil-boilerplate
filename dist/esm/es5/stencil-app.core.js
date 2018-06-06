/*!
 * StencilApp: Core, ES5
 * Built with http://stenciljs.com
 */
function n(n){return{n:n[0],t:n[1],e:!!n[2],r:!!n[3],i:!!n[4]}}function t(n,t){if(_(t)&&"object"!=typeof t&&"function"!=typeof t){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t);if(n===String||2===n)return t.toString()}return t}function e(n,t,e,r){var i=n.o.get(t);i&&((r=i["s-ld"]||i.$activeLoading)&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),n.o.delete(t))}function r(n,t,e){for(var r,i,o=null,u=!1,f=!1,c=arguments.length;c-- >2;)x.push(arguments[c]);for(;x.length>0;)if((e=x.pop())&&void 0!==e.pop)for(c=e.length;c--;)x.push(e[c]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&u?o[o.length-1].u+=e:null===o?o=[f?{u:e}:e]:o.push(f?{u:e}:e),u=f;if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(c in t.class)t.class[c]&&x.push(c);t.class=x.join(" "),x.length=0}null!=t.key&&(r=t.key),null!=t.name&&(i=t.name)}return"function"==typeof n?n(Object.assign({},t,{children:o}),N):{f:n,c:o,u:void 0,a:t,s:r,l:i,v:void 0,p:!1}}function i(n,t,e,r){t.split(" ").forEach(function(t){n[t]=!0,e&&(n[t+"-"+e]=!0,r&&(n[t+"-"+e+"-"+r]=n[t+"-"+r]=!0))})}function o(n,t){n.d.has(t)||(n.d.set(t,!0),n.y?n.queue.write(function(){return u(n,t)}):n.queue.tick(function(){return u(n,t)}))}function u(n,t,e,r,i,o){if(n.d.delete(t),!n.m.has(t)){if(r=n.b.get(t),e=!r){if((i=n.o.get(t))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(function(){u(n,t)}),void(i.$onRender=i["s-rc"]);r=function a(n,t,e,r,i,o,u){try{(function f(n,t,e,r,i,o,u){for(u in n.w.set(r,e),n.g.has(e)||n.g.set(e,{}),(o=Object.assign({color:{type:String}},t.properties)).mode={type:String},o)c(n,o[u],e,r,u,i)})(n,i=n.j(t).M,t,r=new i,e),function a(n,t,e){if(t){var r=n.w.get(e);t.forEach(function(t){e[t.method]={emit:function(e){n.k(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,i.events,r);try{if(o=n.A.get(t)){for(u=0;u<o.length;u+=2)r[o[u]](o[u+1]);n.A.delete(t)}}catch(e){n.O(e,2,t)}}catch(e){r={},n.O(e,7,t,!0)}return n.b.set(t,r),r}(n,t,n.C.get(t));try{r.componentWillLoad&&(o=r.componentWillLoad())}catch(e){n.O(e,3,t)}}else try{r.componentWillUpdate&&(o=r.componentWillUpdate())}catch(e){n.O(e,5,t)}o&&o.then?o.then(function(){return f(n,t,r,e)}):f(n,t,r,e)}}function f(n,t,e,o){(function u(n,t,e,o){try{var u,f,c=t.M.host,a=t.M.encapsulation,s="shadow"===a&&n._.P;if(u=function l(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(t.M.properties,o),f=s?e.shadowRoot:e,o.render||o.hostData||c||u){n.S=!0;var v=o.render&&o.render(),p=void 0;p=o.hostData&&o.hostData(),u&&(p=p?Object.assign(p,u):u),n.S=!1,c&&(p=function d(n,t,e){return n=n||{},Object.keys(t).forEach(function(r){"theme"===r?i(n.class=n.class||{},t[r],e.mode,e.color):"class"===r?i(n[r]=n[r]||{},t[r]):n[r]=t[r]}),n}(p,c,o));var h=n.T.get(e)||{};h.v=f;var y=r(null,p,v);y.p=!0,n.T.set(e,n.render(e,h,y,s,a))}n.x(n,n._,t,o.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(function(n){return n()}),e["s-rc"]=null)}catch(t){n.S=!1,n.O(t,8,e,!0)}})(n,n.j(t),t,e);try{o?t["s-init"]():(e.componentDidUpdate&&e.componentDidUpdate(),m(n.T.get(t)))}catch(e){n.O(e,6,t,!0)}}function c(n,e,r,i,o,u,f,c){if(e.type||e.state){var v=n.g.get(r);e.state||(!e.attr||void 0!==v[o]&&""!==v[o]||(f=u&&u.N)&&_(c=f[e.attr])&&(v[o]=t(e.type,c)),r.hasOwnProperty(o)&&(void 0===v[o]&&(v[o]=t(e.type,r[o])),delete r[o])),i.hasOwnProperty(o)&&void 0===v[o]&&(v[o]=i[o]),e.watchCallbacks&&(v[W+o]=e.watchCallbacks.slice()),l(i,o,function p(t){return(t=n.g.get(n.w.get(this)))&&t[o]},function d(t,r){(r=n.w.get(this))&&(e.state||e.mutable)&&a(n,r,o,t)})}else if(e.elementRef)s(i,o,r);else if(e.method)s(r,o,i[o].bind(i));else if(e.context){var h=n.W(e.context);void 0!==h&&s(i,o,h.L&&h.L(r)||h)}else e.connect&&s(i,o,n.R(e.connect))}function a(n,t,e,r,i,u,f){(i=n.g.get(t))||n.g.set(t,i={});var c=i[e];if(r!==c&&(i[e]=r,u=n.b.get(t))){if(f=i[W+e])for(var a=0;a<f.length;a++)try{u[f[a]].call(u,r,c,e)}catch(n){}!n.S&&t["s-rn"]&&o(n,t)}}function s(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function l(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})}function v(n,t,e,r,i){var o=t!==(t=t.replace(/^xlink\:?/,"")),u=L[t]||r;u&&(!e||"false"===e)||i?o?n.removeAttributeNS(R,S(t)):n.removeAttribute(t):"function"!=typeof e&&(u&&(e=""),o?n.setAttributeNS(R,S(t),e):n.setAttribute(t,e))}function p(n,t,e,r,i,o,u,f,c,a){if("class"!==e||o)if("style"===e){for(f in r=r||O,i=i||O,r)i[f]||(t.style[f]="");for(f in i)i[f]!==r[f]&&(t.style[f]=i[f])}else"o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t?"list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)?(a=n.j(t))&&a.D&&a.D[e]?(d(t,e,i),u&&a.D[e].F&&v(t,a.D[e].H,i,3===a.D[e].q,null==i)):"ref"!==e&&(d(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e)):null!=i&&"key"!==e?v(t,e,i):!o||null!=i&&!1!==i||n._.B(t,e):(e=S(e)in t?S(e.substring(2)):S(e[2])+e.substring(3),i?i!==r&&n._.I(t,e,i):n._.U(t,e));else if(r!==i){var s=null==r||""===r?C:r.trim().split(/\s+/),l=null==i||""===i?C:i.trim().split(/\s+/),p=null==t.className||""===t.className?C:t.className.trim().split(/\s+/);for(f=0,c=s.length;f<c;f++)-1===l.indexOf(s[f])&&(p=p.filter(function(n){return n!==s[f]}));for(f=0,c=l.length;f<c;f++)-1===s.indexOf(l[f])&&(p=p.concat([l[f]]));t.className=p.join(" ")}}function d(n,t,e){try{n[t]=e}catch(n){}}function h(n,t,e,r,i){var o=11===e.v.nodeType&&e.v.host?e.v.host:e.v,u=t&&t.a||O,f=e.a||O;for(i in u)f&&null!=f[i]||null==u[i]||p(n,o,i,u[i],void 0,r,e.p);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||p(n,o,i,u[i],f[i],r,e.p)}function y(n,t){function e(i,o,u,f,c,v,m,b,w){if(b=o.c[u],a||(p=!0,"slot"===b.f&&(l&&t.z(f,l+"-slot",""),b.c?b.Q=!0:b.Y=!0)),_(b.u))b.v=t.Z(b.u);else if(b.Y)b.v=t.Z("");else{if(v=b.v=D||"svg"===b.f?t.G("http://www.w3.org/2000/svg",b.f):t.J(b.Q?"slot-fb":b.f),D="svg"===b.f||"foreignObject"!==b.f&&D,h(n,null,b,D),_(l)&&v["s-si"]!==l&&t.z(v,v["s-si"]=l,""),_(s)&&t.z(v,A,s+"."+u+(function n(t){if(t)for(var e=0;e<t.length;e++)if("slot"!==t[e].f||n(t[e].c))return!0;return!1}(b.c)?"":".")),b.c)for(c=0;c<b.c.length;++c)(m=e(i,b,c,v))&&(_(s)&&3===m.nodeType&&!m["s-cr"]&&t.K(v,t.V("s."+s+"."+c)),t.K(v,m),_(s)&&3===m.nodeType&&!m["s-cr"]&&(t.K(v,t.V("/")),t.K(v,t.Z(" "))));"svg"===b.f&&(D=!1)}return b.v["s-hn"]=d,(b.Q||b.Y)&&(b.v["s-sr"]=!0,b.v["s-cr"]=y,b.v["s-sn"]=b.l||"",(w=i&&i.c&&i.c[u])&&w.f===b.f&&i.v&&r(i.v)),b.v}function r(e,i,o,u){n.X=!0;var a=t.nn(e);for(o=a.length-1;o>=0;o--)(u=a[o])["s-hn"]!==d&&u["s-ol"]&&(t.tn(u),t.en(c(u),u,f(u)),t.tn(u["s-ol"]),u["s-ol"]=null,p=!0),i&&r(u,i);n.X=!1}function i(n,r,i,o,u,c,a,s){var l=n["s-cr"]||n.$defaultHolder;for((a=l&&t.rn(l)||n).shadowRoot&&(a=a.shadowRoot);u<=c;++u)o[u]&&(s=_(o[u].u)?t.Z(o[u].u):e(null,i,u,n))&&(o[u].v=s,t.en(a,s,f(r)))}function o(n,e,i,o){for(;e<=i;++e)_(n[e])&&(o=n[e].v,v=!0,o["s-ol"]?t.tn(o["s-ol"]):r(o,!0),t.tn(o))}function u(n,t){return n.f===t.f&&n.s===t.s&&("slot"!==n.f||n.l===t.l)}function f(n){return n&&n["s-ol"]?n["s-ol"]:n}function c(n){return t.rn(n["s-ol"]?n["s-ol"]:n)}var a,s,l,v,p,d,y,m=[];return function b(w,g,M,j,k,A,E,O,C,P,S,T){if(d=t.in(w),y=w["s-cr"],a=j,s="shadow"!==k?A:null,l=w["s-sc"],p=v=!1,function a(s,l,v){var p=l.v=s.v,d=s.c,y=l.c;D=l.v&&_(t.on(l.v))&&void 0!==l.v.ownerSVGElement,D="svg"===l.f||"foreignObject"!==l.f&&D,_(l.u)?(v=p["s-cr"]||p.$defaultHolder)?t.un(t.rn(v),l.u):s.u!==l.u&&t.un(p,l.u):("slot"!==l.f&&h(n,s,l,D),_(d)&&_(y)?function m(n,s,l,v,p,d,h,y){for(var m=0,b=0,w=s.length-1,g=s[0],M=s[w],j=v.length-1,k=v[0],$=v[j];m<=w&&b<=j;)if(null==g)g=s[++m];else if(null==M)M=s[--w];else if(null==k)k=v[++b];else if(null==$)$=v[--j];else if(u(g,k))a(g,k),g=s[++m],k=v[++b];else if(u(M,$))a(M,$),M=s[--w],$=v[--j];else if(u(g,$))"slot"!==g.f&&"slot"!==$.f||r(t.rn(g.v)),a(g,$),t.en(n,g.v,t.fn(M.v)),g=s[++m],$=v[--j];else if(u(M,k))"slot"!==g.f&&"slot"!==$.f||r(t.rn(M.v)),a(M,k),t.en(n,M.v,g.v),M=s[--w],k=v[++b];else{for(p=null,d=m;d<=w;++d)if(s[d]&&_(s[d].s)&&s[d].s===k.s){p=d;break}_(p)?((y=s[p]).f!==k.f?h=e(s&&s[b],l,p,n):(a(y,k),s[p]=void 0,h=y.v),k=v[++b]):(h=e(s&&s[b],l,b,n),k=v[++b]),h&&t.en(c(g.v),h,f(g.v))}m>w?i(n,null==v[j+1]?null:v[j+1].v,l,v,b,j):b>j&&o(s,m,w)}(p,d,l,y):_(y)?(_(s.u)&&t.un(p,""),i(p,null,l,y,0,y.length-1)):_(d)&&o(d,0,d.length-1)),D&&"svg"===l.f&&(D=!1)}(g,M),_(s)&&t.z(g.v,$,s),p){for(function n(e,r,i,o,u,f,c,a,s,l){for(u=0,f=(r=t.nn(e)).length;u<f;u++){if((i=r[u])["s-sr"]&&(o=i["s-cr"]))for(a=t.nn(t.rn(o)),s=i["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===i["s-hn"]||((3===(l=t.cn(o))||8===l)&&""===s||1===l&&null===t.an(o,"slot")&&""===s||1===l&&t.an(o,"slot")===s)&&(m.some(function(n){return n.sn===o})||(v=!0,o["s-sn"]=s,m.push({ln:i,sn:o})));1===t.cn(i)&&n(i)}}(M.v),E=0;E<m.length;E++)(O=m[E]).sn["s-ol"]||((C=t.Z(""))["s-nr"]=O.sn,t.en(t.rn(O.sn),O.sn["s-ol"]=C,O.sn));for(n.X=!0,E=0;E<m.length;E++){for(O=m[E],S=t.rn(O.ln),T=t.fn(O.ln),C=O.sn["s-ol"];C=t.vn(C);)if((P=C["s-nr"])&&P&&P["s-sn"]===O.sn["s-sn"]&&S===t.rn(P)&&(P=t.fn(P))&&P&&!P["s-nr"]){T=P;break}(!T&&S!==t.rn(O.sn)||t.fn(O.sn)!==T)&&O.sn!==T&&(t.tn(O.sn),t.en(S,O.sn,T))}n.X=!1}return v&&function n(e,r,i,o,u,f,c,a){for(o=0,u=(i=t.nn(e)).length;o<u;o++)if(r=i[o],1===t.cn(r)){if(r["s-sr"])for(c=r["s-sn"],r.hidden=!1,f=0;f<u;f++)if(i[f]["s-hn"]!==r["s-hn"])if(a=t.cn(i[f]),""!==c){if(1===a&&c===t.an(i[f],"slot")){r.hidden=!0;break}}else if(1===a||3===a&&""!==t.pn(i[f]).trim()){r.hidden=!0;break}n(r)}}(M.v),m.length=0,M}}function m(n,t){n&&(n.a&&n.a.ref&&n.a.ref(t?null:n.v),n.c&&n.c.forEach(function(n){m(n,t)}))}function b(n,t){var e={tagName:t},r=n.j(e);if(!r||!r.M)return Promise.resolve(null);var i=r.M,o=function u(n){return Object.keys(n).reduce(function(t,e){var r,i=n[e],o={name:e};if(i.state)r="states",o.dn=i.watchCallbacks||[];else if(i.elementRef)r="elements";else if(i.method)r="methods";else{r="props";var u="any";i.type&&(u=i.type,"function"==typeof i.type&&(u=i.type.name)),o.type=u.toLowerCase(),o.mutable=i.mutable||!1,o.connect=i.connect||"-",o.context=i.connect||"-",o.dn=i.watchCallbacks||[]}return t[r].push(o),t},{hn:[],yn:[],mn:[],bn:[]})}(i.properties||{}),f=(r.wn||[]).map(function(n){return{gn:n.n,capture:n.i,disabled:n.e,passive:n.r,method:n.t}}),c=i.events||[],a=Object.assign({Mn:i.is,jn:r.kn||"unknown",encapsulation:i.encapsulation||"none"},o,{events:{$n:c,listeners:f}});return Promise.resolve(a)}function w(n,r,i,u){i.connectedCallback=function(){(function t(n,e,r){n.An.has(r)||(n.An.set(r,!0),function i(n,t){var e=n.j(t);e.wn&&e.wn.forEach(function(e){e.e||n._.I(t,e.n,function r(n,t,e,i){return function(r){(i=n.b.get(t))?i[e](r):((i=n.A.get(t)||[]).push(e,r),n.A.set(t,i))}}(n,t,e.t),e.i,e.r)})}(n,r)),n.m.delete(r),n.En.has(r)||(n.En.set(r,!0),r["s-id"]||(r["s-id"]=n.On()),function o(n,t,e){for(e=t;e=n._.on(e);)if(n.Cn(e)){n.Pn.has(t)||(n.o.set(t,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,r),n.queue.tick(function(){return n._n(e,r,function t(n,e,r,i,o){return r["s-cr"]||n.an(r,$)||n.P&&1===e.encapsulation||(r["s-cr"]=n.Z(""),r["s-cr"]["s-cn"]=!0,n.en(r,r["s-cr"],n.nn(r)[0])),n.P||1!==e.encapsulation||"shadowRoot"in HTMLElement.prototype||(r.shadowRoot=r),(2===e.encapsulation||1===e.encapsulation&&!n.P)&&n.z(r,(r["s-sc"]="data-"+e.Sn)+"-host",""),1===e.encapsulation&&n.P&&(r.shadowRoot,n.Tn(r,{mode:"open"})),i={xn:r["s-id"],N:{}},e.D&&Object.keys(e.D).forEach(function(t){(o=e.D[t].H)&&(i.N[o]=n.an(r,o))}),i}(n._,e,r))}))})(n,r,this)},i.attributeChangedCallback=function(n,e,i){(function o(n,e,r,i,u,f,c){if(n&&i!==u)for(f in n)if((c=n[f]).H&&S(c.H)===S(r)){e[f]=t(c.q,u);break}})(r.D,this,n,e,i)},i.disconnectedCallback=function(){(function t(n,r,i){!n.X&&function o(n,t){for(;t;){if(!n.rn(t))return 9!==n.cn(t);t=n.rn(t)}}(n._,r)&&(n.m.set(r,!0),e(n,r),m(n.T.get(r),!0),n._.U(r),n.An.delete(r),(i=n.b.get(r))&&i.componentDidUnload&&i.componentDidUnload(),[n.o,n.Nn,n.C].forEach(function(n){return n.delete(r)}))})(n,this)},i["s-init"]=function(){(function t(n,r,i,o,u){if(!n.Pn.has(r)&&(o=n.b.get(r))&&!n.m.has(r)&&(!r["s-ld"]||!r["s-ld"].length)){delete r["s-ld"],n.Pn.set(r,!0);try{m(n.T.get(r)),(u=n.Nn.get(r))&&(u.forEach(function(n){return n(r)}),n.Nn.delete(r)),o.componentDidLoad&&o.componentDidLoad()}catch(t){n.O(t,4,r)}r.classList.add(i),e(n,r)}})(n,this,u)},i.forceUpdate=function(){o(n,this)},function f(n,e,r){e&&Object.keys(e).forEach(function(i){var o=e[i],u=o.Wn;1===u||2===u?l(r,i,function t(){return(n.g.get(this)||{})[i]},function e(r){a(n,this,i,t(o.q,r))}):6===u&&s(r,i,T)})}(n,r.D,i)}function g(n,t,e,r){return function(){var i=arguments;return function o(n,t,e){var r=t[e];return r||(r=n.Ln.querySelector(e)),r||(r=t[e]=n.J(e),n.K(n.Ln,r)),r.componentOnReady()}(n,t,e).then(function(n){return n[r].apply(n,i)})}}function M(n,t,e,i,u,f,c){var a={html:{}},s={},l=e[n]=e[n]||{},v=function p(n,t,e){n.Rn||(n.Rn=function(n,t,e,r){return n.addEventListener(t,e,r)},n.Dn=function(n,t,e,r){return n.removeEventListener(t,e,r)});var r=new WeakMap,i={Fn:e.documentElement,Hn:e.head,Ln:e.body,qn:!1,cn:function(n){return n.nodeType},J:function(n){return e.createElement(n)},G:function(n,t){return e.createElementNS(n,t)},Z:function(n){return e.createTextNode(n)},V:function(n){return e.createComment(n)},en:function(n,t,e){return n.insertBefore(t,e)},tn:function(n){return n.remove()},K:function(n,t){return n.appendChild(t)},nn:function(n){return n.childNodes},rn:function(n){return n.parentNode},fn:function(n){return n.nextSibling},vn:function(n){return n.previousSibling},in:function(n){return S(n.nodeName)},pn:function(n){return n.textContent},un:function(n,t){return n.textContent=t},an:function(n,t){return n.getAttribute(t)},z:function(n,t,e){return n.setAttribute(t,e)},Bn:function(n,t,e,r){return n.setAttributeNS(t,e,r)},B:function(n,t){return n.removeAttribute(t)},In:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.on(n):"body"===r?i.Ln:"document"===r?e:"window"===r?t:n},I:function(t,e,o,u,f,c,a,s){var l=e,v=t,p=r.get(t);if(p&&p[l]&&p[l](),"string"==typeof c?v=i.In(t,c):"object"==typeof c?v=c:(s=e.split(":")).length>1&&(v=i.In(t,s[0]),e=s[1]),v){var d=o;(s=e.split(".")).length>1&&(e=s[0],d=function(n){n.keyCode===P[s[1]]&&o(n)}),a=i.qn?{capture:!!u,passive:!!f}:!!u,n.Rn(v,e,d,a),p||r.set(t,p={}),p[l]=function(){v&&n.Dn(v,e,d,a),p[l]=null}}},U:function(n,t){var e=r.get(n);e&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Tn:function(n,t){return n.attachShadow(t)}};i.P=!!i.Fn.attachShadow,t.location.search.indexOf("shadow=false")>0&&(i.P=!1),"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),i.Un=function(n,e,r){return n&&n.dispatchEvent(new t.CustomEvent(e,r))};try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.qn=!0}}))}catch(n){}return i.on=function(n,t){return(t=i.rn(n))&&11===i.cn(t)?t.host:t},i}(l,e,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=e,t.location=e.location,t.document=i,t.resourcesUrl=t.publicPath=u,t.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.w.get(t),c=n.j(f);if(c&&c.wn)if(r){var a=c.wn.find(function(n){return n.n===e});a&&n._.I(f,e,function(n){return t[a.t](n)},a.i,void 0===u?a.r:!!u,i)}else n._.U(f,e)}}(m,n,t,e,r,i)},t.emit=function(n,e,r){return v.Un(n,t.eventNameFn?t.eventNameFn(e):e,r)},l.h=r,l.Context=t;var d=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{},h=0,m={_:v,zn:function M(n,t){if(!e.customElements.get(n.Sn)){w(m,a[n.Sn]=n,t.prototype,f);var r=t.observedAttributes=[];for(var i in n.D)n.D[i].H&&r.push(n.D[i].H);e.customElements.define(n.Sn,t)}},k:t.emit,j:function(n){return a[v.in(n)]},W:function(n){return t[n]},isClient:!0,Cn:function(n){return!(!d[v.in(n)]&&!m.j(n))},On:function(){return n+h++},O:function(n,t,e){},R:function(n){return function t(n,e,r){return{create:g(n,e,r,"create"),componentOnReady:g(n,e,r,"componentOnReady")}}(v,s,n)},queue:t.queue=function j(n,t){function e(n){for(var t=0;t<n.length;t++)try{n[t]()}catch(n){}n.length=0}function r(n,t){for(var e=0;e<n.length&&o()<t;)try{n[e++]()}catch(n){}e===n.length?n.length=0:0!==e&&n.splice(0,e)}function i(){l++,e(c);var t=o()+7*Math.ceil(l*(1/22));r(a,t),r(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(v=c.length+a.length+s.length>0)?n.raf(i):l=0}var o=function(){return t.performance.now()},u=Promise.resolve(),f=[],c=[],a=[],s=[],l=0,v=!1;return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return e(f)})},read:function(t){c.push(t),v||(v=!0,n.raf(i))},write:function(t){a.push(t),v||(v=!0,n.raf(i))}}}(l,e),_n:function k(n,e){if(e.mode||(e.mode=v.an(e,"mode")||t.mode),n.M)o(m,e);else{var r={mode:e.mode,scoped:2===n.encapsulation||1===n.encapsulation&&!v.P};n.kn(r).then(function(t){try{(function r(n,t,e){var r=e.style;if(r){var i=e.is+(e.styleMode||E);t[i]||(t[i]=r)}})(0,n,n.M=t)}catch(t){n.M=function i(){}}o(m,e)})}},o:new WeakMap,Qn:new WeakMap,En:new WeakMap,An:new WeakMap,Pn:new WeakMap,w:new WeakMap,C:new WeakMap,b:new WeakMap,m:new WeakMap,d:new WeakMap,Nn:new WeakMap,A:new WeakMap,T:new WeakMap,g:new WeakMap};m.render=y(m,v);var $=v.Fn;return $["s-ld"]=[],$["s-rn"]=!0,$["s-init"]=function(){m.Pn.set($,l.loaded=m.y=!0),v.Un(e,"appload",{detail:{namespace:n}})},c&&c.Yn(),m.x=function(n,t,e,r,i){(function o(n,t,e,r,i,u,f){var c=e.Sn+(r||E),a=e[c];if(a||(a=e[c=e.Sn+E]),a){var s=t.Hn;if(t.P)if(1===e.encapsulation)s=i.shadowRoot;else for(;i=t.rn(i);)if(i.host&&i.host.shadowRoot){s=i.host.shadowRoot;break}var l=n.Qn.get(s)||{};if(!l[c]){(f=t.J("style")).innerHTML=a,t.z(f,"data-style-id",c),u&&!u.Zn&&u.Gn(f);var v=s.querySelectorAll("[data-styles]");t.en(s,f,v.length&&v[v.length-1].nextSibling||s.firstChild),l[c]=!0,n.Qn.set(s,l)}}})(n,t,e,r,i,c)},function A(n,t,e,r){var i=e.Jn=e.Jn||{};return i.Kn=i.Kn||[],i.Kn.push(function o(n,t,e){return{namespace:t,Vn:function(n){return n&&n.tagName?Promise.all([b(e,n.tagName),function t(n,e){return Promise.resolve(n.b.get(e))}(e,n)]).then(function(n){return n[0]&&n[1]?{Xn:n[0],nt:n[1]}:null}):Promise.resolve(null)},tt:function(n){return b(e,n)},et:function(){return Promise.all(n.components.map(function(n){return b(e,n[0])})).then(function(n){return n.filter(function(n){return n})})}}}(n,t,r)),i.Vn||(i.Vn=function(n){return Promise.all(i.Kn.map(function(t){return t.Vn(n)})).then(function(n){return n.find(function(n){return!!n})})}),i.et||(i.et=function(){var n=[];return i.Kn.forEach(function(t){n.push(t.et())}),Promise.all(n).then(function(n){var t=[];return n.forEach(function(n){n.forEach(function(n){t.push(n)})}),t})}),i}(l,n,e,m),function O(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.j(t);if(r)if(n.Pn.has(t))e(t);else{var i=n.Nn.get(t)||[];i.push(e),n.Nn.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(m,l,e,e["s-apps"],e["s-cr"]),l.initialized=!0,m}function j(t,e,r){void 0===r&&(r={}),e=Array.isArray(e)?e:[e];var i=t.document,o=r.hydratedCssClass||"hydrated",u=e.filter(function(n){return n[2]}).map(function(n){return n[0]});if(u.length){var f=i.createElement("style");f.innerHTML=u.join()+"{visibility:hidden}."+o+"{visibility:inherit}",f.setAttribute("data-styles",""),i.head.insertBefore(f,i.head.firstChild)}var c=r.namespace||"StencilApp";H||(H=!0,function a(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(t,c,t.HTMLElement.prototype)),applyPolyfills(t,function(){if(!F[c]){var u={},f=r.resourcesUrl||"./";k(c,u,t,i,f,o),F[c]=M(c,u,t,i,f,o)}e.forEach(function(e){var r;!function i(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(t.customElements.define)?(r=function(n){return t.HTMLElement.call(this,n)}).prototype=Object.create(t.HTMLElement.prototype,{constructor:{value:r,configurable:!0}}):r=new Function("w","return class extends w.HTMLElement{}")(t),F[c].zn(function o(t,e,r){var i={Sn:t[0],D:{color:{H:"color"}}};i.kn=t[1];var o=t[3];if(o)for(e=0;e<o.length;e++)r=o[e],i.D[r[0]]={Wn:r[1],F:!!r[2],H:"string"==typeof r[3]?r[3]:r[3]?r[0]:0,q:r[4]};return i.encapsulation=t[4],t[5]&&(i.wn=t[5].map(n)),i}(e),r)})})}this&&this.rt||(Object.setPrototypeOf||Array);var k=function(){};function applyPolyfills(n,t){n.it=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,C[n])(C[n+1]),C[n]=void 0,C[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.ot;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.ut)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return N.error=n,N}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.ot===T?s(n,t.ut):t.ot===x?l(n,t.ut):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===N?(l(n,N.error),N.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.ft);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.ct&&n.ct(n.ut),p(n)}function s(n,t){n.ot===S&&(n.ut=t,n.ot=T,0!==n.at.length&&M(p,n))}function l(n,t){n.ot===S&&(n.ot=x,n.ut=t,M(a,n))}function v(n,t,e,r){var i=n.at,o=i.length;n.ct=null,i[o]=t,i[o+T]=e,i[o+x]=r,0===o&&n.ot&&M(p,n)}function p(n){var t=n.at,e=n.ot;if(0!==t.length){for(var r,i,o=n.ut,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.at.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){N.error=n,o=N}if(o===N?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.ot===S&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===x&&l(t,o))}function h(n){n[_]=W++,n.ot=void 0,n.ut=void 0,n.at=[]}var y,m=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,w=void 0,g=void 0,M=function(n,t){C[b]=n,C[b+1]=t,2===(b+=2)&&(g?g(e):P())},j=(y=void 0!==n?n:void 0)||{},k=j.st||j.lt;j="undefined"==typeof self;var $,A,E,O="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),P=void 0;P=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):O?function(){var n=new MessageChannel;return n.vt.onmessage=e,function(){return n.pt.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().dt("vertx");return void 0!==(w=n.ht||n.yt)?function(){w(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),S=void 0,T=1,x=2,N={error:null},W=0,L=function(){function n(n,t){this.mt=n,this.bt=new n(o),this.bt[_]||h(this.bt),m(t)?(this.wt=this.length=t.length,this.ut=Array(this.length),0===this.length?s(this.bt,this.ut):(this.length=this.length||0,this.gt(t),0===this.wt&&s(this.bt,this.ut))):l(this.bt,Error("Array Methods must be provided an Array"))}return n.prototype.gt=function(n){for(var t=0;this.ot===S&&t<n.length;t++)this.Mt(n[t],t)},n.prototype.Mt=function(n,t){var e=this.mt,c=e.resolve;c===i?(c=u(n))===r&&n.ot!==S?this.jt(n.ot,t,n.ut):"function"!=typeof c?(this.wt--,this.ut[t]=n):e===R?(f(e=new e(o),n,c),this.kt(e,t)):this.kt(new e(function(t){return t(n)}),t):this.kt(c(n),t)},n.prototype.jt=function(n,t,e){var r=this.bt;r.ot===S&&(this.wt--,n===x?l(r,e):this.ut[t]=e),0===this.wt&&s(r,this.ut)},n.prototype.kt=function(n,t){var e=this;v(n,void 0,function(n){return e.jt(T,t,n)},function(n){return e.jt(x,t,n)})},n}(),R=function(){function n(t){if(this[_]=W++,this.ut=this.ot=void 0,this.at=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.$t=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return R.prototype.then=r,R.all=function(n){return new L(this,n).bt},R.race=function(n){var t=this;return m(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},R.resolve=i,R.reject=function(n){var t=new this(o);return l(t,n),t},R.At=function(n){g=n},R.Et=function(n){M=n},R.Ot=M,R.Ct=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.Pt)return}n.Promise=R},R.Promise=R,R.Ct(),R}();var e=[];n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||e.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||e.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||e.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||e.push(import("./polyfills/string.js")),n.fetch||e.push(import("./polyfills/fetch.js")),Promise.all(e).then(function(e){e.forEach(function(t){t.applyPolyfill(n,n.document)}),t()})};var $="data-ssrv",A="data-ssrc",E="$",O={},C=[],P={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},_=function(n){return null!=n},S=function(n){return n.toLowerCase()},T=function(){},x=[],N={getAttributes:function(n){return n.a},replaceAttributes:function(n,t){return n.a=t}},W="wc-",L={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},R="http://www.w3.org/1999/xlink",D=!1,F={},H=!1;export{j as defineCustomElement,r as h};