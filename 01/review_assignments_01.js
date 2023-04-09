// Assignments Review

// LET, CONST, VARIABLE TYPES

let city = `Paris`;
const continent = 'Europe';
const population = 2148271;

console.log(city, continent, population);

const isIsland = false;
console.log(typeof isIsland);

let language;


console.log(typeof isIsland, typeof population, typeof continent, typeof city);


// CODING CHALLENGEE - BMI CALCULATOR

let marksMass = 78;
let johnsMass = 92;

let marksHeight = 1.69;
let johnsHeight = 1.95;

let markBMI = Math.round(marksMass / marksHeight ** 2);
let johnBMI = Math.round(johnsMass / johnsHeight ** 2);

// Math.round() function hasn't been taught at this point but because there were about 7 numbers after the decimel I decided to look it up myself searching 'What is the function to round to a whole number in js?' The answer is = Math.round()

if (markBMI > johnBMI) {

    console.log(`Mark's BMI at ${markBMI} is greater than John's BMI at ${johnBMI}`);

} else if (johnBMI > markBMI) {

    console.log(`John's BMI at ${johnBMI} is greater than Mark's BMI at ${markBMI}`);
}

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI, typeof markHigherBMI);

// Example using Conditional / Ternary Operator

const marksIsHigher = markHigherBMI === true ? console.log(`Yes, it is!`) : console.log(`No, it's not!`);


// PART 2

const marksMass_2 = 95;
const johnsMass_2 = 85;

const marksHeight_2 = 1.88;
const johnsHeight_2 = 1.76;

const markBMI_2 = marksMass_2 / marksHeight_2 ** 2;
const johnBMI_2 = johnsMass_2 / johnsHeight_2 ** 2;

// Don't use Math.round() because the number's both will be rounded to 27 and there will be nothing logged to the console.


if (markBMI_2 > johnBMI_2) {

    console.log(`Mark's BMI at ${markBMI_2} is greater than John's BMI at ${johnBMI_2}`);

} else if (johnBMI_2 > markBMI_2) {

    console.log(`John's BMI at ${johnBMI_2} is greater than Mark's BMI at ${markBMI_2}`);
};

// CONDITIONAL

const isJohnsHigher = johnBMI_2 > markBMI_2 ? console.log(`Yes, John's is higher.`) : console.log(`No, John's is lower.`);

// No need to console.log(isJohnsHigher) because the ternary operator already includes the console.log in the sentence. 