// Write an algorithm to reverse words
function reverseString(str) {
    var reversed = str.split('').reverse().join('');
    return reversed; 
}

console.log(reverseString('hello world'));