var number = 12344377343;

function checkPalindromParam(num) {
    if (number > 10 && !isNaN(number)) {
        return true;
    } else {
        throw new Error('Enter a number. Numer must be more then 10');
    }
}

function checkPalindrom(start, end, str) {
    if (start > 0 && end < str.length-1 && str[start-1] === str[end+1]) {
        start--;
        end ++;
    }
    return str.slice(start, end+1);
}

function findPalindrom(number) {
    var result = [],
    evenPalindrom,
    oddPalindrom;

    try {
        if (checkPalindromParam(number)) {
            var str = String(number);

            for (var i = 0; i < str.length; i++) {
                if (str[i] === str[i+1]) {
                    var start = i;
                    var end = i+1;
                    evenPalindrom = checkPalindrom(start, end, str);
                    result.push(evenPalindrom);
                    
                }

                if (str[i-1] === str[i+1]) {
                    var start = i-1;
                    var end = i+1;
                    oddPalindrom = checkPalindrom(start, end, str);
                    result.push(oddPalindrom);
                }
            }

            if (result.length == 0) {
                result = 0;
            }
        }
        return result;
    } catch(error) {
        result = error.reason;
    }
    return result;
}
