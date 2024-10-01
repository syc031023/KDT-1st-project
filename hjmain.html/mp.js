const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sear1 = document.querySelector(".sear");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  sear1.classList.toggle("active");
});
