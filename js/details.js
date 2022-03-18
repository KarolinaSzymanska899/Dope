import { jackets } from "./array.js";
import { getExistingJacketsList } from "./components/jacketsFunction.js";

const containerDetails = document.querySelector(".container-details");
console.log(containerDetails);

let html = "";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const showDetails = () => {
  jackets.forEach((jacket) => {
    if (jacket.id == id) {
      html += `<img class="image-jacket" src="${jacket.image}" alt="${jacket.name}">
              <div class="container-text">
                <div class="container-text-small">
                  <h1 class="name">${jacket.name}</h1>
                  <h2 class="price">${jacket.price} €</h2>
                </div>
                <div class="container-text-small-2">
                  <p><i class="fa-solid fa-circle-check"></i> Delivery time 3-4 business days</p>
                  <p><i class="fa-solid fa-circle-check"></i> Free shipping and free returns</p>
                  <p><i class="fa-solid fa-circle-check"></i> 30 days right of return</p>
                </div>
                <div class="single-button"><button data-name="${jacket.name}" data-price="${jacket.price}" class="add-to-cart btn shadow">Add to cart</butt></div>
                <!-- SHOPPING CART -->
                <div class="container-cart" tabindex="-1" role="dialog" aria-labelledby="shopping-cart" aria-hidden="true"></div>
              </div>`;
    }
  });
  containerDetails.innerHTML = html;
};

showDetails();

//function for adding items to cart
const cartBtn = document.querySelector(".add-to-cart");

cartBtn.addEventListener("click", addToCart);

function addToCart(event) {
  //Parameters of the product to be added to cart
  const id = this.dataset.id;
  const name = this.dataset.name;
  const price = this.dataset.price;
  const image = this.dataset.image;

  //Logs the product to be added to the cart
  console.log(this.dataset);

  //function for cartItems
  const currentCart = getExistingJacketsList();

  //Selects the product to be added to cart
  const product = { id: id, name: name, price: price, image: image };

  //Pushes to the array of items from local storage
  currentCart.push(product);
  saveCart(currentCart);
}

//Saves the items added to cart into localstorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
