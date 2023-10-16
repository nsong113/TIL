//getters setters 개념 및 예제
//객체지향 프로그래밍 언어 -> 게터스와 세터스에 대한 기본적인 개념들이 있다.
//클래스 -> 객체 (인스턴스) -> 그 안에는 프로퍼티가 있음 (constructor가 정의)
//new Class (a,b,c) -> a,b,c에 접근하고 세팅하기 위한 게터스랑 세터스
//setter를 쓰는 이유: 외부적으로 값이 들어왔을 때 내부적으로 값을 검증한 후에 세팅을 할 수 있다.
// _ : underscore : private라는 의미를 가짐 : 은밀, 감춰야 할 때: 해당 인스턴스 내에서만 쓰일 수 있도록 분리하겠다.

//
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  //width를 위한 getter
  get width() {
    return this._width;
  }

  //width를 위한 setter
  set width(value) {
    //검증1: value가 음수이면 오류가 발생
    if (value <= 0) {
      console.log("가로 길이는 0보다 커야 합니다. ");
      return;
    } else if (typeof value !== "number") {
      console.log("가로가 숫자가 아닙니다.");
      return;
    }
    this._width = value;
  }

  //height를 위한 getter
  get height() {
    return this._height;
  }

  //height를 위한 setter
  set height(value) {
    if (value <= 0) {
      console.log("세로 길이는 0보다 커야 합니다. ");
      return;
    } else if (typeof value !== "number") {
      console.log("세로가 숫자가 아닙니다.");
      return;
    }
    this._height = value;
  }

  //getArea 메서드 :가로 * 세로 = 너비
  getArea() {
    const a = this._width * this._height;
    console.log(`${a}입니다.`);
  }
}

//instance 생성
const rect1 = new Rectangle(10, 20);
rect1.getArea();
// const rect2 = new Rectangle(14, 30);
// const rect3 = new Rectangle(30, 40);
