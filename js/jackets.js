// Import files from module
import api from './api.mjs'

// Declares product list as #jackets ID
const productListElement = document.querySelector('#jackets')

// Creates elements in HTML, then returns data to parent
function createProduct(product) {
    const div = document.createElement('div')
    const img = document.createElement('img')

    img.src = product.image.url
    img.alt = 'Product-image'

    const title = document.createElement('p')
    title.innerText = product.title
    
    const price = document.createElement('p')
    price.innerText = product.price
  
    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(price)
  
    return div
}

// Function to load products from API
async function loadProducts() {
    const products = await api.getAllProducts();

    // Filters products and creates elements
    const elements = filterProducts(products).map(product => createProduct(product));

    // Replaces products with "new" all/filtered products. Places elements with HTML
    productListElement.replaceChildren(...elements)
}

// Selects filter element in html
const genderSelector = document.querySelector('#gender')

// Function to filter products, filter by input
function filterProducts(products) {
    if (genderSelector.value === "All") {
        return products
    }

    // Return products filtered by gender
    return products.filter(product => product.gender === genderSelector.value)

}

// Listens for change in the filter, loads product every time input changes
genderSelector.addEventListener('change' , () => {
    loadProducts()
})

// Call function to load products
loadProducts()

