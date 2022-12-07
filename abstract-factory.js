"use strict";
class Company {
}
class CarManufacturer extends Company {
    createChassis() {
        return new CarChassis;
    }
    createEngine() {
        return new CarEngine;
    }
}
class TruckManufacturer extends Company {
    createChassis() {
        return new TruckChassis;
    }
    createEngine() {
        return new TruckEngine;
    }
}
class CarChassis {
    create() {
        console.log('creating car chassis');
    }
}
class CarEngine {
    create() {
        console.log('creating car engine');
    }
}
class TruckChassis {
    create() {
        console.log('creating truck chassis');
    }
}
class TruckEngine {
    create() {
        console.log('creating truck engine');
    }
}
const carManufacturer = new CarManufacturer;
const carChassis = carManufacturer.createChassis();
carChassis.create();
