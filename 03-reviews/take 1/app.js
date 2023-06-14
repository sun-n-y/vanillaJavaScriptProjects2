// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

//target elements
const reviewContent = document.querySelector('.review-content');
const btns = document.querySelectorAll('.btn');

//
let number = 0;

//event listener
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const list = e.currentTarget.classList;
    if (list.contains('next-btn')) {
      number++;
      reviewContent.innerHTML = reviewsArray2[number];
    }
    if (list.contains('prev-btn')) {
      number--;
      reviewContent.innerHTML = reviewsArray2[number];
    }
    // if ((reviewContent.textContent = 'undefined')) {
    //   reviewContent.innerHTML = reviewsArray2[0];
    // }
  });
});

const reviewsArray2 = reviews.map(function (item) {
  return `<div class="img-container">
            <img src="${item.img}" id="person-img" alt="">
          </div>
          <h4 id="author">${item.name}</h4>
          <p id="job">${item.job}</p>
          <p id="info">${item.text}</p>`;
});
