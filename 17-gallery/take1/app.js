//helper function, to get target elements
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//constructor function to look for section(element) of nature or city
function Gallery(element) {
  //selecting all images sitting inside seciton
  //use spread operator to turn node list into an array
  this.list = [...element.querySelectorAll('.img')];
  //target modal
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
}

//create instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

console.log(nature);
