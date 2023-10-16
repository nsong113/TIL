//상속 (inheritance)
//class-> 유산으로 내려주는 주요 기능!!
//부모<-> 자식간의 관계 : 독립적으로 제각각 정의하기 보다는 부모가 가지고 있는 형질을 밑으로 상속해서 내려주는 것이 효과적이다.

//동물 전체에 대한 클래스
class Animal {
  //생성자
  constructor(name) {
    this.name = name;
  }

  //동물의 행동을 정의하는 메서드
  speak() {
    console.log(`${this.name} says!`);
  }
}

//강아지 클래스: 하위클래스
//도그 클래스는 애니멀의 상속을 받을것이다.
//상속 받을 때는 기본적으로 컨스트럭트까지 끌고 오기 때문에 다시 써줄 필요가 없다.
class Dog extends Animal {
  //부모에 있는 speak 재정의 : overriding
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const me = new Animal("jiu");
const mari = new Dog("mari");
me.speak();
mari.speak();
