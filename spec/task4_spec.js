describe('Task 4', function() {
    var number,
    start,
    end,
    result;

    it('Should return true if input is number and more than 9', function() {
        number = '56886345';
        expect(checkPalindromField(number)).toEqual(true);
    });

    it('Should throw an error about missing param', function() {
        number = '';
        expect(function() { checkPalindromField(number); }).toThrow(new Error('Enter all params'));
    });

    it('Should throw an error about not numeric param', function() {
        number = 'fer';
        expect(function() { checkPalindromField(number); }).toThrow(new Error('fer is not a nomber or is 0'));
    });

    it('Should throw an error about not numeric param', function() {
        number = '9';
        expect(function() { checkPalindromField(number); }).toThrow(new Error('The number must be more then 9'));
    });
    
    beforeEach(function() {
        number = '1986689673635724'
    });

    it('Should return a palindrom', function() {
        start = 3;
        end = 4;
        expect(searchPalindrom(start, end, number)).toEqual('986689');
    });

    it('Should return a palindrom', function() {
        start = 9;
        end = 11;
        expect(searchPalindrom(start, end, number)).toEqual('363');
    });

    it('Should return an even palindrom', function() {
        result = [];
        expect(findEvenPalindrom(number, result)).toEqual(['986689']);
    });

    it('Should return an odd palindrom', function() {
        result = [];
        expect(findOddPalindrom(number, result)).toEqual(['363']);
    });

    it('Should return an array of all palindroms', function() {
        result = [];
        expect(findPalindrom(number)).toEqual(['986689', '363']);
    });

    it('Must not find palindrom and return 0', function() {
        result = [];
        number = '456789'
        expect(findPalindrom(number)).toEqual(0);
    });
});