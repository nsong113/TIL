//연산자 (+-*/%)

//1. 더하기
console.log(1 + 2);

//2. 빼기
console.log(1 - "2"); //-1
console.log(1 - 2); //-1

//3. 곱하기 연산
console.log(2 * 3); //6

//4. 나누기
console.log(4 / 2); //2

//5. 나누기 연산자 vs 나머지 연산자
console.log(5 / 2); //2.5
console.log(5 % 2); //1

//6. 할당연산자 (assignment)
//6-1 등호연산자 (=)
let x = 10; //10

//6-2 더하기 등호연산자
x += 5; // 15

//6-3 빼기 등호 연산자
x - +5; //10
x -= 20; //-10

//6-4 곱하기 등호 연산자
let a = 10;
a *= 2;
console.log(a); //20

//비교연산자
//1. 일치연산자 (===) :타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2); //true
console.log("2" === 2); //false

//2. 불일치 연산자: 타입까지 일치해야 false를 반환하는 연산자
//(숫자 2가 숫자 2와 다르니? = 아니! 영어식으로 대답해주네)
console.log(2 !== 2); //false
console.log("2" !== 2); //true

//3. 작다연산자 (<) 작거나 같다 연산자
console.log(2 < 3); //true
console.log(3 <= 3); //true

//4. 논리연산자
//4-1 논리곱연산자 : 모두 true일 때 true
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); // false
//4-2 논리 합 연산자 : 두 값중 하나라도 true라도 true
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); // false
//4-3 논리 부정 연산자 :
console.log(!true); //flalse
let b = true;
console.log(!b); //false

//5. 삼항연산자 (중요!)
//조건에 따라 값을 선택한다.
let y = 10;
let result = y > 5 ? "크다" : "작다";
console.log(result); //크다

let z = 20;
let answer = z < 10 ? "작다" : "크다";
console.log(answer);

//6. 타입연산자 typeof
