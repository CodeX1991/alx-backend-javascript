export default function createIteratorObject(report) {
  function* iterateEmployees() {
    // Iterate over each department in the report
    for (const department in report.allEmployees) {
      if (department) {
        // Iterate over each employee in the department
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
