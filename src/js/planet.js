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
    // this.tabulations = [];
    this.updattedAgeLE = 0;
    console.log("Earth age;", this.age);
    return this.age;
  }

  getLifeExpectancy(){
    let avgLifeExpectancy = 81; 
    let age = this.age; 
    // // this.updattedAgeLE = 0;
    this.updattedAgeLE = avgLifeExpectancy - age;
    console.log("UpdattedAgeLE Earth age;", this.updattedAgeLE);
 
    // if( this.tabulations[0] === "checked"){ // aka. tabbed demo question1
    //   age = this.tabulations.length + age;
    //   return age;
    // }
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
  
  // gettabbedDemographics(){
  //   this.tabulations = ["checked"];
  //   console.log("tab[]length", (this.tabulations.length+age));
  // }

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

  getVenusPlanetLifeExpectancy(){
    // let planetYear = (365/.62)
    let lifeExpectancy = (this.earthLifeExpectancy - this.age)*365;
    let planetVenusYearInEarthDays = (226.3);
    this.updattedAgeLE = Math.round(lifeExpectancy/planetVenusYearInEarthDays);
    console.log("getVenusPlanetLifeExpectancy() Updatted LE: earthLE - age ", this.updattedAgeLE);   
    return this.updattedAgeLE;
  }
  
  getVenusPlanetYear(){
    // let planetYear = (365/.62)
    let planetVenusYearInEarthDays = (226.3);
    let ageInEarthDays = this.age * 365;
    // this.updattedAgeLE = Math.round(((this.earthLifeExpectancy - this.age)*365)/planetVenusYearInEarthDays);
    // console.log("Get venusPY() Updatted LE: earthLE - age ", this.updattedAgeLE);
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
    console.log("Mars Years Math.round age", this.age);
    return this.age;
  }

  getJupiterPlanetYear(){
    // let planetYear = (365/11.86)
    let planetJupiterYearInEarthDays = (4328.9);
    let ageInEarthDays = this.age * 365;
    this.age = Math.round(ageInEarthDays/planetJupiterYearInEarthDays);
    this.tabulations = [];
    // this.updattedAgeLE = 0;
    console.log("Jupiter Math.Round age: ", this.age);
    return this.age;
  }

}