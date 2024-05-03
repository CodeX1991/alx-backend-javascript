export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof set) && typeof startString !== 'string'
  ) {
    return '';
  }
  let filteredValues = [...set].filter((value) => value.startsWith(startString));

  filteredValues = filteredValues.map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
