var integersBtn = document.querySelector('.integers-btn');
var integersResult = document.querySelector('.integers-result');
var integersLength = document.querySelector('#integers-length');
var integersSquare = document.querySelector('#integers-square');

function IntegersParam(length, minSquare) {
    this.length = length;
    this.minSquare = minSquare;
};

function findIntegers(obj) {
    var ints = [];
    for (var i = Math.ceil(Math.sqrt(obj.minSquare)); ints.length < obj.length; i++) {
        ints.push(i);
    }
    return ints.join(', ');
};

function getIntegers() {
    var result;
    var length = integersLength.value;
    var square = integersSquare.value;
    try {
        existParams(length, square);
        isNumeric(length, square);
        var params = new integersParam(length, square);
        result = findIntegers(params);
        return integersResult.innerHTML = result;
    } catch(error) {
        return integersResult.innerHTML = error.reason;
    }
};
