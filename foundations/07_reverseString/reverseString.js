const reverseString = function(str) {
    let ans = "";
    for (const char of str) {
        ans = char + ans
    }
    return ans
};

// Do not edit below this line
module.exports = reverseString;
