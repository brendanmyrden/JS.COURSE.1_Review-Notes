// ALERTS

let alerting = 'I Am Alert';

// if(alerting === "I Am Alert") alert (`Stay alert, your enemy prowls like a roaring lion looking for someone to devour.`)


// NUMBERS, STRINGS

console.log(2 + 10 + 4 + 1);

var firstName = `Joe`;
// console.log(firstName);

var firstName = `Fib`;
console.log(firstName); 

// Can reassign without using let or const

const myFirstJob = `Mowing Lawns`;
const myCurrentJob = `Front End Programmer`;


// BOOLEAN, REASSIGNING

let jsIsFun = true;
jsIsFun = `Yep, it's fun if you stay with it!`; // To reassign you don't need to use a let or var, just the variable name. No using const.

console.log(jsIsFun);


// UNDEFINED

let yes;
console.log(yes);

yes = `Sure`;
console.log(yes);
console.log(typeof yes);


// MATH OPERATORS, STRING CONCATONATION

const thisYear = 2023;
const brendansBirthYear = 1994;
const brendansAge = thisYear - brendansBirthYear;

console.log(`Brendan's age turns out to be ${brendansAge}`); // Template string example

console.log(brendansAge * 2, 2 ** 3);


lastName = `Myrden`;
console.log(firstName + ' ' + lastName);
// better way is a template string


// ASSIGNMENT OPERATORS 

let x = 10 + 6;
console.log(x);

x += 10;
console.log(x);

x -= 1;
console.log(x);

x *= 4;
console.log(x);

x /= 4;
console.log(x);

x ++;
console.log(x);

x --;
console.log(x);


// COMPARISON OPERATORS

sarahsAge = 19;

console.log(brendansAge > sarahsAge); // boolean 
console.log(brendansAge >= 19); // boolean

const isLegalAgeToDrink = brendansAge >= 19;
console.log(isLegalAgeToDrink);


// AVERAGES

averageAge = ((brendansAge + sarahsAge) / 2);
console.log(averageAge);


// STRINGS : TEMPLATE LITERALS

firstName = "Bren";
console.log(firstName); 

const job = `full time programmer`;
const birthYear = 1994;
const yearNow = 2023;

const brendanString = `${firstName} is a ${job} born in ${birthYear}. He is currently ${yearNow - birthYear} years old.`;
console.log(brendanString);


// Regular strings, Strings with multiple lines

console.log(`This is a regular string`);

console.log(`This is 
a
string
with
multiple
lines. 
Tada!`);


// DECISIONS , IF / ELSE STATEMENTS

const age = 11;
const isOldEnough = age >= 16;
const nameOf = `Felix`;

if(isOldEnough){
    console.log(`${nameOf} is old enough to get his driver's permit.`);
} else {
    const yearsLeftToGo = 16 - age;
    console.log(`${nameOf} isn't old enough to get his driver's permit. He has ${yearsLeftToGo} years left to go!`);
}


const billsBirthyear = 1980;
const newName = `Bill`;
let century;

if(billsBirthyear >= 2000) {
    century = 21
    console.log(`${newName} was born in the ${century}st century!`);
} else {
    century = 20
    console.log(`${newName} was born in the ${century}th century!`);
}


// CONVERTING STRINGS TO NUMBERS

newNumber = Number('22'); // The number appears purple/blue in the console because it is computed as a number
console.log(newNumber);

newString = String(23);
console.log(newString); // The 'number' appears white in the console because it is computed as a string


// TYPE COERCION

console.log(`I am ` + 29 + ` years of age.`);

console.log('24' - '4' - 2); // 18

console.log('23' * '2'); // 46

console.log(2 + 4 + '5');

console.log('10' - '4' - 2 + '2'); // 42



