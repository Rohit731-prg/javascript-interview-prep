// 44. Find all pairs with sum
// Input: [1,2,3,4], sum=5 → Output: [[1,4],[2,3]]

function arrayOfPain(arr, sum) {
    let result = [];

    for (let i = 0; i <= arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

const arr = [1, 2, 3, 4];
const sum = 5;
const result = arrayOfPain(arr, sum);
console.log(result);