export default class Planet {
  
  constructor(age) { //entry
    // this.entry = entry;
    this.age = age;
  }

  getPlanetYear() {
    // let planetYear;
    let planet = 'Earth';
    let age = 10;
    if( planet === 'Earth'){
      // let planetYear = ((1/1)*365);
      // let age = this.age * planetYear;
      return age;
    } else {
      return "Planet out of galactic range."
    }
  }
}