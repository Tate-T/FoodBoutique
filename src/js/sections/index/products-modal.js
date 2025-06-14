window.openProductModal = async function (productId) {
  const response = await fetch(
    `https://food-boutique.b.goit.study/api/products/${productId}`
  );
  const product = await response.json();

  // Fill modal content
  document.getElementById("product-modal-image").src = product.img;
  document.getElementById("product-modal-image").alt = product.name;
  document.getElementById("product-modal-title").textContent = product.name;

  document.querySelector(".product-modal-button").id = productId;
  const props = document.querySelectorAll(".product-modal-property");
  if (props) {
    props[0].innerHTML = `<span style="color:#0101014D;">Category:</span> ${product.category.replace(
      "_",
      " "
    )}`;
    props[1].innerHTML = `<span style="color:#0101014D;">Size:</span> ${product.size}`;
    props[2].innerHTML = `<span style="color:#0101014D;">Popularity:</span> ${product.popularity}`;
  }

  document.querySelector(".product-modal-desc").textContent = product.desc;
  document.querySelector(
    ".product-modal-price"
  ).textContent = `$${product.price}`;

  document.getElementById("product-modal").style.display = "flex";
};

window.closeProductModal = function () {
  document.getElementById("product-modal").style.display = "none";
};

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("products__container_img") ||
    e.target.classList.contains("products__img")
  ) {
    const li = e.target.closest("li");
    if (li && li.id) {
      openProductModal(li.id);
    }
  } else if (
    e.target.classList.contains("products__svg_btn") ||
    e.target.parentNode.classList.contains("products__svg_btn") ||
    e.target.parentNode.parentNode.classList.contains("products__svg_btn") ||
    e.target.classList.contains("discount__svg-container") ||
    e.target.parentNode.classList.contains("discount__svg-container") ||
    e.target.parentNode.parentNode.classList.contains("discount__svg-container") ||
    e.target.classList.contains("popular__cart") ||
    e.target.parentNode.classList.contains("popular__cart") ||
    e.target.parentNode.parentNode.classList.contains("popular__cart")
  ) {
    let products = JSON.parse(localStorage.getItem("products")) ?? [];
    let id = e.target.closest("li").id;
    if (!products.includes(id)) {
      products.push(id);
      localStorage.setItem("products", JSON.stringify(products));
    }
  }
});
