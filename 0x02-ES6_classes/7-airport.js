export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter and setter for attr: name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getter and setter for attr: code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
