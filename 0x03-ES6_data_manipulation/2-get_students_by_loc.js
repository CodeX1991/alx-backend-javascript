export default function getStudentsByLocation(arrOfStudents, location) {
  return arrOfStudents.filter((eachArr) => eachArr.location === location);
}
