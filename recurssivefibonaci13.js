
function fibo()
{
    if (n===0 || n===1)
    {
        return 1
    }
    return fibo(n-1) + fibo(n-2)
}
console.log("fibonaci of 7 is", fibo(7))