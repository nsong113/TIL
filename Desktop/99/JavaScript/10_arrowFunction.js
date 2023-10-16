//화살표함수
//ES6 신 문법

//1-1 기본적인 화살표 함수
let arrowFunction01 = (x, y) => {
  return x + y;
};

//1-2 한줄로 - 중괄호 안에 있는 줄이 한줄이면 중괄호를 뺼 수 있다.
let arrowFunc02 = (x, y) => x + y;

//1-3 매개변수도 한줄일때는 () 도 빼줘도 된다.
function testFunc(x) {
  return x;
}
let arrowFunc03 = (x) => x;
