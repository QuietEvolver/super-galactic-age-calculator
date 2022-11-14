export default class Planet {
  
  constructor(entry) {
    this.entry = entry;
  }

  getPlanetYear() {
    if(this.entry === 'Earth'){
      return 1;
    } else {
      return "Planet out of galactic range."
    }
  }
}