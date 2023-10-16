/*

//strict mode
// forbids us to do certainthings, it will actually create visible errors for us in certain situation
'use strict';  //activate, 코드 가장 첫 줄에 적어야 함, error를 줄여줌

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive')


//const interface = 'audio';

const if= 25;





//function

function logger() {
    console.log('my name is jiu');
}
//calling. running. invoking the function
logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges `;
    return juice; //return any value from the function
}

//매개변수:parameter
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//actual parameter = argument
console.log(fruitProcessor(5, 0))


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)




'use strict'

//function declaration 
function calcAge1(birthYear) {
    //const age = 2027 - birthYear;
    return 2037 - birthYear;
}
const age1 = calcAge1(1996);
console.log(age1);       //41


//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
console.log(calcAge2); // 함수 그대로 출력

const age2 = calcAge2(1996);
console.log(age2);    //41


'use strict'

//arrow function
const calcaAge3 = birthYear => 2037 - birthYear;   
// => return
const age3 = calcaAge3(1996);
console.log(age3)  //=>41



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1996, 'Song'));  //=>Song retires ini 24 years


'use strict'

//one function from inside another function/ function calling other functions.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges `;
    return juice;
}
console.log(fruitProcessor(2, 3));





const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return -1;  //-1이나 999는 a standard number in programming, means 'no meaning'
        console.log(`${firsName} has already retired`)
    }
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1950, 'Song'));  //=>Song retires in 24 years



//introduction to array -big container (data structure:array&object)
const friend1 = 'jiu';
const friend2 = 'steven';
const friedn3 = 'peter';
//=동일
//literal syntax
const friends = ['jiu', 'steven', 'peter'];
console.log(friends);


//array can hold as many as value we want and also any type of value can be held
const yearsy = new Array(1991, 1982, 1922);

//how to create array:
//불러올 때 순서가 0,1,2,3,4,,,이고 []안에 넣으면 된다. 
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);  //=>3 , property, amount of element in the array, not 0 base
console.log(friends[friends.length - 1])  //->가장 마지막꺼 가져오는 법



//mutate the exsist array 값 변경
friends[2] = 'jay';
console.log(friends)   //=>jiu, steve, jay
//array전체를 대체할 수는 없다



//array can hold diff types of values at the same time
const firstName = 'jiu';
const jiu = [firstName, 'song', 2032 - 1996, 'student', friends];
console.log(jiu);
console.log(jiu, length);




//exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);




//array methods: built in function that we can apply directly on arrays
const friends = ['jiu', 'steven', 'peter'];

//push: adds elements to the end of an array
friends.push('Jay')
console.log(friends);  //=>["jiu", "steven", "peter", "Jay"]

//indexOf: in which position a certain element is in the array
console.log(friends.indexOf('steven'));  //=>1 (steven의 위치)
console.log(friends.indexOf('bob'));    //=>-1 (array에 없는 value를 입력하면 -1)


//includes: instead of returning the index of the element, will simply return the true if the element is in the array and false if it's not
friends.push(23);
console.log(friends.includes('steven'));  //true
console.log(friends.includes('bob'));  //false
console.log(friends.includes(23));  //true



if (friends.includes('peter')) {
    console.log(`you have a friend called peter`);
}




//object : we define key value pairs, and so then we can give each of these values a name.
//{define new object}
//각각의 firstName property with the value of jiu
//jiu has 5 properties
//retreive할 때 order상관 없다.
//이름으로 retrieve하기
const jiu = {
    firstName: 'jiu',
    lastName: 'song',
    age: 2037 - 1996,
    job: 'student',
    friends: ['michel', 'peter', 'steven']
};


//how to retrive the object

//dot notation : getting a property from a object
console.log(jiu.lastName);   //.의 의미: jiu로 가서 lastname을 실행시켜라, 실제의 이름만이 들어갈 수 있다. real final property name을 사용해야함, 일반적으로 이거 사용

//bracket notation
console.log(jiu['lastName']);  //[ ] 안에 어떤 expression을 다 넣을 수 있다. 특히, operaton을 넣을 수 있다.

//bracket을 이용- 공통 property name사용하기
//bracket안에는 expression이 들어간다.
const nameKey = 'Name';
console.log(jiu['first' + nameKey]);
console.log(jiu['last' + nameKey]);
//console.log(jiu.'last' + nameKey) ->안먹혀




const interestedIn = prompt('what do you want to know about Jiu? choose between firstName, lastName, age, job, and friends');
console.log(jiu.interestedIn);  //=>undefind: try to get access to the object that does not exsist.
console.log(jiu[interestedIn]);  //-> 창에 job치면 콘솔창에 student나와


if (jiu[interestedIn]) {
    console.log(jiu[interestedIn]);
} else {
    console.log('Wrong request! choose between firstName, lastName, age, job, and friends');
}



//add new property
jiu.location = 'Korea';
jiu['twitter'] = '@jiusong';
console.log(jiu); //=> 위에 두개가 추가됨..


//chanllenge
//"jiu has three friends, and jis best friend is called michel" 17
console.log(`jiu has ${console.log(jiu, friends(length))}, and her best friend is called ${console.log(jiu, friends(0))}`) //x
console.log(`${jiu.firsName} has ${jiu.friends.length} friends, and her best friends is called ${jiu.friends[0]}`) //o





//object method: any function that is attatched to an object is called a method
//function is just another type of value
//add function to object  (expression only)

const jiu = {
  firstName: "jiu",
  lastName: "song",
  birthYear: 1996,
  job: "student",
  friends: ["michel", "peter", "steven"],
  hasDriverLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   }, // expression 먹힘

  //   function calcAge (birthYear) {
  //     return 2037 - birthYear;
  //   }, //declaration 안먹힘

  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   }, // expression 먹힘

  calcAge: function () {
    this.age = 2037 - this.birthYear; //jiu.age의 property를 새로 만들어
    return this.age;
  }, // expression 먹힘
};
//this keyword: equal to the object on which the method is called, in other words, it is equal to the object calling the method

console.log(jiu.calcAge());
//console.log(jiu["calcAge"](1996));

console.log(jiu.age);
console.log(jiu.age);
console.log(jiu.age);

//challenge
//'jonas is a 46-year old teacher, and he has a driver's license'

const jonas = {
  firstName: "jonas",
  birthYear: 1991,
  job: "teacher",
  hasDriverLicense: true,

  age: function () {
    return 2037 - this.birthYear;
  },

  driverLicense: function (hasDriverLicense = true) {
    return "has a driver's license";
  }else{
      return "has not a driver's license.";
    }
};
console.log(
  `jonas is a ${jonas.age()}-years old ${
    jonas.job
  }, and he ${jonas.driverLicense()}`
);
*/
"use strict";

//loop: control structure: automate repetitive tasks.
//for loop: for (initial value)
////for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
