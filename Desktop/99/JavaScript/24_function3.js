function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}
const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
console.log(multiplyByTwo(10)); //20
console.log(multiplyByThree(10)); //30

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(result); //40
