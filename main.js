
function Error(reason) {
    this.status = 'failed';
    this.reason = reason;
}

function existParams() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == undefined || arguments[i] == "") {
            throw new Error('Enter all params');   
        }
    }
    return true;
}

function isNumeric() {
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(parseFloat(arguments[i])) || parseFloat(arguments[i]) <= 0) {
            throw new Error(arguments[i] + ' is not a nomber, is 0 or is less than 0');   
        }
    }
    return true;
};

chessBoardBtn.addEventListener('click', getChessBoard);
envelopesBtn.addEventListener('click', checkEnvelopes);
addTriangleBtn.addEventListener('click', addNewTriangle);
trianglesBtn.addEventListener('click', getSortedtriangles);
palindromBtn.addEventListener('click', getPalindrom);
ticketsBtn.addEventListener('click', getHappyTicketsResult);
integersBtn.addEventListener('click', getIntegers);
fibonacciBtn.addEventListener('click', getFibo);