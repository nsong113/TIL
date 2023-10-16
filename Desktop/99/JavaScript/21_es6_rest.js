//1. 단축속성명 property shorthand
const name = "nami";
const newAge = 30;
//object= key+value
const obj = {
  name,
  //원래 name:name이었는데 이렇게 곂치는 경우에는 생략 가능
  age: newAge,
};
const shorten = { name, newAge }; //=name:name, newAge:newAge를 줄인거 객체임에도 배열처럼 보임.. 주의!: key와 value가 똑같으면 생략 가능

//2. 전개구문 spread operator
//destructuring과 함께 가장 많이 사용되는 es6문법중 하나
//2-1 배열에서 적용
let arr = [1, 2, 3];
console.log(arr); //[ 1, 2, 3 ]
console.log(...arr); //1 2 3
//원래 구조를 벗어버리고 새로운 구조로 덧입혀야 할 때 사용

let newArr = [...arr];
console.log(arr); //[ 1, 2, 3 ] 동일
console.log(newArr); //[ 1, 2, 3 ] 동일
let newArr1 = [...arr, 4];
console.log(newArr1); //[ 1, 2, 3, 4 ] => 감쪽같이 4가 추가된 어레이 형성

//2-2 객체에서 적용
let user = {
  name: "nbc",
  age: 30,
};
let user2 = { ...user };
console.log(user2); //{ name: 'nbc', age: 30 }

//3. 나머지 매개변수 rest parameter
// ...args : arguments :추가적으로 어떠한 arguments가 들어올 수 있다.
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c); //1 2 3
  console.log(...args); //4 5 6 7
  console.log(args); //[4, 5, 6, 7]
}
exampleFunc(1, 2, 3, 4, 5, 6, 7);

//4. 템플릿 리터럴 template literal
console.log(`
    hello
        my name is Jiu
`);

//5.
