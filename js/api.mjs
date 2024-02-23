// Specify the API endpoint URL
const apiUrl = 'https://v2.api.noroff.dev/rainy-days';

async function getAllProducts() {
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
        
    // Parse the JSON response
    const result = await response.json();

    // Do something with the data from the API
    console.log(result);

    return result.data;
}

async function getProduct(id) {
    
    const response = await fetch(apiUrl + '/' + id);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
        
    // Parse the JSON response
    const result = response.json();

    // Do something with the data from the API
    console.log(result);

    return result.data;
}

export default { getAllProducts, getProduct } 
