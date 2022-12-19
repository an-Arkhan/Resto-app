import { createFavoriteRestoButtonTemplate, createFavoritedRestoButtonTemplate } from '../views/templates/resto-detail';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestos, restos }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restos = restos;
    this._favoriteRestos = favoriteRestos;

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
    const resto = await this._favoriteRestos.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestos.putResto(this._restos);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedRestoButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteResto(this._restos.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
