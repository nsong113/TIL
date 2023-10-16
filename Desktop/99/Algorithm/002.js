//나머지 구하기
// const solution = (num1, num2) => {
//   return num1 % num2;
// };
// console.log(solution(10, 5));

//몫구하기
// const solution = (num1, num2) => {
//   return parseInt(num1 / num2);
// };
// console.log(solution(7, 2));

//나이출력
// const solution = (age) => {
//   return 2022 - age + 1;
// };
// console.log(solution(23));

//숫자비교
// function solution(num1, num2) {
//   if (num1 === num2) {
//     return 1;
//   } else {
//     return -1;
//   }
//   return answer;
// }

// function solution(num1, num2) {
//   var answer = num1 === num2 ? 1 : -1;
//   return answer;
// }

// console.log(solution(11, 11));

//각도기
//각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
// function solution(angle) {
//   if (0 < angle && angle < 90) {
//     return 1;
//   } else if (angle === 90) {
//     return 2;
//   } else if (90 < angle && angle < 180) {
//     return 3;
//   } else {
//     return 4;
//   }
// }

// const solution = (angle) => {
//   const result =
//     0 < angle && angle < 90
//       ? 1
//       : angle === 90
//       ? 2
//       : 90 < angle && angle < 180
//       ? 3
//       : 4;
//   return result;
// };
// console.log(solution(91));

//짝수의 합
//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// function solution(n) {
//   var answer = 0;
//   for (let i = 0; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// function solution(n) {
//   var answer = 0;
//   for (let i = 0; i < n + 1; i += 2) {
//     answer += i;
//   }
//   return answer;
// }
// console.log(solution(10));

// 양꼬치
//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
//n, k 를 돌려야 하니까 for

// function solution(n, k) {
//   let food = 12000 * n;
//   let drink = 2000 * k;
//   if (10 <= n) {
//     return food + drink - 2000 * Math.trunc(n / 10);
//   } else return food + drink;
// }
// function solution(n, k) {
//   let food = 12000 * n;
//   let drink = 2000 * k;
//   return food + drink - 2000 * Math.trunc(n / 10);
// }
// console.log(solution(10, 3));

//피자 나눠먹기
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
//사람 30 => 4개  (7로 나눔)
//people n =>    pieces >= n
//pizza= pieces/7
//pizza:  n/7

// function solution(n) {
//   return Math.ceil(n / 7);
// }
// console.log(solution(7));

//피자 나눠먹기 3
//머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
//pizza 2~10 slices
//** slice, n

//ex) slice7, n 10
//person 10 / pizza >= 1

//if (pieces=>person){    피자 전체 조각은 사람 수보다 많아야 함
//return Math.ceil(pieces/7)
//pieces=7 * pizza}
//pizza = pieces/7   피자의 수는 전체 조각을 7로 나눈거임

// function solution(slice, n) {
//   return Math.ceil(n / slice);
// }
// console.log(solution(4, 12));

//점의 위치 구하기
//사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

//x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
//x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
//x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
//x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.

//x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.
//array를 순환 -> for loop

// function solution(dot) {
//   for (let index = 0; index < dot.length; index++) {
//     const result =
//       dot[0] > 0 && dot[1] > 0
//         ? 1
//         : dot[0] < 0 && dot[1] > 0
//         ? 2
//         : dot[0] < 0 && dot[1] < 0
//         ? 3
//         : 4;
//     return result;
//   }
// }
// console.log(solution([2, 4]));

//아이스아메리카노
//머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
//money 10000, 15000
//ii= 5500 =parameter
//[최대로 마실 수 있는 아메리카노의 잔 수, 남은 돈]

//ii*5500<=money : 조건
//return [ii, money-ii*2]
// function solution(money) {
//   let ii = 5500;
//   let num = Math.floor(money / ii);
//   return [num, money - ii * num];
// }
// console.log(solution(5500));

// function solution(money) {
//   return [Math.floor(money / 5500), money - 5500 * Math.floor(money / 5500)];
// }

// function solution(money) {
//     return [Math.floor(money / 5500), money % 5500];
// }

//옷가게 할인 받기
//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
//구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// function solution(price) {
//   var answer = 0;
//   if (price >= 500000) {
//     return Math.trunc(price * 0.8);
//   } else if (price >= 300000) {
//     return Math.trunc(price * 0.9);
//   } else if (price >= 100000) {
//     return Math.trunc(price * 0.95);
//   } else {
//     return Math.trunc(price);
//   }
// }
// console.log(solution(580000));

//제곱수 판별하기
//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
//자연수 n*n=제곱수  n**
//2**#
// num= 1 ≤ n ≤ 1,000,000 조건에서 순회
// for(i=1;i<=1000000;i++){
//  i**2===n?1:2
// }
//return num**2 ===n ? 1 : 2
//지금 궁금한거: '어떤'자연수
//Math.sqrt(#)===n?1:2

// function solution(n) {
//   for (i = 1; i <= 1000000; i++) {
//     if (i ** 2 === n) {
//       return 1;
//     }
//   }
//   return 2;
// }
// function solution(n) {
//   return Math.sqrt(n) % 1 === 0 ? 1 : 2;
// }
// console.log(solution(976));

//문자열 뒤집기
//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
//1. 문자를 하나하나 쪼갠다.
//split('')
//2. for로 넣는다:
//2-0. i에 하나하나 문자를 할당한다.
//2-0. 할당한 것을 배열에 넣는다.
//2-1. 넣을 떄 거꾸로 넣는다. ->for의 i값을 반대로 넣는다.
//3. 배열을 출력한다.
// function solution(my_string) {
//   let answer = my_string.split("");
//   let arr = [];
//   for (let i = answer.length - 1; i >= 0; i--) {
//     arr.push(answer[i]);
//   }
//   return arr.join("");
// }
// console.log(solution("jaron"));

//특정 문자 제거하기
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
//1. split()으로 두 파라미터를 모두 쪼개서 어레이에 담는다.
//  let string=my_string.split('')
//  let letter=letter.split('')
//2. 두 어레이의 공통점을 비교한다.
//filter를 쓴다.
//3. 그 요소를 첫번쨰 파라미터 어레이에서 삭제한다.
//4. 첫번째 파라미터 어레이를 반환한다.
// function solution(my_string, letter) {
//   let string = my_string.split("");
//   let find = string.filter(function (item) {
//     return item != letter;
//   });
//   return find.join("");
// }
// console.log(solution("abcdef", "f"));

//문자 반복 출력하기
//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
//1. split()로 my_string 쪼개기
//2. 각 i를 n만큼 반복하기 i*3 => for
//3. join()로 결과값 다시 묶기

// function solution(my_string, n) {
//   let string = [...my_string];
//   let element = [];
//   for (let i = 0; i < string.length; i++) {
//     let result = string[i].repeat(n);
//     element.push(result);
//   }
//   return element.join("");
// }

// function solution(my_string, n) {
//   var answer = [...my_string].map((v) => v.repeat(n)).join("");
//   console.log(answer);
// }

//편지
//머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
// function solution(message) {
//   var answer = message.length * 2;
//   return answer;
// }

//모음제거
//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string) {
//   var arr = ["a", "e", "i", "o", "u"];
//   //var answer = [...my_string].filter((a) => a !== arr[]).join(""); => 내코드.. 틀림..
//   //var answer = [...my_string].filter((a) => !arr.includes(a)).join("");
//   //filter() 함수 내에서 includes()를 사용하면 조건을 만족하는 경우 true를 반환하는 요소가 새로운 배열에 포함
//   return answer;
// }
// console.log(solution("bus"));

//문자열 안에 문자열
//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// function solution(str1, str2) {
//   //var answer = [...str1].join("").includes([...str2].join("")) ? 1 : 2;
//   var answer = str1.includes(str2) ? 1 : 2;
//   console.log(str1);
//   console.log(str2); //문자 자체가 그냥 배열이 아니게 찍히는데 펼칠 필요도 join할 필요도 없지.. 왜 굳이 펼쳤다 합쳐...
//   return answer;
// }
// console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));

//중복된 숫자 개수
//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, n) {
//   //var answer = array.filter((a) => a.includes(n)).length; => 내 답안 틀림...
//   //includes 메서드는 주로 문자열에서 문자를 찾거나 배열에서 요소를 찾는 데 사용
//   var answer = array.filter((a) => a === n).length;
//   return answer;
// }

// function solution(array, n) {
//   var answer = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === n) {
//       answer++; //n이 나올 때마다 현재 답안에 1을 더하는 방식...
//     } else {
//     }
//   }
//   return answer;
// }

// array = [1, 1, 2, 3, 4, 5];
// console.log(solution(array, 1));

//배열의 평균 값
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
//1. 배열을 푼다. for 로 순휘하면서 푼다.
//2. 각각의 값을 더한다.
//3. 리턴한다.

// function solution(numbers) {
//   var answer = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     answer += numbers[i];
//   }
//   return answer / numbers.length;
// }
// numbers = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
// console.log(solution(numbers));

//짝수 홀수 개수
//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
//for로 순회하고
//if를 돌려서 짝수면 다른 변수에 할당하고
//홀수면 다른 변수에 할당해서
//그 각각의 값을 어레이로 리턴
// function solution(num_list) {
//   var evenSum = 0;
//   var oddSum = 0;
//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] % 2 === 0) {
//       evenSum++;
//     } else if (num_list[i] % 2 !== 0) {
//       oddSum++;
//     }
//   }
//   return [evenSum, oddSum];
// }
// num_list = [1, 2, 3, 4, 5];
// console.log(solution(num_list));

//배열 자르기
//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
// function solution(numbers, num1, num2) {
//   var answer = numbers.slice(num1, num2 + 1);
//   return answer;
// }
// numbers = [1, 2, 3, 4, 5];
// console.log(solution(numbers, 1, 3));

//배열 원소의 길이
//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

// function solution(strlist) {
//   var answer = [];
//   for (let i = 0; i < strlist.length; i++) {
//     answer.push(strlist[i].length);
//   }
//   return answer;
// }

// strlist = ["We", "are", "the", "world!"];
// console.log(solution(strlist));

//배열 뒤집기
//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
// function solution(num_list) {
//   var answer = [];
//   for (let i = num_list.length - 1; i >= 0; i--) {
//     answer.push(num_list[i]);
//   }
//   return answer;
// }

//최댓값 만들기 (1)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  var num1 = 0;
  var num2 = 0;
  for (let i = 0; i < numbers.length; i++) {
    //기존에 있던게 저장?
    //다른 조건 한개가 더 필요해 보임 -> 지금은 1,2가 같은 값일듯
    if (numbers[i] >= num1 || numbers[i - 1] >= num2) {
      //값을 교체
      num1 = numbers[i];
      num2 = numbers[i - 1];
    } else {
      //값을 교체하지 않고 그대로 유지
    }
  }
  return num1 * num2;
}

function solution(numbers) {
  var num1 = numbers[0];
  var num2 = numbers[1]; //
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] >= num1) {
      num1 = numbers[i];
    } else if (numbers[i - 1] >= num2) {
      num2 = numbers[i - 1];
    }
  }
  return num1 * num2;
}
numbers = [2, 4, 77, 52, 73, 3];
//numbers = [0, 31, 24, 10, 1, 9];
console.log(solution(numbers));

//최댓값 만들기 (1)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  var answer = 0;
  return answer;
}
numbers = [2, 4, 77, 52, 73, 3];
//numbers = [0, 31, 24, 10, 1, 9];
console.log(solution(numbers));
