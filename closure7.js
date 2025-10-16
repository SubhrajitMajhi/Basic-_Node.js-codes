function outer()
{
    let count=0
    
    function inner()
    {
        count++
        console.log(count)
    }
    return inner
}

let fn=outer()


for(i=0; i<=10; i++)
{
    fn()
}
