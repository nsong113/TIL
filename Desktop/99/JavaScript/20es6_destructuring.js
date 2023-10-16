//구조 분해 할당 : de + structuring
//de = not
//structure = 구조
//배열이나, 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 한 문법

//1. 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1); //1
console.log(value2); //new

let arr = ["value3", "value4", "value5"];
let [a, b, c = 3, d = 4] = arr;
console.log(a); //value3
console.log(b); //value4
console.log(c); //value5
//요소의 개수 초과 -> 초기값 세팅 d=4
console.log(d); //undefined -> 기본값:4

//2.객체인 경우
let user = {
  name: "nami",
  age: 29,
};
//오른쪽에 있는 user 객체를 분해해서 왼쪽에 있는 각각의 변수에 할당해준다.
//let { name, age } = user; //첫번째 있는 name이 첫번째 nami를 값을 가지고 두번째도 마찬가지
//console.log(name, age); //nami 29

//2-1 새로운 이름으로 할당하는 방법
//let { name: newName, age: newAge } = user; //name이라는 변수명을 newName으로, age라는 변수 명을 newAge로 새로 할당
//console.log(newName, newAge); //nami 29

//없는 값을 할당
let { name, age, birthday = "today" } = user;
console.log(name); //nami
console.log(age); //29
console.log(birthday); //undefined -> today
