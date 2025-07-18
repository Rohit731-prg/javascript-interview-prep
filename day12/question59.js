// Check if number is an Armstrong number
// Input: 153 → Output: true

function isArmstrong(num) {
    let str = num.toString();
    let sum = 0;
    while (num > 0) {
        let remain = num % 10;
        sum += remain ** str.length;
        num = Math.floor(num / 10);
    }

    return sum == str;
}

const num = 153;
const result = isArmstrong(num);
console.log(result);