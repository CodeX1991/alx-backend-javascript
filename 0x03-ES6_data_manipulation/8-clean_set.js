export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof set) && typeof startString !== 'string'
  ) {
    return '';
  }
  const subString = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.slice(startString.length);

      if (subStr && subStr !== value) {
        subString.push(subStr);
      }
    }
  }

  return subString.join('-');
}
