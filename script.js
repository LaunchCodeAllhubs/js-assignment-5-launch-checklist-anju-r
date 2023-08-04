// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    console.log("111");
   // alert("window load alert");
   let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
    form.addEventListener("submit", function(event){
        event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
  //  let list = "nothingYet";
    console.log("hello");
    //alert("form alert");
    formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    })
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       //console.log('hhh',pickedPlanet);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image );
   })
   
});