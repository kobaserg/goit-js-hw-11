import './css/styles.css';
import { fetchPhoto } from './fetchPhoto';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export { renderPhotoGallery };
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const axios = require('axios');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let fieldForSearchPhoto = '';
clearGallery();

form.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
  fieldForSearchPhoto = event.target.value;
  console.log(fieldForSearchPhoto);
}

function onSubmitForm(event) {
  event.preventDefault();
  clearGallery();
  fetchPhoto(fieldForSearchPhoto);
}

function renderPhotoGallery(photos) {
  const arrayPhoto = photos.data.hits;
  console.log(arrayPhoto.length);
  if (arrayPhoto.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    form.reset();
  }

  const markup = arrayPhoto
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
        <b class="item">Likes</b><br>${likes}
      </p>
      <p class="info-item">
        <b class="item">Views</b><br>${views}
      </p>
      <p class="info-item">
        <b class="item">Comments</b><br>${comments}
      </p>
      <p class="info-item">
        <b class="item">Downloads</b><br>${downloads}
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

function clearGallery() {
  console.log('Очистка галереи');
  gallery.innerHTML = '';
}
