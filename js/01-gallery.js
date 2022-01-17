import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const pictureMarup = createPictureMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', pictureMarup);
galleryContainer.addEventListener('click', onGalleryContainerClick);


function createPictureMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </div>
        `;
    }).join('');
};


function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const originalImg = event.target.dataset.source;

    modalOpen(originalImg);

};

function modalOpen(image) {
    const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600"> `);
    instance.show();
    
    window.addEventListener('keydown', event => {
       if (event.code === 'Escape') {
           instance.close();
    }});
}
