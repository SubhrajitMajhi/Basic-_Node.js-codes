//
let a = [{id:7348, name:"jslk"}, 7497372, "kskfhio", [2,3,4,241,42]]
console.log(a)
let n=7937

if (n%a[1]===0)
{
    console.log(true)
}
else{
    console.log(false)
} 

//print all odd  numbers from 51 to 100 and store it in array
const array = []
for(i=51; i<=99; i+=2)
{
    console.log(i)
    array.push(i)
}
console.log(array)

// Extract the vowels and print remaining consonants in an array
const input = "Subhra";

const consonantsArray = input
  .split("")
  .filter((char) => !"aeiou".includes(char));

console.log("Consonants as array:", consonantsArray);
