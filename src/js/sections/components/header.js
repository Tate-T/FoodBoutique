const products = JSON.parse(localStorage.getItem("products")) ?? [];
document.querySelector(".header__cart--link").textContent = `Cart (${products.length})`;