'use strict';

function logger (){
    console.log(`My name is Brendan, I am a programmer.`);
}

logger(); // This is named : calling, invoking, or running the function


// FUNCTIONS 

function veggieStirfry (broccoli, carrot) {

    const mix = console.log(`Stirfry with ${broccoli} ${broccoli === 1 ? `piece` : `pieces`} of broccoli and ${carrot} ${carrot === 1 ? `piece` : `pieces`} of carrot.`);
    
    return mix; 
}

const vegMix = veggieStirfry(1,4);

const broccoliMix = veggieStirfry(7, 0);


function animalLover (dogs, cats, horses, rabbits) {

    const pets = console.log(`We have ${dogs} ${dogs === 1 ? `dog` : `dogs`}, ${cats} ${cats === 1 ? `cat` : `cats`}, ${horses} ${horses === 1 ? `horse` : `horses`}, and ${rabbits} ${rabbits === 1 ? `rabbit` : `rabbits`} on our ranch!`);

}

const manyAnimals = animalLover(5, 6, 1, 3);
const aCoupleAnimals = animalLover(2, 2, 0, 1); // Because the template string is built into the function and is wrapped by console.log() it is printed automatically in the dev console.


// FUNCTION DECLARATIONS

function whatIsYourName (nameOfPerson) {
    const name = console.log(`Your name is ${nameOfPerson}, what a great name!`);
}

whatIsYourName(`Bernard`);


// FUNCTION EXPRESSION

// example 1

const middleName = function (inputMiddleName) {
    const mName = console.log(`Your middle name is ${inputMiddleName}.`);
    return mName;
}

const lindasMiddleName = middleName(`Jessica`);
const johnsMiddleName = middleName(`Francis`);


// example 2

const freeThisNation = function (nationName) {
    const inNeedOfFreedom = console.log(`${nationName} is in need of true freedom.`);
}

const canadianFreedom = freeThisNation(`Canada`);
const chineseFreedom = freeThisNation(`China`);


// example 3

const sentence = function (wordsOfSentence) {
    const whatIWantToSay = console.log(`This is the phrase I want to say : "${wordsOfSentence}."`);
}


const sentence_1 = sentence(`You are an incredible creation, the creator told me so. Value is set by scarcity and there is only one of you. You're rare`);

const sentence_2 = sentence(`I am an incredible creation, the creator told me so. Value is set by scarcity and there is only one of me. I'm rare`);


// example 4

const foodInFridge = function (whatDoWeHaveToEat) {
    const food = `The foods available to eat are ${whatDoWeHaveToEat}`;
    return food;
}

const fridge_1 = foodInFridge(`apples, pears, and cheese.`);

const fridge_2 = foodInFridge(`yogurt, palm hearts, and okra.`);

console.log(fridge_1);
console.log(fridge_2);


// ARROW FUNCTIONS 

//ex 1

const amtOfYearsInSchool = grade => 13 - grade;

const cindy = amtOfYearsInSchool(2);
const lucas = amtOfYearsInSchool(4);
const bettis = amtOfYearsInSchool(9);

console.log(`Cindy has spent ${cindy} years in school.`);
console.log(`Cindy has spent ${lucas} years in school.`);
console.log(`Cindy has spent ${bettis} years in school.`);


// ex 2

const amtOfCandiesEaten = (totalCandies, leftOverCandies) => totalCandies - leftOverCandies; 

const bensAmt = amtOfCandiesEaten(60, 20);

console.log(`The amount of candies Ben has eaten today are ${bensAmt}.`);


// ex 3

const currentYear = 2024;

const yearsSinceGraduating = yearOfGrad => currentYear - yearOfGrad;
const forSheila = `It has been ${yearsSinceGraduating(2000)} years since Sheila graduated.`;
const forSam = `It has been ${yearsSinceGraduating(1988)} years since Sam graduated.`;

console.log(forSheila);
console.log(forSam);


// ex 4

const fast = (firstName, lengthOfFast, daysCompleted) => {

    const isTheFastComplete = lengthOfFast === daysCompleted;
    const daysRemaining = lengthOfFast - daysCompleted;
    return `It is ${isTheFastComplete} that the fast is now completed. There is officially ${daysRemaining} days left in ${firstName}'s fast.`;
}

const myFast = fast(`Jordan`, 22, 6);
const petesFast = fast(`Pete`, 40, 40);

console.log(myFast);
console.log(petesFast);


// ex 5

const whenWillTheMailCome = (amtOfDaysToDeliver, amtOfDaysSinceOrdered) => {
    const daysleft = amtOfDaysToDeliver - amtOfDaysSinceOrdered;
    return `The package you ordered will arrive in the mail in ${daysleft} days.`;    
}

const amazonPackage = whenWillTheMailCome(13, 3);
const sephoraPackage = whenWillTheMailCome(10, 8);

console.log(amazonPackage);
console.log(sephoraPackage);


// ex 6

const addTheNumbers = (a,b) => `The result of this equation is ${a + b}.`;

const firstEquation = addTheNumbers(3,6);
const secondEquation = addTheNumbers(5,5);

console.log(firstEquation);
console.log(secondEquation);


// FUNCTIONS WITHIN FUNCTIONS

const gardenArrangment = 
