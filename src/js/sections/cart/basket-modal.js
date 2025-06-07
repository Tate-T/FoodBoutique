document
  .querySelector(".basket__form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".order__backdrop").classList.remove("order__hidden");
  }  );

  document
  .querySelector(".order__close")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".order__backdrop").classList.add("order__hidden");
  }  );
