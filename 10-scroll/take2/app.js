// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
let linksHeight = links.getBoundingClientRect().height;

navBtn.addEventListener('click', function () {
  let linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight == 0) {
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
  if (window.scrollY > navbarHeight * 0.8) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (window.scrollY > 400) {
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

    const fixedNav = navbar.classList.contains('fixed-nav');
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navbarHeight = navbar.getBoundingClientRect().height;

    let position = element.offsetTop - navbarHeight;

    if (!fixedNav) {
      position = position - navbarHeight;
    }
    console.log(navbarHeight);

    if (navbarHeight > 82) {
      position = position + linksContainerHeight;
    }

    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});
