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
            this._render();
            this.handleEvents();
        },

        handleEvents() {
            this.container.addEventListener('click', (event) => {
                if (event.target.name === 'remove') {
                    this._remove(event.target.dataset.id);
                    // console.log('Товар удалён!');
                }
            });
        },

        _render() {
            let cartTemplate = '';

            this.items.forEach((item, index) => {
                cartTemplate += createItemTemplate(item, index, type);
            });

            this.container.innerHTML = cartTemplate;
        },

        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
                this._render();
                //console.log(1); // ++
            } else {
                let newItem = Object.assign({}, item, {
                    amount: 1
                });
                this.items.push(newItem);
                this._render();
                // console.log(2); // add
            }
            // console.log('add ' + item.productName);
        },

        _remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                find.amount--;
                this._render();
                //console.log(1); // ++
            } else {
                /*let newItem = Object.assign({}, item, {
                    amount: 1
                });*/
                //this.items.push(newItem);
                this.items.splice(this.items.indexOf(find), 1);
                this._render();
                // console.log();
            }
        }
    };
}
