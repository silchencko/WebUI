
function Error(reason) {
    this.status = 'failed';
    this.reason = reason;
}

var tasksList = [drawChessBoard, putInEnvelopes, sortFigures, findPalindrom, isHappy, findIntegers, findFibo];
var params = [myBoard, envelops, triangles, number, context, integersParam, context2];

var taskNumber = prompt('Enter task number');
function runTask(num) {
    if (num > 0 || num < 8) {
        --num;
        console.log(tasksList[num](params[num]));
    } else {
        console.log('No such task. Enter a number from 1 to 7');
    }
}

runTask(taskNumber);
