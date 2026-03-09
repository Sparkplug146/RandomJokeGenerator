const button = document.getElementById("activityBtn");
const activity = document.getElementById("activityName");
const type = document.getElementById("activityType");
const participants = document.getElementById("activityParticipants");

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