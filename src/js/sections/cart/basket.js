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
    document.querySelector(".basket__number").textContent = `${
      parseFloat(
        document.querySelector(".basket__number").textContent.replace(",", ".")
      ) + product.price
    }`.replace(".", ",");
  }
}

if (products.length === 0) {
  document.querySelector(".basket__wraper").innerHTML =
    '<img src="../images/desktop/empty-basket.png" alt="">';
} else {
  loadProducts();
}

// console.log(parseFloat(document.querySelector(".basket__number").textContent.replace(',', '.')));

// getUserAPI(1).then((user) => {
//   cart.innerHTML = createCartList(user.cart);
// });

// document.querySelector(".basket__list").addEventListener("click", (e) => {
//   if (e.target.classList.contains("basket__product--subtract") || e.target.parentNode.classList.contains("basket__product--subtract")) {
//     const newNum = Number(e.target.closest(".basket__product--subtract").nextElementSibling.textContent) - 1;
//     if (newNum < 0) {
//       return
//     }
//     e.target.closest(".basket__product--subtract").nextElementSibling.textContent = newNum;
//   } else if (e.target.classList.contains("basket__product--add") || e.target.parentNode.classList.contains("basket__product--add")) {
//     const newNum = Number(e.target.closest(".basket__product--add").previousElementSibling.textContent) + 1;
//     e.target.closest(".basket__product--add").previousElementSibling.textContent = newNum;
//   }
// });

let intervalId = null;

function changeQuantity(element, direction) {
  const numberEl =
    direction === "add"
      ? element.previousElementSibling
      : element.nextElementSibling;

  let newNum = Number(numberEl.textContent) + (direction === "add" ? 1 : -1);

  if (newNum < 0) return;

  // Update quantity number
  numberEl.textContent = newNum;

  // Get price of this product
  const li = element.closest(".basket__product");
  const price = parseFloat(li.dataset.price);

  // Get current total
  const basketNumberEl = document.querySelector(".basket__number");
  let currentTotal = parseFloat(basketNumberEl.textContent.replace(",", "."));

  // Adjust total
  if (direction === "add") {
    currentTotal += price;
  } else {
    currentTotal -= price;
  }

  // Update total (format with comma)
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
