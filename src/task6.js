function findIntegers(length, minSquare) {
    let result;
    if (isNaN(length) || length <= 0) {
        error.status = 'failed';
        error.reason = 'Length must be a number more then 0';
        result = error;
    } else if (Math.sqrt(minSquare) % 1 !== 0) {
        error.status = 'failed';
        error.reason = 'Min square must be a square of an integer';
        result = error;
    } else {
        let ints = [];
        for (let i = Math.sqrt(minSquare); ints.length < length; i++) {
            ints.push(i);
        }
        result = ints.join(', ');
    }
    return result;
}