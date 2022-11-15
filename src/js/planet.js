export default class Planet {
  
  constructor(age) { //entry
    // this.entry = entry;
    this.age = age;
  }

  getEarthPlanetYear() {
    // let planetYear = (365/365);
    // this.age *= planetYear;

    let ageInEarthDays = this.age * 365;
    console.log("ageInEarthDays: ", ageInEarthDays);    
    let planetYearInEarthDays = (365);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    return this.age;
  }

  getMercuryPlanetYear(){
    // let planetYear = (365/.24);
    let ageInEarthDays = this.age * 365;
    console.log("ageInEarthDays: ", ageInEarthDays);
    let planetYearInEarthDays = (87.6);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    console.log("this.age; Mercury ", this.age);
    return this.age;
  }
  
  // getVenusPlanetYear(){
  //   let planetYear = (226.3);
  //   this.age *= planetYear;
  //   return this.age;
  // }

  // getMarsPlanetYear(){
  //   let planetYear = (686.2);
  //   this.age *= planetYear;
  //   return this.age;
  // }

  // getJupiterPlanetYear(){
  //   let ageInEarthDays = this.age * 365;
  //   let planetYearInEarthDays = (4328.9);
  //   let planetYear = ageInEarthDays/planetYearInEarthDays;
  //   console.log("planetYear: ", planetYear);
  //   this.age *= planetYear;
  //   console.log("this.age: ", this.age);
  //   return this.age;
  // }
}
// getPlanetYear() {
//   if(this.entry === 'Earth'){
//     return 1;
//   } else {
//     return "Planet out of galactic range."
//   }
// }
