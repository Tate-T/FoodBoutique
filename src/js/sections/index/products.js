const getFilteredProducts = async (keyword, category, id , sort) => {
  try {
    return await fetch(
      `https://682dfb9c746f8ca4a47b717c.mockapi.io/foodboutique/products${keyword}${sort}&category=${category}&page=${id}&limit=9`
    ).then((response) => response.json());
  } catch (e) {
    return e;
  } 
};
 

let keyword = ""; 
let category = "";
let sort = "";

const makeMarkup = (keyword, category, id, sort) => {
  if (category.includes("&")) {
    document.querySelector(
      "#products-list"
    ).innerHTML = `<div class="products__nocards">
  <h3 class="products__notitle">
    I am sorry, but this <span class="products__noaccent">category</span> isn't working
  </h3>
  <p class="products__nodesc">
    Choose other catogories or write the name of a product.
  </p>
</div>`;
    return;
  }
  getFilteredProducts(keyword, category, id, sort).then((data) => {
    if (data.results.length === 0) {
      document.querySelector(
        "#products-list"
      ).innerHTML = `<div class="products__nocards">
  <h3 class="products__notitle">
    Nothing was found for the selected
    <span class="products__noaccent">filters...</span>
  </h3>
  <p class="products__nodesc">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`;
      return;
    }
    document.querySelector("#products-list").innerHTML = data.results
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
        <div class="products__container_img">
            <img src="${img}" alt="Carrots" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <div  data-productadd="true"  class="products__svg_container">
                ${
                  JSON.parse(localStorage.getItem("cart"))
                    .map((item) => item.id)
                    .includes(_id)
                    ? "✓"
                    : `<svg class="products__basket" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8 1.6c-0.424 0-0.831 0.169-1.131 0.469s-0.469 0.707-0.469 1.131c0 0.424 0.169 0.831 0.469 1.131s0.707 0.469 1.131 0.469h1.952l0.488 1.955c0.005 0.023 0.010 0.045 0.016 0.067l2.173 8.688-1.429 1.427c-2.016 2.016-0.589 5.462 2.262 5.462h13.737c0.424 0 0.831-0.169 1.131-0.469s0.469-0.707 0.469-1.131-0.169-0.831-0.469-1.131c-0.3-0.3-0.707-0.469-1.131-0.469h-13.738l1.6-1.6h10.537c0.297-0 0.588-0.083 0.841-0.239s0.457-0.38 0.59-0.646l4.8-9.6c0.122-0.244 0.18-0.515 0.167-0.787s-0.094-0.537-0.237-0.769c-0.143-0.232-0.343-0.423-0.581-0.556s-0.506-0.203-0.779-0.203h-17.152l-0.496-1.989c-0.087-0.346-0.286-0.653-0.568-0.873s-0.628-0.339-0.984-0.339h-3.2zM25.6 26.4c0 0.637-0.253 1.247-0.703 1.697s-1.060 0.703-1.697 0.703c-0.636 0-1.247-0.253-1.697-0.703s-0.703-1.060-0.703-1.697c0-0.636 0.253-1.247 0.703-1.697s1.060-0.703 1.697-0.703c0.637 0 1.247 0.253 1.697 0.703s0.703 1.061 0.703 1.697zM10.4 28.8c0.636 0 1.247-0.253 1.697-0.703s0.703-1.060 0.703-1.697c0-0.636-0.253-1.247-0.703-1.697s-1.061-0.703-1.697-0.703-1.247 0.253-1.697 0.703c-0.45 0.45-0.703 1.061-0.703 1.697s0.253 1.247 0.703 1.697 1.061 0.703 1.697 0.703z">
              </path>
            </svg>`
                }
            </div>
        </div>
    </li>
    `
      )
      .join("");
  });
};

document.querySelector("#filters-form").addEventListener("submit", (e) => {
  e.preventDefault();
  keyword = document.querySelector("#filters-input").value;
  makeMarkup(keyword, category, 1, sort);
});

document.querySelector("#filters-categories").addEventListener("click", (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});

document
  .querySelector("#filters-categories-list")
  .addEventListener("click", (e) => {
    e.currentTarget
      .querySelector(".filters__item--checked")
      .classList.remove("filters__item--checked");
    e.target.classList.add("filters__item--checked");
    e.currentTarget.classList.add("is-hidden");
    document.querySelector("#filters-categories-text").textContent =
      e.target.textContent;
    if (e.target.id === "all") {
      category = "";
    } else {
      category = e.target.id;
    }
    makeMarkup(keyword, category, 1, sort);
  });

document.querySelector("#filters-alphabet").addEventListener("click", (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("is-hidden");
});

document
  .querySelector("#filters-alphabet-list")
  .addEventListener("click", (e) => {
    e.currentTarget
      .querySelector(".filters__item--checked")
      .classList.remove("filters__item--checked");
    e.target.classList.add("filters__item--checked");
    e.currentTarget.classList.add("is-hidden");
    document.querySelector("#filters-alphabet-text").textContent =
      e.target.textContent;
    if (e.target.id === "allAlphabet") {
      sort = "";
    } else {
      sort = e.target.id;
    }
    makeMarkup(keyword, category, 1, sort);
  });
