describe('Task 2', function() {
    var envelope;

    it('Should return an object Envelop', function() {
        envelope = new Envelope(25, 26);
        expect(createEnvelop(25, 26)).toEqual(envelope);
    });

    it('Should throw an error about missing params', function() {
        expect(function() { createEnvelop(25, ''); }).toThrow(new Error('Enter all params'));
    });

    it('Should throw an error about not numeric params', function() {
        expect(function() { createEnvelop(25, '&'); }).toThrow(new Error('& is not a nomber or is 0'));
    });

    it('Should throw an error about 0 params', function() {
        expect(function() { createEnvelop(25, 0); }).toThrow(new Error('0 is not a nomber or is 0'));
    });
});