export default class Planet {
  
  constructor(entry) {
    this.entry = entry;
  }

  getPlanetYear() {
    let planetYear;
    if(this.entry === 'Earth'){
      planetYear = ((1/1)*365);
      return 1;
    } else {
      return "Planet out of galactic range."
    }
  }
}