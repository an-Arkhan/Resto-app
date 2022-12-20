/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/resto-home';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="content">
        <div class="search-container">
          <input id="query" type="text" placeholder="Cari Restaurant ..." >
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <h2 class="content__heading">Your Favorited Restaurants</h2>
        <div id="restos" class="restos wrapper"></div>
      </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
