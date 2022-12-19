import RestaurantSource from '../../data/restaurantApi-source';
import { createRestoItemTemplate, createBahanItemTemplate } from '../templates/resto-home';

const Home = {
  async render() {
    return `
        <div class="restaurant" id="home">
            <h1>Explore Restaurant</h1>
            <div class="wrapper" id="resto"></div>
        </div>
        <hr>
        <div class="bahan-makanan">
            <h1>Jenis Makanan</h1>
        <div class="wrapper" id="bahan"></div>
        </div>
      `;
  },

  async afterRender() {
    const restos = await RestaurantSource.restoList();
    const ingredients = await RestaurantSource.bahanMakan();
    const cardResto = document.getElementById('resto');
    const cardBahan = document.getElementById('bahan');
    restos.forEach((restaurant) => {
      cardResto.innerHTML += createRestoItemTemplate(restaurant);
    });
    ingredients.forEach((categories) => {
      cardBahan.innerHTML += createBahanItemTemplate(categories);
    });
  },
};

export default Home;
