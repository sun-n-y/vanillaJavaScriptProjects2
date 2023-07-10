//target elements
const toggleBtn = document.querySelector('.btn');

//event listener
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});
