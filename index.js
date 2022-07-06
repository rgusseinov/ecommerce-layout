// Close all popups before opening new one
let popupToggles = {
  isCatalogOpen: false,
  isCartOpen: false,
  isCallCenterOpen: false,
};

function togglePopup(target, popupType) {
  /*   const classListArr = document.querySelectorAll(".show");
  console.log(popupToggles);
  classListArr.forEach((item) => {
    if (
      (popupType === "catalog" && popupToggles.isCatalogOpen) ||
      (popupType === "cart" && popupToggles.isCartOpen) ||
      (popupType === "callcenter" && popupToggles.isCallCenterOpen)
    ) {
      return;
    } else {
      item.classList.remove("show");
    }
  }); */
}

// For menu catalog
document.querySelector(".menu-catalog__link").onclick = function (e) {
  const overlay = document.querySelector(".header-overlay");
  const submenu = document.querySelector(".menu-catalog__link");

  overlay.classList.toggle("show");
  submenu.classList.toggle("show");

  popupToggles.isCatalogOpen = !popupToggles.isCatalogOpen;
  togglePopup(e.target, "catalog");

  e.preventDefault();
};

// For shopping cart
document.querySelector(".h-shopping-cart").onclick = function (e) {
  const popupMenu = document.querySelector(".s-cart-popup");
  popupMenu.classList.toggle("show");

  popupToggles.isCartOpen = !popupToggles.isCartOpen;
  togglePopup(e.target, "cart");

  e.preventDefault();
};

// For call center popup
document.querySelector(".header-contact__call").onclick = function (e) {
  const popupMenu = document.querySelector(".callcenter-popup");
  popupMenu.classList.toggle("show");

  popupToggles.isCallCenterOpen = !popupToggles.isCallCenterOpen;
  togglePopup(e.target, "callcenter");

  e.preventDefault();
};

// Sort by price
document.querySelector(".sortby-price").onclick = function (e) {
  const popupMenu = document.querySelector(".price-popup");
  const sortBlock = document.querySelector(".sortby-price");
  popupMenu.classList.toggle("show");
  sortBlock.classList.toggle("selected");
  e.preventDefault();
};

// Sort by params
document.querySelector(".sortby-params").onclick = function (e) {
  const popupMenu = document.querySelector(".sortby-params-popup");
  const sortBlock = document.querySelector(".sortby-params");
  popupMenu.classList.toggle("show");
  sortBlock.classList.toggle("selected");
  e.preventDefault();
};

let slidePos = 0;
const slides = 3;
document.querySelector(".arrow-left").onclick = function (e) {
  slidePos--;
  console.log(`slidePos left`, slidePos);
  if (slidePos <= 0) return;
  const swtichImage = document
    .querySelector(".img" + slidePos)
    .querySelector(".image-switch__image");
  swtichImage.style.opacity = "1";
  swtichImage.style.zIndex = "-1";
};

document.querySelector(".arrow-right").onclick = function (e) {
  slidePos++;
  if (slidePos > slides) return;
  const swtichImage = document
    .querySelector(".img" + slidePos)
    .querySelector(".image-switch__image");
  swtichImage.style.opacity = "1";
  swtichImage.style.zIndex = "-1";
  console.log(`slidePos right`, slidePos);
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
