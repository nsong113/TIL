/*

let js = 'amazing';
//if (js === 'amazing') alert('Javascript is FUN!');

console.log(40 + 8 + 23 - 10);

//value: piece of data-smallest unit of information -> store them in variable
console.log('Jonas');
console.log('23');




let firstname = "Jiu"
//declaring a variable
//box named firstname in putted something called Jonas (label)
console.log(firstname);
console.log(firstname);
console.log(firstname);



let new_new = '27'


let country = 'Korea'
let continent = 'Asia'
let population = 'a lot'
let isLand = 'Jeju'
let languageInKorea = 'Koreans'
console.log(country)
console.log(continent)
console.log(population)
console.log(isLand)
console.log(languageInKorea)






//Primitive Data Types
//-number: floating number -> used for decimals and integers   let age=23;
//string: sequence of characters -> used for text    let firstName='Jiu';
//Boolean: logical type that can only be true or false -> used for taking decision    let fullAge=true;
//undefined: value taken by a variable that is nor yeet defined('empty value')     let children=   ->we declared but without assigning a value;
//null: Also means 'empty value'
//symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
//BingInt (ES2020): Larger integers(정수)) than the Number type can hold



let javascriptIsFun = true;
console.log(javascriptIsFun)

//console.log(typeof true);
//어떤 타입인지 알려주는거 ->string

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 'new_new');


javascriptIsFun = 'YES!';
//value를 나중에 바꾸고 싶으면 선언 없이 바꿀 수 있다.
console.log(typeof javascriptIsFun);


let year;
console.log(year);
// 결과값 undefined
console.log(typeof year)
// 결과값 undefined-empyt value의 타입은 자동적으로 undefined가 된다


year = 1991;
console.log(typeof year)


console.log(typeof null)


let age = 30;
age = 31;









//Basic Operators
//Math operators
//const now = 2037;
//const ageJiu = now - 1996;
//const ageSerah = now - 2006;
//console.log(ageJiu, ageSerah);
//console.log(ageJiu * 2, ageJiu / 10, 2 ** 3)
//2**3 means 2 to the power of 3=2*2*2


const firstName = 'Jiu';
const lastName = 'Song';
console.log(firstName + ' ' + lastName);


//assignment operators
let x = 10 + 5;  //=15
//= : assignment operator
x += 10  //     x = x + 10 =25
x *= 4;  // x = x *4 =100
x++;  // x=x+1  =101
x--;  // =100
console.log(x)



//comparison aperators
console.log(ageJiu > ageSerah)  //->true, false  -    >, < ,=>, =<
console.log(ageSerah >= 18);

const isFullAge = ageSerah >= 18;
console.log(now - 1996 > now - 2023);







//operator Precedence
const now = 2037;
const ageJiu = now - 1996;
const ageSerah = now - 2006;

console.log(now - 1996 > now - 2023);


//left to right operation
console.log(25 - 10 - 5)

//right-to left operation
let x, y;
x = y = 25 - 10 - 5  //x=y=10 (operation right to left), x=10
console.log(x, y)

//calculate
const averageAge = (ageJiu + ageSerah) / 2;
console.log(ageJiu, ageSerah, averageAge);



const country = 'Korea'

const continent = 'Asia'
let population = '51554308'
const isLand = 'Jeju'
const languageInKorea = 'Koreans'

console.log(country / 2)
population++;
console.log(continent)
console.log(population)
console.log(isLand)
console.log(languageInKorea)
const finLand = '6000000'
const averagePopulaton = 330000000;

const description1 =
    country +
    'is in' +
    continent +
    ',and its' +
    population +
    'million people speak' +
    languageInKorea;
console.log(description1)

console.log(population > finLand)  //true)
console.log(population > averagePopulaton)



const description = '${country} is in ${continent}, and its ${population} million people speak ${language}';
console.log(description)



const firstName = 'Jiu';
const job = 'student';
const birthYear = '1996';
const year = '2037';

const jiu = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jiu)


//template string
//we can write a string in a more normal way and then insert the variables into the string, assemble multiple pieces into final string
//backticks``

const jiuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jiuNew)


console.log(`Just a regular string`)

console.log('string with \n\
multiple\n\
lines')
//   \n\ = new line

console.log(`string
multiple
lines`)





//if else control structure
const age = 15;
const isOldEnough = age >= 18;

//if (this variable is true) {this part will be excuted}
if (age >= 18) {
    console.log('Seral can start driving license 🙈')
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)
}



const birthYear = 1996;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);






//type conversion : manually convert from one type to another
//type coercion : js automatically converts types behind the scenes for us


//type conversion
const inputYear = '1996';
const jiu = name
console.log(Number(inputYear) + 18);
//숫자로 변함
console.log(inputYear + 18);
//string + 18


console.log(Number('jiu')); //->NaN   : invalid number
console.log(typeof NaN);


console.log(String(23), 23);  //->color is white : string


//type coercion (강제)
console.log('I am ' + 23 + ' years old');
//중간에 operation (+)가 있으면 js는 자동적으로 숫자를 string으로 바꾼다.
// = console.log('I am ' + String(23) + ' years old')
console.log('23' - '10' - 3);
// -가 자동적으로 string을 숫자로 바꿔줌
console.log('23' * '2')
// converted to number
console.log('23' / '2')
// converted to number



let n = '1' + 1;
n = n - 1
console.log(n);  //=>10




//falsy value : values that are not exactly false, but will become false when we try to convert them into a boolean.
//5 falsy value: 0, '', undefined, null, NaN   <->truthy value
console.log(Boolean(0));  //false
console.log(Boolean(''));  //false
console.log(Boolean(undefined));  //false
console.log(Boolean(null));  //false
console.log(Boolean(NaN));  //false
console.log(Boolean('Jiu'));  //true
console.log(Boolean({}));  //true

//boolean을 쓰는 경우- logical operation, logical context




const money = 0;
if (money) {  // money=0 => falsy value
    console.log("Don't spend it all")
} else {
    console.log('You should get a job')  //executed
}
// => You should get a job
//js는 money라고만 쓰여 있어도 logical context에서는 Boolean으로 해석하려고 한다.




let height;   //undefined=falsy value
if (height) {
    console.log('YAY! height is defined')
} else {
    console.log('HEIGHT IS UNDEFINED')
}




//Equality Operation
const age = '18';
if (age === 18) console.log('You just became an adult (strict)')  //->strict equality operator
//if가 1줄이면 대괄호 굳이 필요 없다

if (age == 18) console.log('You just became an adult (loose)') //->loose equality operator



const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);  //팝업창에 적은거
console.log(typeof favorite)  //-string
//prompt는 팝업(?)띄어주고 console하면 팝업에 사용자가 작성한게 string으로 들어간다

if (favorite == 23) {  //'23'==23
    console.log('cool! 23 is amazing number!') //excuted
}
if (favorite === 23) {  //'23'!==23
    console.log('cool! 23 is amazing number!!') //not excuted
} else if (favorite === 7) {
    console.log('7 is also cool number!')
} else {
    console.log('Number is not 23 or 7')
}



if (favorite !== 23) console.log('Why not 23?')




//boolean Logic
// a AND b : and operator : to return true only if (both A AND B) ALL OF THEM are true.
// a OR b : or operaotr : will be true if the one variable is true
// a NOT b : not operator : acts on only one Boolean value and basically just inverts도치시키다 it. if A is true, it will become false. and if it's false, then NOT a will become true.



const hasDriversLicense = true; //A
const hasGoodVision = false; //B
console.log(hasDriversLicense && hasGoodVision);  //false
//&&= and
console.log(hasDriversLicense || hasGoodVision); //true
//||= or
console.log(!hasDriversLicense);  //false
//! = not
const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Serah is able to drive!')
} else {
    console.log('Someone else should drive..')  // someone else should drive
}



const isTired = true; //c
console.log(hasDriversLicense || hasGoodVision || isTired);




if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Serah is able to drive!')
} else {
    console.log('Someone else should drive..')  // someone else should drive
}







//switch statement: alternitive way of writing a complicated if/else statement. when all we want to do is compate one vlaue to multiple different options. EQUALITY
const day = 'monday';
switch (day) {
    case 'monday':  //day==='monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Writing code examples');
        break;
    case 'friday':
        console.log('Record vider');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}




if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Writing code examples');
} else if (day === 'friday') {
    console.log('Record vider');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!')
}






//statement and expressions

//expression
3 + 4  //=expression (words/word) =>produce value
1991 // expression
true && flase && !false  //expression

//statement: bigger piece of code that is excuter which does not produce a value on itself. complete sentences
if (23 > 10) {
    const str = '23 is bigger';
} //->doesnt really produce value, translate actions


console.log(`i am ${2037 - 1991} years old. ${if (23 > 10) {
    const str = '23 is bigger';
} `)
 //안됨 statement 안에 statement 는 불가능






//conditional operator (ternary)
//allows us to write something similar to an if/else statement but all in one line
//빠른 결정문에는 이게 편리하다, 근 켤정은 if else써야함

const age = 15;
age >= 18 ? console.log('I like to drink wine🍎') :
    console.log('I like to drink water🍏');


const drink = age >= 18 ? 'wine🍎' : 'water🍏';   //age >= 18 ? 'wine🍎' : 'water🍏' 이거 자체는 expression, store the expressing into const, and log this drink to the console
console.log(drink);



//we need to define a drink2 variable outside of if else block.
let drink2;
if (age >= 18) {
    drink2 = 'wine🍎';
} else {
    drink2 = 'water🍏';
}
console.log(drink2);


console.log(`i like to drink ${age >= 18 ? 'wine🍎' : 'water🍏'}`);
//i can put any expression because it produces value








function print() {
    console.log('출력될 내용')
}
print();


function sumNumber(number1, number2) {
    console.log(number1 + number2)
}
sumNumber(10, 20)




function showError() {
    alert('올바른아이디가아닙니다.')
}
//showError();


function sayHi(name1) {
    alert(`${name1} hello`)
}
//sayHi('jiu');


function orHi(name2) {
    const newName = name2 || 'friend';
    const showMsg = `${newName}, hello`;
    alert(showMsg);
}
//orHi();
//orHi('Song');

function orHi(name3 = 'friend') {
    const showMsg = `${name3}, hello`;
    alert(showMsg);
}
//orHi();
//orHi('Song');


function add(value1, value2) {
    return value1 + value2;
    console.log(value1 + value2);
}
add(50, 20);
console.log(sum);
//변수에 함수를 넣은 거


const hello = function () {
    return "Hello";
}
console.log(hello());
//변수를 함수처럼
    //바로 아래에서 불러와야 한다


*/

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Serah can start driving.");
} else {
  const yearLeft = 18 - age;
  console.log(`wait ${yearLeft} years`);
}

const birthYear = 1991;
if (birthYear <= 2000) {
  let cutury = 20;
} else {
  let century = 21;
}

const inputYear = `1996`;

let height;
if (height) {
  console.log("yay");
} else console.log("undefined");

const age = 18;
if (age === 13) console.log("you just became an adult");
