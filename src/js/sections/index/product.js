import { getProduct } from "../../markup/getProduct";


if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

