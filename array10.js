const vowels = ["Subhra", "Kumar", "Mondal", "Anhinash"]
const result = vowels.filter(item => {
    const vowels = item.match(/[aeiou]/gi);
    return !(vowels && vowels.length >= 3);
});
console.log(result);