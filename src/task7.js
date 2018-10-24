var fibonacciBtn = document.querySelector('.fibonacci-btn');
var fibonacciResult = document.querySelector('.fibonacci-result');
var fibonacciMin = document.querySelector('#fibonacci-min');
var fibonacciMax = document.querySelector('#fibonacci-max');
var fibonacciLength = document.querySelector('#fibonacci-length');

function FiboParams(min, max) {
    this.min = min;
    this.max = max;
};

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

function existFiboParams(min, max, length) {
    if (((min != undefined && min != "") && (max != undefined && max != "")) || (length != undefined && length != "")) {
        return true;   
    } else throw new Error('Enter min and max or length');
};

function isFiboParamsNumeric(min, max, length) {
    if ((!isNaN(parseFloat(min)) && parseFloat(min) >= 0) 
     && (!isNaN(parseFloat(max)) && parseFloat(max) > 0) 
     || (!isNaN(parseFloat(length)) && parseFloat(length) > 0)) {  
         return true;   
    } else {
        throw new Error('Params must be nombers');
};

function buildFiboContext(min, max, length) {
    if (length == undefined || length == "") {
        return new FiboParams(min, max);
    } else {
        return new FiboParams(0, length);
    }
};

function findFibo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min) {
            arr = arr.slice(i);
            break;
        }
    }
    return arr;
};

function getFibo() {
    var result,
        fiboContext;
    var fiboMin = fibonacciMin.value;
    var fiboMax = fibonacciMax.value;
    var fiboLength = fibonacciLength.value;
    try {
        existFiboParams(fiboMin, fiboMax, fiboLength);
        isFiboParamsNumeric(fiboMin, fiboMax, fiboLength);
        fiboContext = buildFiboContext(fiboMin, fiboMax, fiboLength);
        fibo = findSimpleFibo(fiboContext.max);
        result = findFibo(fibo);
        return fibonacciResult.innerHTML = result;    
    } catch(error) {
        return fibonacciResult.innerHTML = error.reason;
    }
}