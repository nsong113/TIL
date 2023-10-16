//[요구사항]
//전기차 클래스를 만들기 <- car클래스의 상속을 받을거에요.

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
}

//전기차 클래스를 정의
class ElectronicCar extends Car {
  //재정의가 필요하다면 컨스트럭터를 써주기
  constructor(modeName, modeYear, price, chargeTime) {
    //Car (부모 클래스)에게도 알려주기!!- 자식 클래스가 컨스트럭터로 받은 것들을 알려 줘야지 자식클래스의 객체가 생성 될 때 부모를 기반으로 만들어 졌다는 것을 안다.
    super(modeName, modeYear, "e", price); //부모의 컨스트럭터 = 부모의 컨스럭터 요소를 그대로 가져온다.<=부모와 자식의 컨스트럭터가 다르기 때문에 싱크를 맞춰주기 위한 super
    this._chargeTime = chargeTime;
  }
  set chargeTime(value) {
    this._chargeTime = value;
  }
  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new ElectronicCar("bmw", 2023, 300, 3);
eleCar1.makeNoise();
eleCar1.whichYear();
console.log(eleCar1.chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1.chargeTime);
