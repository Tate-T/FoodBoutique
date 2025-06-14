const emailInput = document.querySelector(".basket__input");

document
  .querySelector(".basket__form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".order__backdrop").classList.remove("order__hidden");
  //   const email = emailInput.value.trim();

  // if (!email) {
  //   alert("Please enter your email.");
  //   return;
  // }

  // const products = [];
  // document.querySelectorAll(".basket__product").forEach(li => {
  //   const productId = li.dataset.id;
  //   const amount = Number(li.querySelector(".basket__product--number").textContent);
  //   if (amount > 0) {
  //     products.push({ productId, amount });
  //   }
  // });

  // if (products.length === 0) {
  //   alert("Your cart is empty!");
  //   return;
  // }

  // const body = {
  //   email,
  //   products
  // };

  // try {
  //   const response = await fetch("https://food-boutique.b.goit.study/api/orders", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(body)
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log("Order success:", data);
  //   alert("Order placed successfully!");
  // } catch (err) {
  //   console.error(err);
  //   alert("There was an error placing your order.");
  // }
  }  );

  document
  .querySelector(".order__close")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".order__backdrop").classList.add("order__hidden");
  }  
  );
