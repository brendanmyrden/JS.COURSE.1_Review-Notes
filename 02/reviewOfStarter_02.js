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

// example 1, practice attempt

// const coralFragmentation = function (numOfSpecifiedCoral, numOfFrags){
//     const finalAmtOfCorals = numOfSpecifiedCoral * numOfFrags;
//     return console.log(`This coral has been fragmented into ${finalAmtOfCorals} pieces`);
// }

// final concluded function

const coralFragmentation = function (numOfSpecifiedCoral, amtDividedInto) {
    return numOfSpecifiedCoral * amtDividedInto;
}

// const brainCoral = 1;
// const bubbleCoral = 4;
// const stagHornCoral = 2;
// const honeyCombCoral = 8;

// const brainCoralFrags = coralFragmentation(brainCoral, 6);
// const bubbleCoralFrags = coralFragmentation(bubbleCoral, 2);
// const stagHornCoralFrags = coralFragmentation(stagHornCoral, 3);
// const honeyCombCoralFrags = coralFragmentation(honeyCombCoral, 8);

const coralCollection = function (brainCoral, bubbleCoral, stagHornCoral, honeyCombCoral) {

        const brainCoralFrags = coralFragmentation(brainCoral, 6);
        const bubbleCoralFrags = coralFragmentation(bubbleCoral, 2);
        const stagHornCoralFrags = coralFragmentation(stagHornCoral, 3);
        const honeyCombCoralFrags = coralFragmentation(honeyCombCoral, 8);

    return console.log(`This collector has a aquarium with ${brainCoralFrags} brain corals, ${bubbleCoralFrags} bubble corals, ${stagHornCoralFrags} stagHorn corals, and ${honeyCombCoralFrags} honeycomb corals. Awesome collection!`);

}

const janesCoralCollection = coralCollection(1,4,2,8);
const arnieCoralCollection = coralCollection(6,4,3,7);

// successful


// example 2

function cutThePizzaPlease (numOfPizzas){
    return numOfPizzas * 8;
}

function pizzaParty (pizzasDeliveredByBigBite, pizzasDeliveredByGreco) {
    
    const piecesOfBigBitePizza = cutThePizzaPlease(pizzasDeliveredByBigBite); 
    const piecesOfGrecoPizza = cutThePizzaPlease(pizzasDeliveredByGreco);
    
    return console.log(`There are ${piecesOfBigBitePizza} pieces of pizza from Big Bite and there are ${piecesOfGrecoPizza} pieces from Greco. Enjoy!`);
}

const johnnysParty = pizzaParty(4, 1);
const jennysParty = pizzaParty(10, 5);

// successful


// example 3

const cutWoodForFire = (woodProvided) => woodProvided * 4;

const leggeFamilysWood = 10;
const johnsonFamilyWood = 4;
const xiFamilyWood = 2;

function communalFireWoodContribution (leggeFamilysWood, johnsonFamilyWood, xiFamilyWood) {

    const leggeFamilyWoodPieces = cutWoodForFire(leggeFamilysWood);
    const johnsonFamilyWoodPieces = cutWoodForFire(johnsonFamilyWood);
    const xiFamilyWoodPieces = cutWoodForFire(xiFamilyWood);

    return console.log(`The total amount of pieces provided are ${leggeFamilyWoodPieces + johnsonFamilyWoodPieces + xiFamilyWoodPieces}.`)

};

communalFireWoodContribution(leggeFamilysWood, johnsonFamilyWood, xiFamilyWood);


// IF / ELSE ( With Return Statement )

const calcAge = (birthYear) => 2023 - birthYear;

function howManyYearsTillNinety (birthYear, firstName) {
    const age = calcAge(birthYear);
    const yearsUntil = 90 - age;

    if (yearsUntil > 0) {
        console.log(`${firstName} has ${yearsUntil} years until they are ninety years old.`)
        return yearsUntil;
    } 

    else {
        console.log(`${firstName} is already ${age > 90 ? `already passed` : `are`} ninety years old.`)
        return -1;
    }
}

const jim = howManyYearsTillNinety(1992, `Jim`);
const viv = howManyYearsTillNinety(1943, `Viv`);


// DATA STRUCTURES 
// ARRAYS - Same Value Type

// Arrays are zero based

const schoolGrades = new Array ('A','B','C','D','E','F');
console.log(schoolGrades);

const petNames = ['Terrain','Felip','Tuckamore','Peppy'];
console.log(petNames);

const acidNeutralBase = [0, 7.5, 14];
console.log(acidNeutralBase);


console.log(schoolGrades[0]);
console.log(schoolGrades[3]);

console.log(petNames[1]);
console.log(petNames[2]);

console.log(acidNeutralBase[1]);


console.log(acidNeutralBase.length); // not zero based
console.log(schoolGrades.length) // not zero based
console.log(petNames[petNames.length - 1]);  // use to find the last element in the array

petNames[1] = 'Nero';
console.log(petNames);



// ARRAYS - Different Value Types

const sallysFriends = ['Tilly', 'Georgiana','Sue','Velona']; 
const sally = ['Sally', 24, 2023 - 1990, true, sallysFriends];

console.log(sally);


// ARRAY EXERCISES

//

const calcAgeDifferently = function (birthYear) {
    const age = 2023 - birthYear;
    return age;
}

const birthYearArray = [1990, 1982, 1962, 1945, 2006];


const samsAge = calcAgeDifferently(birthYearArray[0]);

const momsAge = calcAgeDifferently(birthYearArray[1]);

const dadsAge = calcAgeDifferently(birthYearArray[2]);

const joesAge = calcAgeDifferently(birthYearArray[3]);

const sistersAge = calcAgeDifferently(birthYearArray[4]);

console.log(samsAge, momsAge, dadsAge, joesAge, sistersAge);


//

const calcAgeAnotherWay = function (birthYear) {
    const age = 2023 -birthYear; 
    return age;
}

const newAges = [calcAgeAnotherWay(birthYearArray[0]), calcAgeAnotherWay(birthYearArray[1]), calcAgeAnotherWay(birthYearArray[2]), calcAgeAnotherWay(birthYearArray[3]), calcAgeAnotherWay(birthYearArray[birthYearArray.length - 1])];

console.log(newAges);


// ARRAY OPERATIONS - BASICS

// ADD / PUSH / To Last

const paulsFriends = ['John', 'Mike', 'Seta', 'Fero'];
paulsFriends.push('Ricardo');

console.log(paulsFriends);

// ADD / To Front

paulsFriends.unshift('Jerry');
console.log(paulsFriends);


// SUBTRACT / REMOVE / From Last

paulsFriends.pop();
console.log(paulsFriends);

// SUBTRACT / REMOVE / From First 

paulsFriends.shift();
console.log(paulsFriends);

// LOCATION OF

paulsFriends.indexOf('Mike');

// BOOLEAN, Uses Strict Equality

paulsFriends.includes('Seta');

paulsFriends.push(22);
paulsFriends.includes('22'); // Uses strict equality
console.log(paulsFriends);

if(paulsFriends.includes('Fero')) {
    console.log(`Paul has a friend named Fero.`);
};


const yeshua = [`The Way`, `The Truth`, `The Life`];
console.log(yeshua);

if(yeshua.includes (`The Way`)) {
    console.log(`Yeshua is the Way, the Truth, and the Life.`)
};


// SWITCH STATEMENT 

const animal = `cheval`;

switch(animal) {

    case `vache`:
    console.log(`C'est une vache`); 
    break;

    case `chien`:
    console.log(`C'est un chien`);
    break;

    case `chat`:
    console.log(`C'est un chat`);
    break;

    case `cheval`:
    console.log(`C'est un cheval`); 
    break;
    
    default: 
    console.log(`Chosi un animal si voit plait!`);
    break;

}


const favouriteClass = `gym`;

switch (favouriteClass) {

    case `gym`:
        console.log(`My favourite class at school is gym`);
        break;

    case `physics`:
        console.log(`My favourite class at school is physics`);
        break;

    case `biology`:
        console.log(`My favourite class at school is biology`);
        break;

    case `french`:
        console.log(`My favourite class at school is french`); 
        break;

    default :
        console.log(`You must choose a class as your favourite. This is a default message.`)
        break;

}


const switchNames = `Jill`;

switch (switchNames) {

    case `Jack`:
        console.log(`My name is Jack`);
        break;

    case `Jefferson`:
        console.log(`My name is Jefferson`);
        break;

    case `Imit`:
        console.log(`My name is Imit`);
        break;

    case `Freeda`:
        console.log(`My name is Freeda`);
        break;

    case `Jill`:
        console.log(`My name is Jill`);
        break;

    default :
        console.log(`This is a default message. There is no name chosen.`);
        break;

}


// CONDITIONAL / TERNARY OPERATORS

// ex 1

const numberOfFamilyMembers = 7;

numberOfFamilyMembers >= 4 ? console.log(`I have a large family.`) : console.log(`My family is of normal statistical size.`);

// ex 2

const whatIsTheWeather = `rain and clouds`;

whatIsTheWeather === `rain and clouds` ? console.log(`The weather is rainy and overcast with clouds today.`) : console.log(`The weather is sunny today.`);

// ex 3

const numGreaterThanTen = 21;

numGreaterThanTen >= 10 ? console.log(`Yes, the number is greater than 10. Standing at ${numGreaterThanTen}`) : console.log(`No, the number isn't greater than 10. Standing at ${numGreaterThanTen}.`);

// ex 4

const isTheEarthHeadedForImplosion = true;

isTheEarthHeadedForImplosion === true ? console.log(`We have to completely change our trajectory with haste.`) : console.log(`There is truly nothing to worry for.`);


// ARRAYS - Working with

// Functions and Arrays

const worldPopulation = 7846000000

const percentageOfWorldPopulation = function (population) {

    const percentage = ((population / worldPopulation) * 100).toFixed(2);
    return percentage;

}

const listOfPopulations = [1439323776, 1380004385, 331002651, 273523615, 220892340];


const chinasPopulation = percentageOfWorldPopulation(listOfPopulations[0]);
const indiasPopulaton = percentageOfWorldPopulation(listOfPopulations[1]);
const unitedStatesPopulation = percentageOfWorldPopulation(listOfPopulations[2]);
const indonesiaPopulation = percentageOfWorldPopulation(listOfPopulations[3]);
const pakistanPopulation = percentageOfWorldPopulation(listOfPopulations[4]);

console.log(`China has ${chinasPopulation} % of the worlds population.`);
console.log(`India has ${indiasPopulaton} % of the worlds population.`);
console.log(`The United States of America has ${unitedStatesPopulation} % of the worlds population.`);
console.log(`Indonesia has ${indonesiaPopulation} % of the worlds population.`);
console.log(`Pakistan has ${pakistanPopulation} % of the worlds population.`);

// Operators

const cats = [`Chilli`, `Turbo`, `Fish Bandit`, `Chomper`, `Tootles`];
console.log(cats);

cats.push(`Pickle`);
console.log(cats);

cats.unshift(`Cherry`, `Gelato`);
console.log(cats);

cats.shift(`Cherry`);
console.log(cats);

const names = [`Jim`, `Jeff`, `Pip`, `Jamima`];
names[2] = `Ricardo`;

console.log(names);
if(names.includes(`Jim`) ? console.log(`Yes, Jim is on the list.`) : console.log(`No, Jim is not included in this list.`));


// OBJECTS

const objectOfLivingSpecies = {

    mainTitle: 'Biota',
    mainSpecies: [`Animalia`, `Archaea`, `Bacteria`, `Chromista`, `Fungi`, `Plantae`, `Protozoa`],
    specifiedKingdoms : 7,
    subKingdoms : 3,
    correctInformation : true,
}

console.log(objectOfLivingSpecies);


const personalObject = {

    name: `Benji`,
    occupation: 'Programmer',
    interests: [`Music`, `Future Technologies`, `Spiritual Life`, `Nutrient Intake`],
    isThisAHuman: true,
    birthYear: 1994,
    currentYear: 2023,
    
    // Example of - OBJECT METHOD

    calcAge: function() {
        console.log(this);
        return currentYear - this.birthYear;
    }

    // calcAgeOfPerson: function (birthyear, currentYear) {
    //     const age = currentYear - birthyear;
    //     return age;
    // }
}

console.log(personalObject);
console.log(personalObject.calcAge());

// Each pair within the object are labeled a key/value pair. Before the colon (:) being the key, and after the colon(:) being the value attached. 









