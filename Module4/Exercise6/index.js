// Function to fetch posts from JSON Placeholder
function fetchPosts(limit = 10) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => response.json())
      .then((posts) => {
        displayPosts(posts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }
  
  // Function to display posts in Bootstrap cards
  function displayPosts(posts) {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ""; // Clear the container before adding new posts
  
    // Loop through the posts and create Bootstrap cards for each
    posts.forEach((post) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-4", "col-md-6", "col-sm-12");
  
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = `Post ${post.id}: ${post.title}`;
  
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = post.body;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);
  
      postContainer.appendChild(colDiv);
    });
  }
  
  // Fetch and display posts when the page loads
  document.addEventListener("DOMContentLoaded", () => fetchPosts());
  