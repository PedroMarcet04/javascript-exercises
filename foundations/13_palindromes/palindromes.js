const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replaceAll(/[^a-z0-9]/g,""); // Remove non-alphabetical/digit characters
    let low = 0;
    let high = str.length-1;
    while (low < high) {
        if (str.charAt(low)!=str.charAt(high)) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
