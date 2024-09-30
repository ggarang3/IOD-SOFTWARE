// Initial news array
let news = [
    { id: 1, title: "Election Results", content: "Newly elected minister..." },
    { id: 2, title: "Sporting Success", content: "World Cup winners..." },
    { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
  ];
  
  // Function to populate the news container with Bootstrap grid
  const populateNews = () => {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ""; 
  
    
    news.forEach((item) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-3", "col-md-6", "col-sm-12", "mb-4");
  
      // Create the card structure for the news item
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
  
      // Create a title element and add the news title
      const newsTitle = document.createElement("div");
      newsTitle.classList.add("news-title");
      newsTitle.innerText = item.title;
  
      // Create a content element and add the news content
      const newsContent = document.createElement("div");
      newsContent.classList.add("news-content");
      newsContent.innerText = item.content;
  
      // Append the title and content to the news item div
      newsItem.appendChild(newsTitle);
      newsItem.appendChild(newsContent);
  
      // Append the news item to the column
      colDiv.appendChild(newsItem);
  
      // Append the column to the news container
      newsContainer.appendChild(colDiv);
    });
  };
  
  // Function to refresh the news every 5 seconds
  const refreshNews = () => {
    console.log("Refreshing news...");
    populateNews();
  };
  
  // Function to handle the form submission
  document.getElementById("news-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get the form input values
    const newsTitle = document.getElementById("news-title").value;
    const newsContent = document.getElementById("news-content").value;
  
    // Add the new news item to the array
    news.push({
      id: news.length + 1, // Generate a new ID based on the array length
      title: newsTitle,
      content: newsContent,
    });
  
    // Clear the form fields
    document.getElementById("news-title").value = "";
    document.getElementById("news-content").value = "";
  
    // Immediately refresh the news to display the new item
    populateNews();
  });
  
  // Populate the news when the page loads for the first time
  populateNews();
  
  // Set interval to refresh the news every 5 seconds
  setInterval(refreshNews, 5000);
  