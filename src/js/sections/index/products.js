
import { getFilteredProducts } from "../../markup/getFilteredProducts";

export let keyword = "";
export let category = "";
export let sort = "";

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
    document.querySelector("#pagination-section").classList.add("display-none");
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
      document
        .querySelector("#pagination-section")
        .classList.add("display-none");
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
        }) => `<li id="${_id}" data-product="true" class="products__item">
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
                    <img src="${img}" alt="${name}" class="products__img"  "> >
                </div>
                <h2 class="products__title">${name}</h2>
                <p class="products__category">Category: <span>${category}</span></p>
                <p class="products__size">Size: <span>${size}</span></p>
                <p class="products__popularity">Popularity: <span>${popularity}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${price}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${
                      JSON.parse(localStorage.getItem("cart"))
                        .map((item) => item.id)
                        .includes(_id)
                        ? "✓"
                        : `
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`
                    }
                    </button>
                </div>
            </li>`
      )
      .join("");

    document
      .querySelector("#pagination-section")
      .classList.remove("display-none");
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



import { getFilteredProducts } from "../../markup/getFilteredProducts";



const productsListContainer = document.querySelector("#products-list");

getFilteredProducts("", "", 1, "").then((data) => {
    productsListContainer.innerHTML = data.results
        .map(
            ({ _id, name, img, category, size, price, popularity }) => `
    <li id="${_id}" class="products__item">
        <div class="products__container_img">
            <img src="${img}" alt="${name}" class="products__img">
        </div>
        <h2 class="products__title">${name}</h2>
        <p class="products__category">Category: <span>${category}</span></p>
        <p class="products__size">Size: <span>${size}</span></p>
        <p class="products__popularity">Popularity: <span>${popularity}</span></p>
        <div class="products__svg_price">
            <p class="products__price">$${price}</p>
            <button class="products__svg_btn add-to-cart-btn">
                <svg class="products__basket" width="18" height="18">
                    <use href="#cart"></use>
                </svg>
            </button>
        </div>
    </li>
    `
        )
        .join("");
});


productsListContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.add-to-cart-btn');
    if (!clickedButton) {
        return;
    }


    const useElement = clickedButton.querySelector('use');
    if (useElement) {
        const currentIcon = useElement.getAttribute('href');
        if (currentIcon === '#cart') {
            useElement.setAttribute('href', '#check'); 
        }
    }
});



import { getPopularProducts } from "../../markup/getPopularProducts";

getPopularProducts().then((products) => {
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
            </li>            <li class="popular__point">
              Popularity: <span class="popular__span">${popularity}</span>
            </li>
          </ul>
        </div>
        <button data-productadd='true' class="popular__cart">
        ${
          JSON.parse(localStorage.getItem("cart"))
            .map((item) => item.id)
            .includes(_id)
            ? "✓"
            : `
    <svg class="popular__icon" width="12" height="12">
      <use href="#cart"></use>
    </svg>`
        }
        </button>
      </li>`
    )
    .join("");
});


import { getDiscountProducts } from "../../markup/getDiscountProducts";
getDiscountProducts().then((products) => {
    let markUp = "";
    for (let index = 0; index < 2; index+= 1) {
        markUp += `
             <li id='${products[index]._id}' class="discount__item">
            <svg class="discount__svg-discount">
              <use href="#discount"></use>
            </svg>
            <div class="discount__box-img">
              <img
                src="${products[index].img}"
                alt="${products[index].name}"
                class="discount__image"
              />
            </div>
            <div class="discount__svg-price">
              <h3 class="discount__item-title">${products[index].name}</h3>
              <div class="discount__item-wrap">
                <p class="discount__price">$${products[index].price}</p>
                <div class="discount__svg-container">
                  <svg class="discount__basket">
                    <use href="#cart"></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          `
        
    }
    document.querySelector(".discount__list").innerHTML = markUp
})


import { getFilteredProducts } from "../../markup/getFilteredProducts";
import { category, keyword, sort } from "./products";

let userPage = 1;

const makeMarkup2 = (page, category, keyword, sort) => {
  getFilteredProducts(keyword, category, page, sort).then((products) => {
    document.querySelector("#products-list").innerHTML = products.results
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
        }) =>
          `<li id="${_id}" data-product="true" class="products__item">
        ${
          is10PercentOff
            ? `<div class="products__green">
  <svg class="products__discount" width="54" height="54">
    <use href="#discount"></use>
  </svg>
</div>`
            : ""
        }
                <div class="products__container_img">
                    <img src="${img}" alt="${name}" class="products__img">
                </div>
                <h2 class="products__title">${name}</h2>
                <p class="products__category">Category: <span>${category}</span></p>
                <p class="products__size">Size: <span>${size}</span></p>
                <p class="products__popularity">Popularity: <span>${popularity}</span></p>
                <div class="products__svg_price">
                    <p class="products__price">$${price}</p>
                    <button  data-productadd="true" class="products__svg_btn">
                    ${
                      JSON.parse(localStorage.getItem("cart"))
                        .map((item) => item.id)
                        .includes(_id)
                        ? "✓"
                        : `
                        <svg class="products__basket">
                            <use href="#cart"></use>
                        </svg>`
                    }
                    </button>
                </div>
            </li>`
      )
      .join("");
  });
};

export const makePagination = (page, category, keyword, sort) => {
  getFilteredProducts(keyword, category, page, sort).then(({ totalPages }) => {
    let markup = "";
    for (let i = page; i <= totalPages && i <= page + 3; i += 1) {
      markup += `<li id='${i}' class="pagination__item ${
        page === i ? "pagination__accent" : ""
      }">
        <button class="pagination__btn">${i}
        </button>
      </li>`;
    }
    if (totalPages > 4) {
      markup += `<li class="pagination__item">
        <p class="pagination__text">...</p>
      </li>`;
    }
    document.querySelector("#pagination-list").innerHTML = markup;
    if (page - 2 < 1) {
      document
        .querySelector("#double-prev")
        .classList.add("pagination__disable");
    } else {
      document
        .querySelector("#double-prev")
        .classList.remove("pagination__disable");
    }
    if (page - 1 < 1) {
      document.querySelector("#prev").classList.add("pagination__disable");
    } else {
      document.querySelector("#prev").classList.remove("pagination__disable");
    }
    if (page + 2 > totalPages) {
      document
        .querySelector("#double-next")
        .classList.add("pagination__disable");
    } else {
      document
        .querySelector("#double-next")
        .classList.remove("pagination__disable");
    }
    if (page + 1 > totalPages) {
      document.querySelector("#next").classList.add("pagination__disable");
    } else {
      document.querySelector("#next").classList.remove("pagination__disable");
    }
  });
};

makePagination(userPage, category, keyword, sort);

document.querySelector("#pagination-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("pagination__btn")) {
    if (Number.parseInt(e.target.parentElement.id) === userPage) {
      return;
    }
    userPage = Number.parseInt(e.target.parentElement.id);
    makePagination(userPage, category, keyword, sort);
    makeMarkup2(userPage, category, keyword, sort);
  }
});

document.querySelector("#next").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage += 1;
  makePagination(userPage, category, keyword, sort);
  makeMarkup2(userPage, category, keyword, sort);
});

document.querySelector("#double-next").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage += 2;
  makePagination(userPage, category, keyword, sort);
  makeMarkup2(userPage, category, keyword, sort);
});

document.querySelector("#prev").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage -= 1;
  makePagination(userPage, category, keyword, sort);
  makeMarkup2(userPage, category, keyword, sort);
});

document.querySelector("#double-prev").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage -= 2;
  makePagination(userPage, category, keyword, sort);
  makeMarkup2(userPage, category, keyword, sort);
});

document.querySelector("#filters-form").addEventListener("submit", (e) => {
  userPage = 1;
  makePagination(userPage, category, keyword, sort);
});

document
  .querySelector("#filters-categories-list")
  .addEventListener("click", (e) => {
    userPage = 1;
    makePagination(userPage, category, keyword, sort);
  });

document
  .querySelector("#filters-alphabet-list")
  .addEventListener("click", (e) => {
    userPage = 1;
    makePagination(userPage, category, keyword, sort);
  });













