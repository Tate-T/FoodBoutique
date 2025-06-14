document
  .querySelector(".product-modal-button")
  .addEventListener("click", async (e) => {
    let products = JSON.parse(localStorage.getItem("products")) ?? [];
    let id = e.target.closest("button").id;
    if (!products.includes(id)) {
      products.push(id);
      localStorage.setItem("products", JSON.stringify(products));
    }
  });
