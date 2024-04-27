
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Кількість слайдів
  slidesPerView: 'auto',

  // Відступ між слайдами
  spaceBetween: 16,

  // autoHeight: true,

  breakpoints: {
    // when window width is >= 320px
    375: {
      // slidesPerView: 1,
    },
    // when window width is >= 480px
    835: {
      // slidesPerView: 1,
    
    },
    // when window width is >= 640px
    1140: {
      // slidesPerView: 2,
   
    }
  }
});