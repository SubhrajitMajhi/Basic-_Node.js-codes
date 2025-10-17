//using function
function reversearr(arr)
{
    arr.reverse()
}
const arr= [1, 2, 3, 4, 5, 6, 7]
reversearr(arr)
console.log(arr.join(","))

//or
function reversearray(array)
{
    let  n=array.length
    for(let i=0; i<array.length/2; i++)
    {
        let temp=array[i]
        array[i]=array[n-i-1]
        array[n-i-1]=temp
    }
    return array
}
const array =[1,2,3,4,5,6,7]
console.log(reversearray(array))