const t=async t=>{try{let s=await fetch(`https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/users/${t}`);return await s.json()}catch(t){return console.error("Error while triing to get user:",t),null}},s=t=>t.map(t=>`
       <li class="basket__product">
            <div class="basket__product--square"></div>
            <div class="basket__product--content">
              <h4 class="basket__product--title">${t.title}</h4>
              <div class="basket__product--wrap">
                <p class="basket__product--text">Category:<span class="basket__product--bold">${t.category}</span></p>
              <p class="basket__product--text">Size:<span class="basket__product--bold">${t.size}</span></p>
              </div>
              <p class="basket__product--price">$${t.price}</p>
            </div>
            <button class="basket__product--close">
            <svg
            class="basket__product--icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 9.093l-2.093-2.093-6.907 6.907-6.907-6.907-2.093 2.093 6.907 6.907-6.907 6.907 2.093 2.093 6.907-6.907 6.907 6.907 2.093-2.093-6.907-6.907 6.907-6.907z"
            ></path>
          </svg>
          </button>
           <div class="basket__product--controls">
              <button class="basket__product--btn basket__product--subtract">
                <div class="basket__product--minus"></div>
              </button>
              <p class="basket__product--number">${t.number}</p>
              <button class="basket__product--btn basket__product--add">
                <div class="basket__product--plus"></div>
                <div class="basket__product--plus"></div>
              </button>
            </div>
          </li>
      `).join(""),e=document.querySelector(".basket__list");t(1).then(t=>{e.innerHTML=s(t.cart)});const a=document.querySelector(".basket__list");let c=null;function o(t,s){let e="add"===s?t.previousElementSibling:t.nextElementSibling,a=Number(e.textContent)+("add"===s?1:-1);a<0||(e.textContent=a)}function r(t,s){o(t,s),c=setInterval(()=>{o(t,s)},150)}function d(){clearInterval(c)}a.addEventListener("mousedown",t=>{t.target.closest(".basket__product--add")?r(t.target.closest(".basket__product--add"),"add"):t.target.closest(".basket__product--subtract")&&r(t.target.closest(".basket__product--subtract"),"subtract")}),document.addEventListener("mouseup",d),a.addEventListener("mouseleave",d);
//# sourceMappingURL=cart.e2e5bc45.js.map
