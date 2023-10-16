//문(if elseif switch)

//조건문: if, else if, else, switch
//특정 조건에 해당되는 경우에만 하위 로직을 실행하도록

//1. if문
let x = 10;
// if(true or false가 나올 수 있는 조건){
// }
if (x > 0) {
  console.log("x는 양수");
}

//예시
let y = "hello";
//y의 길이가 5보다 크거나 같으면 길이를 출력하쇼
if (y.length >= 5) {
  console.log(y.length);
}

//if else문
x = -1;
if (x > 0) {
  console.log("x는 양수");
} else {
  console.log("x는 음수");
}

//if elseif else
x = 20;
if (x > 10) {
  console.log("x는 커");
} else if (x > 0) {
  console.log("x는 양수");
} else {
  console.log("x는 음수");
}

//switch문 : 변수의 값에 따라 여러개의 경우(case)중 하나를 선택
//default
let fruit = "사과";
switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "바나나":
    console.log("바나나입니다.");
    break;
  case "망고":
    console.log("망고입니다.");
    break;
  default:
    console.log("아무것도님");
    break;
}
