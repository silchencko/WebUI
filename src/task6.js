var integersParam = {
    length: 10,
    minSquare: 255,
}

function checkIntParams(length, square) {
    if (isNaN(length) || isNaN(square) || length <= 0  || square <= 0) {
        throw new Error ('Length and min square must be numbers more then 0');
    } else {
        return true;
    }
}

function findIntegers(obj) {
    var result;
    try {
        if (checkIntParams(obj.length, obj.minSquare)) {
            var ints = [];
            for (var i = Math.ceil(Math.sqrt(obj.minSquare)); ints.length < obj.length; i++) {
                ints.push(i);
            }
            result = ints.join(', ');
        }
        return result;
    } catch(error) {
        result = error.reason;
    }
    return result;
}