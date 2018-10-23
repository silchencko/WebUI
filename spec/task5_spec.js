describe('Task 5', function() {
    var happyTickets,
    numHappyByMirror,
    numHappyEvenOdd,
    vinnerMethod,
    min,
    max,
    ticket,
    fullTicket,
    str,
    sum,
    context,
    method;


    it('Should return Mirror method', function() {
        numHappyByMirror = 10000;
        numHappyEvenOdd = 2000;
        happyTickets = new HappyTicketsResult(numHappyByMirror, numHappyEvenOdd);
        vinnerMethod = 'Mirror method';
        expect(happyTickets.vinner()).toEqual(vinnerMethod);
    });

    it('Should return "no vinner"', function() {
        numHappyByMirror = 10000;
        numHappyEvenOdd = 10000;
        happyTickets = new HappyTicketsResult(numHappyByMirror, numHappyEvenOdd);
        vinnerMethod = 'No vinner';
        expect(happyTickets.vinner()).toEqual(vinnerMethod);
    });

    it('Should return true if min and max have 6 integers', function() {
        min = '000010';
        max = '100010';
        expect(isContextReal(min, max)).toEqual(true);
    });

    it('Should throw an error about missing params', function() {
        min = '';
        max = '100010';
        expect(function() { isContextReal(min, max); }).toThrow(new Error('Enter all params'));
    });

    it('Should throw an error about not numeric params', function() {
        min = 'g';
        max = '100010';
        expect(function() { isContextReal(min, max); }).toThrow(new Error('g is not a nomber or is 0'));
    });

    it('Should throw an error: min is more than max', function() {
        min = '200010';
        max = '100010';
        expect(function() { isContextReal(min, max); }).toThrow(new Error('Max must be more than min'));
    });

    it('Should return true if min and max have 6 symbols', function() {
        min = '000010';
        max = '100010';
        expect(checkContext(min, max)).toEqual(true);
    });

    it('Should throw an error if min or max do not have 6 symbols', function() {
        min = '10';
        max = '100010';
        expect(function() { checkContext(min, max); }).toThrow(new Error('Min and max tickets must have 6 symbols'));
    });

    it('Should accept a number and return a string with 6 symbols', function() {
        ticket = 10;
        fullTicket = '000010';
        expect(makeFullTicket(ticket)).toEqual(fullTicket);
    });

    it('Should return a sum of all integers in the string', function() {
        str = '546';
        sum = 15;
        expect(countSum(str)).toEqual(sum);
    });

    it('Should return true if ticket is happy by Mirror method', function() {
        ticket = '025034';
        expect(isHappyByMirror(ticket)).toEqual(true);
    });

    it('Should return false if ticket is not happy by Mirror method', function() {
        ticket = '905034';
        expect(isHappyByMirror(ticket)).toEqual(false);
    });

    it('Should return true if ticket is happy by Even-Odd method', function() {
        ticket = '103334';
        expect(isHappyEvenOdd(ticket)).toEqual(true);
    });

    it('Should return false if ticket is not happy by Even-Odd method', function() {
        ticket = '303334';
        expect(isHappyEvenOdd(ticket)).toEqual(false);
    });

    it('Should return the quantity of happy tickets by Mirror method', function() {
        context = new TicketsRange('002000', '003000');
        method = isHappyByMirror;
        numHappyByMirror = 6;
        expect(countHappyTickets(context, method)).toEqual(numHappyByMirror);
    });

    it('Should return the quantity of happy tickets by Even-Odd method', function() {
        context = new TicketsRange('000020', '000090');
        method = isHappyEvenOdd;
        numHappyByMirror = 7;
        expect(countHappyTickets(context, method)).toEqual(numHappyByMirror);
    });

    it('Should build an object with result', function() {
        context = new TicketsRange('002000', '002013');
        numHappyByMirror = 2;
        numHappyEvenOdd = 2;
        happyTickets = new HappyTicketsResult(numHappyByMirror, numHappyEvenOdd);
        expect(JSON.stringify(buildHappyTicketsResult(context))).toEqual(JSON.stringify(happyTickets));
    });
});
