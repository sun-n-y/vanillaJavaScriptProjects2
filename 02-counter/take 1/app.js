//target elements
const counterValue = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//
let intialValue = 0;

//event listner
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const classlValue = e.currentTarget.classList[1];
    if (classlValue === 'decrease') {
      intialValue--;
      counterValue.textContent = intialValue;
    }
    if (classlValue === 'reset') {
      intialValue = 0;
      counterValue.textContent = 0;
    }
    if (classlValue === 'increase') {
      intialValue++;
      counterValue.textContent = intialValue;
    }
    if (intialValue > 0) {
      counterValue.style.color = 'green';
    } else if (intialValue < 0) {
      counterValue.style.color = 'red';
    } else {
      counterValue.style.color = 'black';
    }
  });
});
