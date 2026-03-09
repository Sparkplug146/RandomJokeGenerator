const button = document.getElementById("jokeBtn");
const category = document.getElementById("jokeCategory");
const setup = document.getElementById("jokeSetup");
const delivery = document.getElementById("jokeDelivery");

button.addEventListener("click", function(){
    console.log("Generating Activity...")

    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
})