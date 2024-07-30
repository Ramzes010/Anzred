function updateRange() {
  const rangeMin = document.getElementById('rangeMin');
  const rangeMax = document.getElementById('rangeMax');
  const minValue = document.getElementById('minValue');
  const maxValue = document.getElementById('maxValue');
  const range = document.querySelector('.range');
  const thumbLeft = document.querySelector('.thumb.left');
  const thumbRight = document.querySelector('.thumb.right');

  let min = parseInt(rangeMin.value);
  let max = parseInt(rangeMax.value);

  if (min > max) {
      [min, max] = [max, min];
  }

  minValue.textContent = min;
  maxValue.textContent = max;

  const minPercent = (min / rangeMin.max) * 100;
  const maxPercent = (max / rangeMax.max) * 100;

  range.style.left = minPercent + '%';
  range.style.right = (100 - maxPercent) + '%';

  thumbLeft.style.left = minPercent + '%';
  thumbRight.style.left = maxPercent + '%';
}

function attachThumbEvents() {
  const thumbLeft = document.querySelector('.thumb.left');
  const thumbRight = document.querySelector('.thumb.right');
  const slider = document.getElementById('slider');

  thumbLeft.addEventListener('mousedown', function(event) {
      event.preventDefault();
      document.addEventListener('mousemove', moveLeftThumb);
      document.addEventListener('mouseup', function() {
          document.removeEventListener('mousemove', moveLeftThumb);
      });
  });

  thumbRight.addEventListener('mousedown', function(event) {
      event.preventDefault();
      document.addEventListener('mousemove', moveRightThumb);
      document.addEventListener('mouseup', function() {
          document.removeEventListener('mousemove', moveRightThumb);
      });
  });

  function moveLeftThumb(event) {
      const sliderRect = slider.getBoundingClientRect();
      const newPercent = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      const rangeMin = document.getElementById('rangeMin');
      rangeMin.value = Math.min(newPercent, parseInt(document.getElementById('rangeMax').value) - 1);
      updateRange();
  }

  function moveRightThumb(event) {
      const sliderRect = slider.getBoundingClientRect();
      const newPercent = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      const rangeMax = document.getElementById('rangeMax');
      rangeMax.value = Math.max(newPercent, parseInt(document.getElementById('rangeMin').value) + 1);
      updateRange();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateRange();
  attachThumbEvents();
});