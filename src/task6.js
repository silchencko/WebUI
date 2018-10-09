var intLength = 10,
minSquare = 256;

function findIntegers(length, minSquare) {
    var result;
    if (isNaN(length) || length <= 0) {
        var error = new Error('Length must be a number more then 0');                
        result = error;
    } else if (Math.sqrt(minSquare) % 1 !== 0) {
        var error = new Error('Min square must be a square of an integer');                
        result = error;
    } else {
        var ints = [];
        for (var i = Math.sqrt(minSquare); ints.length < length; i++) {
            ints.push(i);
        }
        result = ints.join(', ');
    }
    return result;
}