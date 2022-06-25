/* function clearClasses() {
  const subMenus = document.querySelectorAll(".sub-menu__inner ul");
  // console.log(subMenus);
  Array.from(subMenus).forEach((menu) => {
    menu.classList.remove("is-active");
  });
}
*/
document.querySelector(".menu-catalog__link").onclick = function (e) {
  const overlay = document.querySelector(".header-overlay");
  const submenu = document.querySelector(".menu-catalog__link");

  overlay.classList.toggle("show");
  submenu.classList.toggle("open");

  e.preventDefault();
};

/*
document.querySelector(".sub-menu__cat-link.cat1").onclick = function (e) {
  clearClasses();
  const submenu = document.querySelector(".sub-cat1");
  submenu.classList.toggle("is-active");
  e.preventDefault();
};

document.querySelector(".sub-menu__cat-link.cat2").onclick = function (e) {
  clearClasses();
  const submenu = document.querySelector(".sub-cat2");
  submenu.classList.toggle("is-active");
  e.preventDefault();
};
 */
