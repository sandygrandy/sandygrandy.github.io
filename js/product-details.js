// Import files from module
import api from './api.mjs'

const productDetails = document.querySelector('#product-details');

const url = new URL(window.location.href);
const query = Object.fromEntries(url.searchParams.entries());

const product = await api.getProduct(query.id);

const title = productDetails.querySelector('#title')
title.innerText = product.title

const gender = productDetails.querySelector('#gender')
gender.innerText = product.gender

const price = productDetails.querySelector('#price')
price.innerText = product.price

const description = productDetails.querySelector('#description')
description.innerText = product.description

const image = productDetails.querySelector('#image')
image.src = product.image.url