const dpFib = function(num, arr) {
    if (arr.length > num) return arr[num];
    dpFib(num-1, arr);
    arr.push(arr[num-1]+arr[num-2]);
    return arr[num];
}

const fibonacci = function(num) {
    const arr = [0, 1, 1];
    num = parseInt(num);
    if (num == NaN || num < 0) return "OOPS";
    return dpFib(num, arr);
};

// Do not edit below this line
module.exports = fibonacci;
