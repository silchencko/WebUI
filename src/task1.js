function drawChessBoard(length, width, symb) {
    var result = '';

    if (length == undefined || width == undefined || symb == undefined) {
        error.status = 'failed';
        error.reason = 'Enter length, width and symbol';
        result = error;

    } else if (length > 0 && width > 0 && !isNaN(parseFloat(length)) && !isNaN(parseFloat(width))) {
        
        for (var i = 0; i < length; i++) {
            var symbolWithSpace = symb + ' ';
            if (i%2 !== 0) symbolWithSpace = ' ' + symb;
            for (var j = 0; j < width; j++) {
                result += symbolWithSpace;
            }
            result += '\n';
        }

    } else {
        error.status = 'failed';
        error.reason = 'length and width must be numbers more then 0';
        result = error;
    }

    return result;
}
