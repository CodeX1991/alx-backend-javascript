export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and setter for attr: code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter and setter for attr: name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
