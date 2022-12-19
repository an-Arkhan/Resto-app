import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/resto-home';

const Favorite = {
  async render() {
    return `
        <div class="restaurant" id="home">
            <h1>Explore Restaurant</h1>
            <div class="wrapper" id="resto"></div>
        </div>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const cardResto = document.getElementById('resto');
    restos.forEach((restaurants) => {
      cardResto.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default Favorite;
