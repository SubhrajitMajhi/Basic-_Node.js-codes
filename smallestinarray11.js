
////find the smallest element in the array
function largest (arr){
    let max = arr[0]
    for (i= 0; i<arr.length; i++)
    {
        if(arr[i]<max )
        {
            max = arr[i]
        }
    }
    return max
}
const arr = [10, 20, 4, 556, 4891, 1, 12, 46]
console.log(largest (arr))