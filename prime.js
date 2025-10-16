
var num = 342
{
    if(num<=1)
    console.log("not prime")
else 
{
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if (num%i===0)
            console.log("not prime")
        else
        {
            console.log("prime")
        }
    }
}
}