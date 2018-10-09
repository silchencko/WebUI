
function Error(reason) {
    this.status = 'failed';
    this.reason = reason;
}

var tasksList = [drawChessBoard, checkEnvelopes, sortFigures, findPalindrom, isHappy, findIntegers, findFibo];
var params = [[boardLength, boardWidth, boardSymbol], [envelop1, envelop2], triangles, number, context, [intLength, minSquare], context2];

var taskNumber = prompt('Enter task number');
function runTask(num) {
    if (num > 0 || num < 8) {
        num--;
        console.log(tasksList[num](params[num]));
    } else {
        console.log('No such task. Enter a number from 1 to 7');
    }
}

runTask(taskNumber);
