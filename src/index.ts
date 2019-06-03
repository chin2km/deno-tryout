import { ElectricCar } from "./classes/ElectricCar.ts";
import { AutomobileMixin } from "./mixins/Automobile.ts";

const instance = new ElectricCar("Tesla");
instance.printBrandName();

Object.assign(ElectricCar.prototype, AutomobileMixin)
instance["honk"]("hey");

AutomobileMixin.honk("hola");
