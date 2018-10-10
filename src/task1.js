var boardLength = '5',
boardWidth = 6,
boardSymbol = '*';

function existParam(attributes) {
    if (attributes.length == 3) {
        return true;
    } else {
        throw new Error ('Enter length, width and symbol');
    }
}
function checkParam (attributes) {
    if (attributes[0] > 0 && attributes[1] > 0 && !isNaN(parseFloat(attributes[0])) && !isNaN(parseFloat(attributes[1]))) {
        return true;
    } else {
        throw new Error ('Width must be numbers more then 0');
    }
}

function drawChessBoard(length, width, symb) {
    var result = '';
    try {
        if (existParam(arguments) && checkParam(arguments)) {
            for (var i = 0; i < length; i++) {
                var symbolWithSpace = symb + ' ';
                if (i%2 !== 0) symbolWithSpace = ' ' + symb;
                for (var j = 0; j < width; j++) {
                    result += symbolWithSpace;
                }
                result += '\n';
            }
        } 
        return result;
    } catch(error) {
        result = error.reason;
    }
    return result;
}


