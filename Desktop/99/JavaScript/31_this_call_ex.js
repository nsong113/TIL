//student와 employee의 공통적인 속성: 사람
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  //this.name = name;
  //this.gender = gender;
  this.school = school;
}
function Employee(name, gender, company) {
  Person.call(this, name, gender);
  //this.name = name;
  //this.gender = gender;
  this.company = company;
}

var kd = new Student("길동", "male", "서울대");
var ks = new Employee("길순", "female", "삼성");
