const jokeContainer = document.getElementById("jokeContainer");
const button = document.getElementById("jokeBtn");
const category = document.getElementById("jokeCategory");
const setup = document.getElementById("jokeSetup");
const delivery = document.getElementById("jokeDelivery");
const saveBtn = document.getElementById("saveBtn");
const savedJokesList = document.getElementById("savedJokes");




//Click event, so when the button is clicked, the function inside the code runs
button.addEventListener("click", function(){

  //Prevents button spamming
  button.disabled = true;

  //Fade animation for joke
  jokeContainer.classList.remove("show");
  jokeContainer.classList.add("fade");

  //Shows loading message
  setup.textContent = "Loading joke..."
  delivery.textContent = "";
  category.textContent = "";

    //fetch() sends a request to an API to get data from the internet
    //This API comes from :contentReference[oaicite:0]{index=0} and returns a random joke
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")

    //.then() runs when the API sends a response back
  .then(function (response) {

    //The API sends data in JSON format
    //response.json() converts that JSON into a usable JS object
    return response.json();
  })

  //This .then() runs after the JSON has been converted
  //The "data" parameter now contains the joke information from the API
  .then(function (data) {

    //Update the HTML element with the joke category
    //textContent replaces the text inside the element
    category.textContent = "Category: " + data.category;

    //Check what type of joke the API returned
    //Some jokes are "single" and others are "twopart"
    if(data.type === "single"){

      //If the joke is a single line, display it in the setup section
      setup.textContent = "Joke: " + data.joke;

      //Clear the delivery line so "undefined" does not appear
      delivery.textContent = "";
    } else {

      //If the joke has two parts, show both the setup and delivery
      setup.textContent = "Setup: " + data.setup;
      delivery.textContent = "Delivery: " + data.delivery;
    }

      jokeContainer.classList.add("show");
      
      button.disabled = false;
    
  });
})