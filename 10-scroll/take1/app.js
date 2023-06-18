// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');

date.innerText = new Date().getFullYear();

// ********** close links ************
//target elements
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//event listener
navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function () {
  if (scrollY > navbarHeight * 0.8) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollY > 400) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    if (!navbar.classList.contains('fixed-nav')) {
      scrollTo({
        left: 0,
        top: element.offsetTop - navbarHeight - navbarHeight,
      });
    } else {
      scrollTo({
        left: 0,
        top: element.offsetTop - navbarHeight,
      });
    }
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (links.getBoundingClientRect().height > 30) {
      scrollTo({
        left: 0,
        top: element.offsetTop - navbarHeight - navbarHeight - containerHeight,
      });
      linksContainer.style.height = 0;
    }
  });
});
