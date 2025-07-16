// count frequency of of items
// Input: [1, 1, 2] → Output: {1: 2, 2: 1}

function countFrequency(arr) {
    let track = {};

    for (let ele of arr) {
        if (track[ele]) {
            track[ele] += 1;
        } else {
            track[ele] = 1;
        }
    }
    return track;
}

const arr = [1, 1, 2];
const result = countFrequency(arr);
console.log(result);