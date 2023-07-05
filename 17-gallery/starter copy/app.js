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

//constructor function
function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.closebtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.mainImage = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  //bind functions
  //event listener for section
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

//prototypes for constructor
Gallery.prototype.openModal = function (selected, list) {
  this.modal.classList.add('open');
  console.log(selected, list);
};

//instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

console.log(nature);
