const e=async(e,t,o,s)=>{try{return await fetch(`https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/products${e}${s}&category=${t}&page=${o}&limit=9`).then(e=>e.json())}catch(e){return e}};let t="",o="",s="";const r=(t,o,s,r)=>{if(o.includes("&")){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`;return}e(t,o,s,r).then(e=>{if(0===e.results.length){document.querySelector("#products-list").innerHTML=`<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;return}document.querySelector("#products-list").innerHTML=e.results.map(({_id:e,name:t,img:o,category:s,size:r,price:a,is10PercentOff:c,popularity:n})=>`
    <li id="${e}" data-product="true" class="products__item">
        <div class="products__container_img">
            <img src="${o}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${t}</h2>
        <p class="products__category">Category: <span>${s}</span></p>
        <p class="products__size">Size: <span>${r}</span></p>
        <p class="products__popularity">Popularity: <span>${n}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${a}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${JSON.parse(localStorage.getItem("cart")).map(e=>e.id).includes(e)?"✓":`<svg class="products__basket" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8 1.6c-0.424 0-0.831 0.169-1.131 0.469s-0.469 0.707-0.469 1.131c0 0.424 0.169 0.831 0.469 1.131s0.707 0.469 1.131 0.469h1.952l0.488 1.955c0.005 0.023 0.010 0.045 0.016 0.067l2.173 8.688-1.429 1.427c-2.016 2.016-0.589 5.462 2.262 5.462h13.737c0.424 0 0.831-0.169 1.131-0.469s0.469-0.707 0.469-1.131-0.169-0.831-0.469-1.131c-0.3-0.3-0.707-0.469-1.131-0.469h-13.738l1.6-1.6h10.537c0.297-0 0.588-0.083 0.841-0.239s0.457-0.38 0.59-0.646l4.8-9.6c0.122-0.244 0.18-0.515 0.167-0.787s-0.094-0.537-0.237-0.769c-0.143-0.232-0.343-0.423-0.581-0.556s-0.506-0.203-0.779-0.203h-17.152l-0.496-1.989c-0.087-0.346-0.286-0.653-0.568-0.873s-0.628-0.339-0.984-0.339h-3.2zM25.6 26.4c0 0.637-0.253 1.247-0.703 1.697s-1.060 0.703-1.697 0.703c-0.636 0-1.247-0.253-1.697-0.703s-0.703-1.060-0.703-1.697c0-0.636 0.253-1.247 0.703-1.697s1.060-0.703 1.697-0.703c0.637 0 1.247 0.253 1.697 0.703s0.703 1.061 0.703 1.697zM10.4 28.8c0.636 0 1.247-0.253 1.697-0.703s0.703-1.060 0.703-1.697c0-0.636-0.253-1.247-0.703-1.697s-1.061-0.703-1.697-0.703-1.247 0.253-1.697 0.703c-0.45 0.45-0.703 1.061-0.703 1.697s0.253 1.247 0.703 1.697 1.061 0.703 1.697 0.703z">
              </path>
            </svg>`}
            </div>
        </div>
    </li>
    `).join("")})};async function a(e){try{let t=await fetch(`https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/users?email=${encodeURIComponent(e)}`,{method:"GET"}),o=await t.json();Array.isArray(o)&&o.length>0?(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-image").style.display="none",document.getElementById("footer-modal-title").innerHTML='This <span style="color:#6D8434;">email address</span> has already been entered',document.getElementById("footer-modal-text").textContent="You have already subscribed to our new products. Watch for offers at the mailing address."):(document.getElementById("footer-modal-content").classList.remove("footer-modal-content-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-height"),document.getElementById("footer-modal-center-div").classList.remove("footer-modal-center-div-modi-margin"),document.getElementById("footer-modal-content").classList.add("footer-modal-content-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-height"),document.getElementById("footer-modal-center-div").classList.add("footer-modal-center-div-margin"),document.getElementById("footer-modal-image").style.display="block",document.getElementById("footer-modal-title").innerHTML='Thanks for subscribing for <span style="color:#6D8434;">new</span> products',document.getElementById("footer-modal-text").textContent="We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.",document.getElementById("footer-modal-center-div").style.marginTop="100px")}catch(e){console.error("API ERROR",e)}}document.querySelector("#filters-form").addEventListener("submit",e=>{e.preventDefault(),r(t=document.querySelector("#filters-input").value,o,1,s)}),document.querySelector("#filters-categories").addEventListener("click",e=>{e.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-categories-list").addEventListener("click",e=>{e.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),e.target.classList.add("filters__item--checked"),e.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-categories-text").textContent=e.target.textContent,o="all"===e.target.id?"":e.target.id,r(t,o,1,s)}),document.querySelector("#filters-alphabet").addEventListener("click",e=>{e.currentTarget.nextElementSibling.classList.toggle("is-hidden")}),document.querySelector("#filters-alphabet-list").addEventListener("click",e=>{e.currentTarget.querySelector(".filters__item--checked").classList.remove("filters__item--checked"),e.target.classList.add("filters__item--checked"),e.currentTarget.classList.add("is-hidden"),document.querySelector("#filters-alphabet-text").textContent=e.target.textContent,s="allAlphabet"===e.target.id?"":e.target.id,r(t,o,1,s)}),(async()=>{try{return await fetch("https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/products").then(e=>e.json())}catch(e){return e}})().then(e=>{document.querySelector("#popular__list").innerHTML=e.map(({_id:e,name:t,img:o,category:s,size:r,is10PercentOff:a,popularity:c})=>`<li id='${e}' data-product='true' class="popular__item">
        <div class="popular__wrapper">
          <img src="${o}" alt="${t}" class="popular__img" />
        </div>
        <div class="popular__text">
          <h3 class="popular__subtitle">${t}</h3>
          <ul class="popular__points">
            <li class="popular__point">
              Category: <span class="popular__span">${s}</span>
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
        ${JSON.parse(localStorage.getItem("cart")).map(e=>e.id).includes(e)?"✓":` <svg class="popular__icon" width="12" height="12">
            <use href="./svg/icons.svg#cart"></use>
          </svg>`}
        </button>
      </li>`).join("")}),window.greetFooterSubscribe=function(){let e=document.getElementById("footer-input"),t=e?e.value.trim():"";t?(a(t),openFooterModal()):alert("Please enter your email")},window.closeFooterModal=function(){document.getElementById("footer-modal").style.display="none"},window.openFooterModal=function(){document.getElementById("footer-modal").style.display="flex"};
//# sourceMappingURL=FoodBoutique.2807b4d0.js.map
