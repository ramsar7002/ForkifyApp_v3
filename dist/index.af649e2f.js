function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.af649e2f.js","eyyUD":"icons.c14567a0.svg"}'));var o=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return T()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=$(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",g={};function m(){}function v(){}function _(){}var y={};c(y,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(M([])));w&&w!==n&&r.call(w,a)&&(y=w);var k=_.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,s){var c=u(e[i],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=_,c(k,"constructor",_),c(_,"constructor",v),v.displayName=c(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(x.prototype),c(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(l(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},c=async e=>{try{const t=await Promise.race([fetch(e),s(15e3)]),n=await t.json();if(!t.ok)throw new Error(`${n.message} (${t.status})`);return n}catch(e){throw e}},l=async(e,t)=>{try{const n=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await Promise.race([n,s(15e3)]),i=await r.json();if(!r.ok)throw new Error(`${i.message} (${r.status})`);return i}catch(e){throw e}},u={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},d=e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,bookmarked:u.bookmarks.some((t=>t.id===e.id)),...e.key&&{key:e.key}}),h=(e=u.search.page)=>{u.search.page=e;const t=(e-1)*u.search.resultsPerPage,n=e*u.search.resultsPerPage;return u.search.results.slice(t,n)},p=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},f=function(e=u.recipe){u.bookmarks.push(e),e.bookmarked=!0,p()};!function(){const e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();const g=async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!=e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format.");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await l("https://forkify-api.herokuapp.com/api/v2/recipes?key=e23b80c3-1742-4aad-b70a-f5b946bf07f0",n);f(r.data.recipe),u.recipe=d(r.data.recipe)}catch(e){throw console.log(e),e}};var m,v,_,y;m=new URL(a("27Lyk").resolve("eyyUD"),import.meta.url).toString();class b{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",n)}_clear(){this._parentElement.innerHTML=""}renderSpiner(){const e=`<div class="spinner">\n    <svg>\n      <use href="${t(m)}#icon-loader"></use>\n    </svg>\n  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errMessage){const n=`<div class="error">\n    <div>\n      <svg>\n        <use href="${t(m)}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",n)}renderMessage(e=this._message){const n=`<div class="message">\n    <div>\n      <svg>\n        <use href="${t(m)}#icon-smile"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var a=n.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(_=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},y=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(_(this.denominator)){var e=y(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}_(this.numerator)&&(e=y(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},v=Fraction;var w=new class extends b{_parentElement=document.querySelector(".recipe");_errMessage="We could not find that recipe. Please try another one!";_message="";_generateMarkup(){return`<figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${t(m)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${t(m)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings" data-sign="minus">\n          <svg>\n            <use href="${t(m)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings" data-sign="plus">\n          <svg>\n            <use href="${t(m)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n    <svg>\n      <use href="${t(m)}#icon-user"></use>\n    </svg>\n  </div>\n\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${t(m)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients" >\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n    ${this._createIngredients(this._data.ingredients)}\n\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${t(m)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`}_createIngredients=e=>e.map((e=>this._generateMarkupIngredient(e))).join("");_generateMarkupIngredient=e=>`<li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${t(m)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new v(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>`;addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");n&&e(n.dataset.sign)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(t=>{t.target.closest(".btn--bookmark")&&e()}))}};var k=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var E=new class extends b{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`          \n        <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n\n            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${t(m)}#icon-user"></use>\n            </svg>\n          </div>\n          </div>\n        </a>\n      </li>`}};var x=new class extends b{_parentElement=document.querySelector(".results");_errMessage="No Recipes found for your query! Please try again";_message="";_generateMarkup(){return this._data.map((e=>E.render(e,!1))).join("")}};var $=new class extends b{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 0===e?"":1===this._data.page&&e>1?`\n      <button data-goto=${this._data.page+1} class="btn--inline pagination__btn--next">\n      <span>Page ${this._data.page+1}</span>\n      <svg class="search__icon">\n        <use href="${t(m)}#icon-arrow-right"></use>\n      </svg>\n    </button> \n          `:this._data.page===e?1!==e?`\n        <button data-goto=${this._data.page-1} class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${t(m)}g#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${this._data.page-1}</span>\n          </button>\n        `:"":this._data.page<e&&1!==this._data.page?`\n        <button data-goto=${this._data.page-1} class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${t(m)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${this._data.page-1}</span>\n          </button>\n          <button data-goto=${this._data.page+1} class="btn--inline pagination__btn--next">\n            <span>Page ${this._data.page+1}</span>\n            <svg class="search__icon">\n              <use href="${t(m)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n        `:void 0}};var L=new class extends b{_parentElement=document.querySelector(".bookmarks__list");_errMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>E.render(e,!1))).join("")}};var F=new class extends b{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was succesfully uploaded!";constructor(){super(),this._addHandlerToggleWindow()}generateMarkup=()=>{const e=`        <div class="upload__column">\n    <h3 class="upload__heading">Recipe data</h3>\n    <label>Title</label>\n    <input value="TEST23" required name="title" type="text" />\n    <label>URL</label>\n    <input value="TEST23" required name="sourceUrl" type="text" />\n    <label>Image URL</label>\n    <input value="TEST23" required name="image" type="text" />\n    <label>Publisher</label>\n    <input value="TEST23" required name="publisher" type="text" />\n    <label>Prep time</label>\n    <input value="23" required name="cookingTime" type="number" />\n    <label>Servings</label>\n    <input value="23" required name="servings" type="number" />\n  </div>\n\n  <div class="upload__column">\n    <h3 class="upload__heading">Ingredients</h3>\n    <label>Ingredient 1</label>\n    <input\n      value="0.5,kg,Rice"\n      type="text"\n      required\n      name="ingredient-1"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n    <label>Ingredient 2</label>\n    <input\n      value="1,,Avocado"\n      type="text"\n      name="ingredient-2"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n    <label>Ingredient 3</label>\n    <input\n      value=",,salt"\n      type="text"\n      name="ingredient-3"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n    <label>Ingredient 4</label>\n    <input\n      type="text"\n      name="ingredient-4"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n    <label>Ingredient 5</label>\n    <input\n      type="text"\n      name="ingredient-5"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n    <label>Ingredient 6</label>\n    <input\n      type="text"\n      name="ingredient-6"\n      placeholder="Format: 'Quantity,Unit,Description'"\n    />\n  </div>\n\n  <button class="btn upload__btn">\n    <svg>\n      <use href="${t(m)}#icon-upload-cloud"></use>\n    </svg>\n    <span>Upload</span>\n  </button>\n</form>\n</div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)};toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._overlay.classList.contains("hidden")&&this.generateMarkup()}_addHandlerToggleWindow(){[this._btnOpen,this._btnClose,this._overlay].forEach((e=>e.addEventListener("click",this.toggleWindow.bind(this))))}addHandlerUpload(e){this._parentElement.addEventListener("click",(function(t){t.preventDefault();if(!(t.target.closest(".upload__btn")||t.target).classList.contains("upload__btn"))return;const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}};const S=async()=>{try{const e=window.location.hash.slice(1);if(!e)return;w.renderSpiner(),x.update(h()),await(async e=>{try{const t=await c(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=e23b80c3-1742-4aad-b70a-f5b946bf07f0`);let{recipe:n}=t.data;u.recipe=d(n)}catch(e){throw e}})(e),w.render(u.recipe),L.update(u.bookmarks)}catch(e){w.renderError()}},M=async e=>{try{const e=k.getQuery();if(!e)return;x.renderSpiner(),await(async e=>{try{u.search.query=e;const t=await c(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=e23b80c3-1742-4aad-b70a-f5b946bf07f0`);u.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),u.search.page=1}catch(e){throw e}})(e),x.render(h()),$.render(u.search)}catch(e){console.log(e)}},T=e=>{x.render(h(e)),$.render(u.search)},q=e=>{const t="plus"===e?u.recipe.servings+1:u.recipe.servings-1;var n;0!==t&&(n=t,u.recipe.ingredients?.forEach((e=>{e.quantity=e.quantity*n/u.recipe.servings})),u.recipe.servings=n,w.update(u.recipe))},j=()=>{u.recipe.bookmarked?(u.recipe,u.bookmarks=u.bookmarks.filter((e=>e.id!==u.recipe.id)),u.recipe.bookmarked=!1,p()):f(u.recipe),w.update(u.recipe),L.render(u.bookmarks)},P=function(){L.render(u.bookmarks)},H=async function(e){try{F.renderSpiner(),await g(e),w.render(u.recipe),F.renderMessage(),L.render(u.bookmarks),window.history.pushState(null,"",`#${u.recipe.id}`),setTimeout((()=>{F.toggleWindow()}),1500)}catch(e){F.renderError(e.message)}};w.addHandlerRender(S),k.addHandlerSearch(M),$.addHandlerClick(T),w.addHandlerUpdateServings(q),w.addHandlerAddBookmark(j),L.addHandlerRender(P),F.addHandlerUpload(H);
//# sourceMappingURL=index.af649e2f.js.map