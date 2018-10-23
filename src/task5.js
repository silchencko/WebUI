var ticketsBtn = document.querySelector('.tickets-btn');
var ticketsResult = document.querySelector('.tickets-result');

function TicketsRange(min, max) {
    this.min = min;
    this.max = max;
};

function HappyTicketsResult(numHappyByMirror, numHappyEvenOdd) {
    this.numHappyByMirror = numHappyByMirror;
    this.numHappyEvenOdd = numHappyEvenOdd;
    this.vinner = function() {
        if (this.numHappyByMirror > this.numHappyEvenOdd) {
            return 'Mirror method';
        } else if (this.numHappyByMirror < this.numHappyEvenOdd) {
            return 'EvenOdd method';
        } else {
            return 'No vinner';
        }
    }
};

function isContextReal(min, max) {
    if (existParams(min, max)) {
        if (isNumeric(min, max)) {
            if ((parseFloat(min) > parseFloat(max, 10))) {
                throw new Error('Max must be more than min');
            } else {
                return true;
            }
        }
    } 
};

function checkContext(min, max) {
    if (isContextReal(min, max)) {
        if (min.length == 6 && max.length == 6) {
            return true;
        } else {
            throw new Error('Min and max tickets must have 6 symbols');
        }
    }
};

function makeFullTicket(number) {
    var ticket = String(number);
    for (var i = 0; ticket.length < 6; i++) {
        ticket = '0' + ticket;
        makeFullTicket(ticket);
    }   
    return ticket;
};

function countSum(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += parseFloat(str[i]);
    }
    return sum;
};

function isHappyByMirror(ticket) {
    var half = ticket.length / 2,
        left = ticket.slice(0, half),
        right = ticket.slice(half),
        leftSum = countSum(left),
        rightSum = countSum(right);
    if (leftSum == rightSum) {
        return true;
    } else {
        return false;
    }
};

function isHappyEvenOdd(ticket) {
    var evenSum = 0,
        oddSum = 0;
    for(var i = 0; i < ticket.length; i++) {
        if (i % 2 == 0) {
            evenSum += parseInt(ticket[i], 10);
        } else {
            oddSum += parseInt(ticket[i], 10);
        }
    }
    if (evenSum == oddSum) {
        return true;
    } else {
        return false;
    }
};

function countHappyTickets(cont, method) {
    var count = 0;
    for (var i = parseInt(cont.min); i <= parseInt(cont.max); i++) {
        var fullTicket = makeFullTicket(i);
        if (method(fullTicket)) {
            count++;
        }
    }
    return count;
};

function buildHappyTicketsResult(cont) {
    var quantityByMirror = countHappyTickets(cont, isHappyByMirror),
        quantityEvenOdd = countHappyTickets(cont, isHappyEvenOdd);
    var result = new HappyTicketsResult(quantityByMirror, quantityEvenOdd);
    return result;
}

function getHappyTicketsResult() {
    try {
        var context,
        result;
        var minTicket = document.querySelector('#ticket-min').value;
        var maxTicket = document.querySelector('#ticket-max').value;
        if (checkContext(minTicket, maxTicket)) {
            context = new TicketsRange(minTicket, maxTicket);
            result = buildHappyTicketsResult(context);
        }
        return ticketsResult.innerHTML = 'Vinner: ' + result.vinner() 
                                       + '; happy tickets by Mirror method: ' + result.numHappyByMirror 
                                       + '; happy tickets by Even-odd method: ' + result.numHappyEvenOdd;
    } catch(error) {
        return ticketsResult.innerHTML = error.reason;
    }
};

