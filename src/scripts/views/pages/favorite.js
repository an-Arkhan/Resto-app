/* eslint-disable no-new */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoSearchView from './favorited-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './favorited-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './favorited-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ favoriteRestos: FavoriteRestoIdb, view });
  },
};

export default Favorite;
