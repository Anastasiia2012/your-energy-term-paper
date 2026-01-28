/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();async function c(s,o,e=!0){const n=new URLSearchParams({limit:12,page:o||1});return fetch(e?s+`&${n}`:s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(){const s=document.querySelectorAll("#pagination button");console.log(s),s.forEach(o=>{o.addEventListener("click",e=>{let n=e.target.getAttribute("data-filter");console.log(n);const t=parseInt(e.target.textContent);console.log(t),p[n.toLowerCase()].execute(t)})})}function g(s,o){const e=document.getElementById("pagination");let n="";for(let t=1;t<=s;t++)n+=`
    <button
      data-filter="${o}"
      class="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors text-muted-foreground hover:text-foreground">
      ${t}
    </button>
      `;e.innerHTML=n,f()}function v(s){console.log(s);const o=document.getElementById("renderer"),e=s.results.map(({name:n,imgURL:t})=>`
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group " style="background-image: url(&quot;${t}&quot;); background-size: cover; background-position: center center;">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white"><h3 class="text-lg md:text-xl font-medium mb-1">${n}</h3><span class="text-xs text-white/70 uppercase tracking-wider">Muscules</span></div>
        </div>
      `).join("");o.innerHTML=`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="muscles">${e}</div>`,g(s.totalPages,"Muscles")}class u{constructor(o){this.api="https://your-energy.b.goit.study/api/filters?filter="+o}execute(o=1){c(this.api,o).then(e=>v(e)).catch(e=>console.log(e))}}function x(){const o=document.getElementById("rating").querySelectorAll("button");let e=0,n=0;function t(a){o.forEach((r,i)=>{const l=r.querySelector("svg"),d=i<a;l.classList.toggle("fill-amber-400",d),l.classList.toggle("text-amber-400",d),l.classList.toggle("text-muted-foreground/50",!d);const m=document.getElementById("rating-amount");m.innerText=a})}o.forEach((a,r)=>{const i=r+1;a.addEventListener("click",()=>{e=i,t(e),console.log("Rating:",e)}),a.addEventListener("mouseenter",()=>{n=i,t(n)}),a.addEventListener("mouseleave",()=>{n=0,t(e)})})}function w(s=string){const o=`
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>

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
`;document.getElementById("popup").innerHTML=o,x();const e=document.getElementById("close-popup");e.addEventListener("click",()=>{document.getElementById("popup").innerHTML=""}),document.getElementById("review-form").addEventListener("submit",t=>{t.preventDefault(),console.log(t.target);const a=document.getElementById("rating-amount").innerText;fetch(`https://your-energy.b.goit.study/api/exercises/${s}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({rate:parseInt(a),email:t.target.email.value,review:t.target.review.value})}).then(r=>r.json()).then(r=>{console.log("Success132:",r)}).catch(r=>{console.error("Error:",r)}),console.log("submit"),e.click()})}function b(s=""){console.log(s),c(`https://your-energy.b.goit.study/api/exercises/${s}`,null,!1).then(e=>o(e)).catch(e=>console.log(e));function o(e){console.log(e),console.log(e.rating);const n=`
<div data-state="open"
     class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
     style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>

<div role="dialog" id="radix-:r0:" aria-describedby="radix-:r2:" aria-labelledby="radix-:r1:" data-state="open"
     class="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-[708px] p-6 overflow-hidden bg-[#1f1f1f] border-border rounded-2xl"
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
      <img src="${e.gifUrl}" alt="Exercise image" class="w-full h-full object-cover"/>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex flex-col space-y-1.5 text-center sm:text-left mb-3"><h2 id="radix-:r1:"
                                                                               class="tracking-tight text-2xl font-medium text-white">
        Glutes</h2>
        <div class="flex items-center gap-2 mt-1"><span class="text-base text-white">${e.rating}</span>
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
          class="text-sm font-medium text-white capitalize">${e.target}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Body Part</span><span
          class="text-sm font-medium text-white capitalize">${e.bodyPart}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Equipment</span><span
          class="text-sm font-medium text-white capitalize">${e.equipment}</span></div>
        <div><span class="text-xs text-[#6c6c6c] block">Popular</span><span
          class="text-sm font-medium text-white">${e.popularity}</span></div>
      </div>
      <div class="mb-3"><span class="text-xs text-[#6c6c6c] block">Burned calories</span><span
        class="text-sm font-medium text-white">${e.burnedCalories}/${e.time} min</span></div>
      <div class="border-t border-[#4f4f4f] mb-3"></div>
    </div>
  </div>
  <div class="flex gap-4 mt-6 justify-end">
    <button
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
      class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 border-white/40 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base font-normal">
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
`;document.getElementById("dialog").innerHTML=n,document.getElementById("close-dialog").addEventListener("click",()=>{document.getElementById("dialog").innerHTML=""}),document.getElementById("give-rating").addEventListener("click",()=>{w(s)})}}function h(s){const o=document.getElementById("renderer");console.log(s);const e=s.results.map(({bodyPart:n,burnedCalories:t,name:a,rating:r,target:i,time:l,_id:d})=>`
      <div class="bg-card rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2"><span class="text-xs font-medium px-2 py-1 bg-muted rounded text-foreground uppercase tracking-wide">Workout</span><span class="text-xs text-muted-foreground flex items-center gap-1">${r}<svg class="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg></span>
              </div>
              <button class="flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity start-dialog" data-id="${d}">Start
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
              <h3 class="font-medium text-foreground text-sm leading-tight line-clamp-1">${a}</h3></div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span>Burned calories: <span class="text-foreground font-medium">${t} / ${l} min</span></span><span>Body part: <span class="text-foreground font-medium capitalize">${n}</span></span><span>Target: <span class="text-foreground font-medium capitalize">${i}</span></span></div>
          </div>
      `).join("");o.innerHTML=`<div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4" id="exercises">
    ${e}
  </div>`,g(s.totalPages,"Exercise"),o.querySelectorAll(".start-dialog").forEach(n=>{n.addEventListener("click",()=>{b(n.getAttribute("data-id"))})})}const y="https://your-energy.b.goit.study/api/exercises";class k{constructor(o=[]){}execute(){c(y,null,!1).then(o=>h(o)).catch(o=>console.log(o))}}const p={muscles:new u("Muscles"),exercises:new k,equipment:new u("Equipment"),body_parts:new u("Body parts")},L="https://your-energy.b.goit.study/api/exercises?keyword=";function E(s){c(L+s).then(o=>h(o)).catch(o=>console.log(o))}const B=document.querySelectorAll("#filters-strategy button"),j=document.querySelector("#search");j.addEventListener("input",s=>E(s.target.value));B.forEach(s=>{s.addEventListener("click",o=>{let e=o.target.getAttribute("data-filter");p[e.toLowerCase()].execute()})});p.muscles.execute();function M(s){const o=document.getElementById("quote-text"),e=document.getElementById("quote-author");o.insertAdjacentHTML("beforeend",s.quote),e.insertAdjacentHTML("beforeend",s.author)}const z="https://your-energy.b.goit.study/api/quote";c(z,null,!1).then(s=>M(s)).catch(s=>console.log(s));
//# sourceMappingURL=index.js.map
