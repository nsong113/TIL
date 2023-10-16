//비동기 작업의 동기적 표현: Generator
//왜 동기적으로 바꾸려고 하는가: 순서를 보장할 수 없으니까 순서 보장이 필요한 로직에서 순서를 보장 받기 위해서
//iiterable= 반복될 수 있는, 반복할 수 있는, 반복된다.
//제너레이터 문법
//이터레이터 객체를 반환한다. 반복할 수 있는 이터레이터 객체를 생성한다.
//next라는 메서드를 가지고 있다. 이 메서드로 자기 자신에 있는 요소를 계속 순환할 수 있다.. 비동기 작업이 완료되는 시점마다 next메서드를 호풀해주면 제너레이터 함수 내부소스가 위-> 아래 순차적으로 진행된다.
//yield: 양보하다 미루다. 양보하고 미루면서 조금 기다리게 할 수 있는..

//*가 붙은 함수가 제너레이터 함수임: 이 함수를 실행하면 이터레이터 함수가 반환된다.
//(1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};

//(2) 제너레이터 함수 선언!!
//yield 키워드로 순서 제어
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};

var coffeeMaker = coffeeGenerator(); //실행을 하면, 커피메이커는 이터레이터 (반복할 수 있는)객체를 가지고 있는다. 커피메이커가 이터레이터 객체가 된다.
coffeeMaker.next(); //커피메이커.next를 활용해서 어떠한 작업을 할 수 있다. 넥스트 메서드로 계속해서 순환할 수 있다.
//yield 키워드를 만나면 멈춥니다. 멈추고 뒤가 끝날때까지 기다려 준 다음에 다시 넥스트 메서트를 호출하고 멈췄던 부분까지 간다.
