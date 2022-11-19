// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import Planet from './js/planet.js';

function handlePlanetForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  // const entry = parseInt(document.querySelector('#entry').value);
  let age = parseInt(document.querySelector("#inputted-age").value);
  const tabulations = [];
  console.log("tabulations: ", tabulations);
  
  
  const planet = new Planet(age, this.tabulations);

  if(document.getElementById("pollen").checked===true){
    tabulations.push("pollen");
  } 
  if(document.getElementById("moss").checked===true){
    tabulations.push("moss");
  }
  if(document.getElementById("azure").checked===true){
    tabulations.push("azure");
  } 
  // const response = 
  // `Earth: ${planet.getEarthPlanetYear()}, \n
  //   Mercury: ${planet.getMercuryPlanetYear()}, \n
  //   Venus: ${planet.getVenusPlanetYear()}, \n
  //   Mars: ${planet.getMarsPlanetYear()}, \n
  //   Jupiter: ${planet.getJupiterPlanetYear()} \n
  //   LifeExpectancy FUNCTION: ${planet.getLifeExpectancy()}`;

  // const pTag = document.createElement("p");
  // pTag.append(`Your ages on the following planets are: ${response}.`);
  // document.querySelector('#response').append(pTag);
  document.querySelector('p#response').innerText = 
  `Earth: ${planet.getEarthPlanetYear()}, \n
    Mercury: ${planet.getMercuryPlanetYear()}, \n
    Venus: ${planet.getVenusPlanetYear()}, \n
    Mars: ${planet.getMarsPlanetYear()}, \n
    Jupiter: ${planet.getJupiterPlanetYear()} \n`;
    // LifeExpectancy FUNCTION: ${planet.getLifeExpectancy()}

}

window.addEventListener("load", function() {
  document.querySelector("#planet-checker-form").addEventListener("submit", handlePlanetForm);
});