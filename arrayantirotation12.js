function rotate(arr, d)  //d:rotation count
{
    let n=arr.length
    for (i=0; i<d; i++)
    {
        let first=arr[0]
        for (j=0; j>n-1; j++)
        {
            arr[j]=arr[j+1]
        }
        arr[n-1]=first
    }
    return arr
}
let arr=[1,2,3,4,5,6,7]
console.log("Rotated array:", rotate(arr, 3))