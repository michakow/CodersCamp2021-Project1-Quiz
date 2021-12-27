import logo from '/src/images/logo.png';

const SELECTED_CATEGORY_IDS = [20, 14, 9, 22, 10, 15, 21, 30, 13, 16];

export const renderCategories = (categories, parentSelector) => {
    const parent = document.querySelector(parentSelector);
    const tiles = categories
        .filter((category) => SELECTED_CATEGORY_IDS.includes(category.id))
        .map((category) => `
            <div class="card category__card">
                <a href="#" class="card__link">
                <img
                    src="${logo}"
                    alt="category"
                    class="card__image"
                />
                <h2 class="card__name">${category.name}</h2>
                </a>
            </div>`
        );
    
    parent.innerHTML =  tiles.join('');
};
