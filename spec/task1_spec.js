describe('Task 1', function() {
    var board,
    str;

    it('Should return a string with chess board', function() {
        board = new ChessBoard(3, 3, '*');
        str = '* * * \n * * *\n* * * \n';
        expect(drawChessBoard(board)).toEqual(str);
    });

    it('Should create an object ChessBoard', function() {
        board = new ChessBoard(3, 5, '*');
        expect(createBoard(3, 5, '*')).toEqual(board);
    });

    it('Should throw an error about missing params', function() {
        expect(function() { createBoard(3, '', '*'); }).toThrow(new Error('Enter all params'));
    });

    it('Should throw an error about not numeric params', function() {
        expect(function() { createBoard(3, '&', '*'); }).toThrow(new Error('& is not a nomber or is 0'));
    });

    it('Should throw an error about 0 params', function() {
        expect(function() { createBoard(3, 0, '*'); }).toThrow(new Error('0 is not a nomber or is 0'));
    });
});
