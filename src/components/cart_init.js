'use strict';

function createItemTemplate(item, index) {
    let temp = listTypes(item, index);

    return temp;
}

function initCart(url, type = 'cart', container = 'cart_items') {
    return {
        items: [],
        container: container, // You can simply: container,

        // Asynchronous function.
        async init() {
            this.container = document.getElementById(this.container);
            let response = await axios({
                url: url,
                type: 'GET',
            });
            this.items = response.data.content;
            this.render();
            this.handleEvents();
        },

        handleEvents() {
            this.container.addEventListener('click', (event) => {
                if (event.target.name === 'remove') {
                    console.log('Товар удалён!');
                }
            });
        },

        render() {
            let cartTemplate = '';

            this.items.forEach((item, index) => {
                cartTemplate += createItemTemplate(item, index, type);
            });

            this.container.innerHTML = cartTemplate;
        },

        add(item) {
            console.log('add ' + item.productName);
        },

        remove() {
            console.log();
        },
    };
}
