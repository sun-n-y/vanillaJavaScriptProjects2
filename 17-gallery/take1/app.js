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
  this.container = element;
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
  //bind functions
  // this.openModal = this.openModal.bind(this);
  //when img is clicked open modal
  this.container.addEventListener(
    'click',
    function (e) {
      console.log(this);
      this.openModal();
    }.bind(this)
  );
}

//prototype functions
Gallery.prototype.openModal = function () {
  console.log(this);
  console.log('open-modal');
  this.modal.classList.add('open');
};

//create instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
