'use strict';

/*const catalogTypes = {
    main: createCatalogTemplateMain,
    product: createCatalogTemplateProduct
};*/

function createItemTemplate(item, index) {
    let temp = catalogTypes(item, index);

    return temp;
}

/*function fetchItems(TITLES, PRICES) {
    let items = [];

    for (let i = 0; i < TITLES.length; i++) {
        items.push(createItem(i, TITLES, PRICES));
    }

    return items;
}


function createItem(ind, TITLES, PRICES) {
    return {
        id: 'cat_' + ind,
        title: TITLES[ind],
        price: PRICES[ind]
    };
}*/

function initCatalog(url, type = 'catalogTypes', container = 'catalog') {
    // let TITLES = titles;
    // let PRICES = prices;
    return {
        items: [],
        container: container, // You can simply: container,

        /*init() {
            this.container = document.getElementById(this.container);
            this.items = fetchItems(TITLES, PRICES);
            this.render();
        },*/

        // Asynchronous function.
        async init() {
            this.container = document.getElementById(this.container);
            let response = await axios({
                url: url,
                type: 'GET'
            });
            this.items = response.data;
            this.render();
            this.handleEvents();
        },

        handleEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name === 'add') {
                    console.log('Товар добавлен!');
                }
            });
        },

        render() {
            let catalogTemplate = '';

            this.items.forEach((item, index) => {
                catalogTemplate += createItemTemplate(item, index, type);
            });

            this.container.innerHTML = catalogTemplate;
        },

        add(item) {
            console.log('add ' + item.productName);
        }
    };
}