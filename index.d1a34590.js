(()=>{function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequiredcee;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequiredcee=s);const a=async(e,t,n)=>{try{const o=window.questionsLevel||"easy",s=n<10?n:10;let i;i=999===e?"https://opentdb.com/api.php?amount=10":`https://opentdb.com/api.php?amount=${s}&category=${e}&difficulty=${o}&token=${t}`;const c=await fetch(i);if(!c.ok)throw new Error(c.statusText);const l=await c.json();if(0!==l.response_code){const t=await r();return await a(e,t,n)}return l.results}catch(e){console.error(e)}},r=async()=>{try{const e=await fetch("https://opentdb.com/api_token.php?command=request");if(!e.ok)throw new Error(e.statusText);const t=await e.json();return sessionStorage.setItem("token",JSON.stringify(t.token)),t.token}catch(e){console.error(e)}};s.register("lRHpS",(function(e,t){var n,o,s,a,r;n=e.exports,o="getBundleURL",s=()=>r,a=e=>r=e,Object.defineProperty(n,o,{get:s,set:a,enumerable:!0,configurable:!0});var i={};function c(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),i[e]=t),t}})),s("lRHpS").getBundleURL("frZfc");const i=(e,t)=>{const n=!0!=!localStorage.getItem("leaderboard")&&(JSON.parse(localStorage.getItem("leaderboard")).find((t=>t.categoryName===e))||!1),o=window.questionsLevel||"easy",s=document.querySelector("section");s.innerHTML="",s.className="score-dashboard";const a=document.createElement("div");a.className="container score-dashboard__container";const r=document.createElement("div");r.className="score-dashboard__group";const i=document.createElement("h3");i.className="score-dashboard__title";const c=n.categoryName?n.categoryName[0].toUpperCase()+n.categoryName.slice(1):e[0].toUpperCase()+e.slice(1);i.appendChild(document.createTextNode(`Score dashboard for ${c} (${o})`));const l=document.createElement("ul");l.className="score-dashboard__player-score-list",l.innerHTML=n.players?0===n.players.filter((e=>e.level===o)).length?"<p>Leaderboard for this level is empty</p>":n.players.filter((e=>e.level===o)).map((e=>`<li class="score-dashboard__player-score">\n              <span class="score-dashboard__game-title">${e.name}</span>\n              <span class="score-dashboard__game-title">${e.score}/${t}</span>\n            </li>`)).join(""):"<p>Leaderboard for this category is empty</p>";const d=document.createElement("button");d.className="button finish__button--back",d.appendChild(document.createTextNode("Back to categories")),r.appendChild(i),r.appendChild(l),r.appendChild(d),a.appendChild(r),s.appendChild(a),d.addEventListener("click",(()=>{h(JSON.parse(sessionStorage.getItem("categories")))}))},c=(e,t,n)=>{const o=document.getElementsByClassName("questions__inner")[0],s=(([...e])=>{let t=e.length;for(;t;){const n=Math.floor(Math.random()*t--);[e[t],e[n]]=[e[n],e[t]]}return e})([...t.incorrect_answers,t.correct_answer]);o.innerHTML=`\n    <h3 class="questions__question">\n    ${e+1}/${n}. ${t.question}</h3>\n    ${s.map((e=>`<button class="button questions__answer">${e}</button>`)).join("")}\n    `;const a=document.querySelectorAll(".questions__answer"),r=e=>String(e).replace(/&/g,"&amp;").replace(/'/g,"&#039;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/á/g,"&aacute;").replace(/é/g,"&eacute;").replace(/í/g,"&iacute;").replace(/ó/g,"&oacute;").replace(/ú/g,"&uacute;")===t.correct_answer;return new Promise((e=>{const n=n=>{const{target:s}=n;r(s.textContent)?(s.classList.add("questions__answer--correct"),setTimeout((()=>{e(!0)}),1e3)):(s.classList.add("questions__answer--wrong"),document.querySelectorAll(".questions__answer").forEach((e=>{e.textContent===t.correct_answer&&e.classList.add("questions__answer--correct")})),setTimeout((()=>{e(!1)}),1e3)),o()};a.forEach((e=>{e.addEventListener("click",n)}));const o=()=>{a.forEach((e=>{e.removeEventListener("click",n)}))}}))},l=(e,t=0,n,o)=>{const s=e,a=t,r=n,c=window.questionsLevel||"easy";document.querySelector("#app").innerHTML="<section></section>";const l=document.querySelector("section");l.innerHTML="",l.className="finish";const d=document.createElement("div");d.className="container";const u=document.createElement("div");u.className="finish__result";const m=document.createElement("p");m.appendChild(document.createTextNode("It's over!"));const p=document.createElement("p");p.appendChild(document.createTextNode("Thanks for game :)")),u.appendChild(m),u.appendChild(p);const g=document.createElement("div");g.className="finish__score-group";const v=document.createElement("h3");v.appendChild(document.createTextNode("your score"));const w=document.createElement("span");w.className="finish__score",w.appendChild(document.createTextNode(`${a}/${o}`)),g.appendChild(v),g.appendChild(w);const _=document.createElement("div");_.className="finish__buttons";const f=document.createElement("button");f.className="button finish__button--back",f.appendChild(document.createTextNode("Back to categories"));const y=document.createElement("button");y.className="button finish__button--scoreboard",y.appendChild(document.createTextNode("Scoreboard")),_.appendChild(f),_.appendChild(y),d.appendChild(u),d.appendChild(g),d.appendChild(_),l.appendChild(d),f.addEventListener("click",(()=>{h(JSON.parse(sessionStorage.getItem("categories")))})),y.addEventListener("click",(()=>{i(r,o)}));const k=JSON.parse(localStorage.getItem("leaderboard"))||[];k.length&&k.find((e=>e.categoryName===r))?k.find((e=>e.categoryName===r)).players.push({name:s,score:a,level:c}):k.push({categoryName:r,players:[{name:s,score:a,level:c}]}),localStorage.setItem("leaderboard",JSON.stringify(k))},d=e=>{const t=document.querySelector(".questions");document.querySelector(".questions__timer").style.display="none",t.remove(),clearInterval(e)},u=async(e,t)=>{const n=document.querySelector("section");n.className="questions",n.innerHTML='\n    <div class="container">\n      <div class="questions__timer"></div>\n      <div class="questions__inner"></div>\n    </div>\n  ';const o=e.length;window.points=0;const s=((e,t,n)=>{const o=document.querySelector(".questions__timer"),s=document.querySelector(".questions");o.textContent="";let a=60;if(a>0){o.textContent="Time left: 1m 00s";const r=setInterval((()=>{a--;let i=Math.floor(a/60),c=Math.floor(a%60);o.textContent=`Time left: ${i}m ${c}s`,a<0&&(clearInterval(r),o.textContent="Time left: 0m 0s",o.style.display="none",s.remove(),l(e,window.points,t,n))}),1e3);return r}})(window.userName,t,o);for(let[n,a]of e.entries()){if(await c(n,a,o)&&window.points++,n===o-1)return d(s),l(window.userName,window.points,t,o)}},m=()=>{document.querySelector("#app").innerHTML='<div class="lds-dual-ring"></div>'};window.userName="";const p=async(e,t)=>{const n=e,o=t,s=sessionStorage.getItem("token")?JSON.parse(sessionStorage.getItem("token")):await r();m();const c=await(async e=>{try{const t=await fetch(`https://opentdb.com/api_count.php?category=${e}`);if(!t.ok)throw new Error(t.statusText);return(await t.json()).category_question_count}catch(e){console.error(e)}})(n);let l;switch(window.questionsLevel){case"hard":l=c.total_hard_question_count;break;case"medium":l=c.total_medium_question_count;break;default:l=c.total_easy_question_count}document.querySelector("#app").innerHTML=`\n    <section class="game">\n      <div class="container game__inner">\n        <div class="game__header">\n        <input class="game__user--name" placeholder="Enter your name..." />\n        <button class="button game__button--start-quiz">Start Quiz</button>\n        <button class="button game__button--scores">Scores</button>\n        <p class="game__questions-quantity">\n          <span class="game__category-name">${o}</span>\n          <span class="game__total-questions">Total questions: ${c.total_question_count}</span>\n          <span class="game__total-questions-for-level">Questions for ${window.questionsLevel||"easy"} level: ${l}</span>\n        </p>\n        </div>\n        <button class="button game__button--back">Back to categories</button>\n      </div>\n    </section>\n  `;const d=document.getElementsByClassName("game__button--start-quiz")[0];console.log(e);const p=await a(n,s,l);let g;d.addEventListener("click",(()=>{const e=document.querySelector(".game__user--name");window.userName=e.value;var t;if(!((t=window.userName).length<3||!t.match(/^[a-zA-Z]+$/)))u(p,o);else{if(g)return;g=document.createElement("div"),g.classList.add("game__error"),g.appendChild(document.createTextNode("User Name should consist of min 3 LETTERS, and letters only.")),e.parentNode.insertBefore(g,e.nextSibling)}}),!1);document.querySelector(".game__button--scores").addEventListener("click",(()=>{i(o,p.length)}));document.querySelector(".game__button--back").addEventListener("click",(()=>{h(JSON.parse(sessionStorage.getItem("categories")))}))},g=[{id:20,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />\n    </svg>    \n    '},{id:14,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />\n    </svg>    \n  '},{id:9,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n    <path d="M12 14l9-5-9-5-9 5 9 5z" />\n    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />\n  </svg>\n  '},{id:22,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n    </svg>    \n  '},{id:10,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />\n    </svg>    \n  '},{id:15,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />\n    </svg>    \n  '},{id:21,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />\n    </svg>    \n  '},{id:30,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />\n    </svg>    \n  '},{id:13,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />\n    </svg>    \n  '},{id:16,svg:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />\n    </svg>    \n  '}];var v;v=s("lRHpS").getBundleURL("frZfc")+"quizownia-logo.38ae5559.png";const h=t=>{document.querySelector("#app").innerHTML=`\n    <header>\n      <nav class="navigation">\n        <a href="https://michakow.github.io/CodersCamp2021-Project1-Quiz/" class="navigation__logo">\n          <img\n            src=${e(v)}\n            alt="logo"\n            class="navigation__img"\n          />\n        </a>\n        <div class="navigation__menu">\n          <svg\n            class="navigation__burger"\n            viewBox="0 0 100 80"\n            width="40"\n            height="40"\n          >\n            <rect width="100" height="20" fill="#4d70ff"></rect>\n            <rect y="30" width="100" height="20" fill="#4d70ff"></rect>\n            <rect y="60" width="100" height="20" fill="#4d70ff"></rect>\n          </svg>\n          <div class="navigation__dropdown">\n            <p class="navigation__title">Actual difficulty level: <span id="level" class="navigation__level-name">${window.questionsLevel||"Easy"}</span></p>\n            <ul class="navigation__level-list">\n              <li class="navigation__list-item" data-level="easy">Easy</li>\n              <li class="navigation__list-item" data-level="medium">Medium</li>\n              <li class="navigation__list-item" data-level="hard">Hard</li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </header>\n\n    <section class="category">\n      <div class="container category__container">\n        <div class="category__list">\n        </div>\n      </div>\n    </section>\n  `;const n=document.querySelector(".navigation__burger"),o=document.querySelector(".navigation__dropdown");n.addEventListener("click",(()=>{o.classList.toggle("active")})),document.querySelectorAll(".navigation__list-item").forEach((e=>{e.addEventListener("click",(()=>{window.questionsLevel=e.dataset.level,document.querySelector("#level").textContent=window.questionsLevel,o.classList.remove("active")}))})),((e,t)=>{const n=document.querySelector(t);let o=[];for(object of g)o.push(e.filter((e=>Object.values(object).includes(e.id))).map((e=>`\n                <div class="card category__card" data-id="${e.id}" data-name="${e.name}">\n                    <a href="#" class="card__link">\n                    <div\n                    class="card__image">${object.svg}\n                    </div>\n                    <h2 class="card__name">${e.name}</h2>\n                    </a>\n                </div>`)));n.innerHTML=o.join(""),document.querySelectorAll(".category__card").forEach((e=>{e.addEventListener("click",(()=>p(e.dataset.id,e.dataset.name)))}))})(t,".category__list")};window.onload=async()=>{m();const e=sessionStorage.getItem("categories")?JSON.parse(sessionStorage.getItem("categories")):await(async()=>{try{const e=await fetch("https://opentdb.com/api_category.php");if(!e.ok)throw new Error(e.statusText);const t=await e.json();return sessionStorage.setItem("categories",JSON.stringify(t.trivia_categories)),t.trivia_categories}catch(e){console.error(e)}})();h(e)}})();
//# sourceMappingURL=index.d1a34590.js.map
