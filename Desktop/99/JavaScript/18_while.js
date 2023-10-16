//while
//~하는 동안 계속 해라
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("-----");
//문제: while을 활용해서 3초과 100미만의 숫자 중에서 5의 배수인 것만 출력하슈
let a = 4;
while (a < 100) {
  if (a % 5 === 0 && i >= 5) {
    console.log(a);
  }
  a++;
}

//do~while: 한번 코드를 실행하고 while을 돌린다.
let b = 0;
do {
  console.log(b);
  b++;
} while (b < 10);

console.log("------");

//break, continue
//for문과 항상 결합되어서 사용된다.
//break가 만나는 순간 for문을 스탑한다.
//continue 해당되는 아이만 빼고 계속 진행
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; //0,1,2,3,4
  }
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; //0,1,2,3,4, 6,7,8,9,
  }
  console.log(i);
}
