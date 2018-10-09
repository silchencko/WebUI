var context = {
    min: '000000',
    max: '999999'
}
var happyTickets = {
    vinner: '',
    numHappyByMirror: 0,
    numHappyEvenOdd: 0
}

function isHappyByMirror(ticket) {
    if (ticket.length == 6 
        && (parseInt(ticket[0], 10) + parseInt(ticket[1], 10) + parseInt(ticket[2], 10)) 
        == (parseInt(ticket[3], 10) + parseInt(ticket[4], 10) + parseInt(ticket[5], 10))) {
        return true;
    } else {
        return false;
    }
}

function isHappyEvenOdd(ticket) {
    var evenSum = 0;
    var oddSum = 0;
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
}
function makeFullTicket(number) {
    var ticket = String(number);
    for (var i = 0; i < (6-ticket.length); i++) {
        ticket = '0' + ticket;
    }   
    return ticket;
}

function checkContext(obj) {
    if (String(obj.min).length == 6 && String(obj.max).length == 6 && 
        !isNaN(obj.min) && !isNaN(obj.max)) {
            return true;
        } else {
            return false;
        }
}

function isHappy(cont) {
    var result;
    if (checkContext(cont)) {
        var quantityByMirror = 0;
        var quantityEvenOdd = 0;
        for (var i = parseInt(cont.min); i <= parseInt(cont.max); i++) {
            var fullTicket = makeFullTicket(i);
            if (isHappyByMirror(fullTicket)) {
                quantityByMirror++;
            }        
            if (isHappyEvenOdd(fullTicket)) {
                quantityEvenOdd++;
            }
        }
        if (quantityByMirror > quantityEvenOdd) {
            happyTickets.vinner = 'Mirror method';
        } else if (quantityByMirror < quantityEvenOdd) {
            happyTickets.vinner = 'EvenOdd method';
        } else {
            happyTickets.vinner = ['Mirror method', 'EvenOdd method'];
        }
        happyTickets.numHappyByMirror = quantityByMirror;
        happyTickets.numHappyEvenOdd = quantityEvenOdd;
        result = happyTickets;
    } else {
        var error = new Error('Ticket numbers must have 6 symbols and all of them must be numeral');                
        result = error;
    }
    return result;
}