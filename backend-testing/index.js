const apiUrl = "https://www.clashapi.xyz/api/leagues";

// Fetch data from the API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Handle the data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
