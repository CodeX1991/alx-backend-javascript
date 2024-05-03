export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let filteredValues = [...set].filter((value) => value.startsWith(startString));

  filteredValues = filteredValues.map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
