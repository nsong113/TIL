//객체
//key value pair
//하나의 변수에 여러개의 값을 넣을 수 있다.

//1. 객체 생성 방법
//1-1 기본적인 객체 생성 방법
let person = {
  name: "송지우",
  age: 27,
  gender: "여자",
};
//1-2 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
//let person1 = new Person("송지우", 27, "여자");
//let person2 = new Person("강마리", 3, "여자");
//console.log(person1, person2);

//2. 접근하는 방법
console.log(person.name);

//3. 객체 메소드 (객체가 가진 여러가지 기능 : Object.~~)
//3-1. Object.keys(): key를 가져오는 메서드
let keys = Object.keys(person);
console.log(keys); //[ 'name', 'age', 'gender' ]

//3-2. Object.values()
let values = Object.values(person);
console.log(values); //[ '송지우', 27, '여자' ]

//3-3. entries
//key와 value를 뮦어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
console.log(entries); //[ [ 'name', '송지우' ], [ 'age', 27 ], [ 'gender', '여자' ] ]

//3-4 assign
//객체 복사
//새로운 오브젝트 안에 기존꺼를 어떤 것만 변경해서 복사할꺼야
let newPerson = {};
Object.assign(newPerson, person, { age: 31 });
console.log(newPerson); //{ name: '송지우', age: 31, gender: '여자' }

//3-5 객체 비교
//객체는 크기가 상당히 커서 별도의 메모리에 저장을 한다. 그래서 person1과 2가 가지고 있는 값은 별도 공간에 대한 주소를 저장됨. 그래서 주소가 다르다.
let person1 = {
  name: "홍길동",
  age: 59,
  gender: "male",
};
let person2 = {
  name: "홍길동",
  age: 59,
  gender: "male",
};
console.log(person1 === person2); //false

console.log(JSON.stringify(person1) === JSON.stringify(person2)); //true
//stringify: 객체를 문자열화 시킨다.

//3-6 객체 병합
let person3 = {
  name: "송지우",
  age: 27,
};
//person4 별도 공간에 대한 주소
let person4 = {
  gender: "여자",
};
let perfectGirl = { ...person3, ...person4 };
// ... : spread operator 중괄효를 다 풀어 헤쳐서 나열해줘
console.log(perfectGirl); //{ name: '송지우', age: 27, gender: '여자' }
