'use strict';

// const listTypes = {};
listTypes.cart = createCartTemplateIndex;

function createCartTemplateIndex(item) {

    return `
        <div class="drop_col">
            <img class="header_cart__img" src="${item.productImg}" alt="product" />
            <div class="header_cart_content">
                <a class="header_cart_name_link" href="#">
                    <h3 class="header_cart_name">${item.productName}</h3>
                </a>
                <div class="header_cart_stars">
                    <img src="../src/assets/img/cart-stars.png" alt="stars" />
                </div>
                <p class="header_cart_parameters">${item.amount}<span class="header_cart_parameters_mark">x</span>$${item.productPrice}</p>
                <img class="header_cart_cancel_img" src="../src/assets/img/сancel.png" alt="cancel" name="remove" data-id="${item.productId}"/>
            </div>
        </div>
    `;
}
