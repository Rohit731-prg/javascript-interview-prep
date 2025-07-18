// Count number of digits in a number
// Input: 1000 → Output: 4

function countDigis(num) {
    let str = num.toString().split("");
    return str.length;
}

const num = 1000;
const result = countDigis(num);
console.log(result);