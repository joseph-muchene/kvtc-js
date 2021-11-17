function Student(id, fname, sname, course, admission, age, kcseYear) {
  this.id = id;
  this.fname = fname;
  this.sname = sname;
  this.course = course;
  this.admission = admission;
  this.age = age;
  this.kcseYear = kcseYear;

  this.updateId = (id) => {
    this.id = id;
  };
  this.updateFname = (nme) => {
    this.fname = nme;
  };
  this.updatesname = (secondName) => {
    this.sname = secondName;
  };
  this.updatecourse = (crse) => {
    this.course = crse;
  };
  this.updateadmission = (adm) => {
    this.admission = adm;
  };
  this.updateage = (age) => {
    this.age = age;
  };
  this.updatekcseYear = (year) => {
    this.kcseYear = year;
  };
  this.getFullName = () => {
    return this.fname + " " + this.sname;
  };
}

const newStudent = new Student(
  1,
  "joseph",
  "ngugi",
  "programming",
  228,
  29,
  "2015"
);

document.write(
  "ID" +
    " " +
    newStudent.id +
    " " +
    "<br> " +
    "name: " +
    " " +
    "<br>  " +
    newStudent.getFullName() +
    "<br> " +
    "COURSE: " +
    " " +
    "<br>  " +
    newStudent.course +
    " <br> " +
    "ADMISSION: " +
    " " +
    newStudent.admission +
    "<br>  " +
    "AGE: " +
    " " +
    "<br>  " +
    newStudent.age +
    "<br>  " +
    " " +
    "KCSE YEAR: " +
    "<br>  " +
    newStudent.kcseYear
);
document.write("<h1 class='animate'>Updated Student</h1>");

// update values
newStudent.updateId(2);
newStudent.updateFname("john");
newStudent.updatesname("doe");
newStudent.updatecourse("programming");
newStudent.updateadmission(229);
newStudent.updateage(28);
newStudent.updatekcseYear("2019");

document.write(
  "ID" +
    " " +
    newStudent.id +
    " " +
    "<br> " +
    "name: " +
    " " +
    "<br>  " +
    newStudent.getFullName() +
    "<br> " +
    "COURSE: " +
    " " +
    "<br>  " +
    newStudent.course +
    " <br> " +
    "ADMISSION: " +
    " " +
    newStudent.admission +
    "<br>  " +
    "AGE: " +
    " " +
    "<br>  " +
    newStudent.age +
    "<br>  " +
    " " +
    "KCSE YEAR: " +
    "<br>  " +
    newStudent.kcseYear
);
