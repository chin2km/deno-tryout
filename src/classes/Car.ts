import { log, BG, COLORS } from "../utils/logger.ts";

export class Car {
    constructor(public brand) {}

    protected printBrandName() {
          log(`${this.brand} : printed in Car class`, BG.bgGreen, COLORS.white);
    }
}