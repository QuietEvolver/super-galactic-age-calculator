export default class Planet {
  
  constructor(entry) {
    this.entry = entry;
  }

  getPlanetYear(entry) {
    if(entry === 'Earth'){
      return 1;
    }
  }
}