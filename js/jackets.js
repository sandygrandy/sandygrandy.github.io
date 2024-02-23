// Import files from module
import api from './api.mjs'

// Declares product list as #jackets ID
const productListElement = document.querySelector('#jackets')

// Creates elements in HTML, then appends data to parent
function processItem(item) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = item.image.url
    img.alt = 'Product-image'
    const title = document.createElement('p')
    title.innerText = item.title
    const price = document.createElement('p')
    price.innerText = item.price
  
    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(price)
  
    productListElement.appendChild(div)
  }
  
  // Set variable 
  const products = await api.getAllProducts();
  
  products.forEach(product => processItem(product));
  
  