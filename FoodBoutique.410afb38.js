var t=globalThis,e={},o={},s=t.parcelRequire46ec;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in o){var s=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,s.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},t.parcelRequire46ec=s),(0,s.register)("1qv28",function(t,e){async function o(t){try{let e=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});if(400===e.status){document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin"),document.getElementById("footer-modal-image").style.display="none",document.getElementById("footer-modal-title").innerHTML='Service  <span style="color:#6D8434;">not found</span> (400)',document.getElementById("footer-modal-text").textContent="Check your email address and try again.";return}let o=await e.json();!1===o.success&&o.message&&o.message.includes("already exists")?(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-image").style.display="none",document.getElementById("footer-modal-title").innerHTML='This <span style="color:#6D8434;">email address</span> has already been entered',document.getElementById("footer-modal-text").textContent="You have already subscribed to our new products. Watch for offers at the mailing address."):(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin"),document.getElementById("footer-modal-image").style.display="block",document.getElementById("footer-modal-title").innerHTML='Thanks for subscribing for <span style="color:#6D8434;">new</span> products',document.getElementById("footer-modal-text").textContent="We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.",document.getElementById("footer-modal-center-div").style.marginTop="100px")}catch(t){document.getElementById("footer-modal-title").textContent="Network error",document.getElementById("footer-modal-text").textContent="Please check your connection and try again.",console.error("API ERROR",t)}}window.greetFooterSubscribe=function(){let t=document.getElementById("footer-input");o(t?t.value.trim():""),openFooterModal()},window.closeFooterModal=function(){document.getElementById("footer-modal").style.display="none"},window.openFooterModal=function(){document.getElementById("footer-modal").style.display="flex"}});const a=async(t,e,o,s)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${t}${s}&category=${e}&page=${o}&limit=9`).then(t=>t.json())}catch(t){return t}};let r="",n="",c="";const i=(t,e,o,s)=>{if(e.includes("&")){document.querySelector("#products-list").innerHTML=`
      <div class="products__nocards">
        <h3 class="products__notitle">
          I am sorry, but this <span class="products__noaccent">category</span> isn't working
        </h3>
        <p class="products__nodesc">
          Choose other catogories or write the name of a product.
        </p>
      </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}a(t,e,o,s).then(t=>{if(0===t.results.length){document.querySelector("#products-list").innerHTML=`
        <div class="products__nocards">
          <h3 class="products__notitle">
            Nothing was found for the selected
            <span class="products__noaccent">filters...</span>
          </h3>
          <p class="products__nodesc">
            Try adjusting your search parameters or browse our range by other criteria
            to find the perfect product for you.
          </p>
        </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`
      <li id="${t}" data-product="true" class="products__item">
        ${n?`
          <div class="products__green">
            <svg class="products__discount" width="60" height="60">
              <use href="#discount"></use>
            </svg>
          </div>`:""}
        <div class="products__container_img">
          <img src="${o}" alt="${e}" class="products__img">
        </div>
        <h2 class="products__title">${e}</h2>
        <p class="products__category">Category: <span>${s}</span></p>
        <p class="products__size">Size: <span>${a}</span></p>
        <p class="products__popularity">Popularity: <span>${c}</span></p>
        <div class="products__svg_price">
          <p class="products__price">$${r}</p>
          <button data-productadd="true" class="products__svg_btn">
            ${JSON.parse(localStorage.getItem("cart")||"[]").some(e=>e.id===t)?"✓":'<svg class="products__basket"><use href="#cart"></use></svg>'}
          </button>
        </div>
      </li>`).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{let e=t.currentTarget.querySelector(".filters__item--checked");e&&e.classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=t.target.textContent,c="allAlphabet"===t.target.id?"":t.target.id,i(r,n,1,c)}),document.querySelector("#filters-form").addEventListener("submit",t=>{t.preventDefault(),i(r=document.querySelector("#filters-input").value.trim(),n,1,c)}),document.querySelector("#filters-categories").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{let e=t.currentTarget.querySelector(".filters__item--checked");e&&e.classList.remove("filters__item--checked"),t.target.classList.add("filters__item--checked"),t.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=t.target.textContent,n="all"===t.target.id?"":t.target.id,i(r,n,1,c)}),document.querySelector("#filters-alphabet").addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("is-hidden")});const d=document.querySelector("#products-list");a("","",1,"").then(t=>{d.innerHTML=t.results.map(({_id:t,name:e,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`
        <li id="${t}" data-product="true" class="products__item">

          ${n?`<div class="products__green">
                  <svg class="products__discount" width="60" height="60">
                    <use href="#discount"></use>
                  </svg>
                </div>`:""}

          <div class="products__container_img">
            <img src="${o}" alt="${e}" class="products__img" />
          </div>
          <h2 class="products__title">${e}</h2>
          <p class="products__category">Category: <span>${s}</span></p>
          <p class="products__size">Size: <span>${a}</span></p>
          <p class="products__popularity">Popularity: <span>${c}</span></p>
          <div class="products__svg_price">
            <p class="products__price">$${r}</p>
            <button data-productadd="true" class="products__svg_btn">
              ${JSON.parse(localStorage.getItem("cart")||"[]").map(t=>t.id).includes(t)?"✓":`<svg class="products__basket">
                       <use href="#cart"></use>
                     </svg>`}
            </button>
          </div>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>t.json())}catch(t){return t}})().then(t=>{let e=JSON.parse(localStorage.getItem("cart")||"[]");document.querySelector("#popular__list").innerHTML=t.map(({_id:t,name:o,img:s,category:a,size:r,is10PercentOff:n,popularity:c})=>`<li id='${t}' data-product='true' class="popular__item">
          <div class="popular__wrapper">
            <img src="${s}" alt="${o}" class="popular__img" />
          </div>
          <div class="popular__text">
            <h3 class="popular__subtitle">${o}</h3>
            <ul class="popular__points">
              <li class="popular__point">
                Category: <span class="popular__span">${a}</span>
              </li>
              <li class="popular__point">
                Size: <span class="popular__span">${r}</span>
              </li>
              <li class="popular__point">
                Popularity: <span class="popular__span">${c}</span>
              </li>
            </ul>
          </div>
          <button data-productadd='true' class="popular__cart">
            ${e.map(t=>t.id).includes(t)?"✓":`
            <svg class="popular__icon" width="12" height="12">
              <use href="#cart"></use>
            </svg>`}
          </button>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json())}catch(t){return t}})().then(t=>{let e=document.querySelector(".discount__list"),o=JSON.parse(localStorage.getItem("cart")||"[]").map(t=>t.id);e.innerHTML=t.slice(0,2).map(t=>{let e=o.includes(t._id);return`
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
    `}).join("")});let l=1;const u=(t,e,o,s)=>{a(o,e,t,s).then(t=>{document.querySelector("#products-list").innerHTML=t.results.map(({_id:t,name:e,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`<li id="${t}" data-product="true" class="products__item">
        ${n?`<div class="products__green">
  <svg class="products__discount" width="54" height="54">
    <use href="#discount"></use>
  </svg>
</div>`:""}
                <div class="products__container_img">
                    <img src="${o}" alt="${e}" class="products__img">
                </div>
                <h2 class="products__title">${e}</h2>
                <p class="products__category">Category: <span>${s}</span></p>
                <p class="products__size">Size: <span>${a}</span></p>
                <p class="products__popularity">Popularity: <span>${c}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${r}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(t=>t.id).includes(t)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join("")})},p=(t,e,o,s)=>{a(o,e,t,s).then(({totalPages:e})=>{let o="";for(let s=t;s<=e&&s<=t+3;s+=1)o+=`<li id='${s}' class="pagination__item ${t===s?"pagination__accent":""}">
        <button class="pagination__btn">${s}
        </button>
      </li>`;e>4&&(o+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=o,t-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),t-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),t+2>e?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),t+1>e?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};p(1,n,r,c),document.querySelector("#pagination-list").addEventListener("click",t=>{t.target.classList.contains("pagination__btn")&&Number.parseInt(t.target.parentElement.id)!==l&&(p(l=Number.parseInt(t.target.parentElement.id),n,r,c),u(l,n,r,c))}),document.querySelector("#next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l+=1,n,r,c),u(l,n,r,c))}),document.querySelector("#double-next").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l+=2,n,r,c),u(l,n,r,c))}),document.querySelector("#prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l-=1,n,r,c),u(l,n,r,c))}),document.querySelector("#double-prev").addEventListener("click",t=>{t.currentTarget.classList.contains("pagination__disable")||(p(l-=2,n,r,c),u(l,n,r,c))}),document.querySelector("#filters-form").addEventListener("submit",t=>{p(l=1,n,r,c)}),document.querySelector("#filters-categories-list").addEventListener("click",t=>{p(l=1,n,r,c)}),document.querySelector("#filters-alphabet-list").addEventListener("click",t=>{p(l=1,n,r,c)}),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([])),s("1qv28"),window.openProductModal=async function(t){let e=await fetch(`https://food-boutique.b.goit.study/api/products/${t}`),o=await e.json();document.getElementById("product-modal-image").src=o.img,document.getElementById("product-modal-image").alt=o.name,document.getElementById("product-modal-title").textContent=o.name,document.querySelector(".product-modal-button").id=t;let s=document.querySelectorAll(".product-modal-property");s&&(s[0].innerHTML=`<span style="color:#0101014D;">Category:</span> ${o.category.replace("_"," ")}`,s[1].innerHTML=`<span style="color:#0101014D;">Size:</span> ${o.size}`,s[2].innerHTML=`<span style="color:#0101014D;">Popularity:</span> ${o.popularity}`),document.querySelector(".product-modal-desc").textContent=o.desc,document.querySelector(".product-modal-price").textContent=`$${o.price}`,document.getElementById("product-modal").style.display="flex"},window.closeProductModal=function(){document.getElementById("product-modal").style.display="none"},document.addEventListener("click",function(t){if(t.target.classList.contains("products__container_img")||t.target.classList.contains("products__img")){let e=t.target.closest("li");e&&e.id&&openProductModal(e.id)}else if(t.target.classList.contains("products__svg_btn")||t.target.parentNode.classList.contains("products__svg_btn")||t.target.parentNode.parentNode.classList.contains("products__svg_btn")||t.target.classList.contains("discount__svg-container")||t.target.parentNode.classList.contains("discount__svg-container")||t.target.parentNode.parentNode.classList.contains("discount__svg-container")||t.target.classList.contains("popular__cart")||t.target.parentNode.classList.contains("popular__cart")||t.target.parentNode.parentNode.classList.contains("popular__cart")){let e=JSON.parse(localStorage.getItem("products"))??[],o=t.target.closest("li").id;e.includes(o)||(e.push(o),localStorage.setItem("products",JSON.stringify(e)))}}),document.querySelector(".product-modal-button").addEventListener("click",async t=>{let e=JSON.parse(localStorage.getItem("products"))??[],o=t.target.closest("button").id;e.includes(o)||(e.push(o),localStorage.setItem("products",JSON.stringify(e)))});
//# sourceMappingURL=FoodBoutique.410afb38.js.map
