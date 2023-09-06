const palindromes = function (text) {
    // Regex to only include number and alphabet and make lowercase
    text = text.replace(/\W/g,'').toLowerCase();
    let reverseText = '';
    for (let i = text.length -1 ; i >= 0; i--) {
        reverseText += text[i];
    }
    return text === reverseText;
};

function isLetter(char){
    return char.toLowerCase() != char.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
