//callback
//this
Array.prototype.map123 = function (callback, thisArg) {
  //함수에서 리턴할 결과 배열
  var mappedArr = [];

  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || globalThis, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

var newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});
console.log(newArr); //[2,4,6]

//콜백함수는 함수다. 그래서 바인딩을 글로벌로 한다. 그래서 맥락을 잃어버리게 된다.
//obj
//두가지의 속성을 가짐. 1.vals라는 속성 2.logValues라는 함수를 가짐
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    if (this === global) {
      console.log("this는 글로벌");
    } else {
      console.log(this, v, i);
    }
  },
};

//메서드로서 호출
obj.logValues(1, 2);

//콜백함수로 호출
//forEach, map, filter..
//logValue뒤에  (4,5)가 없어도! 요소의 값과, 인덱스를 잡아줌
//함수를 콜백함수로 넣을 때는 매개변수 없이 함수 그 자체를 넣어야 한다.
[4, 5, 6].forEach(obj.logValues); //this는 글로벌 *3반복

//this에 다른 값 바인딩하기
//콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
//콜백 함수 내부의 this에 다른 값을 바인딩하는 방법
//-전통적인 방식
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //
    return function () {
      console.log(self.name);
    };
  },
};

var callback = object1.func();
setTimeout(callback, 1000); //1초정도 있다가 obj1이 출력됨

//-하드코딩... 결과만을 위한 코딩.
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(obj1.name);
  },
};
setTimeout(obj1.func, 1000);

//다시 this를 활용해보자...
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};

var obj2 = {
  name: "obj2",
  func: obj1.func,
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

//이번엔 다른 방법....
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};

var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);

//가장 좋은 방법
//bind활용: 즉시 실행하지 않고 this를 바인딩해서 새로운 함수를 리턴함.
//바인드를 이용해 새로운 함수를 만들고 그 함수를 사용하자!
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};
setTimeout(obj1.func.bind(obj1), 1000); //=> obj1을 바인드로 묶어주면 obj1이 this 로서 묶인다. //obj1

//함수 자체를 바인딩하는 방법
var obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500);
