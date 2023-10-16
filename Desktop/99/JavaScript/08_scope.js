//스코프, 전역변수, 지역변수, 화살표함수
//스코프: 변수의 영향 범위
//전역변수: 전체에 영향을 끼침
//지역변수 :  함수 내에서만 영향

//함수 외부에서 선언됨 -> 외부 내부에서 모두 사용 가능
// let x = 10;
// function printX() {
//   console.log(x);
// }
// console.log(x);
// printX();

//함수 내부에서 선언됨 -> 스코프를 넘어가면 영향이 없음
function printX() {
  let x = 10;
  console.log(x); //10
}
console.log(x); //오류남 (x is undefined    )
printX();
