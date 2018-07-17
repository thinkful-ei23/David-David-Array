'use strict';
function hazardWarningCreator (typeOfWarning){
    let warningCounter = 0;

    return function(location){
        warningCounter++;

        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

        let timeCounter = warningCounter === 1? 'time' : 'times;'
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${timeCounter} today!`);
        
    }
    
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const branchesWarning = hazardWarningCreator('Branches on the Road');
const snowWarning = hazardWarningCreator('Snow on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
branchesWarning('Denver Colorado');
branchesWarning('Monterey California');
snowWarning('Santa Barbara');
snowWarning('Tahoe California');

console.log(rocksWarning);