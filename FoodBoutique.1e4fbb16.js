var e=globalThis,t={},o={},s=e.parcelRequire46ec;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire46ec=s);var a=s.register;async function r(e){try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(400===t.status){document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin"),document.getElementById("footer-modal-image").style.display="none",document.getElementById("footer-modal-title").innerHTML='Service  <span style="color:#6D8434;">not found</span> (400)',document.getElementById("footer-modal-text").textContent="Check your email address and try again.";return}let o=await t.json();!1===o.success&&o.message&&o.message.includes("already exists")?(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-image").style.display="none",document.getElementById("footer-modal-title").innerHTML='This <span style="color:#6D8434;">email address</span> has already been entered',document.getElementById("footer-modal-text").textContent="You have already subscribed to our new products. Watch for offers at the mailing address."):(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin"),document.getElementById("footer-modal-image").style.display="block",document.getElementById("footer-modal-title").innerHTML='Thanks for subscribing for <span style="color:#6D8434;">new</span> products',document.getElementById("footer-modal-text").textContent="We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.",document.getElementById("footer-modal-center-div").style.marginTop="100px")}catch(e){document.getElementById("footer-modal-title").textContent="Network error",document.getElementById("footer-modal-text").textContent="Please check your connection and try again.",console.error("API ERROR",e)}}a("lgck5",function(e,t){s("fMbCU"),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([]))}),a("fMbCU",function(e,t){}),window.greetFooterSubscribe=function(){let e=document.getElementById("footer-input");r(e?e.value.trim():""),openFooterModal()},window.closeFooterModal=function(){document.getElementById("footer-modal").style.display="none"},window.openFooterModal=function(){document.getElementById("footer-modal").style.display="flex"},window.openProductModal=async function(e){let t=await fetch(`https://food-boutique.b.goit.study/api/products/${e}`),o=await t.json();document.getElementById("product-modal-image").src=o.img,document.getElementById("product-modal-image").alt=o.name,document.getElementById("product-modal-title").textContent=o.name,document.querySelector(".product-modal-button").id=e;let s=document.querySelectorAll(".product-modal-property");s&&(s[0].innerHTML=`<span style="color:#0101014D;">Category:</span> ${o.category.replace("_"," ")}`,s[1].innerHTML=`<span style="color:#0101014D;">Size:</span> ${o.size}`,s[2].innerHTML=`<span style="color:#0101014D;">Popularity:</span> ${o.popularity}`),document.querySelector(".product-modal-desc").textContent=o.desc,document.querySelector(".product-modal-price").textContent=`$${o.price}`,document.getElementById("product-modal").style.display="flex"},window.closeProductModal=function(){document.getElementById("product-modal").style.display="none"},document.addEventListener("click",function(e){if(e.target.classList.contains("products__container_img")||e.target.classList.contains("products__img")){let t=e.target.closest("li");t&&t.id&&openProductModal(t.id)}});const n=async(e,t,o,s)=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products?keyword=${e}${s}&category=${t}&page=${o}&limit=9`).then(e=>e.json())}catch(e){return e}};let c="",i="",d="";const l=(e,t,o,s)=>{if(t.includes("&")){document.querySelector("#products-list").innerHTML=`
      <div class="products__nocards">
        <h3 class="products__notitle">
          I am sorry, but this <span class="products__noaccent">category</span> isn't working
        </h3>
        <p class="products__nodesc">
          Choose other catogories or write the name of a product.
        </p>
      </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}n(e,t,o,s).then(e=>{if(0===e.results.length){document.querySelector("#products-list").innerHTML=`
        <div class="products__nocards">
          <h3 class="products__notitle">
            Nothing was found for the selected
            <span class="products__noaccent">filters...</span>
          </h3>
          <p class="products__nodesc">
            Try adjusting your search parameters or browse our range by other criteria
            to find the perfect product for you.
          </p>
        </div>`,document.querySelector("#pagination-section").classList.add("display-none");return}document.querySelector("#products-list").innerHTML=e.results.map(({_id:e,name:t,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`
      <li id="${e}" data-product="true" class="products__item">
        ${n?`
          <div class="products__green">
            <svg class="products__discount" width="60" height="60">
              <use href="#discount"></use>
            </svg>
          </div>`:""}
        <div class="products__container_img">
          <img src="${o}" alt="${t}" class="products__img">
        </div>
        <h2 class="products__title">${t}</h2>
        <p class="products__category">Category: <span>${s}</span></p>
        <p class="products__size">Size: <span>${a}</span></p>
        <p class="products__popularity">Popularity: <span>${c}</span></p>
        <div class="products__svg_price">
          <p class="products__price">$${r}</p>
          <button data-productadd="true" class="products__svg_btn">
            ${JSON.parse(localStorage.getItem("cart")||"[]").some(t=>t.id===e)?"✓":'<svg class="products__basket"><use href="#cart"></use></svg>'}
          </button>
        </div>
      </li>`).join(""),document.querySelector("#pagination-section").classList.remove("display-none")})};document.querySelector("#filters-alphabet-list").addEventListener("click",e=>{let t=e.currentTarget.querySelector(".filters__item--checked");t&&t.classList.remove("filters__item--checked"),e.target.classList.add("filters__item--checked"),e.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=e.target.textContent,d="allAlphabet"===e.target.id?"":e.target.id,l(c,i,1,d)}),document.querySelector("#filters-form").addEventListener("submit",e=>{e.preventDefault(),l(c=document.querySelector("#filters-input").value.trim(),i,1,d)}),document.querySelector("#filters-categories").addEventListener("click",e=>{e.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",e=>{let t=e.currentTarget.querySelector(".filters__item--checked");t&&t.classList.remove("filters__item--checked"),e.target.classList.add("filters__item--checked"),e.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=e.target.textContent,i="all"===e.target.id?"":e.target.id,l(c,i,1,d)}),document.querySelector("#filters-alphabet").addEventListener("click",e=>{e.currentTarget.nextElementSibling.classList.toggle("is-hidden")});const u=document.querySelector("#products-list");n("","",1,"").then(e=>{u.innerHTML=e.results.map(({_id:e,name:t,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`
        <li id="${e}" data-product="true" class="products__item">

          ${n?`<div class="products__green">
                  <svg class="products__discount" width="60" height="60">
                    <use href="#discount"></use>
                  </svg>
                </div>`:""}

          <div class="products__container_img">
            <img src="${o}" alt="${t}" class="products__img" />
          </div>
          <h2 class="products__title">${t}</h2>
          <p class="products__category">Category: <span>${s}</span></p>
          <p class="products__size">Size: <span>${a}</span></p>
          <p class="products__popularity">Popularity: <span>${c}</span></p>
          <div class="products__svg_price">
            <p class="products__price">$${r}</p>
            <button data-productadd="true" class="products__svg_btn">
              ${JSON.parse(localStorage.getItem("cart")||"[]").map(e=>e.id).includes(e)?"✓":`<svg class="products__basket">
                       <use href="#cart"></use>
                     </svg>`}
            </button>
          </div>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/popular").then(e=>e.json())}catch(e){return e}})().then(e=>{let t=JSON.parse(localStorage.getItem("cart")||"[]");document.querySelector("#popular__list").innerHTML=e.map(({_id:e,name:o,img:s,category:a,size:r,is10PercentOff:n,popularity:c})=>`<li id='${e}' data-product='true' class="popular__item">
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
            ${t.map(e=>e.id).includes(e)?"✓":`
            <svg class="popular__icon" width="12" height="12">
              <use href="#cart"></use>
            </svg>`}
          </button>
        </li>`).join("")}),(async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products/discount").then(e=>e.json())}catch(e){return e}})().then(e=>{let t=document.querySelector(".discount__list"),o=JSON.parse(localStorage.getItem("cart")||"[]").map(e=>e.id);t.innerHTML=e.slice(0,2).map(e=>{let t=o.includes(e._id);return`
      <li id="${e._id}" class="discount__item" data-product="true">
        <svg class="discount__svg-discount">
          <use href="#discount"></use>
        </svg>
        <div class="discount__box-img">
          <img
            src="${e.img}"
            alt="${e.name}"
            class="discount__image"
          />
        </div>
        <div class="discount__svg-price">
          <h3 class="discount__item-title">${e.name}</h3>
          <div class="discount__item-wrap">
            <p class="discount__price">$${e.price}</p>
            <button data-productadd="true" class="discount__svg-container">
              ${t?"✓":`<svg class="discount__basket">
                      <use href="#cart"></use>
                    </svg>`}
            </button>
          </div>
        </div>
      </li>
    `}).join("")});let p=1;const m=(e,t,o,s)=>{n(o,t,e,s).then(e=>{document.querySelector("#products-list").innerHTML=e.results.map(({_id:e,name:t,img:o,category:s,size:a,price:r,is10PercentOff:n,popularity:c})=>`<li id="${e}" data-product="true" class="products__item">
        ${n?`<div class="products__green">
  <svg class="products__discount" width="54" height="54">
    <use href="#discount"></use>
  </svg>
</div>`:""}
                <div class="products__container_img">
                    <img src="${o}" alt="${t}" class="products__img">
                </div>
                <h2 class="products__title">${t}</h2>
                <p class="products__category">Category: <span>${s}</span></p>
                <p class="products__size">Size: <span>${a}</span></p>
                <p class="products__popularity">Popularity: <span>${c}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${r}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${JSON.parse(localStorage.getItem("cart")).map(e=>e.id).includes(e)?"✓":`
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`}
                    </button>
                </div>
            </li>`).join("")})},g=(e,t,o,s)=>{n(o,t,e,s).then(({totalPages:t})=>{let o="";for(let s=e;s<=t&&s<=e+3;s+=1)o+=`<li id='${s}' class="pagination__item ${e===s?"pagination__accent":""}">
        <button class="pagination__btn">${s}
        </button>
      </li>`;t>4&&(o+=`<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`),document.querySelector("#pagination-list").innerHTML=o,e-2<1?document.querySelector("#double-prev").classList.add("pagination__disable"):document.querySelector("#double-prev").classList.remove("pagination__disable"),e-1<1?document.querySelector("#prev").classList.add("pagination__disable"):document.querySelector("#prev").classList.remove("pagination__disable"),e+2>t?document.querySelector("#double-next").classList.add("pagination__disable"):document.querySelector("#double-next").classList.remove("pagination__disable"),e+1>t?document.querySelector("#next").classList.add("pagination__disable"):document.querySelector("#next").classList.remove("pagination__disable")})};g(1,i,c,d),document.querySelector("#pagination-list").addEventListener("click",e=>{e.target.classList.contains("pagination__btn")&&Number.parseInt(e.target.parentElement.id)!==p&&(g(p=Number.parseInt(e.target.parentElement.id),i,c,d),m(p,i,c,d))}),document.querySelector("#next").addEventListener("click",e=>{e.currentTarget.classList.contains("pagination__disable")||(g(p+=1,i,c,d),m(p,i,c,d))}),document.querySelector("#double-next").addEventListener("click",e=>{e.currentTarget.classList.contains("pagination__disable")||(g(p+=2,i,c,d),m(p,i,c,d))}),document.querySelector("#prev").addEventListener("click",e=>{e.currentTarget.classList.contains("pagination__disable")||(g(p-=1,i,c,d),m(p,i,c,d))}),document.querySelector("#double-prev").addEventListener("click",e=>{e.currentTarget.classList.contains("pagination__disable")||(g(p-=2,i,c,d),m(p,i,c,d))}),document.querySelector("#filters-form").addEventListener("submit",e=>{g(p=1,i,c,d)}),document.querySelector("#filters-categories-list").addEventListener("click",e=>{g(p=1,i,c,d)}),document.querySelector("#filters-alphabet-list").addEventListener("click",e=>{g(p=1,i,c,d)}),s("lgck5");
//# sourceMappingURL=FoodBoutique.1e4fbb16.js.map
