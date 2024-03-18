
const Automobile = {
    drive() {
      return "Vroom Vroom!";
    },
    stop() {
      return "Stopping the automobile.";
    }
  };
  
  const FourWheeler = Object.create(Automobile);
  
  FourWheeler.type = "Four Wheeler";
  FourWheeler.fuelType = "Petrol";
  
  
  function AutomobileConstructor() {
    this.drive = function() {
      return "Vroom Vroom!";
    };
    this.stop = function() {
      return "Stopping the automobile.";
    };
  }
  
  function FourWheelerConstructor() {
    AutomobileConstructor.call(this);
    this.type = "Four Wheeler";
    this.fuelType = "Petrol";
  }
  
  FourWheelerConstructor.prototype = Object.create(AutomobileConstructor.prototype);
  
  
  const car1 = Object.create(FourWheeler);
  console.log("Using Object.create():");
  console.log("Car 1 - Type:", car1.type);
  console.log("Car 1 - Fuel Type:", car1.fuelType);
  console.log(car1.drive());
  console.log(car1.stop());
  
  const car2 = new FourWheelerConstructor();
  console.log("\nUsing Constructor Functions:");
  console.log("Car 2 - Type:", car2.type);
  console.log("Car 2 - Fuel Type:", car2.fuelType);
  console.log(car2.drive());
  console.log(car2.stop());
  