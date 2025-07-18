// Check if number is palindrome
// Input: 121 → Output: true

function isPalindrom(num) {
    let str = num.toString().split("");
    let rev = str.reverse().join("");
    if (num === parseInt(rev)) return true;
    return false;
}

const num = 121;
const result = isPalindrom(num);
console.log(result);