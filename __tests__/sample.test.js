import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;
  
  beforeEach(() => {
    haiku = new Haiku("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  });

  test('should create correctly a haiku object',() => {
    expect(haiku.entry).toEqual("I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup");
  }); 
}); 
