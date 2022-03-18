const createMenu = () => {
  const menu = document.querySelector(".navbar");

  //html for navigation menu
  menu.innerHtml = `
    <a href="index.html">
      <img src="./images/logo.png" class="logo" alt="Dope's logo" />
    </a>

    <div class="icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-heart"></i>
      <button type="button" data-toggle="modal" data-target="#cart">
        <i data-count="${cartCount}" class="fa-solid fa-basket-shopping badge"></i>
      </button>
      <label for="toggle" class="hamburger" id="hamburger">☰</label>
    </div>

    <input type="checkbox" id="toggle" />
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="../index.html">Home</a>
      </li>
      <li class="nav-item">
        <a href="products.html">Products</a>
      </li>
      <li class="nav-item">
        <a href="contact.html">Contact Us</a>
      </li>
      <li class="nav-item"><a href="#">News</a></li>
    </ul>
  `;
};

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar-nav");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

export default createMenu;

let cartCounter = localStorage.getItem("cart");
const cartCount = cartCounter.length;
