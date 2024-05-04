interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Extends to interface Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Test Case
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Create the function printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

// Test Case printTeacher("John", "Doe") -> J. Doe
console.log(printTeacher("John", "Doe"));

// Task4
interface IsStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IsStudentClass {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

// Test case
const student = new StudentClass("Murphy", "John");
console.log(student.workOnHomework());
console.log(student.displayName());

