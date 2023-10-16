//2. 문자 타입 string
//' ' =" "
let str = "hello world";
// console.log(str);
// console.log(typeof str);

//2-1. 문자열 길이 확인하기
//console.log(str.length);

//2-2 문자열 결합하기 (concatenation)
let str1 = "hello";
let str2 = "world";
let result = str1.concat(str2);
//console.log(result);

//2-3 문자열 자르기 (substring)
let str3 = "hello, world!";
//console.log(str3.substr(7, 5)); //7번째부터 5개를 잘라라 world
//console.log(str3.slice(7, 12)); //7번째부터 12번째까지 잘라라 world

//2-4 문자열 검색하기
let str4 = "Hello world";
console.log(str4.search("world")); //6 -> world가 시작하는 지점이 6번째에 시작이다.

//2-5 문자열 대체
let str5 = "hello world";
let result1 = str5.replace("world", "javascript");
console.log(result1);

//2-6 문자열 분할  ->배열 형태로 나옴
let str6 = "apple, banana, kiwi";
let result2 = str6.split(","); //,를 기준으로 잘라줘
console.log(result2); //[ 'apple', ' banana', ' kiwi' ]
