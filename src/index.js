import './css/styles.css';
import { fetchPhoto } from './fetchPhoto';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export { renderPhotoGallery };

const axios = require('axios');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let fieldForSearchPhoto = '';

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  fieldForSearchPhoto = event.target.value;
  console.log(fieldForSearchPhoto);
}

function onSubmitForm(event) {
  event.preventDefault();
  fetchPhoto(fieldForSearchPhoto);
}

function renderPhotoGallery(photos) {
  const markup = photos.data.hits
    .map(photo => {
      const previewImage = photo.webformatURL;
      const alt = photo.tags;
      const likes = photo.likes;
      const views = photo.views;
      const comments = photo.comments;
      const downloads = photo.downloads;
      const largeImage = photo.largeImageURL;

      return `<div class="photo-card">
      <a class="gallery__item gallery__link" href="${largeImage}">
      <img class="gallery__image" src="${previewImage}" alt="${alt}" loading="lazy" />
      </a>     
    <div class="info">
      <p class="info-item">
        <br>Likes</br>${likes}
      </p>
      <p class="info-item">
        <br>Views</br>${views}
      </p>
      <p class="info-item">
        <br>Comments</br>${comments}
      </p>
      <p class="info-item">
        <br>Downloads</br>${downloads}
      </p>
    </div>
  </div>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    widthRatio: 0.6,
    heightRatio: 0.9,
    scrollZoomFactor: 0.1,
  });
}
