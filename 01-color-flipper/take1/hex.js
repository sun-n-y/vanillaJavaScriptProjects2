//
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// target elements
const btn = document.querySelector('#btn');
const colorValue = document.querySelector('.color');
const main = document.querySelector('main');

//event listener
btn.addEventListener('click', function () {
  let colorString = '#';
  for (i = 1; i < 7; i++) {
    colorString += hex[randomNumber()];
  }
  colorValue.textContent = colorString;
  main.style.background = colorString;
});

//functions
function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
