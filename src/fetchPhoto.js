export { fetchPhoto };
import { renderPhotoGallery } from '.';
const axios = require('axios');

async function fetchPhoto(name, page, perPage) {
  try {
    const API_KEY = '29969800-031613b21cddc77cf547ed849';
    const standartFilter =
      '&orientation=horizontal&safesearch=true&image_type=photo';

    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${name}${standartFilter}&page=${page}&per_page=${perPage}`
    );
    console.log(response);

    renderPhotoGallery(response);
  } catch (error) {
    console.error(error);
  }
}
