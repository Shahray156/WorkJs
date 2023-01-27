// 1.

let f = 10;
alert(f);

f = 20;
alert(f);

// 2.

const YearOfIssue = 2007;
console.log(YearOfIssue);

// 3.

const name = "Brendan Eich";
console.log("Brendan Eich");

// 4.

let num1 = 10;
let num2 = 2;
let sum = num1+num2;
alert(sum);
let diff = num1-num2;
alert(diff);
let mult = num1*num2;
alert(mult);
let div = num1/num2;
alert(div);

//5.

let result = 2 ** 5;
alert(result);

//6.

let a = 9;
let b = 2;
let remainder = 9 % 2;
alert(remainder);

//7.

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8.

let age = prompt('Сколько вам лет?');
alert(age);

//9

const user = {
    name: "Diana",
    age: 25,
    isAdmin: false,
    "city of residence": "Moscow",
};
user["city of residence"] = 'Moscow';
delete user.cityOfResidence;
user["age"] = 26;
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert( user[info] );

// 10

let hello = prompt('Как вас звоут?');
alert('Привет ${userName}'+ '!');


