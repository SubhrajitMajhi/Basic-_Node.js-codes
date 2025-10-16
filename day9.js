let a= 15
if (a%3 == 0 && a%5 == 0 && a%10 !=0)
{
    console.log(true)
}
else 
   { 
    console.log(false)
   }

//swap 
let c=6
let b=3

c=c+b
b= c-b
c= c-b

console.log("c :", c, "b :", b)

//or
let x=43,z=54;
[x, z] = [z, x]
console.log("x :", x, z)


//print even nmber from  1 to 49
for (let i=2; i<=48; i+=2)
  {  console.log(i)}

//write a funnction which will count how many times it has been called
function counter()
{
    let count =0
    return  function()
    {
        count++
        console.log("function called", count, )
    }
}
