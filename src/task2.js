const envelop1 = {
    width: "true",
    height: 15
};
const envelop2 = {
    width: 20,
    height: 36.5
};

function checkEnvelopes(env1, env2) {
    let result = '';

    if (
        !isNaN(parseFloat(env1.width)) && !isNaN(parseFloat(env1.height))
            && !isNaN(parseFloat(env2.width)) && !isNaN(parseFloat(env2.height))
            && env1.width > 0 && env1.height > 0 && env2.width > 0 && env2.height > 0) {

        if (env1.width > env2.width && env1.height > env2.height) {
            result = 1;
        } else if (env1.width > env2.height && env1.height > env2.width) {
            result = 1;
        } else if (env2.width > env1.width && env2.height > env1.height) {
            result = 1;
        } else if (env2.width > env1.height && env2.height > env1.width) {
            result = 1;
        } else {
            result = 0;
        }

    } else {
        error.status = 'failed';
        error.reason = 'Width and height of the envelops must be numbers more then 0';
        result = error;
    }
    return result;
}
