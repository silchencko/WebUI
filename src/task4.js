let num = 12344377343;

function findPalindrom(number) {
    let result = [];
    if (number > 10 && !isNaN(number)) {
        let str = String(number);

        /* Check even palindrom */
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i+1]) {
                let start = i;
                let end = i+1;
                if (start > 0 && end < str.length-1 && str[start-1] === str[end+1]) {
                    start--;
                    end ++;
                }
                result.push(str.slice(start, end+1));
            }

            /* Check odd palindrom */
            if (str[i-1] === str[i+1]) {
                let start = i-1;
                let end = i+1;
                if (start > 0 && end < str.length-1 && str[start-1] === str[end+1]) {
                    start--;
                    end ++;
                }
                result.push(str.slice(start, end+1));
            }
        }

        if (result.length == 0) {
            result = 0;
        }
    } else {
        error.status = 'failed';
        error.reason = 'Enter number. Numer must be more then 10';
        result = error;
    }
    return result;
}
