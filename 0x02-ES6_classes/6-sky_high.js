import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getter and setter for attr: floors
  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = value;
  }

  // Method to override the parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
