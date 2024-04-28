import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // Getter and setter for attr: range
  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  // Method
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
