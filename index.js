import{a as f,S as m,i as a}from"./assets/vendor-C5l2yoAn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=s=>{const o={params:{key:"51376871-d210e7f13e39905b8a62b8cdf",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return f.get("https://pixabay.com/api/",o).then(t=>t.data)},l={galleryContainer:document.querySelector(".gallery")},p=new m(".gallery a",{captionsData:"alt",captionDelay:250}),g=({webformatURL:s,largeImageURL:o,tags:t,likes:n,views:e,comments:r,downloads:i})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${t}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><br>${n}</p>
          <p class="info-item"><b>Views</b><br>${e}</p>
          <p class="info-item"><b>Comments</b><br>${r}</p>
          <p class="info-item"><b>Downloads</b><br>${i}</p>
        </div>
      </li>`,y=s=>{const o=s.map(t=>g(t)).join("");l.galleryContainer.innerHTML=o,p.refresh()},d=()=>{l.galleryContainer.innerHTML=""},c={form:document.querySelector(".js-form")},h=s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.warning({message:"Будьласка, введіть слово для пошуку!",position:"topRight"});return}d(),u(o).then(t=>{if(console.log(t),t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(t=>{console.log(t),a.error({title:"Ошибка",message:"The images could not be loaded. Please try again later.",position:"topRight"})}).finally(()=>{c.form.reset()})};c.form.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
