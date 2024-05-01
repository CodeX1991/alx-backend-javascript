interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'James',
  lastName: 'Holy',
  age: 20,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Idah',
  lastName: 'Holy',
  age: 20,
  location: 'South Africa',
};

const studentsList: Student[] = [student1, student2];

// Render Table
const table = document.createElement('table');

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
