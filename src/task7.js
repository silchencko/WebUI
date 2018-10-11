var context1 = {
    min: 12,
    max: 156,
};
var context2 = {
    length: 100,
}

function findSimpleFibo (end) {
    var prev = 0,
    curr = 1,
    next = 0;
    fibo = [prev, curr];
    for (var i = 1; next <= end; i++) {
        fibo[i] = curr;
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return fibo;
}

function checkFiboParams(obj) {
    if (!isNaN(parseFloat(obj.min)) && !isNaN(parseFloat(obj.max)) && (obj.min < obj.max) 
        || !isNaN(parseFloat(obj.length))) {
        return true;
    } else {
        throw new Error('Enter min and max or length. They must be nombers. Max must be more then min');
    }
}

function findFibo(cont) {
    var result,
    min,
    max;
    try {
        if (checkFiboParams(cont)) {
            if (cont.min && cont.max) {
                min = cont.min;
                max = cont.max;
            } else if (cont.length) {
                min = 0;
                max = cont.length;
            } 
            fibo = findSimpleFibo(max);
            for (var i = 0; i < fibo.length; i++) {
                if (fibo[i] >= min) {
                    fibo = fibo.slice(i);
                    break;
                }
            }
            result = fibo;
        }
        return result;
    } catch(error) {
        result = error.reason;
    }
    return result; 
}