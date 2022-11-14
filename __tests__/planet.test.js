import Planet from './../src/js/planet.js';
// "I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup"
describe('Planets', () => {
  let planet;
  
  beforeEach(() => {
    planet = new Planet();
  });

  test('should create correctly a planet object',() => {
    expect(planet.entry).toEqual("1");
  }); 

  test('should return a 1 equivalent to 1 Earth year', () => {
    expect("Earth").toEqual("1");
  });

}); 
