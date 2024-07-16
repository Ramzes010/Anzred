const swiper = new Swiper('.team_flex', {
    // Настройка Swiper
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.title_icon img:last-child',
      prevEl: '.title_icon img:first-child'
    }
  });