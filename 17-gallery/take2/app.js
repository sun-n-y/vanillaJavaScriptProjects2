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
  this.modalImage = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  //bind functions
  this.close = this.close.bind(this);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
  //event listener for container
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

//prototype function
Gallery.prototype.openModal = function (selectedImage, list) {
  this.setImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" class="${image.dataset.id === selectedImage.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}"/>`;
    })
    .join('');
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.close);
  this.nextBtn.addEventListener('click', this.next);
  this.prevBtn.addEventListener('click', this.prev);
};

Gallery.prototype.setImage = function (selectedImage) {
  this.modalImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.close = function () {
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click', this.close);
  this.nextBtn.removeEventListener('click', this.next);
  this.prevBtn.removeEventListener('click', this.prev);
};
Gallery.prototype.next = function () {
  console.log('next');
};
Gallery.prototype.prev = function () {
  console.log('prev');
};

//instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
