import { getFilteredProducts } from "../../markup/getFilteredProducts";

// Экспортирут перемених
export let keyword = "";
export let category = "";
export let sort = "";

const makeMarkup = (keyword, category, id, sort) => {
  if (category.includes("&")) {
    document.querySelector("#products-list").innerHTML = `
      <div class="products__nocards">
        <h3 class="products__notitle">
          I am sorry, but this <span class="products__noaccent">category</span> isn't working
        </h3>
        <p class="products__nodesc">
          Choose other catogories or write the name of a product.
        </p>
      </div>`;
    document.querySelector("#pagination-section").classList.add("display-none");
    return;
  }

  getFilteredProducts(keyword, category, id, sort).then((data) => {
    if (data.results.length === 0) {
      document.querySelector("#products-list").innerHTML = `
        <div class="products__nocards">
          <h3 class="products__notitle">
            Nothing was found for the selected
            <span class="products__noaccent">filters...</span>
          </h3>
          <p class="products__nodesc">
            Try adjusting your search parameters or browse our range by other criteria
            to find the perfect product for you.
          </p>
        </div>`;
      document.querySelector("#pagination-section").classList.add("display-none");
      return;
    }

    document.querySelector("#products-list").innerHTML = data.results.map(({
      _id, name, img, category, size, price, is10PercentOff, popularity
    }) => `
      <li id="${_id}" data-product="true" class="products__item">
        ${is10PercentOff ? `
          <div class="products__green">
            <svg class="products__discount" width="60" height="60">
              <use href="#discount"></use>
            </svg>
          </div>` : ""}
        <div class="products__container_img">
          <img src="${img}" alt="${name}" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
          <p class="products__price">$${price}</p>
          <button data-productadd="true" class="products__svg_btn">
            ${JSON.parse(localStorage.getItem("cart") || "[]").some(item => item.id === _id)
              ? "✓"
              : `<svg class="products__basket"><use href="#cart"></use></svg>`}
          </button>
        </div>
      </li>`).join("");

    document.querySelector("#pagination-section").classList.remove("display-none");
  });
};


document.querySelector("#filters-alphabet-list").addEventListener("click", (e) => {
  const active = e.currentTarget.querySelector(".filters__item--checked");
  if (active) active.classList.remove("filters__item--checked");
  e.target.classList.add("filters__item--checked");
  e.currentTarget.classList.add("is-hidden");
  document.querySelector("#filters-alphabet-text").textContent = e.target.textContent;
  sort = e.target.id === "allAlphabet" ? "" : e.target.id;
  makeMarkup(keyword, category, 1, sort);
});


document.querySelector("#filters-form").addEventListener("submit", (e) => {
  e.preventDefault();
  keyword = document.querySelector("#filters-input").value.trim();
  makeMarkup(keyword, category, 1, sort);
});

// категорі
document.querySelector("#filters-categories").addEventListener("click", (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});


document.querySelector("#filters-categories-list").addEventListener("click", (e) => {
  const active = e.currentTarget.querySelector(".filters__item--checked");
  if (active) active.classList.remove("filters__item--checked");
  e.target.classList.add("filters__item--checked");
  e.currentTarget.classList.add("is-hidden");
  document.querySelector("#filters-categories-text").textContent = e.target.textContent;
  category = e.target.id === "all" ? "" : e.target.id;
  makeMarkup(keyword, category, 1, sort);
});


document.querySelector("#filters-alphabet").addEventListener("click", (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});