import { getExistingJacketsList } from "./components/jacketsFunction.js";

const jackets = getExistingJacketsList();

const containerCart = document.querySelector(".container-cart");

const createCart = () => {
  jackets.forEach((jacket) => {
    if (jackets.length >= 1) {
      html += `<div class="container-row">
                <h3 class="modal-title" id="exampleModalLabel">Your Cart</h3>
                <div>€<span class="total-cart"></span></div>
              </div>
              <div class="container-row">
                <img src="#" alt="">
                <h4 class="cart-jackets-name"></h4>
              </div>
              <div class="container-row">
                <button type="button" class="btn">Go to Checkout</button>
              </div>`;
    } else {
      containerCart.innerHTML = "Your cart is empty.";
    }
  });
  containerCart.innerHTML = html;
};

createCart();

/*
// Show/Hide cart

const buttonAddToCart = document.querySelector(".add-to-cart");

buttonAddToCart.addEventListener("click", function (){

})
*/
