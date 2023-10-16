//Promise
//이전에 썼던 방법: then(그러면~)
//이번에 쓸 방법: async(비동기) / await(기다리다)

//coffeeMaker 함수에서 호출할 함수 addCoffee를 선언한다.
//이 함수는 promise를 반환한다.
var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

//***
var coffeeMaker = async function () {
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };

  //promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때 까지 기다린다.
  //_addCoffee ('에스프레소')로직이 실행되는데 0.5초가 걸렸다.
  await _addCoffee("에스프레소");

  //콘솔은 0.5초뒤 실행된다.
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};

coffeeMaker();
