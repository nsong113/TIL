//변수, 상수
//기억하고 싶은 값을 변수에 저장한다. 그리고 읽어드려서 재사용한다.

//변수의 5가지 주요 개념
//변수 이름: 저장된 값의 고유 이름
// 변수 값: 변수에 저장된 값
// 변수 할당: 변수에 값을 저ㅇㅏ는 행ㅟ
//변수 선언: 변ㅜ를 사ㅇㅏ기 위해 컴퓨터에 알리는 행ㅟ
//변수 참ㅗ: 변ㅜㅔ 할ㅏ당된 값ㅡㄹ 읽ㅓ 오ㄴ 것
console.log("hello World!");
var myvar = "hello world";

var myvar;
myvar = "hello world!!";

//데이터 타입
//runtime에 결정된다.
//코드를 작성할 때가 아니라, 실제 코드가 실행될 때,
//터미널에 코드가 실행될 때
//그 때 데이터 타입이 결정된다.

//1. 숫자타입
//1-1. 정수형 타입
let num1 = 10;
console.log(num1);
console.log(typeof num1);

//1-2 실수형 타입 (float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

//1-3 지수형 (EXP)
let num3 = 2.5e5; //2.5*10^5
console.log(num3);
console.log(typeof num3);

//1-4 NaN
let num4 = "hello" / 2;
console.log(num4); //NaN
console.log(typeof num4);

//1-5 Infinity
let num5 = -1 / 0;
console.log(num5);
console.log(typeof num5);

//2. string타입
//' ' = " "
let str = "hello world!";
console.log(str);
console.log(typeof str);

//2-1 문자열 길이
console.log(str.length);

//2-2 문자열 합치기
let str1 = "hello";
let str2 = " world";
let result = str1.concat(str2);
console.log(result);

//2-3 문자열 자르기
let str3 = "hello world";
console.log(str3.substr(6, 5));
console.log(str3.slice(6, 11));

//2-4 문자열 검색하기
let str4 = "hello world";
console.log(str4.search("world"));

//2-5 문자열 대체
let str5 = "hello world";
let result01 = str5.replace("world", "js");
console.log(result01);

//3-6 문자열 분할
let str6 = "apple, banana, kiwi";
let result3 = str6.split(",");
console.log(result3);

//4. boolean type
//true false
let boo1 = true;
let boo2 = false;
console.log(boo1, boo2);
console.log(typeof boo1, typeof boo2);

//5. undefined
//변수를 선언하고 값을 할당을 안하면 됨
let result4 = "1" + true; //1true
console.log(result4, typeof result4); //string

//타입 변환
//명시적 형 변환
//Boolean => 밑에 전부 false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("false")); //true
console.log(Boolean({})); //true:  객체는 비어있어도 true다

//연산자
//곱하기 등호 연산자
let a = 10;
a *= 2;
console.log(a);

//나누기 등호 연산자
let b = 10;
b /= 2;
console.log(b);

//논리 부정 연산자 : 값을 반대로 바꿈
let z = true;
console.log(!z); //false

//삼향연산자: 조건에 따라 값을 선택한다.
let x = 10;
let result7 = x > 5 ? "크다" : "작다";
console.log(result7);
