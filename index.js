// For menu catalog
document.querySelector(".menu-catalog__link").onclick = function (e) {
  const overlay = document.querySelector(".header-overlay");
  const submenu = document.querySelector(".menu-catalog__link");

  overlay.classList.toggle("show");
  submenu.classList.toggle("open");

  e.preventDefault();
};

// For shopping cart
document.querySelector(".h-shopping-cart").onclick = function (e) {
  const popupMenu = document.querySelector(".s-cart-popup");
  popupMenu.classList.toggle("show");
  e.preventDefault();
};

// For project client server app
/* 
const toggler = document.getElementsByClassName("caret");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
 */
