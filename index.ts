import { ElectricCar } from "./ElectricCar.ts";
import { AutomobileMixin } from "./Automobile.ts";

const instance = new ElectricCar("Tesla");
instance.printBrandName();

Object.assign(ElectricCar.prototype, AutomobileMixin)
instance["honk"]("hey");

AutomobileMixin.honk("hola");
