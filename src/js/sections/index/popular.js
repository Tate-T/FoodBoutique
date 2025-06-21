import { getPopularProducts } from "../../markup/getPopularProducts";

getPopularProducts().then((products) => {
  const cart = JSON.parse(localStorage.getItem("products") || "[]"); 

  document.querySelector("#popular__list").innerHTML = products
    .map(
      ({ _id, name, img, category, size, is10PercentOff, popularity }) =>
        `<li id='${_id}' data-product='true' class="popular__item">
          <div class="popular__wrapper">
            <img src="${img}" alt="${name}" class="popular__img" />
          </div>
          <div class="popular__text">
            <h3 class="popular__subtitle">${name}</h3>
            <ul class="popular__points">
              <li class="popular__point">
                Category: <span class="popular__span">${category}</span>
              </li>
              <li class="popular__point">
                Size: <span class="popular__span">${size}</span>
              </li>
              <li class="popular__point">
                Popularity: <span class="popular__span">${popularity}</span>
              </li>
            </ul>
          </div>
          <button data-productadd='true' class="popular__cart">
            ${
                JSON.parse(localStorage.getItem("products") || "[]")
                  .includes(_id)
                  ? "✓"
                  : `<svg class="popular__icon" width="12" height="12">
              <use href="#cart"></use>
            </svg>`
              }
          </button>
        </li>`
    )
    .join("");
});