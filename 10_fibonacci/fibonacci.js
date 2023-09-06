const fibonacci = function (num) {
    if (num < 0 || num * 1 == NaN) {
        return "OOPS";
    }

    num = Number(num);
    let fibonacciSequence = [1, 1];

    for (let i = 2; i < num; i++) {
        let lastNum = fibonacciSequence[fibonacciSequence.length - 1];
        let secondLastNum = fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(lastNum + secondLastNum);

    }

    return fibonacciSequence[fibonacciSequence.length - 1];

};

// Do not edit below this line
module.exports = fibonacci;
