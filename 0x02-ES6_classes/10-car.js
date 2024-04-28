export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter and setter for attr: brand
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  // Getter and setter for attr: motor
  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  // Getter and setter for attr: color
  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  // Methods
  cloneCar() {
    return this;
  }
}
