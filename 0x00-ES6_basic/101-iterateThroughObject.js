export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const employee of reportWithIterator) {
    employeeNames += `${employee} | `;
  }

  employeeNames = employeeNames.slice(0, -3);

  return employeeNames;
}
