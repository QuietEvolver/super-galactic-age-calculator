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

  // if(document.getElementById("pollen").checked===true){
  //   tabulations.push(1);
  // } 
  // if(document.getElementById("moss").checked===true){
  //   tabulations.push(1);
  // }
  // if(document.getElementById("azure").checked===true){
  //   tabulations.push(1);
  // } 

  // if ( tabulations.length > 0){ 
    
  //   let anyT = tabulations.length + age; 
  //   console.log("tabPlusAge: ", anyT);

  // }

  // let anyT = tabulations.length + age; 
  // console.log ( "age+t", anyT);
  // let lifeExpectancy = 81;
  // let calcLifeExpectancy = lifeExpectancy - anyT;
  // console.log ( "calcLifeExpectancy+t", calcLifeExpectancy);


  // document.querySelector('p#response').innerText = 
  //   `Earth: ${planet.getEarthPlanetYear()}, \n
  //   Earth life Expectancy:  ${(calcLifeExpectancy)}, \n

  //   Mercury: ${planet.getMercuryPlanetYear()}, \n
  //   Mercury life Expectancy: ${planet.getMercuryPlanetYear(calcLifeExpectancy)}, \n

  //   Venus: ${planet.getVenusPlanetYear()}, \n
  //   Venus life Expectancy: : ${planet.getVenusPlanetYear(calcLifeExpectancy)}, \n

  //   Mars: ${planet.getMarsPlanetYear()}, \n
  //   Mars life Expectancy: : ${planet.getMarsPlanetYear(calcLifeExpectancy)}, \n

  //   Jupiter: ${planet.getJupiterPlanetYear()},  \n
  //   Jupiter Life Expectancy: ${planet.getJupiterPlanetYear(calcLifeExpectancy)} \n`;

  //   // LifeExpectancy FUNCTION: ${planet.getLifeExpectancy()}

}

window.addEventListener("load", function() {
  document.querySelector("#planet-checker-form").addEventListener("submit", handlePlanetForm);
});