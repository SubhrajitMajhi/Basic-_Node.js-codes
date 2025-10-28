//noramal method
let a=5
fact=1
for (a=1; a<=5; a++)
{   
    fact *= a
    console.log("factorial of",a, "is", fact )
}

//recurssion
function factorial(n)
{ //base case: factorial of 0 and 1 is 1
    if(n==0 || n==1)
    {
        return 1;
    }

//recursive case: n! = n * (n-1)!
return n * factorial(n-1);
}

console.log("factorial of 5 is", factorial(5));