import Planet from './../src/js/planet.js';
// "I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup"
describe('Planet', () => {
  let planet;
  
  beforeEach(() => {
    planet = new Planet();
  });

  test('should correctly create a planet object',() => {
    let planet = new Planet(10);
    expect(planet.age).toEqual(10);
  }); 

  test('should return a 10 equivalent to 1 Earth year', () => {
    planet = new Planet(10);
    expect(planet.age).toEqual(10);
  });

  test('should correctly determine if an age has been entered', () => {
    planet = new Planet("Pluto");
    expect(planet.getEarthPlanetYear()).not.toBeNull();
  });

  test('should return 10 equivalent if it is the planet Earth, for 1 Earth year', () => {
    planet = new Planet(10);
    expect(planet.getEarthPlanetYear()).toEqual(10);
  });

  test('should return age for planet Mercury for 10 earth years ', () => { //  876
    planet = new Planet(10);
    expect(planet.getMercuryPlanetYear()).toEqual(42);
  });

  test('should return age for planet Venus for 10 earth years ', () => {
    planet = new Planet(10);
    expect(planet.getVenusPlanetYear()).toEqual(16);
  });

  test('should return age for planet Mars for 10 earth years ', () => {
    planet = new Planet(10);
    expect(planet.getMarsPlanetYear()).toEqual(5);
  });

  test('should return age for planet Jupiter for 10 earth years ', () => {
    planet = new Planet(10);
    expect(planet.getJupiterPlanetYear()).toEqual(43289);
  });
}); 
