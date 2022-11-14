// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import Planet from './js/planet.js';

function handlePlanetForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const entry = parseInt(document.querySelector('#entry').value);

  const planet = new Planet(entry);
  const response = planet.checkType();
  const pTag = document.createElement("p");
  pTag.append(`Your planet life is: ${response}.`);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#planet-checker-form").addEventListener("submit", handlePlanetForm);
});