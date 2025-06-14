var t=globalThis,e={},s={},r=t.parcelRequire46ec;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in s){var r=s[t];delete s[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},t.parcelRequire46ec=r);var a=r.register;a("lgck5",function(t,e){r("fMbCU"),localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([]))}),a("fMbCU",function(t,e){}),document.querySelector(".basket__list");const o=JSON.parse(localStorage.getItem("products"))??[],c=document.querySelector(".basket__list");async function n(){for(let t of o){let e=await fetch(`https://food-boutique.b.goit.study/api/products/${t}`),s=await e.json(),r=document.createElement("li");r.className="basket__product",r.dataset.price=s.price,r.dataset.id=s._id,r.innerHTML=`
      <div class="basket__product--square">
      <img src="${s.img}" alt="${s.name}" class="basket__product--image">
      </div>
      <div class="basket__product--content">
        <h4 class="basket__product--title">${s.name}</h4>
        <div class="basket__product--wrap">
          <p class="basket__product--text">Category: <span class="basket__product--bold">${s.category}</span></p>
          <p class="basket__product--text">Size: <span class="basket__product--bold">${s.size}</span></p>
        </div>
        <p class="basket__product--price">$${s.price}</p>
      </div>
      <button class="basket__product--close">
        <svg class="basket__product--icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 9.093l-2.093-2.093-6.907 6.907-6.907-6.907-2.093 2.093 6.907 6.907-6.907 6.907 2.093 2.093 6.907-6.907 6.907 6.907 2.093-2.093-6.907-6.907 6.907-6.907z"></path>
        </svg>
      </button>
      <div class="basket__product--controls">
        <button class="basket__product--btn basket__product--subtract">
          <div class="basket__product--minus"></div>
        </button>
        <p class="basket__product--number">1</p>
        <button class="basket__product--btn basket__product--add">
          <div class="basket__product--plus"></div>
          <div class="basket__product--plus"></div>
        </button>
      </div>
    `,c.appendChild(r),document.querySelector(".basket__number").textContent=`${parseFloat(document.querySelector(".basket__number").textContent.replace(",","."))+s.price}`.replace(".",",")}}document.querySelector(".basket__title").textContent=`Cart (${o.length})`,0===o.length?document.querySelector(".basket__wraper").innerHTML='<img src="../images/desktop/empty-basket.png" alt="">':n();let d=null;function l(t,e){let s="add"===e?t.previousElementSibling:t.nextElementSibling,r=Number(s.textContent)+("add"===e?1:-1);if(r<0)return;s.textContent=r;let a=parseFloat(t.closest(".basket__product").dataset.price),o=document.querySelector(".basket__number"),c=parseFloat(o.textContent.replace(",","."));"add"===e?c+=a:c-=a,o.textContent=c.toFixed(2).replace(".",",")}function u(t,e){l(t,e),d=setInterval(()=>{l(t,e)},150)}function i(){clearInterval(d)}c.addEventListener("mousedown",t=>{t.target.closest(".basket__product--add")?u(t.target.closest(".basket__product--add"),"add"):t.target.closest(".basket__product--subtract")&&u(t.target.closest(".basket__product--subtract"),"subtract")}),document.addEventListener("mouseup",i),c.addEventListener("mouseleave",i),document.querySelector(".basket__input"),document.querySelector(".basket__form").addEventListener("submit",async t=>{t.preventDefault(),document.querySelector(".order__backdrop").classList.remove("order__hidden")}),document.querySelector(".order__close").addEventListener("click",t=>{t.preventDefault(),document.querySelector(".order__backdrop").classList.add("order__hidden")}),r("lgck5");
//# sourceMappingURL=cart.8cfcb503.js.map
