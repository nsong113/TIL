//데이터 타입
//runtime에 데이터 타입이 결정된다.
//실제 코드가 실행될 때 결정된다.
//-> 옆에 터미널에 코드가 실행될 때 데이터 타입이 결정된다

//1. 숫자
//1-1 정수형 타입
let num1 = "10";
console.log(num1);
console.log(typeof num1);

//1-2 실수 (float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

//1-3 지수
let num3 = 2.5e5; //2.5x 10*5
console.log(num3);
console.log(typeof num3);

//1-4 NaN
let num4 = "hello" / 2; //NaN
console.log(num4);
console.log(typeof num4);

//1-5 infinity (무한대)
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

//1-6 infinity (무한대)
// let num6 = -1 / 0;
// console.log(num6);
// console.log(typeof num6);
