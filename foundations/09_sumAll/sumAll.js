const sumAll = function(low, high) {
    if (
        Number.isInteger(low) && low >= 0 &&
        Number.isInteger(high) && high >= 0
    ) {
        if (low > high) {
            const temp = low;
            low = high;
            high = temp;
        }
        let sum = 0;
        for (let i = low; i <= high; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
