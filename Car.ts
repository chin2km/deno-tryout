export class Car {
    constructor(public brand) {}

    protected printBrandName() {
        console.log(this.brand, ": printed in Car class");
    }
}