//비효율

//max값과 min값을 찾아내는 방법
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]); //10
numbers.forEach(function (number) {
  //현재 돌아가는 숫자가 max보다 큰 경우
  if (number > max) {
    max = number;
  }
  //현재 돌아가는 숫자가 min값 보다 작은 경우
  if (number < min) {
    min = number;
  }
});
console.log(max, min);

//효율적으로 apply이용하기
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); //45 3

//spread operator
console.log(...numbers);
var max = Math.max(...numbers); //45
var min = Math.min(...numbers); //3
