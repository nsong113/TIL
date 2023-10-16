//set
//자료구조임
//고유한 값을 저장하는 자료구조이다.
//값만 저장한다.
//key를 저장하지 않는다
//값이 중복되지 않는 유일한 요소로만 구성된다.
//수학 집합이랑 비슷
//값추가 , 검색, 값삭제, 모든 값 제거, 존재여부 확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value4");
mySet.add("value8");
mySet.add("value3");
mySet.add("value3"); //똑같은 값을 추가하면 중복으로 인식이 되어서 추가가 안된다 (여전히 3이다)

console.log(mySet.size); //3
console.log(mySet.has("value1")); //true

//Iterator: 반복하는 그 친구
//key랑 entries 못함 (없으니까..)
for (const value of mySet.values()) {
  console.log(value); //value1, value2, value4, value8, value,3 각각 순회
}
