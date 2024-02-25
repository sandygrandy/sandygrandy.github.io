
function getAll() {
    return JSON.parse(localStorage.getItem('cart')) || []
}

function add(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('cart')) || []
    itemsInCart.push(product)
    const jsonCart = JSON.stringify(itemsInCart)
    localStorage.setItem('cart', jsonCart)
}

function remove(index) {
    const itemsInCart = JSON.parse(localStorage.getItem('cart')) || []
    itemsInCart.splice(index, 1)
    const jsonCart = JSON.stringify(itemsInCart)
    localStorage.setItem('cart', jsonCart)
}

function calculatedSubtotalPrice() {
    const products = getAll()
    const subtotal = products
        .map(product => product.price)
        .reduce((acc, cur) => acc + cur)
        .toFixed(2)
    return subtotal;   
}

function calculatedMoneySaved() {
    const products = getAll()
    const totalAmountSaved = products
        .map(product => product.price - product.discountedPrice)
        .reduce((acc, cur) => acc + cur)
        .toFixed(2)
    return totalAmountSaved;   
}

function calculateTotalPrice() {
    const products = getAll()
    const subtotal = products
        .map(product => product.discountedPrice)
        .reduce((acc, cur) => acc + cur)
        .toFixed(2)
    return subtotal;   
}

export default { getAll, add, remove, calculatedSubtotalPrice, calculatedMoneySaved, calculateTotalPrice }