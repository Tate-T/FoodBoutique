const getFilteredProducts = async (keyword, category, id , sort) => {
  try {
    return await fetch(
      `https://food-boutique.b.goit.study/api/products?keyword=${keyword}${sort}&category=${category}&page=${id}&limit=9`
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
                    : ` <svg class="products__basket">
                    <use href="./svg/icons.svg#cart"></use>
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
