//this
//런타임: 코드가 돌아가는 그 시간을 의미함. 환경을 의미
//1. 노드환경
//2. 브라우저 환경
//전역환경에서 this, 노드에서는 global객체이고 브라우저에서는 window객체다.

//명시적 this binding
//call, apply, bind 메서드

//1.call : 기존에 있었던 메서드뒤에 붙어서 즉시 실행을 해주돼, 앞에 this로 묶을 객체를 붙여주고 나서 나머지 매개변수를 넣어주면 된다.
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

//no binding
func(1, 2, 3); //globa,l,2,3

//명시적 바인딩 (전역객체를 바라보고 있는 상황)
func.call({ x: 1 }, 4, 5, 6); //{ x: 1 }, 4, 5, 6

//호출 주체가 있는 명시적 바인딩
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
//method 함수 안의 this는 항상 obj!!
obj.method(2, 3); //1,2,3
obj.method.call({ a: 4 }, 5, 6); // 4,5,6

//2. apply
//call뒤의 매개변수를 []로 묶어주는거, call과 완전히 동일한 역할을 한다.
func.apply({ x: 1 }, [4, 5, 6]); //{ x: 1 }, 4, 5, 6
obj.method.apply({ a: 4 }, [5, 6]); // 4,5,6

//
