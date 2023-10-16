//함수 function
//input과 output을 가지고 있다.
//함수를 정의하는 방법

//1. 함수 선언문
//두개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
  return x + y;
}

//2. 함수 표현식
let add2 = function (x, y) {
  return x + y;
};

//함수를 호출한다= 사용한다.
//함수명 ()
console.log(add(1, 2));
console.log(add2(1, 2));
let functionResult = add(1, 2);
console.log(functionResult);

//add2를 가지고 10과 20을 더한 값을 출력해ㅐ  보세요
let function2 = add2(10, 20);
console.log(function2);

//함수의 input -> 매개변수, return문 뒤에 오는 값: 반환값
