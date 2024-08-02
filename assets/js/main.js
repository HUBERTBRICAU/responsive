/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: false,
  spaceBetween: 10,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },

  },
});