interface Chassis {
  create(): void;
}

interface Engine {
  create(): void;
}

abstract class Company {
  public abstract createChassis(): Chassis;
  public abstract createEngine(): Engine;
}

class CarManufacturer extends Company {

  createChassis(): Chassis {
      return new CarChassis;
  }

  createEngine(): Engine {
      return new CarEngine;
  }
}

class TruckManufacturer extends Company {

  createChassis(): Chassis {
    return new TruckChassis;
  }

  createEngine(): Engine {
      return new TruckEngine;
  }
}

class CarChassis implements Chassis {
  create(): void {
    console.log('creating car chassis');
  }
}

class CarEngine implements Engine {
  create(): void {
    console.log('creating car engine');
  }
}

class TruckChassis implements Chassis {
  create(): void {
    console.log('creating truck chassis');
  }
}

class TruckEngine implements Engine {
  create(): void {
    console.log('creating truck engine');
  }
}

const carManufacturer = new CarManufacturer;
const carChassis = carManufacturer.createChassis();
carChassis.create();