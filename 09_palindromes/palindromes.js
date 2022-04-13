const palindromes = function (string) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let stringArray = string.toLowerCase().split('');
    stringArray = stringArray.filter(letter => alphabet.includes(letter))
    let filterString = stringArray.join('');
    let reverString = stringArray.reverse().join('');
    return filterString == reverString;
};
// Do not edit below this line
module.exports = palindromes;
