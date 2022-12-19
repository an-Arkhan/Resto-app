import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restos) => `
    <article>
        <a href="#/detail/${restos.id}">
            <img src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}" alt="${restos.name}">
        </a>
        <h1>${restos.name}</h1>
        <div class="description">
            <p>Kota : ${restos.city}</p>
            <p>Rating : ${restos.rating}</p>
            <p>Desc : ${restos.description}</p>
        </div>
    </article>
`;

const createBahanItemTemplate = (ingredients) => `
    <article>
        <img src="${ingredients.strCategoryThumb}" alt="${ingredients.strCategory}">
        <h1>${ingredients.strCategory}</h1>
    </article>
`;

export { createRestoItemTemplate, createBahanItemTemplate };
