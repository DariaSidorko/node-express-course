

document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const productsList = document.getElementById('productsList');
  
    fetchButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/v1/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const products = await response.json();
        console.log(products); 
  
        // Clear previous content
        productsList.innerHTML = '';
  
        // Append each product to the productsList
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.textContent = `${product.name}: $${product.price}`;
          productsList.appendChild(productElement);
        });
  
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });
});