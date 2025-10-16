//linear search
const array = [15, 25, 26, 45, 66, 78, 11];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Search for 78
const target1 = 78;
const result1 = linearSearch(array, target1);
console.log(`Element ${target1} found at index ${result1}`);

// Search for 11
const target2 = 11;
const result2 = linearSearch(array, target2);
console.log(`Element ${target2} found at index ${result2}`);
