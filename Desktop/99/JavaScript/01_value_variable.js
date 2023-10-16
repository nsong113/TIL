//변수 상수
//메모리에 저장한다. 읽어들여서 재사용한다. = 변수

//[주요 개념]
//변수 이름: 저장된 값의 고유 이름
//변수 값: 변수에 저장된 값
//변수 할당: 변수에 값을 저장하는 행위
//변수 선언: 변수를 사용하기 위해 컴퓨터에 알리는 행위
//변수 참조: 변수에 할당된 값을 읽어오는 것

//변수를 선언할 수 있는 방법
//1. var: 재할당 재선언 가능
var myVar = "hello world";
var myVar = "test1";
myVar = "bye";
console.log(myVar);

//선언 먼저 하고 할당 나중에 하기
var myVar1;
myVar1 = 3;

//2. let : 재할당 가능 재선언 불가능
let myLet = "hello world";
//let myLet = "test1";
let = "bye";
console.log(myLet);

//3. const : 재할당 불가능 재선언 불가능
const myConst = "hello world";
//const myConst = "test1";
myConst = "bye";
console.log(myConst);
