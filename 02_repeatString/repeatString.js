const repeatString = function(repeatingValue, repeatingTime) {
    if(repeatingTime < 0){
        return 'ERROR';
    }
    let totalRepeatingValue = '';
    for(let i = 0; i< repeatingTime; i++){
        totalRepeatingValue+=repeatingValue;
    }
    return totalRepeatingValue;
};

// Do not edit below this line
module.exports = repeatString;
    