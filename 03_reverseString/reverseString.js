const reverseString = function(string) {
    if (string != '') {
        let stringToArray = string.split('');
        stringToArray.reverse();
        string = stringToArray.join('');
    }
    return string;
};
// Do not edit below this line
module.exports = reverseString;
