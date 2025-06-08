import { getUserAPI } from "../../services/getUserAPI";
import { createCartList } from "../../markup/createCartList";
const cart = document.querySelector(".basket__list");

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

const basketList = document.querySelector(".basket__list");
let intervalId = null;

function changeQuantity(element, direction) {
  const numberEl =
    direction === "add"
      ? element.previousElementSibling
      : element.nextElementSibling;

  let newNum = Number(numberEl.textContent) + (direction === "add" ? 1 : -1);

  if (newNum < 0) return;

  numberEl.textContent = newNum;
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
