let context1 = {
    min: 12,
    max: 167,
};
let context2 = {
    length: 100,
}

function findSimpleFibo (end) {
    let prev = 0,
    curr = 1,
    next = 0;
    fibo = [prev, curr];
    for (let i = 1; next <= end; i++) {
        fibo[i] = curr;
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return fibo;
}

function findFibo(cont) {
    let result,
    min,
    max;
    if (!isNaN(parseFloat(cont.min)) && !isNaN(parseFloat(cont.max)) || !isNaN(parseFloat(cont.length))) {
        if (cont.min && cont.max) {
            min = cont.min;
            max = cont.max;
        } else if (cont.length) {
            min = 0;
            max = cont.length;
        } 
        fibo = findSimpleFibo(max);
        for (let i = 0; i < fibo.length; i++) {
            if (fibo[i] >= min) {
                fibo = fibo.slice(i);
                break;
            }
        }
        result = fibo;
    } else {
            error.status = 'failed';
            error.reason = 'The context must have min and max range or length. They must be nombers.';
            result = error;
        }

    return result; 
}