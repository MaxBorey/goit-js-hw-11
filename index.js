import{a as p,S as f,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="49674407-1d122c5bfd0965d51e6fbc3dd";function y(i){return p("https://pixabay.com/api/",{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const g=document.querySelector("#cat-card"),l=document.querySelector("#loader"),h=new f(".gallery-item",{captionsData:"data-caption",captionDelay:250});function L(i){const r=i.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:a,comments:u,downloads:d})=>`
      <a href="${e}" class="gallery-item">
        <div class="card">
          <img src="${s}" alt="${t}" />
          <div class="card-info">
            <p>👍 Likes: ${n}</p>
            <p>👁 Views: ${a}</p>
            <p>💬 Comments: ${u}</p>
            <p>⬇ Downloads: ${d}</p>
          </div>
        </div>
      </a>
    `).join(""),o=document.querySelector("#cat-card");o.innerHTML=r,h.refresh()}function b(){g.innerHTML=""}function q(){l.style.display="flex"}function S(){l.style.display="none"}const v=document.querySelector("#search-form"),w=document.querySelector("#breed-input"),T=document.querySelector("#breeds-list");v.addEventListener("submit",i=>{i.preventDefault();const r=w.value.trim();r&&(b(),q(),y(r).then(o=>{if(o.length===0){c.info({title:"No results",message:"No images found for your query.",position:"topRight"});return}L(o);const s=o.flatMap(n=>n.tags.split(",").map(a=>a.trim().toLowerCase())),t=[...new Set(s)].slice(0,10);T.innerHTML=t.map(n=>`<option value="${n}"></option>`).join("")}).catch(o=>{console.error(o),c.error({title:"Error",message:"Something went wrong!",position:"topRight"})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
