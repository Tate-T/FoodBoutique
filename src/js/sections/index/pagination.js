import { getFilteredProducts } from "../../markup/getFilteredProducts";
import { category, keyword, sort } from "./filters";

let userPage = 1;

const makeMarkup = (page, category, keyword, sort) => {
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
    makeMarkup(userPage, category, keyword, sort);
  }
});

document.querySelector("#next").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage += 1;
  makePagination(userPage, category, keyword, sort);
  makeMarkup(userPage, category, keyword, sort);
});

document.querySelector("#double-next").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage += 2;
  makePagination(userPage, category, keyword, sort);
  makeMarkup(userPage, category, keyword, sort);
});

document.querySelector("#prev").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage -= 1;
  makePagination(userPage, category, keyword, sort);
  makeMarkup(userPage, category, keyword, sort);
});

document.querySelector("#double-prev").addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("pagination__disable")) {
    return;
  }
  userPage -= 2;
  makePagination(userPage, category, keyword, sort);
  makeMarkup(userPage, category, keyword, sort);
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
