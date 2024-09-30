// Function to create a list of rappers and their portfolios
function getRappers() {
    return [
      {
        name: "Kendrick Lamar",
        bio: "Kendrick Lamar is an American rapper and songwriter known for his socially conscious lyrics.",
        portfolio: [
          {
            title: "Good Kid, M.A.A.D City",
            description:
              "A concept album that tells the story of a young boy's experiences in Compton.",
          },
          {
            title: "To Pimp a Butterfly",
            description:
              "An album addressing African-American culture, racial inequality, and personal struggle.",
          },
          {
            title: "DAMN.",
            description:
              "Winner of the Pulitzer Prize for Music, a reflection on identity and fame.",
          },
        ],
      },
      {
        name: "J. Cole",
        bio: "J. Cole is an American rapper, singer, and record producer known for his introspective storytelling.",
        portfolio: [
          {
            title: "2014 Forest Hills Drive",
            description:
              "An autobiographical album that reflects on Cole's upbringing.",
          },
          {
            title: "KOD",
            description:
              "An album exploring themes of addiction, greed, and personal growth.",
          },
          {
            title: "The Off-Season",
            description: "A project focused on mastery and honing his craft.",
          },
        ],
      },
      {
        name: "Nicki Minaj",
        bio: "Nicki Minaj is a rapper and singer known for her animated flow and versatility in music genres.",
        portfolio: [
          {
            title: "Pink Friday",
            description:
              "Nicki's debut studio album featuring chart-topping singles like 'Super Bass.'",
          },
          {
            title: "The Pinkprint",
            description:
              "An album exploring themes of love, heartbreak, and empowerment.",
          },
          {
            title: "Queen",
            description:
              "A project filled with aggressive rap and reflective moments.",
          },
        ],
      },
    ];
  }
  
  function addRapperCard(rapper) {
    // Clone the rapper template
    const artistTemplate = document
      .getElementById("artist-template")
      .content.cloneNode(true);
    // Populate rapper's information
    artistTemplate.querySelector(".artist-name").innerText = rapper.name;
    artistTemplate.querySelector(".artist-bio").innerText = rapper.bio;
  
    // Get the portfolio list element inside the rapper's card
    const portfolioList = artistTemplate.querySelector(".portfolio-list");
    // Loop through the rapper's portfolio and add portfolio items
    rapper.portfolio.forEach((item) => {
      const portfolioTemplate = document
        .getElementById("portfolio-template")
        .content.cloneNode(true);
      portfolioTemplate.querySelector(".portfolio-title").innerText = item.title;
      portfolioTemplate.querySelector(".portfolio-description").innerText =
        item.description;
  
      // Append portfolio item to the portfolio list
      portfolioList.appendChild(portfolioTemplate);
    });
  
    // Append the rapper card to the artist list on the page
    document.querySelector("#artist-list").appendChild(artistTemplate);
  }
  
  // Function to generate the cards for all rappers
  function generateRapperProfiles() {
    const rappers = getRappers();
    rappers.forEach((rapper) => addRapperCard(rapper));
  }
  
  // Call the function to generate all rapper profiles when the page loads
  generateRapperProfiles();
  