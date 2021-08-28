'use strict';

export { fetchItems };
import { titles, prices } from './main_catalog.js';

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
