const containerFeactures = document.getElementById("containerFeactures");
const feacturesMenu = document.getElementById("feacturesMenu");
const containerCompany = document.getElementById("containerCompany");
const companyMenu = document.getElementById("companyMenu");
const navListMenu = document.getElementById("navListMenu");
const closeNav = document.getElementById("closeNav");
const sideBar = document.getElementById("sideBar");
const principalMenu = document.getElementById("principalMenu");

containerFeactures.addEventListener("click", () => {
  feacturesMenu.classList.toggle("menu__display-none");
});
containerCompany.addEventListener("click", () => {
  companyMenu.classList.toggle("menu__display-none");
});
navListMenu.addEventListener("click", () => {
  sideBar.classList.remove("close__menu");
  document.querySelector(".menu__bg").classList.remove("close__menu");
});
closeNav.addEventListener("click", () => {
  document.querySelector(".menu__bg").classList.add("close__menu");
  document.querySelector("#sideBar").classList.add("close__menu");
});
