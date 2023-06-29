/*
document.getElementById("boton-hamburguesa").addEventListener("click", function () {
  let menu = document.getElementById("menu-hamburguesa");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
*/


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const inOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = inOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
}