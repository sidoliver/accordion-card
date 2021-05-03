// select all the question section
// select the button inside the specific question section, only to listen that specific button
// add eventlistener to that button
// check if any question section have the class ".show-text" and if it returns true then remove the class .show-text
// Now toggle the class 'show-list' for the button the user will click.


const questions = document.querySelectorAll('.question');
 questions.forEach(function (question) {
    const btn = question.querySelector('.arrow');
    btn.addEventListener("click", function() {
          questions.forEach(function (item){
              if (item !== question) {
                  item.classList.remove('show-text');
              }
          });
          question.classList.toggle("show-text");
    });
});