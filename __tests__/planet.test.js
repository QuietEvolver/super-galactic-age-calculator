import Planet from './../src/js/planet.js';
// "I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup"
describe('Planet', () => {
  // let planet;
  
  // beforeEach(() => {
  //   planet = new Planet();
  // });

  test('should correctly create a planet object',() => {
    let planet = new Planet(10);
    expect(planet.age).toEqual(10);
  }); 

  test('should return a 10 equivalent to 1 Earth year', () => {
    let planet = new Planet(10);
    expect(planet.age).toEqual(10);
  });

  test('should correctly determine if an age has been entered', () => {
    let planet = new Planet("Pluto", []);
    expect(planet.getEarthPlanetYear()).not.toBeNull();
  });

  test('should return 10 equivalent if it is the planet Earth, for 1 Earth year', () => {
    let planet = new Planet(10, []);
    expect(planet.getEarthPlanetYear()).toEqual(10);
  });

  test('should return age for planet Mercury for 10 earth years ', () => { //  876
    let planet = new Planet(10, []);
    expect(planet.getMercuryPlanetYear()).toEqual(42);
  });

  test('should return age for planet Venus for 10 earth years ', () => {
    let planet = new Planet(10, []);
    expect(planet.getVenusPlanetYear()).toEqual(16);
  });

  test('should return age for planet Mars for 10 earth years ', () => {
    let planet = new Planet(10, []);
    expect(planet.getMarsPlanetYear()).toEqual(5);
  });

  test('should return age for planet Jupiter for 10 earth years ', () => {
    let planet = new Planet(10, []);
    expect(planet.getJupiterPlanetYear()).toEqual(1);
  });

  // simple: have the user input the average life expectancy for their demographic

  test('should return return life expectancy for planet earth for 10 earth years ', () => {
    let planet = new Planet(10, []);
    expect(planet.getLifeExpectancy()).toEqual(71);
  });
  
  test('should return return life expectancy for Mercury planet for 10 earth years ', () => {
    let planet = new Planet(10, []);
    let updattedAgeLE = 71;
    expect( planet.getMercuryPlanetYear(planet.getLifeExpectancy(planet.getMercuryPlanetYear(updattedAgeLE)))).toEqual(175);
  });

  test('should return return life expectancy for Venus planet for 10 earth years ', () => {
    let planet = new Planet(10);
    // let updattedAgeLE = 71;
    expect(planet.getVenusPlanetLifeExpectancy(planet.updattedAgeLE)).toEqual(115);
  });

  test('should return return life expectancy for Mars planet for 10 earth years ', () => {
    let planet = new Planet(10, []);
    let updattedAgeLE = 71;
    expect( planet.getMarsPlanetYear(planet.getLifeExpectancy(planet.getMarsPlanetYear(updattedAgeLE)))).toEqual(38);
  });

  // test('should return return life expectancy for Jupiter planet for 10 earth years ', () => {
  //   let planet = new Planet(10);
  //   let updattedAgeLE = 71;
  //   expect( planet.getJupiterPlanetYear(planet.getLifeExpectancy(planet.getJupiterPlanetYear(updattedAgeLE)))).toEqual(6);
  // });

  // test('should return a value of +1 a person based on their demographic tabulations', () => {
  //   let planet = new Planet(10, []);
  //   expect(planet.getLifeExpectancy()).toEqual(70);
  // });

//   // const absoluteValue = require('./index');
//   // test('absolute Value function exists', () => {
//   //   expect(typeof absoluteValue).toEqual('function');
//   // });

// test('should return a absolute value of a person age if over life expectancy ', () => {
//     planet = new Planet(70);
//     expect(planet.getLifeExpectancy()).toEqual(-20);
//   });  
  
});

