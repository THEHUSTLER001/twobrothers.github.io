const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".logo", {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".banner__container", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about-us h1 ", {
  ...scrollRevealOption,
  interval:2000,
});
ScrollReveal().reveal(".about-story ", {
  ...scrollRevealOption,
  origin:"right",
  interval:2500,
});
ScrollReveal().reveal(".about-team ", {
  ...scrollRevealOption,
  origin:"left",
  interval:3000,
});
ScrollReveal().reveal(".about-ambiance ", {
  ...scrollRevealOption,
  origin:"right",
  interval:3500,
});
ScrollReveal().reveal(".ambiance-gallery img ", {
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".about-values ", {
  ...scrollRevealOption,
  origin:"left",
  interval:4000,
});
ScrollReveal().reveal(".about-testimonials", {
  ...scrollRevealOption,
  origin:"right",
  interval:4500,
});
ScrollReveal().reveal(".testimonial", {
  ...scrollRevealOption,
  origin:"top",
  interval:1000,
});
ScrollReveal().reveal(".about-cta", {
  ...scrollRevealOption,
  origin:"left",
  interval:5000,
});
ScrollReveal().reveal(".menu__item", {
  ...scrollRevealOption,
  origin: "right",
  interval:1500,
});
ScrollReveal().reveal("#Menu1", {
  ...scrollRevealOption,
  origin: "left",
  interval:1500,
});
ScrollReveal().reveal(".reservation-hero", {
  ...scrollRevealOption,
  origin: "top",
  interval:1500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});
