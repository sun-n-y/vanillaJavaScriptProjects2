// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navBtn = document.querySelector('.nav-toggle');
const container = document.querySelector('.links-container');
const links = document.querySelector('.links');
const linksHeight = links.getBoundingClientRect().height;

navBtn.addEventListener('click', function () {
  const containerHeight = container.getBoundingClientRect().height;

  if (containerHeight == 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector('#nav');
const navbarHeight = navbar.getBoundingClientRect().height;
const topBtn = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  if (scrollY > navbarHeight * 0.8) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollY > 400) {
    topBtn.classList.add('show-link');
  } else {
    topBtn.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navbarHeight;
    const navFixed = navbar.classList.contains('fixed-nav');
    const containerHeight = container.getBoundingClientRect().height;

    if (!navFixed) {
      position = position - navbarHeight;
    }

    if (containerHeight > 80) {
      position = position - containerHeight;
    }
    if ((containerHeight > 80) & navFixed) {
      position = position + containerHeight;
    }

    window.scrollTo({ left: 0, top: position });
    container.style.height = 0;
  });
});
