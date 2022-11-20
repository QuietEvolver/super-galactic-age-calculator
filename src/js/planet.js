export default class Planet {
  
  constructor(age) { 
    /*
    this.age = age;
    this.tabulations = tabulations;
    this.updattedAgeLE = 0;
    
    */
    this.age = age;
  }

  getEarthPlanetYear() {
    let ageInEarthDays = this.age * 365;
    let planetYearInEarthDays = (365);
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    console.log("Earth age;", this.age);
    return this.age;
  }

  getMercuryPlanetYear(){
    // let planetYear = (365/.24)
    let planetMercuryYearInEarthDays = (87.6);
    let ageInEarthDays = this.age * 365;
    this.age = Math.round(ageInEarthDays/planetMercuryYearInEarthDays);
    console.log("Mercury age;", this.age);
    return this.age;
  }
  
  getVenusPlanetYear(){
    let planetYearInEarthDays = (226.3);
    let ageInEarthDays = this.age * 365;
    this.age = Math.round(ageInEarthDays/planetYearInEarthDays);
    console.log("Venus age", this.age);
    return this.age;
  }

  getMarsPlanetYear(){
    let planetMarsYearInEarthDays = (686.2);
    let ageInEarthDays = this.age * 365;
    console.log("Mars ageInEarthDays: ", ageInEarthDays);
    this.age = Math.round(ageInEarthDays/planetMarsYearInEarthDays);
    console.log("Mars Years age", this.age);
    return this.age;
  }

  getJupiterPlanetYear(){
    let planetJupiterYearInEarthDays = (4328.9);
    let ageInEarthDays = this.age * 365;
    let planetYear = ageInEarthDays/planetJupiterYearInEarthDays;
    console.log("Jupiter planetYear: ", planetYear);
    this.age = Math.round(planetYear);
    console.log("Jupiter age: ", this.age);
    return this.age;
  }

  getLifeExpectancy(){
    const tabulations = []; 
    console.log("tabulations: ", tabulations);
    
    // const planet = new Planet(age, this.tabulations);
    let planet = new Planet(age, this.tabulations);
  
    if(document.getElementById("pollen").checked===true){
      tabulations.push(1);
    } 
    if(document.getElementById("moss").checked===true){
      tabulations.push(1);
    }
    if(document.getElementById("azure").checked===true){
      tabulations.push(1);
    } 
  
    if ( tabulations.length > 0){ 
      
      let anyT = tabulations.length + age; 
      console.log("tabPlusAge: ", anyT);
  
    }  
    let anyT = tabulations.length + age; 
    console.log ( "age+t", anyT);
    let lifeExpectancy = 81;
    let calcLifeExpectancy = lifeExpectancy - anyT;
    console.log ( "calcLifeExpectancy+t", calcLifeExpectancy);
  }

  // getLifeExpectancy(){
  //   getMercuryPlanetYear();
  //   let lifeExpectancyInEarthYears = 70; // - this.age;answer1
  //   this.age -= lifeExpectancyInEarthYears;
  //   console.log("this.age - LE: ", this.age);
  //   let lifeExpectancy = lifeExpectancyInEarthYears - this.age; // if(lifeExpectancyInEarthYears < 20){} // ABSVAL you can expect to live this much longer
  //   // if(lifeExpectancyInEarthYears > 20){} // you have Lived this much longer than expected
  //   console.log("life expectancy: ", lifeExpectancy);
  //   //const lifeExpectancyCalc = beingLikesFlowers? this.age += 2 
  //   //: beingChewsGum? this.age -1
  //   //  : beingSingsOutLoud? this.age +1
  //   //  : lifeExpectancyInEarthYears + 0;
    
  //   let output =  this.age;
  //   //let output =  lifeExpectancy - lifeExpectancyCalc;
  //   console.log("output: ", output);
  //   `Howdy, your life expectancy is ${output}`;
  //   // if(answer==='yes'){
  //   //  let age =  this.age+2;
  //   //  return age;
  //   // // } else {
  //   // //   return this.age + 0;
  //   // }

  // }

  // getChewsGumInfo() {
  //   if(this.age === 'Earth'){
  //     return 1;
  //   } else {
  //     return "Planet out of galactic range."
  //   }
  // }

  // getLifeExpectancy(){
  //   let earthLifeExpectancy = 70;
  //   let lifeExpectancy;
  //   let age = Planet.age;
  //   // Planet.tabluations = this.tabluations;
    
  //   if(this.tabulations.length === 0){
  //     lifeExpectancy = earthLifeExpectancy-age;
  //     // 
  //     return lifeExpectancy;
  //   }
  //   else if(this.size === "pollen"){
  //     age =  age + (this.tabulations.length+1);
  //     return age;
  //   } else if(this.size === "moss"){
  //     age  =  age + (this.tabulations.length+1);
  //     return age;
  //   } else if(this.size === "azure"){
  //     age  =  age + (this.tabulations.length+2);
  //     return age;
  //   }
  // }
}