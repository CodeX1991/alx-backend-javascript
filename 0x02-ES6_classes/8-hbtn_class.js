export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter and setter for attr: size
  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  // Getter and setter for attr: location
  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size;
    }
    if (value === 'string') {
      return this._location;
    }
    return this;
  }
}
