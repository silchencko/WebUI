var envelopesBtn = document.querySelector('.envelopes-btn');
var envelopesResult = document.querySelector('.envelopes-result');

function Envelope(width, height) {
    this.width = width;
    this.height = height;
};

function createEnvelop(width, height) {
    if (existParams(width, height)) {
        if (isNumeric((width, height))) {
            return new Envelope(width, height);
        }
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
    var result = 0,
    first,
    second;
    if ((envs[0].width + envs[0].height) > (envs[1].width + envs[1].height)) {
        first = envs[0];
        second = envs[1];
    } else {
        first = envs[1];
        second = envs[0];
    };
    return canPutFirstInSecond(first, second);
}

function checkEnvelopes() {
    try {
        var env1Width = document.querySelector('#env1__width').value;
        var env1Height = document.querySelector('#env1__height').value;
        var env2Width = document.querySelector('#env2__width').value;
        var env2height = document.querySelector('#env2__height').value;
        
        var env1 = createEnvelop(env1Width, env1Height);
        var env2 = createEnvelop(env2Width, env2height);
        var result = putInEnvelopes([env1, env2]);
        if (result == 1) {
            result = "Yes";
        } else if (result == 0) {
            result = "No";
        }
    } catch(error) {
        result = error.reason; 
    }
    return envelopesResult.innerHTML = result;
}