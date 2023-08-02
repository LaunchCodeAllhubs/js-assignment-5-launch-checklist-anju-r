// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>
   
   `
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   
    if(testInput === ""){
        return "Empty"
    } else if(isNaN(Number(testInput))){
        return "Not a Number"
    } else{
        return "Is a Number"
    }
    
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatusCheck = document.getElementById("launchStatusCheck");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    faultyItems.style.visibility = "visible";
  
   if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
    alert("All fields are required!")
   } else if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'|| validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    alert('Please enter valid information!')
   }
   //console.log("Submission");
   pilotStatus.innerHTML = `${pilot} is ready to launch`;
   copilotStatus.innerHTML = `${copilot} is ready to launch`;
   if(Number(fuelLevel)<10000){
       fuelStatus.innerHTML = "Fuel level not enough for launch";
       launchStatus.innerHTML = "Shuttle not ready for launch"
       launchStatus.style.color = "red";
   } 
   if(Number(cargoLevel)>10000){
       cargoStatus.innerHTML = "Cargo mass is too high to launch";
       launchStatus.innerHTML = "Shuttle not ready for launch"
       launchStatus.style.color = "rgb(199, 37, 78)"
   }
   if(Number(fuelLevel) >= 10000 && Number(cargoLevel)<=10000){
    launchStatus.innerHTML =  "Shuttle is ready for launch";
    launchStatus.style.color = "rgb(65, 159, 106)"
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return  response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    
    
        return  planets[Math.floor(Math.random()*planets.length)];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
