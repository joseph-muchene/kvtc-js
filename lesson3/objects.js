const person = {
  name: "joseph",
  age: 21,
  marital_status: "married",
};

console.log(person.name);

var emp = {
  id: 1,
  fname: "joseph",
  sname: "muchene",
  salary: 12500,
  level: "managerial",
  fullname: function () {
    return fname + " " + sname;
  },
};

console.log(emp.fullname());
