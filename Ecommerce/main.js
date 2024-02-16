// GETTING ELEMENTS FROM THE DOM
const fa_list_ul = document.getElementById('fa-list-ul');
const nav = document.getElementById('nav');

nav.style.transition = 'all 1s';

// Adding click event to the hamburgar icon that will show the sub-header section
fa_list_ul.addEventListener('click', () => {
    nav.style.display = 'block';
});

// Adding double click event to the same hamburgar icon that will close the sub-header icon when you double click.
fa_list_ul.addEventListener('dblclick', () => {
    nav.style.display = 'none';
});


// IMPORTING THE DATA
import { PRODUCTS_CONTAINER_FIRST, PRODUCTS_CONTAINER_SECOND, PRODUCTS_CONTAINER_THIRD, productInspirationArray } from './product.js';

// GETTING THE DOM ELEMENTS

const first_topRanking_article = document.getElementById('first-article-of-top-ranking-section');
const second_topRanking_article = document.getElementById('second-article-of-top-ranking-section');
const third_topRanking_article = document.getElementById('third_topRanking_article');
const product_inspiration = document.getElementById('One_of_the_lagest_container_of_product&&');

/**
 * ! I have 4 different sections where I am suppose to render the products in the UI
 * ? That is why I added 1, 2, and 3 on the function names 
 * ! But the last one is the lagest group of products does why it function name is different.
 */

// Function to render the products using ES6 2015 features

let showToRankingProducts1 = () => {
    return first_topRanking_article.innerHTML = PRODUCTS_CONTAINER_FIRST.map(product => {
        const { name, img, p } = product;
        return `
        <div class="most-popular-products-container-inner-div">
            <h3>${name}</h3>
            <img src=${img} loading="lazy" alt="image" width="130">
            <p>${p}</p>
        </div>
        `;
    }).join(' ');
};
showToRankingProducts1();

let showToRankingProducts2 = () => {
    return third_topRanking_article.innerHTML = PRODUCTS_CONTAINER_THIRD.map(product => {
        const { name, img, p } = product;
        return `
        <div class="most-popular-products-container-inner-div">
            <h3>${name}</h3>
            <img src=${img} loading="lazy" alt="image" width="130">
            <p>${p}</p>
        </div>
        `;
    }).join(' ');
};
showToRankingProducts2();

let showToRankingProducts3 = () => {
    return second_topRanking_article.innerHTML = PRODUCTS_CONTAINER_SECOND.map(product => {
        const { name, img, p } = product;
        return `
        <div class="most-popular-products-container-inner-div">
            <h3>${name}</h3>
            <img src=${img} loading="lazy" alt="image" width="130">
            <p>${p}</p>
        </div>
        `;
    }).join(' ');
};
showToRankingProducts3();

let productInspirationFunction = () => {
    return product_inspiration.innerHTML = productInspirationArray.map(product => {
        const { img, p, min_price, max_price, orderLevel, orderType } = product;
        return `
        <div class="products_from_the_second_section_which_can_be_added_add_directly">
            <img width="200" src=${img} alt="image">
            <div class="products_from_the_second_">
                <p>${p}</p>
                <h3>$ ${min_price} - $ ${max_price}</h3>
                <p>Min. order: ${orderLevel} ${orderType}</p>
            </div>
        </div>
                `;
    }).join(' ');
};
productInspirationFunction();