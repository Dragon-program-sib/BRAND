'use strict';

function createItemTemplate(item, index, type) {
    let temp = listTypes[type](item, index);

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

function initCatalog(url, cart, type = 'main', container = 'catalog') {
    // let TITLES = titles;
    // let PRICES = prices;
    return {
        items: [],
        container,
        cart: null,

        /*init() {
            this.container = document.getElementById(this.container);
            this.items = fetchItems(TITLES, PRICES);
            this.render();
        },*/

        async init() {
            this.cart = cart;
            this.container = document.getElementById(this.container);
            let response = await axios({
                url: url,
                type: 'GET'
            });
            this.items = response.data;
            this._render();
            this.handleEvents();
        },

        handleEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name === 'add') {
                    let item = {
                        productId: event.target.dataset.id,
                        productImg: event.target.dataset.img,
                        productName: event.target.dataset.name,
                        productPrice: event.target.dataset.price,
                    };
                    this.add(item);
                    // console.log('Товар добавлен!');
                }
            });
        },

        _render() {
            let catalogTemplate = '';

            this.items.forEach((item, index) => {
                catalogTemplate += createItemTemplate(item, index, type);
            });

            this.container.innerHTML = catalogTemplate;
        },

        add(item) {
            this.cart.add(item);
            // console.log('add ' + item.productName);
        }
    };
}
