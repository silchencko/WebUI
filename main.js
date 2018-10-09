

var error = {
    status: '',
    reason: ''
};

var taskNumber = prompt('Enter task number');
if (taskNumber == 1) {
    console.log(drawChessBoard(true, 6, '*'));
} else if (taskNumber == 2) {
    console.log(checkEnvelopes(envelop1, envelop2));
} else if (taskNumber == 3) {
    console.log(sortFigures(triangles));
} else if (taskNumber == 4) {
    console.log(findPalindrom(num));
} else if (taskNumber == 41) {
    console.log(findPalindrom_1(numb));
} else if (taskNumber == 5) {
    console.log(isHappy(context));
} else if (taskNumber == 6) {
    console.log(findIntegers(10, 255));
} else if (taskNumber == 7) {
    console.log(findFibo(context2));
} else {
    console.log('No such task. Enter a number from 1 to 7');
}

