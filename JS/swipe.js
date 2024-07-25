const container = document.querySelector('.team__container');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  container.scrollLeft -= 300;
});

arrowRight.addEventListener('click', () => {
  container.scrollLeft += 300;
});