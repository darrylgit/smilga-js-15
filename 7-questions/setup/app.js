//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    // Enforce only one question open at a time
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    // Show text in target question
    question.classList.toggle('show-text');
  });
});

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(button =>
//   button.addEventListener('click', e => {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle('show-text');
//   })
// );
