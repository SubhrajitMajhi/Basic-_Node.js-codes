//sorting in array from 1 to n
function sortArray() {
    let arr = [1, 9, 2, 4, 5];
    arr.sort((a, b) => a - b);

    process.stdout.write("Sorted array: ");
    arr.forEach(num => process.stdout.write(num + " "));
}

sortArray();


//.length
//.tostring
//.at
//.pop
//.push
//.shift
//.unshift
//.delete()
//.splice
//.slice
//.includes
//.indexof
//.find 
//.findindex
//.filter
//.map
//.reduce
//.forEach
//.sort
//.reverse      
//.join
//.concat
//.fill
//.copywithin
