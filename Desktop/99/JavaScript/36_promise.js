//콜백지옥과 비동기제어
//콜백지옥이란: 매개변수 자리에 입력함수가 너무 많이 들어가다 보면 들여쓰기가 너무 많아짐. 너무 깊어지면 헬이다.

//동기 synchronous:
//현재 실행중인 코드가 끝나야 다음 코드를 실행하는 방식
//cpu의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드
//계산이 복잡해서 cpu가 계산하는데에 오래 걸리는 코드 역시 도 동기적 코드

//비동기 asynchronous: 동기가 아닌 것
//실행중인 코드 완료 여부와 무관하게 즉시 다음 코드로 넘어가는 방식
//setTimeout, addEventListener등
//별도의 요청, 실행 대기, 보류 등과 관련된 코드는 모두 비동기적 코드. 통신이 들어간 부분은 대부분 비동기적 코드임
setTimeout(function () {
  console.log("여기가 먼저 실행될까? ");
}, 1000);
console.log("여기좀 봐주쇼");
//여기좀 봐수죠  => 먼저 실행됨
//여기가 먼저 실행될까?   =>1초가 지난 후에 실행되니까

//콜백지옥의 에시와 해결방안
//예시
setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);

//해결책: 1. 기명함수 : 함수의 왼쪽에 이름을 붙여줘  -> 계속 반복된다는 단점
var coffeeList = "";

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, "아메리카노");
};

var addAmericano = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
};

var addMocha = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, "카페라떼");
};

var addLatte = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, "에스프레소");

//왜 중첩을 해야만 하는가? 비동기 작업=순서를 보장하지 않는다.
//비동기작업의 동기적 표현이 필요하다.
//1. promise
//처리가 끝나면 알려달라는 약속
//new연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행된다.
//그 내부에 resolve(성공했다), reject (실해팼다)가 있다. -> then과 catch로 오류를 트레킹할 수 있다.
//문법:
new Promise(function (resolve) {
  setTimeout(function () {
    var name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then(function (prevName) {
    //이 안에서도 새롭게 promise를 만들어요
    return Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",에스프레소";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    //이 안에서도 새롭게 promise를 만들어요
    return Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",카페모카";
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    //이 안에서도 새롭게 promise를 만들어요
    return Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ",카페라떼";
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
