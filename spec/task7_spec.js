describe('Task 7', function() {
    var str;

    it('Should return Fibonacci nombers from min to max', function() {
        str = [3,5,8,13];
        expect(findFiboByMinMax(3, 13)).toEqual(str);
    });

    it('Should return an amount of Fibonacci nombers', function() {
        str = [0,1,1,2,3,5,8,13,21];
        expect(findFiboByLength(8)).toEqual(str);
    });
});