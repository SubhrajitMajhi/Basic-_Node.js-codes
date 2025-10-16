//print alternative elements of the array
const array = [48, 12, 66, 68, 1, 35, 52, 867];
const result = [];

// Copy elements at even indices to the new array
for (let i = 0; i < array.length; i += 2) {
    result.push(array[i]);
}

console.log("Original array:", array);
console.log("Alternative Elements :", result);