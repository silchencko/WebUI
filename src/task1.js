var myBoard = {
    length: '5',
    width: 6,
    symbol: '*',
} 

function checkBoardParam (obj) {
    if (obj.length > 0 && obj.width > 0 && !isNaN(parseFloat(obj.length)) && !isNaN(parseFloat(obj.width)) && ('symbol' in obj)) {
        return true;
    } else {
        throw new Error ('Enter length, width and symbol. Width and length must be numbers more then 0');
    }
}

function drawChessBoard(board) {
    var result = '';
    try {
        if (checkBoardParam(board)) {
            for (var i = 0; i < board.length; i++) {
                var symbolWithSpace = board.symbol + ' ';
                if (i%2 !== 0) symbolWithSpace = ' ' + board.symbol;
                for (var j = 0; j < board.width; j++) {
                    result += symbolWithSpace;
                }
                result += '\n';
            }
        } 
        return result;
    } catch(error) {
        result = error.reason;
    }
    return result;
}


