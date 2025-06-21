import { getDiscountProducts } from "../../markup/getDiscountProducts";

getDiscountProducts().then((items) => {
  const container = document.querySelector(".discount__list");
  const cartItems = JSON.parse(localStorage.getItem("products") || "[]").map((el) => el.id);
  const renderList = items.slice(0, 2).map((product) => {
    const inCart = cartItems.includes(product._id);
    return `
      <li id="${product._id}" class="discount__item" data-product="true">
        <svg class="discount__svg-discount">
          <use href="#discount"></use>
        </svg>
        <div class="discount__box-img">
          <img
            src="${product.img}"
            alt="${product.name}"
            class="discount__image"
          />
        </div>
        <div class="discount__svg-price">
          <h3 class="discount__item-title">${product.name}</h3>
          <div class="discount__item-wrap">
            <p class="discount__price">$${product.price}</p>
            <button data-productadd="true" class="discount__svg-container">
              ${
                JSON.parse(localStorage.getItem("products") || "[]")
                  .includes(product._id)
                  ? "✓"
                  : `<svg class="discount__basket">
                      <use href="#cart"></use>
                    </svg>`
              }
            </button>
          </div>
        </div>
      </li>
    `;
  });

  container.innerHTML = renderList.join("");
});