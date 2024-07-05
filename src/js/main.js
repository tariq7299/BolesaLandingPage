document.addEventListener("DOMContentLoaded", function () {
  // Inintilizing Swiper found in "demos-slider-section"
  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // This will Change the color of the nav bar when users start to scroll down
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (scrollTop > lastScrollTop) {
      // Downscroll
      navbar.style.top = "-200px";
    } else {
      // Upscroll
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // This will initlizing an instance form the AOS JS library
  AOS.init();
});
