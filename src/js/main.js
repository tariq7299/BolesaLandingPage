document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
