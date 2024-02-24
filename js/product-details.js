// Import files from module
import api from './api.mjs'

const productDetails = document.querySelector('#product-details');

const url = new URL(window.location.href);
const query = Object.fromEntries(url.searchParams.entries());

const product = await api.getProduct(query.id);

