export default class Planet {
  
  constructor(age) { 
    /*
    this.age = age;
    
    */
    this.age = age;
    this.tabulations = [];
    this.updattedAgeLE = 0;
    this.earthLifeExpectancy = 81;
  }

  getEarthPlanetYear() {
    let ageInEarthDays = this.age * 365;
    let planetYearInEarthDays = (365);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    this.tabulations = [];
    this.updattedAgeLE = 0;
    console.log("Earth age;", this.age);
    return this.age;
  }

  getMercuryPlanetYear(){
    // let planetYear = (365/.24)
    let planetMercuryYearInEarthDays = (87.6);
    let ageInEarthDays = this.age * 365;
    this.age = Math.round(ageInEarthDays/planetMercuryYearInEarthDays);
    this.tabulations = [];
    // this.updattedAgeLE = 0;
    console.log("Mercury age;", this.age);
    return this.age;
  }
  
  getVenusPlanetYear(){
    // let planetYear = (365/.62)
    let planetVenusYearInEarthDays = (226.3);
    let ageInEarthDays = this.age * 365;
    this.updattedAgeLE = Math.round(((this.earthLifeExpectancy - this.age)*365)/planetVenusYearInEarthDays);
    console.log("Updatted LE: earthLE - age ", this.updattedAgeLE);
    this.age = Math.round(ageInEarthDays/planetVenusYearInEarthDays);
    this.tabulations = [];
    console.log("Venus age", this.age);
    return this.age;
  }

  getMarsPlanetYear(){
    // let planetYear = (365/1.88)
    let planetMarsYearInEarthDays = (686.2);
    let ageInEarthDays = this.age * 365;
    console.log("Mars years ageInEarthDays: ", ageInEarthDays);
    this.age = Math.round(ageInEarthDays/planetMarsYearInEarthDays);
    this.tabulations = [];
    this.updattedAgeLE = 0;
    console.log("Mars Years Math.round age", this.age);
    return this.age;
  }

  getJupiterPlanetYear(){
    // let planetYear = (365/11.86)
    let planetJupiterYearInEarthDays = (4328.9);
    let ageInEarthDays = this.age * 365;
    let planetYear = ageInEarthDays/planetJupiterYearInEarthDays;
    console.log("Jupiter planetYear: ", planetYear);
    this.age = Math.round(planetYear);
    this.tabulations = [];
    this.updattedAgeLE = 0;
    console.log("Jupiter Math.Round age: ", this.age);
    return this.age;
  }

  getLifeExpectancy(){
    let avgLifeExpectancy = 81; 
    let age = this.age; 
    // this.updattedAgeLE = 0;
    this.tabulations = [];
    this.updattedAgeLE = avgLifeExpectancy - age;
    console.log("UpdattedAgeLE Earth age;", this.updattedAgeLE);

    // // UPAGE = demo+age
    // let tabulations = this.tabulations;
    // tabulations= ["pollen"];
    // if((tabulations[0]===("pollen"))===true){
    //   // this.tabulations.push(1);
      
    //   this.updattedAgeLE = this.tabulations.length + age;
    //   return  

    // } 
    // this.updattedAgeLE = this.tabulations.length + age; 

    console.log ( "age+t", this.updattedAgeLE); // updattedAgeLE); 

    return this.updattedAgeLE;
  }
}