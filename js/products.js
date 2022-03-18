import { jackets } from "array.js";

const container = document.querySelector(".products-container");
console.log(container);

const showProducts = () => {
  container.innerHTML = "";

  jackets.forEach((jacket) => {
    container.innerHTML += `<a class="a-product-card" href="/html/details.html?id=${jacket.id}">
                              <div class="product-card">
                                <img class="product-img" src="${jacket.image}" alt="${jacket.name}"/>
                                <div class="product-text">
                                  <p class="name">${jacket.name} <i class="fa-solid fa-heart heart"></i></p>
                                  <p class="price">${jacket.price} €</p>
                                </div>
                              </div>
                            </a>`;
  });
};

showProducts();

/* THIS PART I WISH TO BEHOLD FOR MYSELF:

jackets.forEach((jacket) => {
  html += `<a class="a-product-card" href="/html/details.html?id=${jacket.id}">
            <div class="product-card">
              <img class="product-img" src="${jacket.image}"/>
              <div class="product-text">
                <p class="name">${jacket.name}<i class="fa-solid fa-heart heart"></i></p>
                <p class="price">${jacket.price}</p>
              </div>
            </div>
          </a>`;

  console.log(html);
});

container.innerHTML = html;*/
