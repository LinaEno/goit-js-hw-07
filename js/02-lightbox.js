import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeGalleryItems = items => {
  const { preview, original, description } = items;
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
};

const galleryContainer = document.querySelector('.gallery');

const galleryImages = galleryItems.map(makeGalleryItems).join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryImages);

let galleryDescription = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});