const swiperApresentacao = new Swiper(".swiperApresentacao", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: true
});

const swiperMaisVendidos = new Swiper(".swiperMaisVendidos", {
  direction: "horizontal",
  centeredSlides: true,
  effect: "coverflow",
  pagination: {
    el: ".swiper-pagination"
  }
});
