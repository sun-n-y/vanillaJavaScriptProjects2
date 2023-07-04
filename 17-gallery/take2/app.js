//helper function, to get target element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//constructor function to select specific gallery
function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.mainImage = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  element.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal();
      }
    }.bind(this)
  );
}

//prototype function
Gallery.prototype.openModal = function () {
  console.log('hi');
};

//instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

console.log(nature);
