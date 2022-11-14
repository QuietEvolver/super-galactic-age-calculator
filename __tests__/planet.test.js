import Planet from './../src/js/planet.js';
// "I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup"
describe('Planet', () => {
  let planet;
  
  beforeEach(() => {
    planet = new Planet();
  });

  test('should correctly create a planet object',() => {
    let planet = new Planet(10);
    // planet.age = 10;
    expect(planet.age).toEqual(10);
  }); 

  // test('should return a 10 equivalent to 1 Earth year', () => {
  //   planet = new Planet(10);
  //   expect(planet.entry).toEqual(10);
  // });

  // test('should correctly determine if a planet has been entered', () => {
  //   planet = new Planet(10);
  //   expect(planet.getPlanetYear()).not.toBeNull();
  // });

  // test('should return 10 equivalent if it is the planet Earth, for 1 Earth year', () => {
  //   planet = new Planet(10);
  //   expect(planet.getPlanetYear()).toEqual(10);
  // });

  // test('should return a 10, given Earth, if calculation is equivalent for 1 Earth year', () => {
  //   planet = new Planet("Earth", 10);
  //   expect(planet.getPlanetYear()).toEqual(10);
  // });

}); 
