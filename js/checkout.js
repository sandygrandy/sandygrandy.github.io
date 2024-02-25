import cart from './cart.mjs'

function createProduct(product, index) {
    const productContainer = document.createElement('div')
    productContainer.classList.add('product')

    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    image.classList.add('cart-image')
    image.src = product.image.url
    image.alt = product.title
    imageContainer.appendChild(image)

    const productDescription = document.createElement('div')

    const title = document.createElement('h2')
    title.innerText = product.title
    productDescription.appendChild(title)

    const size = document.createElement('p')
    size.innerText = product.size
    productDescription.appendChild(size)

    const price = document.createElement('p')
    
    if (product.onSale) {
        price.innerHTML += `${product.discountedPrice} <i><s>${product.price}</s></i>`
    } else {
        price.innerHTML += product.price
    }
    productDescription.appendChild(price)

    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.addEventListener('click', () => {
        cart.remove(index)
        loadProducts()
    })
    productDescription.appendChild(removeButton)

    productContainer.appendChild(imageContainer)
    productContainer.appendChild(productDescription)

    return productContainer
}

const cartList = document.querySelector('#cart-products')
const cartCheckout = document.querySelector('#cart-checkout')
const emptyCart = document.querySelector('#empty-cart')

function loadProducts() {
    
    const productsInCart = cart.getAll()
    const productElements = productsInCart.map(createProduct)
    
    cartList.replaceChildren(...productElements)


    if (productsInCart.length === 0) {
        cartCheckout.classList.add('hidden')
        emptyCart.classList.remove('hidden')
    } else {
        cartCheckout.classList.remove('hidden')
        emptyCart.classList.add('hidden')
        loadOrder()
    }
}

const subtotalElement = document.querySelector('#subtotal')
const salesElement = document.querySelector('#sales')
const totalElement = document.querySelector('#total')

function loadOrder() {
    const subtotal = cart.calculatedSubtotalPrice()
    const totalAmountSaved = cart.calculatedMoneySaved()
    const total = cart.calculateTotalPrice()

    subtotalElement.innerText = 'Subtotal: ' + subtotal;
    salesElement.innerText = 'Saved: ' + totalAmountSaved;
    totalElement.innerText = 'Total: ' + total;
}

loadProducts()
