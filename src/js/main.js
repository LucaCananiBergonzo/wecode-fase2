const swiperApresentacao = new Swiper(".swiperApresentacao", {
  direction: "horizontal",
  loop: true,
  effect: "fade"
  //autoplay: true
});

const swiperMaisVendidos = new Swiper(".swiperMaisVendidos", {
  direction: "horizontal",
  centeredSlides: true,
  effect: "coverflow",
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperSelecionados = new Swiper(".swiperSelecionados", {
  direction: "horizontal",
  effect: "cards",
  grabCursor: true
});

const swiperExclusivos = new Swiper(".swiperExclusivos", {
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiperPagamentos = new Swiper(".swiperPagamentos", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination"
  }
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    } else {
      accordion.classList.add("active");
    }
  });
});
