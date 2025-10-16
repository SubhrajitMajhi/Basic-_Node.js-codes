function greatest(num1,num2,num3)
{
    if(num1>=num2 && num1>=num3)
        console.log("num1 is greatest")
    else if(num2>=num1 && num2>=num3)
    console.log("num2 is greatest")
    if(num3>=num1 &&num3>=num2)
        console.log("num3 is greatest")
}
greatest(12,54,875)

//function expression

const name = function(myname)
{
    console.log(myname)
}
name("Subhra")

//check oddeven
const checkoddeven = function(num)
{
 if(num%2===0)
        console.log("even")
    else
        console.log("odd")
}
checkoddeven(32)

