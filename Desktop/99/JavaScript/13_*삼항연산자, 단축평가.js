//조건부 실행
//어떤 특정한 경우에만 실행하도록

//and 조건 (&&)
let x = 10;
x > 0 && console.log("x는 크다");

//or조건
//삼항연산자와 단축 평가
let y; //y에는 undefined가 들어가 있음.
let z = y || 20; //y가 undefined면 기본값을 20으로 기본값을 세팅해줘, y가 존재하지 않는 경우에는 기본값으로 20을 세팅해줘
console.log(z);
