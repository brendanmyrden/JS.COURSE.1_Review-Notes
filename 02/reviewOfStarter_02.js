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


