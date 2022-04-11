const repeatString = function(string,repeatTimes) {
    let resultString = '';
    if (repeatTimes < 0) {
        return 'ERROR';
    }
    if (string != '' || repeatTimes == 0) {
        for (let i = 0; i < repeatTimes; i++) {
            resultString += string;
         }
    }
    return resultString;
};


// Do not edit below this line
module.exports = repeatString;
