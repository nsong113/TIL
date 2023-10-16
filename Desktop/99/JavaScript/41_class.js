//class라는 설계도 만들기

class Person {
  //사람이기 때문에 필수 요소를 name age로 가져간다.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //메서드 형태의 동사
  sayHello() {
    console.log(this.name + "hello");
  }
  //내 나이는 **이에요 출력
  myAge() {
    console.log(`${this.age}살이에요`);
  }
}

//설계도를 통해 인스턴스 (실제 사물)만들기
//객체를 정확하고 빠르고 많이 만들기 위해
const person1 = new Person("jiu", "27");
const person2 = new Person("홍기루", "25");

person1.sayHello(); //jiu hello
