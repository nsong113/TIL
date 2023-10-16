// function solution(s) {
//   var answer = true;
//   // 1. 대문자로 통일
//   s = s.toUpperCase();

//2. for문을 통해서 문자열의 요소 하나하나씩을 비교
//2-1 p,y비교
//   var num = 0;
//   for (var i = 0; i < s.length; i++) {
//     //여기에서 비교하기
//     if (s[i] === "P") {
//       num++;
//     }
//     if (s[i] === "Y") {
//       num--;
//     }
//   }

//3. 개수체크 (p와 y의 개수가 같은지 체크)
//   if (num === 0) {
//     answer = true;
//   } else {
//     answer = false;
//   }
//   return answer;
// }

// var string1 = "pPoooyyY";
// var string2 = "Pyy";

// console.log(solution(string1));

///test 02

//어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
//[4,7,12]
//[true,false,true]
//[1,2,3]
//[false,false,true]

function solution(absolutes, signs) {
  //1.return해야하는 answer생성
  var answer = 0;
  //2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
  //2-1. 두 배열은 크기가 같음
  for (var i = 0; i < absolutes.length; i++) {
    //부호(+ -)에 따라서 처리
    if (signs[i] === true) {
      //값이 true인 경우 (양수)
      answer = answer + absolutes[i];
    } else if (signs[i] === false) {
      //값이 false인 경우 (음수)
      answer = answer - absolutes[i];
    }
  }
  //3. 출력
  return answer;
}
var absolutes = [4, 7, 12];
var sings = [true, false, true];
console.log(solution(absolutes, sings));

//문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
//
