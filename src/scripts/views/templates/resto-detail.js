import CONFIG from '../../globals/config';

const createDetailItemTemplate = (resto) => `
    <article>
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
        <h1 class="resto__name">${resto.name}</h1>
        <div class="description">
            <p>Kota : ${resto.city}</p>
            <p>Alamat : ${resto.address}</p>
            <p>Desc : ${resto.description}</p>
            <h3>Menu</h3>
            <div class="menu">
                <div class="food">
                    <h4>Food</h4>
                    <ul>
                        ${resto.menus.foods // eslint-disable-next-line indent
                            .map((food, i) => `
                                <li><p>${i + 1}) ${food.name}</p></li>
                            `) // eslint-disable-next-line indent
                            .join('')}
                    <ul>
                </div>
                <div class="drink">
                    <h4>Drink</h4>
                    <ul>
                        ${resto.menus.drinks // eslint-disable-next-line indent
                            .map((drink, i) => `
                                <li><p>${i + 1}) ${drink.name}</p></li>
                            `) // eslint-disable-next-line indent
                            .join('')}
                    <ul>
                </div>
            </div>
            <br>
            <h3>Review</h3>
            <div class="review">
                ${resto.customerReviews // eslint-disable-next-line indent
                    .map((reviews) => `
                        <div class="review-item">
                            <div class="review-header">
                                <p class="review-name">${reviews.name}</p>
                                <p class="review-date">${reviews.date}</p>
                            </div>
                            <div class="review-comment">${reviews.review}</div>
                        </div>
                    `) // eslint-disable-next-line indent
                    .join('')}
            </div>
        </div>
    </article>
`;

const createFavoriteRestoButtonTemplate = () => `
    <button aria-label="favorite this resto" id="favoriteButton" class="favorite">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedRestoButtonTemplate = () => `
    <button aria-label="unfavorite this resto" id="favoriteButton" class="favorite">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

// eslint-disable-next-line import/prefer-default-export
export {
  createDetailItemTemplate, createFavoriteRestoButtonTemplate, createFavoritedRestoButtonTemplate,
};
