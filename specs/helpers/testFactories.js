import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithResto = async (restos) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestos: FavoriteRestoIdb,
    restos,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithResto };
