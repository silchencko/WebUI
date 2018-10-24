var fibonacciBtn = document.querySelector('.fibonacci-btn');
var fibonacciResult = document.querySelector('.fibonacci-result');
var fibonacciMin = document.querySelector('#fibonacci-min');
var fibonacciMax = document.querySelector('#fibonacci-max');
var fibonacciLength = document.querySelector('#fibonacci-length');

function findFiboByMinMax(start, end) {
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
    for (var i = 0; i < fibo.length; i++) {
        if (fibo[i] >= start) {
            fibo = fibo.slice(i);
            break;
        } 
    }
    return fibo;
};

function findFiboByLength(length) {
    var prev = 0,
    curr = 1,
    next = 0;
    fibo = [prev, curr];
    for (var i = 1; i <= length; i++) {
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
    } else {
        throw new Error('Enter min and max or length');
    }
};

function isFiboParamsNumeric(min, max, length) {
    if ((!isNaN(parseFloat(min)) && parseFloat(min) >= 0) 
     && (!isNaN(parseFloat(max)) && parseFloat(max) > 0) 
     || (!isNaN(parseFloat(length)) && parseFloat(length) > 0)) {  
         return true;   
    } else {
        throw new Error('Params must be nombers more than 0');
    }
};

function getFibo() {
    var result,
        fibo;
    var fiboMin = fibonacciMin.value;
    var fiboMax = fibonacciMax.value;
    var fiboLength = fibonacciLength.value;
    try {
        existFiboParams(fiboMin, fiboMax, fiboLength);
        isFiboParamsNumeric(fiboMin, fiboMax, fiboLength);

        if (fiboLength == undefined || fiboLength == "") {
            result = findFiboByMinMax(fiboMin, fiboMax);

        } else {
            result = findFiboByLength(fiboLength);
        }
        return fibonacciResult.innerHTML = result;    
    } catch(error) {
        return fibonacciResult.innerHTML = error.reason;
    }
};