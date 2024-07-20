const swiper = new Swiper('.team_flex', {
  // Настройка Swiper
  slidesPerView: 'auto',
  slideWidth: 100, // Ширина каждого слайда
  spaceBetween: 10, // margin-right
  slideClass: 'team_container', // Добавляем класс для стилизации слайдов
  breakpoints: {
    1000: {
      slidesPerView: 4,  // количество слайдов
      slideWidth: 400,
      spaceBetween: 20 //  margin-right
    }
  },
  navigation: {
    nextEl: '.title_icon img:last-child',
    prevEl: '.title_icon img:first-child'
  }
});