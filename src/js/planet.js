export default class Planet {
  
  constructor(age) { //entry
    // this.entry = entry;
    this.age = age;
  }

  getPlanetYear() {
    // let planetYear;
    let planetEarth = 'Earth';
    // this.age = 10;
    if( planetEarth === 'Earth'){
      let planetYear = (365/365);
      this.age *= planetYear;
      return this.age;
    // } else {
    //   return "Planet age out of galactic range.";
    }
  }
}
  
// getPlanetYear() {
//   if(this.entry === 'Earth'){
//     return 1;
//   } else {
//     return "Planet out of galactic range."
//   }
// }
