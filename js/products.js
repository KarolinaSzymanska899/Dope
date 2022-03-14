import { jackets } from "./array.js";

const container = document.querySelector(".products-container");

console.log(productsContainer);

const showProducts = () => {
  container.innerHTML = "";

  jackets.forEach((jacket) => {
    container.innerHTML += `<a class="a-product-card" href="/html/details.html?id=${jackets.id}">
    <div class="product-card">
      <img class="product-img" src="${jackets.image}" alt="${jackets.name}"/>
      <div class="product-text">
        <p class="name">${jackets.name} <i class="fa-solid fa-heart heart"></i></p>
        <p class="price">${jackets.price} €</p>
      </div>
    </div>
  </a>`;
  });
};

showProducts();

/* THIS PART I WISH TO BEHOLD FOR MYSELF:

jackets.forEach((jackets) => {
  html += `<a class="a-product-card" href="/html/details.html?id=${jackets.id}">
            <div class="product-card">
              <img class="product-img" src="${jackets.image}"/>
              <div class="product-text">
                <p class="name">${jackets.name}<i class="fa-solid fa-heart heart"></i></p>
                <p class="price">${jackets.price}</p>
              </div>
            </div>
          </a>`;

  console.log(html);
});

container.innerHTML = html;*/
