//형변환
//형태->바꾼다.
//명시적 형 변환, 암시적 형 변환

//1. 암시적 형 변환
//1-1. 문자열 : 문자열과 다른 데이터 타입이 더하면 문자열이 우선시된다.
let result1 = 1 + "2"; //12, string
let result2 = "1" + true; //1true string

//{}, null, undefined + '1=> 문자열

//1-2 숫자 : 숫자열과 다른 데이터를 빼면 곱하고 나누고 숫자열이 우선시된다.
let result3 = 1 - "2"; //-1

//2. 명시적 형 변환
//2-1 boolean
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("false")); //true
console.log(Boolean({})); //true

//2-2문자열
console.log(String(123)); //123 string
console.log(String(true)); //true string
console.log(String(false)); //false string
console.log(String(null)); // null string
console.log(String(undefined)); //undefined string

//2-3 숫자열
console.log(Number("10")); //10 number
