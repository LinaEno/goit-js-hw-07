import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeGalleryItems = items => {
  const { preview, original, description } = items;
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
};

const galleryContainer = document.querySelector('.gallery');

const galleryImages = galleryItems.map(makeGalleryItems).join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryImages);

galleryContainer.addEventListener('click', onImageClick);

const instance = basicLightbox.create(`
    <img class="gallery__image" src="" width="1280" height="853">
    `,
  {
    onShow: instance => { window.addEventListener('keydown', onEscClick) },
    
    onClose: instance => { window.removeEventListener('keydown', onEscClick) }
  }
);


function onImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
  
  instance.element().querySelector('img').src = event.target.dataset.source;

    instance.show();

    
};

function onEscClick(event) {
        if (event.code === 'Escape') {
          instance.close();
          return;
        }
};





