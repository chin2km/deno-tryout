import { Car } from "./Car.ts";

export class ElectricCar extends Car {
    constructor(param: string) {
        super(param);
    }

    public printBrandName() {
        super.printBrandName();
        console.log(this.brand, ": printed in ElectricCar class");
    }
}