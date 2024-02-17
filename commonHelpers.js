import{S as b,i as l,A as h}from"./assets/vendor-34eaa05a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const v=new b(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),C=async(a,s)=>{try{const n=document.querySelector(".images__cont");let o="";if(a.hits.map(e=>{o+=`<a href="${e.largeImageURL}" class="imagecont">
            <div class="imagephoto">
                <img src="${e.webformatURL}" alt="${e.tags}">
            </div>
            <span class="imageinfo">
                <span>
                    <span>Likes</span><span>${e.likes}</span>
                </span>
                <span>
                    <span>Views</span><span>${e.views}</span>
                </span>
                <span>
                    <span>Comments</span><span>${e.comments}</span>
                </span>
                <span>
                    <span>Downloads</span><span>${e.downloads}</span>
                </span>
            </span>
        </a>`}),n.insertAdjacentHTML("beforeend",o),v.refresh(),s==="NewPage"){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(n){const o=document.querySelector(".images__cont");o.innerHTML="",l.show({message:n,position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark"})}};let i=1;const u=document.querySelector(".loader"),f=async(a,s,n,o,e)=>{const t=document.querySelector(".images__cont");u.classList.remove("hidden"),o==="loadFirst"&&(t.innerHTML="",i=1,e.classList.add("hidden"));const r="https://pixabay.com/api/",m=15,y=new URLSearchParams({key:"42320940-042fd388efe736bb4087979b1",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:i}),L=`${r}?${y}`,p=await n.get(L),g=p.data.totalHits;if(g===0)t.innerHTML="",e.classList.add("hidden"),s.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark"});else{const w=Math.ceil(g/m);i>=w?(e.classList.add("hidden"),s.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",messageColor:"white",theme:"dark"})):(e.classList.remove("hidden"),i+=1),C(p.data,o)}u.classList.add("hidden")},S=document.querySelector(".form"),d=document.querySelector(".loadMore");let c;S.addEventListener("submit",a=>{a.preventDefault();const s=a.target;c=s.elements.field.value,c?(f(c,l,h,"loadFirst",d),s.reset()):l.show({message:"Please, fill an input",position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark"})});d.addEventListener("click",a=>{a.preventDefault(),f(c,l,h,"NewPage",d)});
//# sourceMappingURL=commonHelpers.js.map
