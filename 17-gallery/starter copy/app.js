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
  this.setImage(selected);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" class="${image.dataset.id === selected.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}" alt="${image.alt}">`;
    })
    .join('');
  this.modal.classList.add('open');
};

Gallery.prototype.setImage = function (selected) {
  this.mainImage.src = selected.src;
  this.imageName.textContent = selected.title;
};

//instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

// console.log(nature);
