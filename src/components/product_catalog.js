'use strict';

//export { titles, prices };
//import { fetchItems } from './functions_catalog.js';

let titles = [
    'Mango People Windbreaker',
    'Mango People Cape',
    'Mango People Jacket',
    'Mango People T-Shirt',
    'Mango People Hoodie',
    'Mango People Tracksuit',
    'Mango People Costume',
    'Mango People Coat',
    'Mango People T-Shirt'
];

let prices = [100, 150, 200, 50, 80, 120, 170, 210, 55];


const catalog = {
    items: [],
    container: null,

    init() {
        this.container = document.getElementById("product_catalog");
        this.items = fetchItems();
        this.render();
    },

    render() {
        let catalogTemplate = "";

        this.items.forEach((item, index) => {
            catalogTemplate += createItemTemplate(item, index);
        });

        this.container.innerHTML = catalogTemplate;
    }
};

catalog.init();


function fetchItems() {
    let items = [];

    for (let i = 0; i < titles.length; i++) {
        items.push(createItem(i));
    }

    return items;
}


function createItem(ind) {
    return {
        id: "cat_" + ind,
        title: titles[ind],
        price: prices[ind]
    };
}


function createItemTemplate(item, index) {
    let imgSrc = `../src/assets/img/product_catalog/prod-${index + 1}.jpg`;

    return `
        <div class="product_product">
            <a class="product_product_link" href="#"><img class="product_product_img" src="${imgSrc}" alt="product-1"></a>
            <div class="product_product_content">
                <p class="product_product_name">${item.title}</p>
                <p class="product_product_price">$${item.price}<img class="product_product_stars" src="../src/assets/img/stars.jpg" alt="stars"></p>
            </div>
            <div class="product_product_active">
                <div class="product_product_button">
                    <a class="product_product_button_link" href="#">
                        <div class="product_product_button_text">
                            <img class="product_product_cart_img" src="../src/assets/img/product-cart.png" alt="product cart">
                            Add to Cart
                        </div>
                    </a>
                </div>
                <div class="product_product_button_update">
                    <a class="product_product_button_update_link" href="#">
                    <img class="product_product_update_img" src="../src/assets/img/update.png" alt="update">
                    </a>
                </div>
                <div class="product_product_button_fav">
                    <a class="product_product_button_fav_link" href="#"><img class="product_product_fav_img" src="../src/assets/img/favourites.png" alt="favourites">
                    </a>
                </div>
            </div>
        </div>
    `;
}
