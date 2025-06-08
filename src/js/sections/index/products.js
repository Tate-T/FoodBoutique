import { getFilteredProducts } from "../../markup/getFilteredProducts";

const productsListContainer = document.querySelector("#products-list");

getFilteredProducts("", "", 1, "").then((data) => {
  productsListContainer.innerHTML = data.results
    .map(
      ({
        _id,
        name,
        img,
        category,
        size,
        price,
        is10PercentOff,
        popularity,
      }) => `
        <li id="${_id}" data-product="true" class="products__item">

          ${
            is10PercentOff
              ? `<div class="products__green">
                  <svg class="products__discount" width="60" height="60">
                    <use href="#discount"></use>
                  </svg>
                </div>`
              : ""
          }

          <div class="products__container_img">
            <img src="${img}" alt="${name}" class="products__img" />
          </div>
          <h2 class="products__title">${name}</h2>
          <p class="products__category">Category: <span>${category}</span></p>
          <p class="products__size">Size: <span>${size}</span></p>
          <p class="products__popularity">Popularity: <span>${popularity}</span></p>
          <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <button data-productadd="true" class="products__svg_btn">
              ${
                JSON.parse(localStorage.getItem("cart") || "[]")
                  .map((item) => item.id)
                  .includes(_id)
                  ? "✓"
                  : `<svg class="products__basket">
                       <use href="#cart"></use>
                     </svg>`
              }
            </button>
          </div>
        </li>`
    )
    .join("");
});