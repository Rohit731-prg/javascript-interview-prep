// Convert decimal to binary
// Input: 5 → Output: "101"

function convertDecimalToBinary(num) {
    let arr = [];
    while (num > 0) {
        let remain = num % 2;
        arr.push(remain);
        num = Math.floor(num / 2);
    }

    return arr.reverse().join("");
}

const num = 17;
const result = convertDecimalToBinary(num);
console.log(result);