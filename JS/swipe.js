const teamFlex = document.querySelector('.team_flex');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const teamContainers = document.querySelectorAll('.team_container');
const containerWidth = teamContainers[0].offsetWidth + 48; // Ширина контейнера + отступ

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    teamFlex.scrollBy(-containerWidth, 0);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < teamContainers.length - 1) {
    currentIndex++;
    teamFlex.scrollBy(containerWidth, 0);
  }
});
