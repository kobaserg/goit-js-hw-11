export { fetchPhoto };
import { renderPhotoGallery } from '.';
const axios = require('axios');

// function fetchPhoto(name, page, perPage) {
//   const API_KEY = '29969800-031613b21cddc77cf547ed849';
//   const standartFilter =
//     '&orientation=horizontal&safesearch=true&image_type=photo';
//   return axios
//     .get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${name}${standartFilter}&page=${page}&per_page=${perPage}`
//     )
//     .then(function (response) {
//       // обработка успешного запроса
//       renderPhotoGallery(response);
//     })
//     .catch(function (error) {
//       // обработка ошибки
//       console.log(error);
//     })
//     .then(function () {
//       // выполняется всегда
//     });

async function fetchPhoto(name, page, perPage) {
  try {
    const API_KEY = '29969800-031613b21cddc77cf547ed849';
    const standartFilter =
      '&orientation=horizontal&safesearch=true&image_type=photo';

    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${name}${standartFilter}&page=${page}&per_page=${perPage}`
    );
    renderPhotoGallery(response);
  } catch (error) {
    console.error(error);
  }
}
