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


// FALSY VALUES : false, 0, '' (an empty string), undefined, null, NaN

// TRUTHY VALUES : true, any number other than 0, any filled in string, an empty object (all true once converted to boolean)

// EXAMPLE

const money = 0;

if(money){
    console.log(`You have plenty, but don't spend it all!`);
} else {
    console.log(`You have no money, go and earn some!`);
}

// else is executed because 0 is a falsy value


let height;

if (height){
    console.log(`Yes, the variable 'height' is defined.`);
} else {
    console.log(`No, the variable 'height' is not defined.`);
}

// variable height is undefined, second statement will print


// EQUALITY OPERATORS

const yellow = 'This is a color';
if(yellow === 'This is a color') console.log(`Yellow is a great color to choose.`);

const favouriteNumber = 22;
if (favouriteNumber === 22) console.log(`Why is your favourite number 22?`);

console.log(favouriteNumber);


// PROMPTS

// const fav = Number(prompt("What is your favourite number?")); // commented out bc of consistent need to fill the prompt each time the console is opened
// console.log(fav);


// BOOLEANS, &&, ||, ! OPERATORS

const hasEatenSupper = false; //VAR A
const hasGoodFood = true; // VAR B

console.log(hasEatenSupper && hasGoodFood);

console.log(hasEatenSupper || hasGoodFood);

console.log(!hasEatenSupper); // will display the opposite in console


const shouldEat = !hasEatenSupper && hasGoodFood;

if (shouldEat) {

   console.log(`John ought to have a meal!`)

} else {

    console.log(`John's already ate, but needs to head to the grocery store to get his next meal to cook.`)
}


const isNotLazy = true // VAR C

console.log(!hasEatenSupper && hasGoodFood && isNotLazy);

if(!hasEatenSupper && hasGoodFood && isNotLazy) {

    console.log(`John should prepare and eat a good meal.`);

} else {

    console.log(`John doesn't need to prepare a meal right now.`);
}


// THE SWITCH STATEMENT

const task = `trade`; // try 'lol' to get default message

switch (task) {

    case `code`:
    console.log(`Today is a day for coding`);
    break;

    case `trade`:
    console.log(`Today is a day for trading`);
    break;

    case `music`:
    console.log(`Today is a day for music`);
    break;

    default:
    console.log(

`This is a default message. 

Attempt doing a useful task, regardless of what it is.`);
    
    break;
                }


// EXAMPLE 2

const familyMember = `dad`;

switch (familyMember) {

    case `mom`:
    console.log(`There is a mom in this family.`);
    break;

    case `dad`:
    console.log(`There is a dad in this family`);
    break;

    case `brother`:
    console.log(`There is a brother in this family`);
    break;

    case `sister`:
    console.log(`There is a sister in this family`);
    break;

    default:
    console.log(`There are members in this family but they are not defined. 
    
This is a default message.`); 

break;

}


// EXAMPLE 2 but as an IF / ELSE Statement

const famMember = `mom`;

if(famMember === `mom`) {

    console.log(`There is a mom in this family.`);

} else if (famMember === `dad`) {

    console.log(`There is a dad in this family`);

} else if (famMember === `brother`) {

    console.log(`There is a brother in this family`);

} else if (famMember === `sister`) {

    console.log(`There is a sister in this family`);

}


// The CONDITIONAL / TERNARY OPERATOR

// Ex 1

const ageOfPerson = 24;

ageOfPerson >= 21 ? console.log(`This person is over 20 years old.`) : console.log(`This person is under 20 years old.`);

// Ex 2

const hasWritingUtensil = true;

hasWritingUtensil === true ? console.log(`This student has a writing utensil.`) : console.log(`This student does not have a writing utensil.`);

// Ex 3

const yearBorn = 2002;

yearBorn >= 2000 ? console.log(`This person was born in the 21st century.`) : console.log(`This person was born in the 20th century.`);

// ______________________________


// Simplier form of CONDITIONAL / TERNARY OPERATOR 

const levelCompleted = 12;

const completedHighSchool = levelCompleted === 12 ? 'Yes, the last level was completed' : 'No, there are still levels to complete';

console.log(completedHighSchool);


const heightInFeet = 6.2;

const tallEnoughForRide = heightInFeet >= 5 ? `Yes this person is tall enough to ride.` : `No, you must be over 5 feet tall to ride.`

console.log(tallEnoughForRide);


// OR 

let tallEnough;

if(height >= 5){

    tallEnough = `Yes.`

} else {

    tallEnough = `No.`
}

console.log(tallEnough);

console.log();


// FURTHER CONDITIONALS

const hr = 1;
console.log(`The ${hr >= 4 ? `birds are` : `birds are not`} awake`);

//

const hasItBeenSeasoned = false; // try true

console.log(`${hasItBeenSeasoned === false ? `Yes I will have some` : `No thank you, my meal is already seasoned with`} salt and pepper`);


const amtOfExerciseInMinutes = 55;

console.log(`This amount of excercise is considered ${amtOfExerciseInMinutes >= 50 && amtOfExerciseInMinutes <= 60 ? `within the optimal range.` : `outside of the optimal range.`}`);


dayOfWeekByNumber = 3;

const isItPastMidWeek = dayOfWeekByNumber >= 4 ? `Yes, it is past mid week` : `No it has not past mid week as yet.`

