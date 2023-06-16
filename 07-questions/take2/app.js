//using selectors inside the element
// const questions = document.querySelectorAll('.question');

// questions.forEach(function (question) {
//   const btn = question.querySelector('.question-btn');
//   btn.addEventListener('click', function () {
//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const element = e.currentTarget.parentElement.parentElement;
    btns.forEach(function (item) {
      if (item !== btn) {
        item.parentElement.parentElement.classList.remove('show-text');
      }
    });
    element.classList.toggle('show-text');
  });
});
