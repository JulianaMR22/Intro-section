const containerFeactures = document.getElementById("containerFeactures");
const feacturesMenu = document.getElementById("feacturesMenu");
const containerCompany = document.getElementById("containerCompany");
const companyMenu = document.getElementById("companyMenu");
const navListMenu = document.getElementById("navListMenu");

containerFeactures.addEventListener("click", () => {
  feacturesMenu.classList.toggle("menu__display-none");
});
containerCompany.addEventListener("click", () => {
  companyMenu.classList.toggle("menu__display-none");
});
navListMenu.addEventListener("click", () => {
  navListMenu.classList.toggle("");
});
