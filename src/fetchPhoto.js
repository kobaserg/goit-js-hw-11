export { fetchPhoto };
import { renderPhotoGallery } from '.';
const axios = require('axios');

function fetchPhoto(name) {
  return axios
    .get(
      `https://pixabay.com/api/?key=29969800-031613b21cddc77cf547ed849&q=${name}&orientation=horizontal&safesearch=true&image_type=photo`
    )
    .then(function (response) {
      // обработка успешного запроса
      renderPhotoGallery(response);
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
    .then(function () {
      // выполняется всегда
    });
}
