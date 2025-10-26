//reverse the string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let str ="Subhra"
console.log("Original String: " + str);
console.log("Reversed String: " + reverseString(str));

//using method
let str1 = "Hello, World!";
console.log("Original String: " + str1);
console.log("Reversed String: " + reverseString(str1));