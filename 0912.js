// 1-ex
const school = {
  name: "172-school",
  phoneNumber: "+7 777 888 0506",
  students: [
    {
      studentName: "Zhanerke",
      top: "voleyball",
      progress: 100,
      lessons: 5,
    },
    {
      studentName: "Aknur",
      top: "swimming",
      progress: 100,
      lessons: 4,
    },
    {
      studentName: "Uldana",
      top: "painting",
      progress: 90,
      lessons: 4,
    },
    {
      studentName: "Zhibek",
      top: "dance",
      progress: 50,
      lessons: 7,
    },
    {
      studentName: "Sabina",
      top: "football",
      progress: 25,
      lessons: 3,
    },
  ],
};

console.log(school);

// // 2-ex

let schoolName = "172-school";

function changeSchoolName() {
  schoolName = prompt("Жаңа оқу орталығының атауын енгізіңіз:");
}

console.log();

// SchoolName = prompt("Жаңа оқу орталығының атын енгіз:");

// // 3-ex
function changePhoneNumber() {
  const newNumber = prompt("Жаңа телефон нөмірін енгізіңіз:");
  if (newNumber) {
    phoneNumber = newNumber;
  }
}
console.log();

// // 4-ex
function listStudentNames() {
  alert(students.map((student) => student.name).join(", "));
}
console.log();


