import RestaurantSource from '../../data/restaurantApi-source';
import UrlParser from '../../routes/url-parser';
import { createDetailItemTemplate } from '../templates/resto-detail';
import FavoriteButton from '../../utils/favorite-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div class="restaurant" id="home">
            <h1>Detail Restaurant</h1>
            <div class="wrapper-detail" id="resto-detail"></div>
            <div id="favoriteButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.getElementById('resto-detail');
    restoContainer.innerHTML = createDetailItemTemplate(resto);

    FavoriteButton.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      restos: {
        id: resto.id,
        city: resto.city,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
