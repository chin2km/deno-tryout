import { Car } from "./Car.ts"
import { log, BG, COLORS } from "../utils/logger.ts"

export class ElectricCar extends Car {
    constructor(param: string) {
        super(param)
    }

    public printBrandName() {
        super.printBrandName()
        log(
            `${this.brand} : printed in ElectricCar class`,
            BG.bgCyan,
            COLORS.black
        )
    }
}
