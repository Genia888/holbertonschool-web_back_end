export default function updateStudentGradeByCity(students, city, grades) {
  if (!Array.isArray(students) || !Array.isArray(grades)) {
    return [];
  }

  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity.map((student) => {
    const grade = grades.find((g) => g.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : student.grade,
    };
  });
}
