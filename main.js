
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
        if (isNaN(parseFloat(arguments[i])) || parseFloat(arguments[i]) == 0) {
            throw new Error(arguments[i] + ' is not a nomber or is 0');   
        }
    }
    return true;
}

// var chessBoardBtn = document.querySelector('.chessBoard-btn');

chessBoardBtn.addEventListener('click', getChessBoard);
envelopesBtn.addEventListener('click', checkEnvelopes);
addTriangleBtn.addEventListener('click', addNewTriangle);
trianglesBtn.addEventListener('click', getSortedtriangles);
palindromBtn.addEventListener('click', getPalindrom);
ticketsBtn.addEventListener('click', getHappyTicketsResult);





// var tasksList = [drawChessBoard, putInEnvelopes, sortFigures, findPalindrom, isHappy, findIntegers, findFibo];
// var params = [myBoard, envelops, triangles, number, context, integersParam, context2];

// var taskNumber = prompt('Enter task number');
// function runTask(num) {
//     if (num > 0 || num < 8) {
//         --num;
//         console.log(tasksList[num](params[num]));
//     } else {
//         console.log('No such task. Enter a number from 1 to 7');
//     }
// }

// runTask(taskNumber);
