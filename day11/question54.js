// 54. Generate first n Fibonacci numbers
// Input: 5 → Output: [0,1,1,2,3]

function FibonacciSerious(num) {
    let arr = [0, 1];

    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

const num = 10;
const result = FibonacciSerious(num);
console.log(result);