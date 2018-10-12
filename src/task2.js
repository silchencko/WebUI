var envelop1 = {
    width: 25,
    height: 30
};
var envelop2 = {
    width: 20,
    height: 24.5
};
var envelops = [envelop1, envelop2]

function existParams(params, amount) {
    if (params.length >= amount) {
        return true;
    } else {
        throw new Error('Enter two envelops');
    }
}

function checkEnvelop(obj) {
    if (!('width' in obj) || !('height' in obj)) {
        throw new Error('The envelope has to have length and width');
    } else if (!isNaN(parseFloat(obj.width)) && !isNaN(parseFloat(obj.height))
            && obj.width > 0 && obj.height > 0) {
        return true;
    } else {
        throw new Error('Width and height of the envelops must be numbers more then 0');
    }
}

function canPutFirstInSecond(item1, item2) {
    if ((item1.width > item2.width && item1.height > item2.height)
    || (item1.height > item2.width && item1.width > item2.height)) {
        return 1;
    }
    return 0;
}

function putInEnvelopes(envs) {
    var result = 0;
    try {
        if (existParams(envs, 2) && checkEnvelop(envs[0]) && checkEnvelop(envs[1])) {
            if ((envs[0].width + envs[0].height) > (envs[1].width + envs[1].height)) {
                result = canPutFirstInSecond(envs[0], envs[1]);
            } else {
                result = canPutFirstInSecond(envs[1], envs[0]);
            };
        };
        return result;
    } catch(error) {
        result = error.reason; 
    }
    return result;
}
