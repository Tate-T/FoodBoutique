const cart = document.querySelector(".basket__list");
const products = JSON.parse(localStorage.getItem("products")) ?? [];
const basketList = document.querySelector(".basket__list");
const title = document.querySelector(".basket__title");

title.textContent = `Cart (${products.length})`;

async function loadProducts() {
  for (const id of products) {
    const response = await fetch(
      `https://food-boutique.b.goit.study/api/products/${id}`
    );
    const product = await response.json();

    const li = document.createElement("li");
    li.className = "basket__product";
    li.dataset.price = product.price;
    li.dataset.id = product._id;
    li.innerHTML = `
      <div class="basket__product--square">
      <img src="${product.img}" alt="${product.name}" class="basket__product--image">
      </div>
      <div class="basket__product--content">
        <h4 class="basket__product--title">${product.name}</h4>
        <div class="basket__product--wrap">
          <p class="basket__product--text">Category: <span class="basket__product--bold">${product.category}</span></p>
          <p class="basket__product--text">Size: <span class="basket__product--bold">${product.size}</span></p>
        </div>
        <p class="basket__product--price">$${product.price}</p>
      </div>
      <button class="basket__product--close">
        <svg class="basket__product--icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 9.093l-2.093-2.093-6.907 6.907-6.907-6.907-2.093 2.093 6.907 6.907-6.907 6.907 2.093 2.093 6.907-6.907 6.907 6.907 2.093-2.093-6.907-6.907 6.907-6.907z"></path>
        </svg>
      </button>
      <div class="basket__product--controls">
        <button class="basket__product--btn basket__product--subtract">
          <div class="basket__product--minus"></div>
        </button>
        <p class="basket__product--number">1</p>
        <button class="basket__product--btn basket__product--add">
          <div class="basket__product--plus"></div>
          <div class="basket__product--plus"></div>
        </button>
      </div>
    `;

    basketList.appendChild(li);
    document.querySelector(".basket__number").textContent = `${(
      parseFloat(
        document.querySelector(".basket__number").textContent.replace(",", ".")
      ) + product.price
    ).toFixed(2)}`.replace(".", ",");
  }
}

if (products.length === 0) {
  document.querySelector(".basket__wraper").innerHTML =
    '<img src="./images/desktop/hero__bg.jpg" alt="">';
} else {
  loadProducts();
}

let intervalId = null;

function changeQuantity(element, direction) {
  const numberEl =
    direction === "add"
      ? element.previousElementSibling
      : element.nextElementSibling;

  let newNum = Number(numberEl.textContent) + (direction === "add" ? 1 : -1);

  if (newNum < 0) return;

  numberEl.textContent = newNum;

  const li = element.closest(".basket__product");
  const price = parseFloat(li.dataset.price);

  const basketNumberEl = document.querySelector(".basket__number");
  let currentTotal = parseFloat(basketNumberEl.textContent.replace(",", "."));

  if (direction === "add") {
    currentTotal += price;
  } else {
    currentTotal -= price;
  }

  basketNumberEl.textContent = currentTotal.toFixed(2).replace(".", ",");
}

function startHolding(actionEl, direction) {
  changeQuantity(actionEl, direction);
  intervalId = setInterval(() => {
    changeQuantity(actionEl, direction);
  }, 150);
}

function stopHolding() {
  clearInterval(intervalId);
}

basketList.addEventListener("mousedown", (e) => {
  if (e.target.closest(".basket__product--add")) {
    const btn = e.target.closest(".basket__product--add");
    startHolding(btn, "add");
  } else if (e.target.closest(".basket__product--subtract")) {
    const btn = e.target.closest(".basket__product--subtract");
    startHolding(btn, "subtract");
  }
});

document.addEventListener("mouseup", stopHolding);
basketList.addEventListener("mouseleave", stopHolding);

if (basketList) {
  basketList.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".basket__product--close");
  if (closeBtn) {
    const li = closeBtn.closest(".basket__product");
    const id = li.dataset.id;

    const quantityEl = li.querySelector(".basket__product--number");
    const quantity = parseInt(quantityEl.textContent) || 1;

    li.remove();

    let products = JSON.parse(localStorage.getItem("products")) ?? [];
    products = products.filter((productId) => productId !== id);
    localStorage.setItem("products", JSON.stringify(products));

    const price = parseFloat(li.dataset.price);
    const basketNumberEl = document.querySelector(".basket__number");
    let currentTotal = parseFloat(
      basketNumberEl.textContent.replace(",", ".")
    );

    currentTotal -= price * quantity;
    if (currentTotal < 0) currentTotal = 0;

    basketNumberEl.textContent = currentTotal.toFixed(2).replace(".", ",");
  }
});
}

const deleteAllBtn = document.querySelector(".basket__btn");
const basketNumberEl = document.querySelector(".basket__number");

deleteAllBtn.addEventListener("click", () => {
  localStorage.removeItem("products");

  basketList.innerHTML = "";

  basketNumberEl.textContent = "0,00";
});
