'use strict';

// PART 2 - CODING CHALLENGE 1

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

