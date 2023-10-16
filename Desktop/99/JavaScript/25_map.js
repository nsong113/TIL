//map
//js에서 객체와 배열을 사용해서 많고 다양하고 복잡한 프로그래밍을 만들어 왔음
//그럼에도 현실세계를 반영하기는 어려움 (더 복잡함)
//map, set같은 자료구조가 등장함.

//자료구조: 여러 자료 형태를 구성하는 data type
//map과 set의 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리한다. -> 기존의 객체나 배열보다..

//1. map
//key+value를 저장함.
//key에 어떤 데이터 타입(유형)도 다 들어올 수 있다.
//map은 key가 정렬된 순서로 저장되기 때문이다.
//검색, 삭제, 제거, 여부 확인

//1-1 만들기
//const myMap1 = new Map();
//myMap.set("key", "value");
//..
//..

//1-2 iterate하기
//myMap("key"); //검색
//대량 데이터를 처리하려 하는 것이기 때문에 반복이 중요
//반복->메서드 : keys, values, entries

const myMap = new Map();
myMap.set("one", "1");
myMap.set("two", "2");
myMap.set("three", "3");

//map 은 for of와 짝꿍이다.
console.log(myMap.keys()); //[Map Iterator] { 'one', 'two', 'three' }
console.log(myMap.values()); //[Map Iterator] { '1', '2', '3' }
console.log(myMap.entries()); //[Map Iterator] { [ 'one', '1' ], [ 'two', '2' ], [ 'three', '3' ] }

//1-3 for of와 같이 호풀하기
for (const key of myMap.keys()) {
  console.log(key); //one, two, three -> 각각 순회
}
for (const value of myMap.values()) {
  console.log(value); //1,2,3 ->각각순회
}
for (const entry of myMap.entries()) {
  console.log(entry); // [ 'one', '1' ] ,[ 'two', '2' ],[ 'three', '3' ] ->각각순회
}

//1-4 map의 크기와 존재 여부 확인하기
//map의 사이즈 (길이))
console.log(myMap.size); //3
//key 특정 키 검색 (value는 검색 안됨)
console.log(myMap.has("two")); //true
