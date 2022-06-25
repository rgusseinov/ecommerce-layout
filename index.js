document.querySelector(".btn").onclick = function(e){

  const menu = document.querySelector(".menu");
  const btn = document.querySelector(".btn");

  menu.classList.toggle('.is-active');
  btn.classList.toggle('.is-active');

  e.preventDefault();
}