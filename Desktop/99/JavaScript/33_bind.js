//bind 메서드
//-> this를 바인딩하는 메서드
//call이랑 apply와는 좀 다르다. 즉시 호출하지는 않는다.
//해당하는 함수를 바인딩해서 새로운 함수를 리턴하고 그 함수를 새로운 변수에 저장한다.

//목적1. 함수에 thisfmf '미리'적용 (즉시 실행하는게 아니니 미리 적용하는 것)
//목적2. 부분 적용 함수!

//예시
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); //global객체

console.log("-----");
//함수에 this를 '미리' 적용하자!
var bindFunc1 = func.bind({ x: 1 }); //this 값이 x가 1로 고정
console.log(bindFunc1(5, 6, 7, 8)); //{ x: 1 } 5 6 7 8

//부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
console.log(bindFunc2(6, 7)); //{ x: 1 } 4 5 6 7

//name property!!
//바인드 메서드를 만들어서 적용한 함수에는 네임프로퍼티를 가지고 있다.
//'bound'라는 접두어가 붙어 있다 (bind가 되었다.)
console.log(func.name); //func
console.log(bindFunc1.name); //bound func
console.log(bindFunc2.name); //bound func
