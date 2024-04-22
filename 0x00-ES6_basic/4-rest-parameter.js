export default function returnHowManyArguments(...theArgs) {
  let count = 0;
  let idx = 0;

  while (theArgs[idx]) {
    count += 1;
    idx += 1;
  }

  return count;
}
