import { getProduct } from "../../fetchs/getProduct";

document
  .querySelector(`[data-productmodal]`)
  .addEventListener("click", async (e) => {
    if (
      e.target.dataset.productaddmodal === "true" ||
      e.target.closest("[data-productaddmodal]")
    ) {
      const target =
        e.target.dataset.productaddmodal === "true"
          ? e.target
          : e.target.closest("[data-productaddmodal]");
      const array = [...JSON.parse(localStorage.getItem("cart"))];
      if (
        array
          .map((item) => item.id)
          .includes(e.target.closest("[data-productmodal]").id)
      ) {
        return;
      }
      array.push({
        id: e.target.closest("[data-productmodal]").id,
        count: 1,
      });
      target.textContent = "Added ✓";
      localStorage.setItem("cart", JSON.stringify(array));
      document.querySelector("#header-cart").textContent = JSON.parse(
        localStorage.getItem("cart")
      ).length;
      document
        .getElementById(`${e.target.closest("[data-productmodal]").id}`)
        .querySelector(`[data-productadd='true']`).textContent = "✓";
    }
  });

if (!Object.keys(localStorage).includes("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

document.querySelector("#header-cart").textContent = JSON.parse(
  localStorage.getItem("cart")
).length;
document.querySelector("body").addEventListener("click", async (e) => {
  if (
    e.target.dataset.productadd === "true" ||
    e.target.closest("[data-productadd]") ||
    e.target.dataset.productclose === "true" ||
    e.target.closest(`[data-productclose="true"]`) ||
    e.target.dataset.cart === "count" ||
    e.target.closest(`[data-cart='count']`)
  ) {
    return;
  }
  if (
    e.target.dataset.product === "true" ||
    e.target.closest("[data-product]")
  ) {
    document.querySelector("#product-backdrop").classList.remove("is-hidden");
    document.querySelector("body").classList.add("no-scroll");
    let id;
    if (!(e.target.id === "")) {
      id = e.target.id;
    } else {
      id = e.target.closest("[data-product]").id;
    }
    await getProduct(id).then(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        desc,
        is10PercentOff,
        popularity,
      }) => {
        document.querySelector(`[data-productmodal]`).id = _id;
        document.querySelector("#product-img").src = img;
        document.querySelector("#product-img").alt = name;
        document.querySelector("#product-name").textContent = name;
        document.querySelector("#product-category").textContent = category;
        document.querySelector("#product-size").textContent = size;
        document.querySelector("#product-popularity").textContent = popularity;
        document.querySelector("#product-price").textContent = price;
        document.querySelector("#product-desc").textContent = desc;
        document.querySelector("#product-add").innerHTML = JSON.parse(
          localStorage.getItem("cart")
        )
          .map((product) => product.id)
          .includes(_id)
          ? `Added ✓`
          : `Add to <svg class="product__icon" width="18" height="18">
            <use href="#cart"></use>
          </svg>`;
      }
    );
  }
});

document.querySelector("#product-close").addEventListener("click", async () => {
  document.querySelector("#product-backdrop").classList.add("is-hidden");
  document.querySelector(`[data-productmodal]`).id = "";
  document.querySelector("body").classList.remove("no-scroll");
  document.querySelector("#product-img").src = "";
  document.querySelector("#product-img").alt = "";
  document.querySelector("#product-name").textContent = "";
  document.querySelector("#product-category").textContent = "";
  document.querySelector("#product-size").textContent = "";
  document.querySelector("#product-popularity").textContent = "";
  document.querySelector("#product-price").textContent = "";
  document.querySelector("#product-desc").textContent = "";
});

document.querySelector("body").addEventListener("click", async (e) => {
  if (
    e.target.dataset.productadd === "true" ||
    e.target.closest("[data-productadd]")
  ) {
    const target =
      e.target.dataset.productadd === "true"
        ? e.target
        : e.target.closest("[data-productadd]");
    const array = [...JSON.parse(localStorage.getItem("cart"))];
    if (
      array
        .map((item) => item.id)
        .includes(e.target.closest("[data-product]").id)
    ) {
      return;
    }
    array.push({
      id: e.target.closest("[data-product]").id,
      count: 1,
    });
    target.textContent = "✓";
    localStorage.setItem("cart", JSON.stringify(array));
    document.querySelector("#header-cart").textContent = JSON.parse(
      localStorage.getItem("cart")
    ).length;
  }
});


