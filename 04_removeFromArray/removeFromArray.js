const removeFromArray = function() {
    let arrayValues = arguments[0];
    let valuesToRemove = [...arguments].splice(1,[...arguments].length-1);
    for (let i = 0; i < valuesToRemove.length; i++) {
        arrayValues = arrayValues.filter(item => item !== valuesToRemove[i])
    }
    return arrayValues;
};
// Do not edit below this line
module.exports = removeFromArray;
