//array 배열

//1. 배열 생성
//1-1. 기본 생성
let fruits = ["사과", "포도", "오렌지"];

//1-2. 크기 지정
let number = new Array(5); //크기가 5개인 배열을 새로 만들어줘
console.log(number, number.length); // [ <5 empty items> ] 5

//2, 요소 접근하기
console.log(fruits[0]);

//3. 배열의 메서드
//3-1. push : 마지막에 요소 추가
fruits.push("키위"); //[ '사과', '포도', '오렌지', '키위' ]
console.log(fruits);

//3-2. pop : 마지막 요소 삭제
fruits.pop();
console.log(fruits); //[ '사과', '포도', '오렌지' ]

//3-3 shift: 첫번째 요소를 삭제
fruits.shift();
console.log(fruits); //[ '포도', '오렌지' ]

//3-4. unshift : 제일 앞에 무언갈 추가
fruits.unshift("고양이");
console.log(fruits); //[ '고양이', '포도', '오렌지' ]

//3-5 splice: 위치를 지정해서 어떠한 요소를 교체
fruits.splice(1, 1, "체리"); //첫번째 요소부터 시작해서 첫번째 요소까지를 삭제하고 체리로 갈아끼워줘 (인덱스 번호 1부터 한개를 갈아끼워)
console.log(fruits); //[ '고양이', '체리', '오렌지' ]

//3-6 slice:
fruits = ["사과", "포도", "오렌지", "키위", "체리"];
let slicedFruits = fruits.slice(1, 3); //[ '포도', '오렌지' ] // 인덱스1부터 시작해서 인덱스 3 바로 전까지만 반환해줘
console.log(slicedFruits);

//3-7 forEach
//어레이를 돌아가면서 실행시킴
let numbers = [3, 4, 5, 5, 1];
//콜백함수: 매개변수 자리에 함수를 넣어주는 것
numbers.forEach(function (item) {
  console.log("item입니다.=>" + item);
});
//item입니다.=>3
//item입니다.=>4
//item입니다.=>5
//item입니다.=>5
//item입니다.=>1

//3-8 map : 기존에 있던 배열을 가공해서 새로운 배열을 생산해 냄
//항상 원본 배열의 길이 만큼만큼 리턴된다.
//반드시 리턴문을 가져야 함
//맵을 거치고 나면 반드시 새로운 배열이 튀어나오기 때문에 새로운 변수에 반드시 저장해야 함
let newNumbers = numbers.map(function (item) {
  return item * 2;
});
console.log(newNumbers); //[ 6, 8, 10, 10, 2 ]

//3-9 filter
//return이 필요
//필터링 할 조건이 들어감
//새로운 배열이기 때문에 새로운 변수에 저장
//map은 원본 배열의 길이 만큼 리턴했다면, filter는 조건에 해당하는 것만 리턴한다.
let newnewNumbers = numbers.filter(function (item) {
  return item === 5;
  //return item !=== 5;
  //return item >3;
});
console.log(newnewNumbers); //[ 5, 5 ]

//3-10 find
//return반드시 필요
//조건에 맞는 것 중 첫번째만 반환
//새로운 변수에 저장
let resultFind = numbers.find(function (item) {
  return item > 2;
});
console.log(resultFind); //3
