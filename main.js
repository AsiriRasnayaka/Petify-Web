const menubtn = document.getElementById("menu-btn");
const navlink = document.getElementById("nav-link");
const menuBtnIcon = menubtn.querySelector("i");

menubtn.addEventListener("click", (e) => {
    navlink.classList.toggle("open");

    const isOpen = navlink.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlink.addEventListener("click", (e) => {
    navlink.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };


ScrollReveal().reveal(".header_content h4", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".intro_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(
  ".about_row:nth-child(3) .about_image img, .about_row:nth-child(5) .about_image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);

ScrollReveal().reveal(".about_row:nth-child(4) .about_image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about_content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about_content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about_content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service_card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".instagram_grid img", {
  duration: 1000,
  interval: 500,
});