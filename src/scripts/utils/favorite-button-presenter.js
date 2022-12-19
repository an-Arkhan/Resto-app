import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createFavoriteRestoButtonTemplate, createFavoritedRestoButtonTemplate } from '../views/templates/resto-detail';

const FavoriteButton = {
  async init({ favoriteButtonContainer, restos }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restos = restos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restos;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restos);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restos.id);
      this._renderButton();
    });
  },
};

export default FavoriteButton;
