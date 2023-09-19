const findTheOldest = function(arr) {
    var d= new Date();
    var fullYear = d.getFullYear();
 return arr.sort((a,b) => {
    const ageA = (a.yearOfDeath || fullYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || fullYear) - b.yearOfBirth;
    return ageA > ageB ? -1 : 1;

 })[0]


};

// Do not edit below this line
module.exports = findTheOldest;
