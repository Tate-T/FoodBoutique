var t=globalThis,e={},s={},r=t.parcelRequire46ec;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in s){var r=s[t];delete s[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},t.parcelRequire46ec=r);var a=r.register;a("lgck5",function(t,e){r("fMbCU"),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([]))}),a("fMbCU",function(t,e){});const i=async(t,e,s,r)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${r}&category=${e}&page=${s}&limit=9`).then(t=>t.json())}catch(t){return t}};let c="",o="",n="";const l=(t,e,s,r)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`
      <div class="products__nocards">
        <h3 class="products__notitle">
          I am sorry, but this <span class="products__noaccent">category</span> isn't working
        </h3>
        <p class="products__nodesc">
          Choose other catogories or write the name of a product.
        </p>
      </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}i(t,e,s,r).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`
        <div class="products__nocards">
          <h3 class="products__notitle">
            Nothing was found for the selected
            <span class="products__noaccent">filters...</span>
          </h3>
          <p class="products__nodesc">
            Try adjusting your search parameters or browse our range by other criteria
            to find the perfect product for you.
          </p>
        </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:s,category:r,size:a,price:i,is10PercentOff:c,popularity:o})=>`
      <li id="${t}" data-product="true" class="products__item">
        ${c?`
          <div class="products__green">
            <svg class="products__discount" width="60" height="60">
              <use href="#discount"></use>
            </svg>
          </div>`:""}
        <div class="products__container_img">
          <img src="${s}" alt="${e}" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${r}</span></p>
        <p class="products__size">Size: <span>${a}</span></p>
        <p class="products__popularity">Popularity: <span>${o}</span></p>
        <div class="products__svg_price">
          <p class="products__price">$${i}</p>
          <button data-productadd="true" class="products__svg_btn">
            ${JSON.parse(localStorage.getItem("cart")||"[]").some(e=>e.id===t)?"✓":'<svg class="products__basket"><use href="#cart"></use></svg>'}
          </button>
        </div>
      </li>`).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{let e=t.currentTarget.querySelector(".filters__item--checked");e&&e.classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,n="allAlphabet"===t.target.id?"":t.target.id,l(c,o,1,n)}),document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),l(c=document.querySelector("#filters-input").value.trim(),o,1,n)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{let e=t.currentTarget.querySelector(".filters__item--checked");e&&e.classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,o="all"===t.target.id?"":t.target.id,l(c,o,1,n)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")});const d=document.querySelector("#products-list");i("","",1,"").then(t=>{d.innerHTML=t.results.map(({_id:t,name:e,img:s,category:r,size:a,price:i,is10PercentOff:c,popularity:o})=>`
        <li id="${t}" data-product="true" class="products__item">

          ${c?`<div class="products__green">
                  <svg class="products__discount" width="60" height="60">
                    <use href="#discount"></use>
                  </svg>
                </div>`:""}

          <div class="products__container_img">
            <img src="${s}" alt="${e}" class="products__img" />
          </div>
          <h2 class="products__title">${e}</h2>
          <p class="products__category">Category: <span>${r}</span></p>
          <p class="products__size">Size: <span>${a}</span></p>
          <p class="products__popularity">Popularity: <span>${o}</span></p>
          <div class="products__svg_price">
            <p class="products__price">$${i}</p>
            <button data-productadd="true" class="products__svg_btn">
              ${JSON.parse(localStorage.getItem("cart")||"[]").map(t=>t.id).includes(t)?"✓":`<svg class="products__basket">
                       <use href="#cart"></use>
                     </svg>`}
            </button>
          </div>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{let e=JSON.parse(localStorage.getItem("cart")||"[]");document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:s,img:r,category:a,size:i,is10PercentOff:c,popularity:o})=>`<li id='${t}' data-product='true' class="popular__item">
          <div class="popular__wrapper">
            <img src="${r}" alt="${s}" class="popular__img" />
          </div>
          <div class="popular__text">
            <h3 class="popular__subtitle">${s}</h3>
            <ul class="popular__points">
              <li class="popular__point">
                Category: <span class="popular__span">${a}</span>
              </li>
              <li class="popular__point">
                Size: <span class="popular__span">${i}</span>
              </li>
              <li class="popular__point">
                Popularity: <span class="popular__span">${o}</span>
              </li>
            </ul>
          </div>
          <button data-productadd='true' class="popular__cart">
            ${e.map(t=>t.id).includes(t)?"✓":`
            <svg class="popular__icon" width="12" height="12">
              <use href="#cart"></use>
            </svg>`}
          </button>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json())}catch(t){return t}})().then(t=>{let e=document.querySelector(".discount__list"),s=JSON.parse(localStorage.getItem("cart")||"[]").map(t=>t.id);e.innerHTML=t.slice(0,2).map(t=>{let e=s.includes(t._id);return`
      <li id="${t._id}" class="discount__item" data-product="true">
        <svg class="discount__svg-discount">
          <use href="#discount"></use>
        </svg>
        <div class="discount__box-img">
          <img
            src="${t.img}"
            alt="${t.name}"
            class="discount__image"
          />
        </div>
        <div class="discount__svg-price">
          <h3 class="discount__item-title">${t.name}</h3>
          <div class="discount__item-wrap">
            <p class="discount__price">$${t.price}</p>
            <button data-productadd="true" class="discount__svg-container">
              ${e?"✓":`<svg class="discount__basket">
                      <use href="#cart"></use>
                    </svg>`}
            </button>
          </div>
        </div>
      </li>
    `}).join("")});let u=1;const p=(t,e,s,r)=>{i(s,e,t,r).then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:s,category:r,size:a,price:i,is10PercentOff:c,popularity:o})=>`<li id="${t}" data-product="true" class="products__item">
        ${c?`<div class="products__green">
  <svg class="products__discount" width="54" height="54">
    <use href="#discount"></use>
  </svg>
</div>`:""}
                <div class="products__container_img">
                    <img src="${s}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">${e}</h2>
                <p class="products__category">Category: <span>${r}</span></p>
                <p class="products__size">Size: <span>${a}</span></p>
                <p class="products__popularity">Popularity: <span>${o}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${i}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join("")})},_=(t,e,s,r)=>{i(s,e,t,r).then(({totalPages:e})=>{let s="";for(let r=t;r<=e&&r<=t+3;r+=1)s+=`<li id='${r}' class="pagination__item ${t===r?"pagination__accent":""}">
        <button class="pagination__btn">${r}
        </button>
      </li>`;e>4&&(s+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=s,t-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),t-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),t+2>e?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),t+1>e?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};_(1,o,c,n),document.querySelector("#pagination-list").addEventListener("click",t=>{t.target.classList.contains("pagination__btn")&&Number.parseInt(t.target.parentElement.id)!==u&&(_(u=Number.parseInt(t.target.parentElement.id),o,c,n),p(u,o,c,n))}),document.querySelector("#next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(_(u+=1,o,c,n),p(u,o,c,n))}),document.querySelector("#double-next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(_(u+=2,o,c,n),p(u,o,c,n))}),document.querySelector("#prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(_(u-=1,o,c,n),p(u,o,c,n))}),document.querySelector("#double-prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(_(u-=2,o,c,n),p(u,o,c,n))}),document.querySelector("#filters-form").addEventListener("submit",t=>{_(u=1,o,c,n)}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{_(u=1,o,c,n)}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{_(u=1,o,c,n)}),r("lgck5");
//# sourceMappingURL=FoodBoutique.53a27b3f.js.map
