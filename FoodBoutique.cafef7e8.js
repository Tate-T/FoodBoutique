var t=globalThis,e={},r={},s=t.parcelRequire46ec;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in r){var s=r[t];delete r[t];var c={id:t,exports:{}};return e[t]=c,s.call(c.exports,c,c.exports),c.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},t.parcelRequire46ec=s);var c=s.register;c("lgck5",function(t,e){var r=s("4T1Q4");Object.keys(localStorage).includes("cart")||localStorage.setItem("cart",JSON.stringify([])),document.querySelector("#header-cart").textContent=JSON.parse(localStorage.getItem("cart")).length,document.querySelector("body").addEventListener("click",async t=>{if(!("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")||"true"===t.target.dataset.productclose||t.target.closest('[data-productclose="true"]')||"count"===t.target.dataset.cart||t.target.closest("[data-cart='count']"))&&("true"===t.target.dataset.product||t.target.closest("[data-product]"))){let e;document.querySelector("#product-backdrop").classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll"),e=""!==t.target.id?t.target.id:t.target.closest("[data-product]").id,await (0,r.getProduct)(e).then(({_id:t,name:e,img:r,category:s,price:c,size:a,desc:o,is10PercentOff:d,popularity:i})=>{document.querySelector("[data-productmodal]").id=t,document.querySelector("#product-img").src=r,document.querySelector("#product-img").alt=e,document.querySelector("#product-name").textContent=e,document.querySelector("#product-category").textContent=s,document.querySelector("#product-size").textContent=a,document.querySelector("#product-popularity").textContent=i,document.querySelector("#product-price").textContent=c,document.querySelector("#product-desc").textContent=o,document.querySelector("#product-add").innerHTML=JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?`Added \u{2713}`:`Add to <svg class="product__icon" width="18" height="18">
            <use href="#cart"></use>
          </svg>`})}}),document.querySelector("#product-close").addEventListener("click",async()=>{document.querySelector("#product-backdrop").classList.add("is-hidden"),document.querySelector("[data-productmodal]").id="",document.querySelector("body").classList.remove("no-scroll"),document.querySelector("#product-img").src="",document.querySelector("#product-img").alt="",document.querySelector("#product-name").textContent="",document.querySelector("#product-category").textContent="",document.querySelector("#product-size").textContent="",document.querySelector("#product-popularity").textContent="",document.querySelector("#product-price").textContent="",document.querySelector("#product-desc").textContent=""}),document.querySelector("body").addEventListener("click",async t=>{if("true"===t.target.dataset.productadd||t.target.closest("[data-productadd]")){let e="true"===t.target.dataset.productadd?t.target:t.target.closest("[data-productadd]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-product]").id)||(r.push({id:t.target.closest("[data-product]").id,count:1}),e.textContent="✓",localStorage.setItem("cart",JSON.stringify(r)),document.querySelector("#header-cart").textContent=JSON.parse(localStorage.getItem("cart")).length)}}),document.querySelector("[data-productmodal]").addEventListener("click",async t=>{if("true"===t.target.dataset.productaddmodal||t.target.closest("[data-productaddmodal]")){let e="true"===t.target.dataset.productaddmodal?t.target:t.target.closest("[data-productaddmodal]"),r=[...JSON.parse(localStorage.getItem("cart"))];r.map(t=>t.id).includes(t.target.closest("[data-productmodal]").id)||(r.push({id:t.target.closest("[data-productmodal]").id,count:1}),e.textContent="Added ✓",localStorage.setItem("cart",JSON.stringify(r)),document.querySelector("#header-cart").textContent=JSON.parse(localStorage.getItem("cart")).length,document.getElementById(`${t.target.closest("[data-productmodal]").id}`).querySelector("[data-productadd='true']").textContent="✓")}})}),c("4T1Q4",function(t,e){Object.defineProperty(t.exports,"getProduct",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let r=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}}});const a=async(t,e,r,s)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${s}&category=${e}&page=${r}&limit=9`).then(t=>t.json())}catch(t){return t}};let o="",d="",i="";const n=(t,e,r,s)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}a(t,e,r,s).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:s,size:c,price:a,is10PercentOff:o,popularity:d})=>`<li id="${t}" data-product="true" class="products__item">
        ${o?`<div class="products__green">
  <svg class="products__discount" width="60" height="60">
    <use href="#discount"></use>
  </svg>
</div>`:""}
                <div class="products__container_img">
                    <img src="${r}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">${e}</h2>
                <p class="products__category">Category: <span>${s}</span></p>
                <p class="products__size">Size: <span>${c}</span></p>
                <p class="products__popularity">Popularity: <span>${d}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${a}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),n(o=document.querySelector("#filters-input").value,d,1,i)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,d="all"===t.target.id?"":t.target.id,n(o,d,1,i)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{t.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,i="allAlphabet"===t.target.id?"":t.target.id,n(o,d,1,i)}),document.querySelector("#products-list"),a("","",1,"").then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:s,size:c,price:a,is10PercentOff:o,popularity:d})=>`
            <li id="${t}" data-product="true" class="products__item">

${o?`<div class="products__green">
  <svg class="products__discount" width="60" height="60">
    <use href="#discount"></use>
  </svg>
</div>`:""}

            <div class= "products__container_img" >
                    <img src="${r}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">${e}</h2>
                <p class="products__category">Category: <span>${s}</span></p>
                <p class="products__size">Size: <span>${c}</span></p>
                <p class="products__popularity">Popularity: <span>${d}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${a}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`<svg class="products__basket">
                        <use href="#cart"></use>
                    </svg>`}
                    </button>
                </div>
            </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:e,img:r,category:s,size:c,is10PercentOff:a,popularity:o})=>`<li id='${t}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${r}" alt="${e}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${e}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${s}</span>
            </li>
            <li class="popular__point">
              Size: <span class="popular__span">${c}</span>
            </li>            <li class="popular__point">
              Popularity: <span class="popular__span">${o}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
    <svg class="popular__icon" width="12" height="12">
      <use href="#cart"></use>
    </svg>`}
        </button>
      </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json())}catch(t){return t}})().then(t=>{let e="";for(let r=0;r<2;r+=1)e+=`
             <li id='${t[r]._id}' class="discount__item" data-product="true">
            <svg class="discount__svg-discount">
              <use href="#discount"></use>
            </svg>
            <div class="discount__box-img">
              <img
                src="${t[r].img}"
                alt="${t[r].name}"
                class="discount__image"
              />
            </div>
            <div class="discount__svg-price">
              <h3 class="discount__item-title">${t[r].name}</h3>
              <div class="discount__item-wrap">
                <p class="discount__price">$${t[r].price}</p>
                <button data-productadd="true" class="discount__svg-container">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t[r]._id)?"✓":`
                        <svg class="discount__basket">
                        <use href="#cart"></use>
                        </svg>`}
                    </button>
              </div>
            </div>
          </li>
          `;document.querySelector(".discount__list").innerHTML=e});let u=1;const l=(t,e,r,s)=>{a(r,e,t,s).then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:r,category:s,size:c,price:a,is10PercentOff:o,popularity:d})=>`<li id="${t}" data-product="true" class="products__item">
        ${o?`<div class="products__green">
  <svg class="products__discount" width="54" height="54">
    <use href="#discount"></use>
  </svg>
</div>`:""}
                <div class="products__container_img">
                    <img src="${r}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">${e}</h2>
                <p class="products__category">Category: <span>${s}</span></p>
                <p class="products__size">Size: <span>${c}</span></p>
                <p class="products__popularity">Popularity: <span>${d}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${a}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join("")})},p=(t,e,r,s)=>{a(r,e,t,s).then(({totalPages:e})=>{let r="";for(let s=t;s<=e&&s<=t+3;s+=1)r+=`<li id='${s}' class="pagination__item ${t===s?"pagination__accent":""}">
        <button class="pagination__btn">${s}
        </button>
      </li>`;e>4&&(r+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=r,t-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),t-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),t+2>e?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),t+1>e?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};p(1,d,o,i),document.querySelector("#pagination-list").addEventListener("click",t=>{t.target.classList.contains("pagination__btn")&&Number.parseInt(t.target.parentElement.id)!==u&&(p(u=Number.parseInt(t.target.parentElement.id),d,o,i),l(u,d,o,i))}),document.querySelector("#next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(u+=1,d,o,i),l(u,d,o,i))}),document.querySelector("#double-next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(u+=2,d,o,i),l(u,d,o,i))}),document.querySelector("#prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(u-=1,d,o,i),l(u,d,o,i))}),document.querySelector("#double-prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(u-=2,d,o,i),l(u,d,o,i))}),document.querySelector("#filters-form").addEventListener("submit",t=>{p(u=1,d,o,i)}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{p(u=1,d,o,i)}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{p(u=1,d,o,i)}),s("lgck5");
//# sourceMappingURL=FoodBoutique.cafef7e8.js.map
