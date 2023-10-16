//일급 객체로서의 함수 First-Class Object
//일급객체란 다른 객체들이 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다. 매개변수로 전달 될 수 있고, 리턴으로 출력, 모든 연산 가능 등등.. 일반 객체라고 생각하면 된다. **매우 유연하게 사용 할 수 있다.

//1. 일급 객체로서의 함수
//(1) 변수에 함수를 할당할 수 있다. -> 변수를 가지고 어디서든 호출하고 변수처럼 사용 가능
//함수가 마치 값으로 취급된다.
//함수가 나중에 사용될 수 있도록 조치가 되었다.
const sayHello = function () {
  console.log("hello");
};

//(2) 함수를 인자로 다른 함수에 전달할 수 있다.
//(2)-1. 콜백함수: 매개변수로써 쓰이는 함수, 고차함수의 한 종류
//(2)-2. 고차함수: 함수를 인자로 받거나 리턴하는 함수
function callFunction(func) {
  //매개변수로 받은 변수가 사실 함수다.
  func();
}
const sayHi = function () {
  console.log("hello");
};
callFunction(sayHello);

//(3) 함수를 반환할 수 있다. (리턴을 함수로 할 수 있다)
function creatAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = creatAdder(5);
console.log(addFive(10)); //15

//(4)객체의 property로 들어갈 수 있다.
const person = {
  name: "john",
  age: 30,
  isMarried: true,
  sayHel: () => console.log(`hello, my name is ${person.name}`),
};
person.sayHel();
