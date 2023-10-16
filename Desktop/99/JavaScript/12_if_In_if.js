//조건문의 중첩
let age = 20;
let gender = "여성";

//미성년자 구분
if (age >= 18) {
  if (gender === "여성") {
    console.log("성인여성입니다.");
  } else {
    console.log("성인남성입니다.");
  }
} else {
  if (gerder === "여성") {
    console.log("여자아이입니다.");
  } else {
    console.log("남자아이입니다.");
  }
}
