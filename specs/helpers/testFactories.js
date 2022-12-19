import FavoriteButton from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithResto = async (restos) => {
  await FavoriteButton.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restos,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithResto };
