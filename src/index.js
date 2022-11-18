// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import Planet from './js/planet.js';

function handlePlanetForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  // const entry = parseInt(document.querySelector('#entry').value);
  let age = parseInt(document.querySelector("#inputted-age").value);
  
  const planet = new Planet(age);
  const response = 
  `Earth: ${planet.getEarthPlanetYear()}, \n
    Mercury: ${planet.getMercuryPlanetYear()}, 
    Venus: ${planet.getVenusPlanetYear()},
    Mars: ${planet.getMarsPlanetYear()},
    Jupiter: ${planet.getJupiterPlanetYear()}`;

  const pTag = document.createElement("p");
  pTag.append(`Your ages on the following planets are: ${response}.`);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#planet-checker-form").addEventListener("submit", handlePlanetForm);
});