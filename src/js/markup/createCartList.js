export const createCartList = (cart) =>
  cart
    .map(
      (product) =>
        `
       <li class="basket__product">
            <div class="basket__product--square"></div>
            <div class="basket__product--content">
              <h4 class="basket__product--title">${product.title}</h4>
              <div class="basket__product--wrap">
                <p class="basket__product--text">Category:<span class="basket__product--bold">${product.category}</span></p>
              <p class="basket__product--text">Size:<span class="basket__product--bold">${product.size}</span></p>
              </div>
              <p class="basket__product--price">$${product.price}</p>
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
              <p class="basket__product--number">${product.number}</p>
              <button class="basket__product--btn basket__product--add">
                <div class="basket__product--plus"></div>
                <div class="basket__product--plus"></div>
              </button>
            </div>
          </li>
      `
    )
    .join("");
