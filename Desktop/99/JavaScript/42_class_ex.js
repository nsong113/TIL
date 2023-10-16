//class연습
class Car {
  constructor(modeName, modeYear, type, price) {
    this.modeName = modeName;
    this.modeYear = modeYear;
    this.type = type;
    this.price = price;
  }
  makeNoise() {
    console.log(`${this.modeName} 빵`);
  }
  whichYear() {
    console.log(`${this.modeYear}에 생산됨`);
  }
  //[요구]1. name year price type을 가져오는 메서드
  bringCar() {
    console.log(`${this.modeName},${this.modeYear},${this.type},${this.price}`);
  }
  //[요구]2. 을 세팅하는 메서드
  set modeName(value) {
    //유효성 검사
    if (value.length <= 0) {
      console.log("모델명이 입력되지 않았습니다. ");
      return;
    }
    if (typeof value !== "string") {
      console.log("오류오류");
      return;
    }
    this._modeName = value;
  }
  get modeName() {
    return this._modeName;
  }
  set modeYear(value) {
    if (value.length !== 4) {
      console.log("네자리의 연도를 입력해 주세요. ");
      return;
    }
    if (typeof value !== "string") {
      console.log("오류오류");
      return;
    }
    this._modeYear = value;
  }
  get modeYear() {
    return this._modeYear;
  }
  set type(value) {
    if (value.length <= 0) {
      console.log("제대로 입력하요");
      return;
    } else if (value !== "가솔린" && value == "휘발유") {
      console.log("올바른 가스를 입력하세요 ");
      return;
    }

    this._type = value;
  }
  get type() {
    return this._type;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("가격으로 입력된 값이 숫자가 아닙니다.");
      return;
    } else if (value < 100) {
      console.log("가격은 100만원 보다 작을 수 없습니다. 확인해주세요");
      return;
    }
    this._price = value;
  }
  get price() {
    return this._price;
  }
  //[요구]3. 만든 인스턴스를 통해서 마지막에 set해서 get하는 로직까지
}
const momCar = new Car("소나타", "2023", "가솔린", 2500);
const dadCar = new Car("GX", "2023", "가솔린", 3500);

//getters 예시
console.log(momCar.modeName);

//setters 예시
momCar.modeName = "kia";
console.log(momCar.modeName);
