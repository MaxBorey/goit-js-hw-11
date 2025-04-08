import{a as f,S as p,i as a}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="49674407-1d122c5bfd0965d51e6fbc3dd";function y(n){return f("https://pixabay.com/api/",{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const c=document.querySelector("#cat-card"),l=document.querySelector("#loader"),h=new p(".gallery-item",{captionsData:"data-caption",captionDelay:250});function g(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
      <a href="${i}" class="gallery-item" data-caption="
        👍 Likes: ${t}
        👁 Views: ${s}
        💬 Comments: ${u}
        ⬇ Downloads: ${d}
      ">
        <div class="card">
          <img src="${o}" alt="${e}" />
        </div>
      </a>
    `).join("");c.innerHTML=r,h.refresh()}function L(){c.innerHTML=""}function b(){l.style.display="flex"}function q(){l.style.display="none"}const S=document.querySelector("#search-form"),v=document.querySelector("#breed-input"),$=document.querySelector("#breeds-list");S.addEventListener("submit",n=>{n.preventDefault();const r=v.value.trim();r&&(L(),b(),y(r).then(o=>{if(o.length===0){a.info({title:"No results",message:"No images found for your query.",position:"topRight"});return}g(o),$.innerHTML=o.map(({tags:i})=>`<option value="${i}"></option>`).join("")}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong!",position:"topRight"})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
