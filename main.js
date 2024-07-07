const menuToggler = document.querySelector(".menu-toggler");
const ulLinks = document.querySelector("ul.links ");
const linksLis = document.querySelectorAll("ul.links li");
const aboutBtn = document.querySelector(".about-btn");
const section = document.getElementById("about");

menuToggler.addEventListener("click", () => {
  ulLinks.classList.toggle("active");
  menuToggler.classList.toggle("fa-bars");
  menuToggler.classList.toggle("fa-x");
});

aboutBtn.addEventListener("click", () => {
  section.scrollIntoView({ behavior: "smooth" });
});
