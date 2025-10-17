//2nd largest element in the array

function get2ndlargest(arr)
{
    let largest = -1, secondlargest = -1
    for (i=0; i<arr.length; i++)
    {
        if (arr[i]>largest)
            largest= arr[i]
    }
    for (let i=0; i<arr.length; i++)
    {
        if(arr[i]>secondlargest && arr[i] !==largest)
            secondlargest=arr[i]
        //console.log(secondlargest)
    }
    return secondlargest
}
console.log(get2ndlargest([10, 20, 4, 556, 4891, 1, 12, 46]))