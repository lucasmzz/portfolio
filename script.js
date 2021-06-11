const navToggler = document.querySelector(".nav-toggler");
const navLinks = document.querySelector(".nav-links");

navToggler.addEventListener("click", function (e) {
  e.preventDefault();
  navLinks.classList.toggle("nav-links-active");
});
