import cart from './cart.mjs'

const productSummaryList = document.querySelector('#product-summary-list');
const total = document.querySelector('#total')

const productElements = cart.getAll()
    .map(product => {
        const el = document.createElement('li')
        el.innerText = product.title;
        return el;
    });

if (productElements && productElements.length) {
    productSummaryList.replaceChildren(...productElements);
    total.innerText = 'Total: ' + cart.calculateTotalPrice();
}