$(".dogForm").submit(function(event) {
  event.preventDefault();
  let dogBreed = document.getElementById("breed").value;
  getDogImage(dogBreed);
});

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
        checkStatus(responseJson)) 
        // showDogs(responseJson))
    .catch(error => alert('You broke it!'));
  }

function checkStatus(responseJson) {
    let correct = responseJson.status;
    // If we received an error from our fetch, inform the user.
    if (correct === 'error'){
      alert("The breed you entered was not found.");
    }
    // If we received an image, call the function to display it.
    else {
      if (correct === 'success') {
        showDogs(responseJson);
      }
    }

}
function showDogs(responseJson) {
    let myDog = responseJson.message;
    // Clear previous image.
    document.getElementById("insertDogs").innerHTML = "";
    // Add new image html.
    $("p.insertDogs").append(`<img src="${myDog}" alt="dog">`);
    // Make the new image visible.
    $('p.hidden').toggleClass('hidden');
  }