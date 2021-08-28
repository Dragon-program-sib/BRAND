"use strict";

//export { titles, prices };
//import { fetchItems } from './functions_catalog.js';

let titles = [
    "Mango People T-Shirt",
    "Mango People Blouse",
    "Mango People Jacket",
    "Mango People Dress",
    "Mango People Bathrobe",
    "Mango People Suit",
    "Mango People Trousers",
    "Mango People Hoodie"
];

let prices = [52, 80, 200, 110, 50, 130, 90, 70];


const catalog = {
    items: [],
    container: null,

    init() {
        this.container = document.getElementById("main_catalog");
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
    let imgSrc = `../src/assets/img/main_catalog/product${index + 1}.jpg`;

    return `
        <div class="product">
            <a class="product_link" href="#"><img class="product_img" src="${imgSrc}" alt="product-1"></a>
            <div class="product_content">
                <p class="product_name">${item.title}</p>
                <p class="product_price">$${item.price}<img class="product_stars"src="../src/assets/img/stars.jpg" alt="stars"></p>
            </div>
            <div class="product_active">
                <div class="product_button">
                    <a class="product_button_link" href="#">
                        <div class="product_button_text">
                            <img class="product_cart_img" src="../src/assets/img/product-cart.png" alt="product cart">
                            Add to Cart
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
}
