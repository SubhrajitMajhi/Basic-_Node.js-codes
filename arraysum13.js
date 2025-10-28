//sum of elements in an array
function  sumofarr()
{
    let arr1=[45,55,124,46,58];
    let sum=0;
    for (let i=0; i<arr1.length; i++)
    {
        sum += arr1[i];
    }
    console.log("sum of elements in an array is", sum);
}

//recursive
function arrsum(arr, index=0)
{
    if (index>=arr.length)
    {
        return 0
    }

    return arr[index] + arrsum(arr, index + 1)
}


//alternative approach
function arrsum2(arr)
{
    if (arr.length === 0) return 0;
    return arr[0] + arrsum2(arr.slice(1))
}

const numbers =[1,2,3,4,5]
console.log(arrsum(numbers))
console.log(arrsum2(numbers))
