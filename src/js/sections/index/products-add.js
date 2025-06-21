document
  .querySelector(".product-modal-button")
  .addEventListener("click", (e) => {
    let products = JSON.parse(localStorage.getItem("products")) ?? [];
    let id = e.target.closest("button").id;

    if (products.includes(id)) {
      products = products.filter((productId) => productId !== id);
      localStorage.setItem("products", JSON.stringify(products));
      document.querySelector(".product-modal-text").textContent = "Add to";
    } else {
      products.push(id);
      localStorage.setItem("products", JSON.stringify(products));
      document.querySelector(".product-modal-text").textContent = "Remove from";
    }
  });
