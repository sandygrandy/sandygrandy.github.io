// Import files from module
import api from './api.mjs'
import cart from './cart.mjs'

const productDetails = document.querySelector('#product-details');

const url = new URL(window.location.href);
const query = Object.fromEntries(url.searchParams.entries());

const product = await api.getProduct(query.id);

const title = productDetails.querySelector('#title')
title.innerText = product.title

const gender = productDetails.querySelector('#gender')
gender.innerText = product.gender

const price = productDetails.querySelector('#price')
if (product.onSale) {
    price.innerHTML += `${product.discountedPrice} <i><s>${product.price}</s></i>`
} else {
    price.innerHTML += product.price
}

const description = productDetails.querySelector('#description')
description.innerText = product.description

const image = productDetails.querySelector('#image')
image.src = product.image.url

const sizeSelector = document.querySelector('#sizes')

const addToCart = document.querySelector('#product-button')
addToCart.addEventListener('click', () => {
    if (sizeSelector.value === 'Sizes') {
        alert('Please select a size')
    } else {
        const productToAdd = {...product, size: sizeSelector.value}
        cart.add(productToAdd)
    }
})

