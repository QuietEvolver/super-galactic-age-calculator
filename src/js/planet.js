export default class Planet {
  
  constructor(age) { //entry
    // this.entry = entry;
    this.age = age;
  }

  getPlanetYear() {

    // let planetYear;
    // // let planetMercury = 'Mercury';
    //  this.age = 10;
    // for(let i = 0; i = this.age.length; i++ ){
    // let planetEarth = 'Earth';
    // if( planetEarth === 'Earth'){
      let planetYear = (365/365);
      this.age *= planetYear;
      return this.age;
    // } else 
    // if( planetMercury === 'Mercury'){
    //   let planetYear = (87.6);
    //   console.log(planetYear);
    //   this.age *= planetYear;
    //   console.log("this.age", this.age);
    //   return this.age;
    // }else {
    //   return "Planet age out of galactic range.";
   // }}
  }

  getMercuryPlanetYear(){
    // let planetYear = (365/.24);
    let planetYear = (87.6);
    this.age *= planetYear;
    return this.age;
  }

  getVenusPlanetYear(){
    let planetYear = (226.3);
    this.age *= planetYear;
    return this.age;
  }

  getMarsPlanetYear(){
    let planetYear = (686.2);
    console.log("planetYear: ", planetYear);
    this.age *= planetYear;
    console.log("this.age: ", this.age);
    return this.age;
  }
}
// getPlanetYear() {
//   if(this.entry === 'Earth'){
//     return 1;
//   } else {
//     return "Planet out of galactic range."
//   }
// }
