'use strict';

// PART 2 - FUNDAMENTALS


// CODING CHALLENGE 1

const calcAverage = (a,b,c) => (a + b + c ) / 3;


// DATA 1

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
    
        console.log(`Team Dolphins have won the tournament! 🏆 The score was ${avgDolphins} to ${avgKoalas}!`);
        
    } else if (avgKoalas >= 2 * avgDolphins) {
        
        console.log(`Team Koalas have won the tournament! 🏆 The score was ${avgKoalas} to ${avgDolphins}`);
    }

    else {

        console.log(`No team has won the tournament.`)

    }
}

checkWinner();



// DATA 2

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);


// CODING CHALLENGE 2

// TIP CALCULATOR w. ARRAY

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20;
console.log(calcTip (100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);


// CODING CHALLENGE 3 

// OBJECTS + BMI

const mark = {

    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}


const john = {

    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const getSumOfBMIs = ` [${john.calcBMI()} > ${mark.calcBMI()} ? ]`


(${john.calcBMI()} > ${mark.calcBMI()} ? `${john.fullName}s BMI at ${john.calcBMI()}` : `${mark.fullName}'s BMI at ${mark.BMI()}`is the highest`

console.log(getSumOfBMIs);