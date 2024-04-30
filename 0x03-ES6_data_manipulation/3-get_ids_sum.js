export default function getStudentIdsSum(arrOfStudents) {
  return arrOfStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
