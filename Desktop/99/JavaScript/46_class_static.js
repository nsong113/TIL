//class - static method 정적 메소드
//클래스 사용 이유: 객체를 다량으로 만들기 위해
//굳이 인스턴스화 안시키고 (원래는 클래스를 인스턴스화 시키고 인스턴스.메서드로 접근한다), 변하지 않는 정적인 메서드도 있다. 클래스 자체를 호출
//정적인 특징을 갖는다.
class Calculator {
  //컨스트럭터 필요 없고
  //메서드 앞에 static이라는 키워드를 써줘
  static add(a, b) {
    console.log("[계산기] 더하기를 진행합니다.");
    return a + b;
  }
  static substract(a, b) {
    console.log("[계산기] 빼기를 진행합니다.");
    return a - b;
  }
}
//굳이 복잡하게 호출하지 않고 바로 직관적으로 호출할 수 있다. ㄴ
console.log(Calculator.add(3, 5)); //8
console.log(Calculator.substract(3, 5)); //-2
