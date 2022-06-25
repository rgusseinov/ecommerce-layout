document.querySelector(".menu-catalog__link").onclick = function (e) {
  const overlay = document.querySelector(".header-overlay");
  const submenu = document.querySelector(".menu-catalog__link");

  overlay.classList.toggle("show");
  submenu.classList.toggle("open");

  e.preventDefault();
};
