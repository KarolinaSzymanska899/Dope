import { jackets } from "./array.js";

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
                <div class="single-button"><a href="#" data-name="${jacket.name}" data-price="${jacket.price}" class="add-to-cart btn shadow">Add to cart</a></div>
                
                <!-- UNNECESSARY BUTTONS
                <div class="container-buttons">
                  <div class="btn shadow auto-width">Cart ()</div>
                  <div class="btn shadow secondary auto-width">Clear Cart</div>
                </div>
                -->

                <!-- SHOPPING CART -->
                
                <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="shopping-cart" aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="shopping-cart">Cart</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    <div class="modal-body">
                  <table class="show-cart table"></table>
              <div>Total price: $<span class="total-cart"></span></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Order now</button>
            </div>
          </div>
        </div>
      </div>
              </div>`;
    }
  });
  containerDetails.innerHTML = html;
};

showDetails();
