//promise 리팩토링
//리팩토링: 다시 구조화한다. 비효율적인 코드를 효율적인 코드로 변경한다.
//1. 함수화시킨다.
//바뀌는 부분이 변수

var addCoffee = function (name) {
  return function (prevName) {
    return Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? `${prevName}, ${name}` : `${name}`;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라뗴"));
