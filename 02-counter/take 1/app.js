//target elements
const counterValue = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//
let counter = 0;

//event listener
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const classlValue = e.currentTarget.classList[1];
    if (classlValue === 'decrease') {
      counter--;
    }
    if (classlValue === 'reset') {
      counter = 0;
    }
    if (classlValue === 'increase') {
      counter++;
    }
    if (counter > 0) {
      counterValue.style.color = 'green';
    } else if (counter < 0) {
      counterValue.style.color = 'red';
    } else {
      counterValue.style.color = 'black';
    }
    counterValue.textContent = counter;
  });
});
