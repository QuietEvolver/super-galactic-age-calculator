import Planet from './../src/js/planet.js';
// "I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup"
describe('Planet', () => {
  let planet;
  
  beforeEach(() => {
    planet = new Planet();
  });

  test('should create correctly a planet object',() => {
    planet = new Planet(1);
    expect(planet.entry).toEqual(1);
  }); 

  test('should return a 1 equivalent to 1 Earth year', () => {
    planet = new Planet(1);
    expect(planet.entry).toEqual(1);
  });

  test('should return a 1, equivalent if it is the planet Earth, for 1 Earth year', () => {
    planet = new Planet("Earth");
    expect(planet.getPlanetYear()).not.toBeNull();
  });
}); 
