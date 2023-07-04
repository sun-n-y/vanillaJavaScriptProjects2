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
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  //bind functions
  //this.openModal = this.openModal.bind(this);
  //when img is clicked open modal
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

//prototype functions
Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" />`;
    })
    .join('');
  this.modal.classList.add('open');
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

//create instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
