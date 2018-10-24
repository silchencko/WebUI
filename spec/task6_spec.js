describe('Task 6', function() {
    var params,
        integers;

    it('Should return a string with integers', function() {
        params = new IntegersParam(5, 225);
        integers = '15, 16, 17, 18, 19';
        expect(findIntegers(params)).toEqual(integers);
    });
});