var palindromBtn = document.querySelector('.palindrom-btn');
var palindromResult = document.querySelector('.palindrom-result');

function Numb(number) {
    this.number = number;
};

function checkPalindromField(field) {
    if (existParams(field)) {
        if (isNumeric(field)) {
            if (field > 9) {
                return true;
            } else throw new Error('The number must be more then 9')
        }
    } 
}

function searchPalindrom(start, end, str) {
    while (start > 0 && end < str.length-1 && str[start-1] === str[end+1]) {
        start--;
        end ++;
    }
    return str.slice(start, end+1);
};

function findEvenPalindrom(str, result) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            var palindrom = searchPalindrom(i, i+1, str);
            result.push(palindrom);
        }
    }
    return result;
}
function findOddPalindrom(str, result) {
    for (var i = 0; i < str.length; i++) {
        if (str[i-1] === str[i+1]) {
            var palindrom = searchPalindrom(i-1, i+1, str);
            result.push(palindrom);
        }
    }
    return result;
}

function findPalindrom(number) {
    var result = [];
    var number = String(number);

    findEvenPalindrom(number, result);
    findOddPalindrom(number, result);
    
    if (result.length == 0) {
        result = 0;
    }
    return result;
};

function getPalindrom() {
    try {
        var palindromField = document.querySelector('#palindrom-field').value;
        if (checkPalindromField(palindromField)) {
            var numb = new Numb(palindromField);
            var palindroms = findPalindrom(numb.number);
            return palindromResult.innerHTML = palindroms;
        }
    } catch(error) {
        return palindromResult.innerHTML = error.reason;
    }
};
