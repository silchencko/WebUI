var chessBoardBtn = document.querySelector('.chessBoard-btn');
var chessBoardResult = document.querySelector('.chessBoard-result');

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
    if (existParams(width, length, symbol)) {
        if (isNumeric(width, length)) {
            return new ChessBoard(width, length, symbol);
        }
    }
}

function getChessBoard() {
    var result;
    try {
        var boardWidth = document.querySelector('#boardWidth').value;
        var boardLength = document.querySelector('#boardLength').value;
        var boardSymbol = document.querySelector('#boardSymbol').value;

        result = drawChessBoard(createBoard(boardWidth, boardLength, boardSymbol)); 

    } catch(error) {
        result = error.reason;
    };
    return chessBoardResult.innerHTML = result;
}
