// Print multiplication table
// Input: 3 → Output: 3 6 9 12 15 18 21 24 27 30

function printMultiplicationTable(num) {
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        arr.push(num * i);
    }

    return arr.join(" ");
}

const num = 3;
const result = printMultiplicationTable(num);
console.log(result);