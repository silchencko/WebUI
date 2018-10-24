var chessBoardBtn = document.querySelector('.chessBoard-btn');
var chessBoardResult = document.querySelector('.chessBoard-result');
var boardWidth = document.querySelector('#boardWidth');
var boardLength = document.querySelector('#boardLength');
var boardSymbol = document.querySelector('#boardSymbol');

function ChessBoard(width, length, symbol) {
    this.width = width;
    this.length = length;
    this.symbol = symbol;
};

function drawChessBoard(board) {
    var result = '';
    for (var i = 0; i < board.length; i++) {
        var symbolWithSpace = board.symbol + ' ';
        if (i%2 !== 0) symbolWithSpace = ' ' + board.symbol;
        for (var j = 0; j < board.width; j++) {
            result += symbolWithSpace;
        }
        result += '\n';
    }
    return result;
}

function createBoard(width, length, symbol) {
    existParams(width, length, symbol);
    isNumeric(width, length);
    return new ChessBoard(width, length, symbol);
}

function getChessBoard() {
    var result;
    var width = boardWidth.value;
    var length = boardLength.value;
    var symbol = boardSymbol.value;
    try {
        result = drawChessBoard(createBoard(width, length, symbol)); 
    } catch(error) {
        result = error.reason;
    };
    return chessBoardResult.innerHTML = result;
}
