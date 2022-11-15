export default class Planet {
  
  constructor(age) { //entry
    // this.entry = entry;
    this.age = age;
  }

  getEarthPlanetYear() {
    // let planetYear = (365/365);
    // this.age *= planetYear;

    let ageInEarthDays = this.age * 365;
    let planetYearInEarthDays = (365);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    return this.age;
  }

  getMercuryPlanetYear(){
    // let planetYear = (365/.24)
    let planetMercuryYearInEarthDays = (87.6);;
    let ageInEarthDays = this.age * 365;
    console.log("ageInEarthDays: ", ageInEarthDays);
    this.age = Math.round(ageInEarthDays/planetMercuryYearInEarthDays);
    console.log("this.age; Mercury ", this.age);
    return this.age;
  }
  
  getVenusPlanetYear(){
    let planetYearInEarthDays = (226.3);
    let ageInEarthDays = this.age * 365;
    console.log("ageInEarthDays: ", ageInEarthDays);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    console.log("this.age; Venus ", this.age);
    return this.age;
  }

  getMarsPlanetYear(){
    let planetMarsYearInEarthDays = (686.2);
    let ageInEarthDays = this.age * 365;
    console.log("ageInEarthDays: ", ageInEarthDays);
    this.age = Math.round(ageInEarthDays/planetMarsYearInEarthDays);
    console.log("this.age; Mars ", this.age);
    return this.age;
  }

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
