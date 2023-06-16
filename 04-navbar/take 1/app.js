// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//target elements
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//event listeners
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
