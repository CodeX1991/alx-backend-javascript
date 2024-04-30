export default function updateStudentGradeByCity(arrOfStudents, city, newGradeArr) {
  return arrOfStudents
    .filter((eachArr) => eachArr.location === city)
    .map((eachArr) => {
      const gradeObj = newGradeArr.find((grade) => grade.studentId === eachArr.id);
      if (gradeObj) {
        return { ...eachArr, grade: gradeObj.grade };
      }
      return { ...eachArr, grade: 'N/A' };
    });
}
