(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();async function c(s,o,t=!0){const a=new URLSearchParams({limit:12,page:o||1});return fetch(t?s+`&${a}`:s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function b(){document.querySelectorAll("#pagination button").forEach(o=>{o.addEventListener("click",t=>{let a=t.target.getAttribute("data-filter");const e=parseInt(t.target.textContent);z[a.toLowerCase()].execute(e)})})}function h(s,o){const t=document.getElementById("pagination");let a="";s=s>5?5:s;for(let e=1;e<=s;e++)a+=`
    <button
      data-filter="${o}"
      class="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors text-muted-foreground hover:text-foreground">
      ${e}
    </button>
      `;t.innerHTML=a,b()}function y(){const o=document.getElementById("rating").querySelectorAll("button");let t=0,a=0;function e(n){o.forEach((i,r)=>{const d=i.querySelector("svg"),l=r<n;d.classList.toggle("fill-amber-400",l),d.classList.toggle("text-amber-400",l),d.classList.toggle("text-muted-foreground/50",!l);const w=document.getElementById("rating-amount");w.innerText=n})}o.forEach((n,i)=>{const r=i+1;n.addEventListener("click",()=>{t=r,e(t)}),n.addEventListener("mouseenter",()=>{a=r,e(a)}),n.addEventListener("mouseleave",()=>{a=0,e(t)})})}function k(s=string){const o=`
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true" id="popup-background"></div>

<div role="dialog" id="radix-:r3:" aria-describedby="radix-:r5:" aria-labelledby="radix-:r4:" data-state="open"
     class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-md p-0 overflow-hidden bg-[#242424] border-none rounded-2xl"
     tabindex="-1" style="pointer-events: auto;">
  <button id="close-popup"
    class="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-white">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  </button>
  <div class="p-8 pt-12">
    <div class="mb-6"><p class="text-sm text-muted-foreground mb-2">Rating</p>
      <div class="flex items-center gap-2"><span class="text-xl font-medium text-white" id="rating-amount">0.0</span>
        <div class="flex items-center gap-1" id="rating">
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
          <button type="button" class="transition-transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-6 h-6 text-muted-foreground/50">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <form class="space-y-4" id="review-form"><input type="email" placeholder="Email"
                                   class="w-full px-6 py-4 bg-transparent border border-[#4A4A4A] rounded-full text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/50 transition-colors"
                                   required="" value="" name="email"><textarea name="review" placeholder="Your comment" rows="5"
                                                                  class="w-full px-6 py-4 bg-transparent border border-[#4A4A4A] rounded-2xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-white/50 transition-colors resize-none"
                                                                  required="" spellcheck="false"></textarea>

      <button type="submit"
              class="w-full py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">Send
      </button>
    </form>
  </div>
  <button  type="button"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
    <span class="sr-only">Close</span></button>
  <grammarly-extension-vbars data-grammarly-shadow-root="true" style="display: contents; --rem: 16;"
                             class="dnXmp"></grammarly-extension-vbars>
</div>
`;document.getElementById("close-dialog").click(),document.getElementById("popup").innerHTML=o,y();const a=document.getElementById("close-popup"),e=document.getElementById("popup-background");a.addEventListener("click",i),e.addEventListener("click",i),document.addEventListener("keydown",r=>{r.key==="Escape"&&i()}),document.getElementById("review-form").addEventListener("submit",r=>{r.preventDefault();const d=document.getElementById("rating-amount").innerText;fetch(`https://your-energy.b.goit.study/api/exercises/${s}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({rate:parseInt(d),email:r.target.email.value,review:r.target.review.value})}).then(l=>l.json()).then(l=>{}).catch(l=>{console.error("Error:",l)}),a.click()});function i(){document.getElementById("popup").innerHTML=""}}function E(s){const o=document.getElementById("renderer"),t=s.results.map(({bodyPart:a,burnedCalories:e,name:n,rating:i,target:r,time:d,_id:l})=>`
      <div class="bg-card rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2"><span class="text-xs font-medium px-2 py-1 bg-muted rounded text-foreground uppercase tracking-wide">Workout</span><span class="text-xs text-muted-foreground flex items-center gap-1">${i}<svg class="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg></span>
              </div>
              <button class="flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity start-dialog" data-id="${l}">Start
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4"></path>
                </svg>
              </div>
              <h3 class="font-medium text-foreground text-sm leading-tight line-clamp-1">${n}</h3></div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span>Burned calories: <span class="text-foreground font-medium">${e} / ${d} min</span></span><span>Body part: <span class="text-foreground font-medium capitalize">${a}</span></span><span>Target: <span class="text-foreground font-medium capitalize">${r}</span></span></div>
          </div>
      `).join("");o.innerHTML=`<div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" id="exercises">
    ${t}
  </div>`,h(s.totalPages,"Exercise"),o.querySelectorAll(".start-dialog").forEach(a=>{a.addEventListener("click",()=>{j(a.getAttribute("data-id"))})})}const f="favorites";function L(){try{return JSON.parse(localStorage.getItem(f))||[]}catch{return[]}}function B(s){const o=L();o.push(s),localStorage.setItem(f,JSON.stringify(o))}function j(s=""){c(`https://your-energy.b.goit.study/api/exercises/${s}`,null,!1).then(t=>o(t)).catch(t=>console.log(t));function o(t){const a=`
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true" id="dialog-background"></div>

<div role="dialog" id="radix-:r0:" aria-describedby="radix-:r2:" aria-labelledby="radix-:r1:" data-state="open"
     class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-[708px] p-6 overflow-hidden bg-[#1f1f1f] border-border rounded-2xl"
     tabindex="-1" style="pointer-events: auto;">
  <button
    class="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity" id="close-dialog">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-white">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  </button>
  <div class="flex gap-4">
    <div
      class="w-[295px] h-[258px] bg-[#e4e4e4] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
      <img src="${t.gifUrl}" alt="Exercise image" class="w-full h-full object-cover"/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex flex-col space-y-1.5 text-center sm:text-left mb-3"><h2 id="radix-:r1:"
                                                                               class="tracking-tight text-2xl font-medium text-white">
        Glutes</h2>
        <div class="flex items-center gap-2 mt-1"><span class="text-base text-white">${t.rating}</span>
          <div class="flex items-center gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-star w-4 h-4 fill-amber-400/50 text-amber-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-3">
        <div><span class="text-xs text-[#6c6c6c] block">Target</span><span
          class="text-sm font-medium text-white capitalize">${t.target}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Body Part</span><span
          class="text-sm font-medium text-white capitalize">${t.bodyPart}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Equipment</span><span
          class="text-sm font-medium text-white capitalize">${t.equipment}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Popular</span><span
          class="text-sm font-medium text-white">${t.popularity}</span></div>
      </div>
      <div class="mb-3"><span class="text-xs text-[#6c6c6c] block">Burned calories</span><span
        class="text-sm font-medium text-white">${t.burnedCalories}/${t.time} min</span></div>
      <div class="border-t border-[#4f4f4f] mb-3 text-sm font-medium text-white">${t.description}</div>
    </div>
  </div>
  <div class="flex gap-4 mt-6 justify-end">
    <button
    id="add-to-favorites"
    data-exercise='${JSON.stringify(t)}'
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-normal">
      Add to favorites
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide lucide-heart w-5 h-5 ml-2">
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    </button>
    <button
      id="give-rating"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-normal">
      Give a rating
    </button>
  </div>
  <button id="close_dialog" type="button"
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
    <span class="sr-only" >Close</span></button>
</div>
`;document.getElementById("dialog").innerHTML=a;const e=document.getElementById("close-dialog"),n=document.getElementById("dialog-background");e.addEventListener("click",r),n.addEventListener("click",r),document.addEventListener("keydown",l=>{l.key==="Escape"&&r()}),document.getElementById("give-rating").addEventListener("click",()=>{k(s)});function r(){document.getElementById("dialog").innerHTML=""}document.getElementById("add-to-favorites").addEventListener("click",l=>{B(l.target.getAttribute("data-exercise")),r()})}}const p="https://your-energy.b.goit.study/api/exercises";class v{constructor(o=[]){}execute(o=""){c(o?p:p+o,null,!1).then(t=>E(t)).catch(t=>console.log(t))}}function M(s){const o=document.getElementById("renderer"),t=s.results.map(({name:a,imgURL:e})=>`
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group read-more" data-id="${a}" style="background-image: url(&quot;${e}&quot;); background-size: cover; background-position: center center;">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white"><h3 class="text-lg md:text-xl font-medium mb-1">${a}</h3><span class="text-xs text-white/70 uppercase tracking-wider">Muscules</span></div>
        </div>
      `).join("");o.innerHTML=`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="muscles">${t}</div>`,h(s.totalPages,"Muscles"),document.querySelectorAll(".read-more").forEach(a=>{a.addEventListener("click",()=>{new v().execute(),console.log("?bodypart=back")})})}class u{constructor(o){this.api="https://your-energy.b.goit.study/api/filters?filter="+o}execute(o=1){c(this.api,o).then(t=>M(t)).catch(t=>console.log(t))}}const z={muscles:new u("Muscles"),exercises:new v,equipment:new u("Equipment"),body_parts:new u("Body parts")};function g(s){const o=document.getElementById("quote-text"),t=document.getElementById("quote-author");o.insertAdjacentHTML("beforeend",s.quote),t.insertAdjacentHTML("beforeend",s.author)}const I="https://your-energy.b.goit.study/api/quote",x="savedQuote",m=localStorage.getItem(x);m?g(JSON.parse(m)):c(I,null,!1).then(s=>{localStorage.setItem(x,JSON.stringify(s)),g(s)}).catch(s=>console.log(s));export{c as f,L as g,E as r,z as s};
//# sourceMappingURL=quote-DvdG4qBH.js.map
