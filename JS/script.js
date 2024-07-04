
// Анимация для section
const blocks = document.querySelectorAll('#block_animation');
const menuIcon = document.querySelector('.menu-icon');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          } else {
            entry.target.classList.remove('animated');
          }
        });
      });

      blocks.forEach(block => {
        observer.observe(block);
      });


document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            if (answer.classList.contains("expanded")) {
                answer.classList.remove("expanded");

                this.querySelector('.arrow').classList.remove("rotate");
            } else {
                answer.classList.add("expanded");

                this.querySelector('.arrow').classList.add("rotate");
            }
        });
    });
});

document.getElementById('country-code').addEventListener('change', function(){
    const selectedCode = this.value;
    document.getElementById('phone-number').setAttribute('placeholder', selectedCode + '999-99-99');
});

document.getElementById("imageContainer").addEventListener("click", changeImage);

document.getElementById("imageContainer").addEventListener("click", changeImage);

function changeImage() {
    var mainImage = document.getElementById("mainImage");
    var activateButton = document.getElementById("activateButton");
    if (mainImage.src.match("img/icons/checkbox_none.svg")) {
        mainImage.src = "img/icons/checkbox.svg";
        mainImage.alt = "img/icons/checkbox";
    } else {
        mainImage.src = "img/icons/checkbox_none.svg";
        mainImage.alt = "img/icons/checkbox_none";
    }
    if (activateButton.classList.contains("order_link")) {
        activateButton.classList.remove("order_link");
        activateButton.classList.add("order_link_active");
    } else {
        activateButton.classList.remove("order_link_active");
        activateButton.classList.add("order_link");
    }
    activateButton.disabled = false;
}




menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('rotated');

    if (menuIcon.classList.contains('rotated')) {
        menuIcon.src = 'img/icons/mMenu2.svg';
    } else {
        menuIcon.src = 'img/icons/mMenu.svg';
    }
});
