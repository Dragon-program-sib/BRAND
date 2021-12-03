"use strict";

//export { titles, prices };
//import { fetchItems } from './functions_catalog.js';

/*let TITLES = [
    "Mango People T-Shirt",
    "Mango People Blouse",
    "Mango People Jacket",
    "Mango People Dress",
    "Mango People Bathrobe",
    "Mango People Suit",
    "Mango People Trousers",
    "Mango People Hoodie"
];

let PRICES = [52, 80, 200, 110, 50, 130, 90, 70];


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
}*/

//catalogTypes.main = createCatalogTemplateMain;

function catalogTypes(item) {
    // let imgSrc = `../src/assets/img/main_catalog/product${index + 1}.jpg`;
    return `
        <div class="product">
            <a class="product_link" href="#"><img class="product_img" src="${item.productImg}" alt="product-1" /></a>
            <div class="product_content">
                <p class = "product_name">${item.productName}</p>
                <p class="product_price">$${item.productPrice}<img class="product_stars"src="../src/assets/img/stars.jpg" alt="stars" /></p>
            </div>
            <div class="product_active">
                <button class="product_active__button" name="add">
                    <img class="product_active__button__cart_img"
                    src="../src/assets/img/product-cart.png"
                    alt="product cart">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}