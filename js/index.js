// Specify the API endpoint URL
const apiUrl = 'https://v2.api.noroff.dev/rainy-days';

// Use the fetch function to make a GET request
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Do something with the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

