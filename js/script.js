const navbar = document.getElementById("navbar-1");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.replace("navbar-dark", "navbar-light");
    navbar.classList.add("nav-scroll-color");
  } else {
    navbar.classList.replace("navbar-light", "navbar-dark");
    navbar.classList.remove("nav-scroll-color");
  }
});
