//for, white => ~하는 동안 반복한다 : 반복문
// for(초기값; 조건식; 증감식){
// }

//i라는 변수는 0부터 시작할꺼야
//i라는 변수가 10에 도달하기 전까지 계속할꺼야
//i라는 변수가 한 사이클을 돌고 나면 1을 더할꺼야
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//배열과 for문은 짝꿍이다
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i <= 10; i++) {
  console.log(i); //0,1,2,3,4
  console.log(arr[i]); //one, two, three, four, five
}

//예시) 0부터 10까지의 수 중에서 2의 배수만 콘솔로 출력하쇼
for (let i = 0; i <= 10; i++) {
  if (i >= 2) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

//for in
//객체의 속성을 출력하는 문법
let person = {
  name: "John",
  age: 23,
  gender: "male",
};
for (let key in person) {
  //객체에 value에 접근하는 방법: []안에 key를 입력
  console.log(key + ":" + person[key]);
}
