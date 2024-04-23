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