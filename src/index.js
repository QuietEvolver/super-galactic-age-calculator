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
  console.log("tabulations + age: ", age, tabulations);
  
  const planet = new Planet(age, this.tabulations);
  console.log("planet: ", planet);

  if(document.getElementById("pollen").checked===true){
    tabulations.push(1);
  } 
  if(document.getElementById("moss").checked===true){
    tabulations.push(1);
  }
  if(document.getElementById("azure").checked===true){
    tabulations.push(1);
  } 

  let anyT = tabulations.length + age; // UPAGE = demo+age
  console.log ( "age+t", anyT);       //
  let lifeExpectancy = 81;             // LifExp 
  let calcLifeExpectancy = lifeExpectancy - anyT; // YOURLifExp = pos
  if ( calcLifeExpectancy<0){ 
    `You have ${Math.abs(calcLifeExpectancy)} years left to live`;
  } else {
    console.log ( "CALCCCCCC calcLifeExpectancy+t", calcLifeExpectancy);  return calcLifeExpectancy;
  }

  document.querySelector('p#response').innerText = 
    `Earth: ${planet.getEarthPlanetYear()}, \n
    Earth life Expectancy:  ${(calcLifeExpectancy)}, \n

    Mercury: ${planet.getMercuryPlanetYear()}, \n
    Mercury life Expectancy: ${planet.getMercuryPlanetYear(calcLifeExpectancy)}, \n

    Venus: ${planet.getVenusPlanetYear()}, \n
    Venus life Expectancy: : ${planet.getVenusPlanetYear(calcLifeExpectancy)}, \n

    Mars: ${planet.getMarsPlanetYear()}, \n
    Mars life Expectancy: : ${planet.getMarsPlanetYear(calcLifeExpectancy)}, \n

    Jupiter: ${planet.getJupiterPlanetYear()},  \n
    Jupiter Life Expectancy: ${planet.getJupiterPlanetYear(calcLifeExpectancy)} \n`;

}

window.addEventListener("load", function() {
  document.querySelector("#planet-checker-form").addEventListener("submit", handlePlanetForm);
});