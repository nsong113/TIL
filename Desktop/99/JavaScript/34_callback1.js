//콜백함수
//setTimeout(function () {
//  console.log("hello");
//}, 1000); //1초후에 hello가 나타남

//const numbers = [1, 2, 3, 4, 5];
//numbers.forEach(function (number) {
//  console.log(number);
//});

//call back 되돌아와서 호출해줘!
//다른 코드의 인자로 넘겨주는 함수, 이 함수 때문에 발생하는 여러 특징이 있고, 콜백지옥이 생김

//1. 다른 코드에게 인자로 넘겨줌: 제어권을 넘겨 줄테니 너가 알고 있는 그 로직으로 처리해줘. 제어권도 할께 위힘한 함수, 자체적으로 내부 로직에 의해 이 콜백 함수를 적절한 시점에 실행
//1-1 무슨 제어권?
// -1. 호출 시점에 대한 제어권을 갖는다.  ->밑에 함수에서 보면 0.3초에 대한 제어권을 가진다.
//setInterval:반복해서 매개변수로 받은 콜백함수의 로직을 반복해서 수행
//var count = 0;
//var timer = setInterval(function () {
//  console.log(count);
//  if (++count > 4) clearInterval(timer);
//}, 300);

//var count = 0;
//var cbFunc = function () {
//  console.log(count);
//  if (++count > 4) clearInterval(timer);
//};
//var timer = setInterval(cbFunc, 300); // 0,1,2,3,4 차례로 호출 => 제어권을 setInterval줘서 시행됨
//cbFunc(); //0 -> 호출 시점에 대한 제어권을 내가 가지고 있어서 clearInterval이 안됨

console.log("===");
//-2. 인자에 대한 제어권을 갖는다.
//map: 배열에 대한 메서드, 배열을 순회하면서 가공해서 새로운 배열을 리턴, 무조건 리턴이 있어야함 없으면 undefined를 할당함
var newArray = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});
console.log(newArr); //[15,25,35]

//-3 this

//동기:
//비동기:
//비동기적인 것 때문에 발생하는 문제:
//그래서 비동기적인 것을 동기적인 것으로 만드는 방법:
