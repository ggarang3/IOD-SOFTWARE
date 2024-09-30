// Fetch product data from the Fake Store API
function fetchProducts() {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((products) => {
        populateCategoryDropdown(products);
        displayProducts(products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }
  
  // Display products using Bootstrap cards
  function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear the container before displaying products
  
    products.forEach((product) => {
      const productCard = `
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${
        product.title
      }">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$${product.price}</p>
                <p class="card-text">${product.description.substring(
                  0,
                  100
                )}...</p>
                <p class="card-text"><strong>Category:</strong> ${
                  product.category
                }</p>
              </div>
            </div>
          </div>`;
      productList.innerHTML += productCard;
    });
  }
  
  // Populate dropdown with categories
  function populateCategoryDropdown(products) {
    const categories = [...new Set(products.map((product) => product.category))];
    const categoryDropdown = document.getElementById("categoryFilter");
  
    // Populate dropdown with unique categories
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryDropdown.appendChild(option);
    });
  
    // Add event listener to filter products by category
    categoryDropdown.addEventListener("change", (event) =>
      filterProductsByCategory(products, event.target.value)
    );
  }
  
  // Filter products based on selected category
  function filterProductsByCategory(products, category) {
    if (category === "all") {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      displayProducts(filteredProducts);
    }
  }
  
  // Fetch products when the page loads
  document.addEventListener("DOMContentLoaded", fetchProducts);
  