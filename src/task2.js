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

function putInEnvelopes(envs) {
    var result = '';
    try {
        if (existParams(envs, 2) && checkEnvelop(envs[0]) && checkEnvelop(envs[1])) {
            if ( (envs[0].width > envs[1].width && envs[0].height > envs[1].height)
            || (envs[0].width > envs[1].height && envs[0].height > envs[1].width)
            || (envs[1].width > envs[0].width && envs[1].height > envs[0].height)
            || (envs[1].width > envs[0].height && envs[1].height > envs[0].width)) {
            result = 1; 
            } else {
            result = 0;
            } 
        }
        return result;
    } catch(error) {
        result = error.reason; 
    }
    return result;
}
