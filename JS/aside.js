const durationStartSlider = document.getElementById('duration-start-slider');
const durationEndSlider = document.getElementById('duration-end-slider');
const durationStartLabel = document.getElementById('duration-start');
const durationEndLabel = document.getElementById('duration-end');

function updateDurationLabels() {
  durationStartLabel.textContent = `${durationStartSlider.value} месяц${durationStartSlider.value !== '1' ? 'а' : ''}`;
  durationEndLabel.textContent = `${durationEndSlider.value} месяц${durationEndSlider.value !== '1' ? 'а' : ''}`;
}

durationStartSlider.addEventListener('input', updateDurationLabels);
durationEndSlider.addEventListener('input', updateDurationLabels);

updateDurationLabels();