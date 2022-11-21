import Planet from './../src/js/planet.js';
 
describe('Planet', () => {
  // let planet;
  
  // beforeEach(() => {
  //   planet = new Planet();
  // });

  test('should correctly create a planet object',() => {
    let planet = new Planet(10, 0);
    expect(planet.age).toEqual(10, 0);
  }); 

  // test('should return a 10 equivalent to 1 Earth year', () => {
  //   let planet = new Planet(10);
  //   expect(planet.age).toEqual(10);
  // });

  // test('should correctly determine if an age has been entered', () => {
  //   let planet = new Planet("Pluto");
  //   expect(planet.getEarthPlanetYear()).not.toBeNull();
  // });

  // test('should return 10 equivalent if it is the planet Earth, for 1 Earth year', () => {
  //   let planet = new Planet(10);
  //   expect(planet.getEarthPlanetYear()).toEqual(10);
  // });

  // test('should return age for planet Mercury for 10 earth years ', () => { //  876
  //   let planet = new Planet(10);
  //   expect(planet.getMercuryPlanetYear()).toEqual(42);
  // });

  // test('should return age for planet Venus for 10 earth years ', () => {
  //   let planet = new Planet(10);
  //   expect(planet.getVenusPlanetYear()).toEqual(16);
  // });

  // test('should return age for planet Mars for 10 earth years ', () => {
  //   let planet = new Planet(10);
  //   expect(planet.getMarsPlanetYear()).toEqual(5);
  // });

  // test('should return age for planet Jupiter for 10 earth years ', () => {
  //   let planet = new Planet(10);
  //   expect(planet.getJupiterPlanetYear()).toEqual(1);
  // });

  // // simple: have the user input the average life expectancy for their demographic

  // test('should return a value of +1 a person based on their demographic', () => {
  //   planet = new Planet(10);
  //   expect(planet.getLifeExpectancy()).toEqual(11);
  // });

//   // const absoluteValue = require('./index');
//   // test('absolute Value function exists', () => {
//   //   expect(typeof absoluteValue).toEqual('function');
//   // });

// test('should return a absolute value of a person age if over life expectancy ', () => {
//     planet = new Planet(70);
//     expect(planet.getLifeExpectancy()).toEqual(-20);
//   });  
  
//   test('should return a value of a person age for remaining life expectancy ', () => {
//     planet = new Planet(70);
//     expect(planet.getLifeExpectancy()).toEqual(20);
//   });
});

