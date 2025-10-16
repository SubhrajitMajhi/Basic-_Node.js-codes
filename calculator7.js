//function expression
const  calculate= function(operand1, operand2, operator)
{
    switch(operator)
    {
    case"+":
        return operand1+operand2;
    case "-":
        return operand1-operand2;
    case "*":
        return operand1*operand2;
    case "/":
        return operand1/operand2;
    case "**":
        return operand1**operand2;
    case "%":
        return operand1%operand2;
    default:
        return "innvalid operator"
    }
}
console.log(calculate(12,54,"*"))


//function declaration
 function calculate1(operand1, operand2, operator)
{
    switch(operator)
    {
    case"+":
        return operand1+operand2;
    case "-":
        return operand1-operand2;
    case "*":
        return operand1*operand2;
    case "/":
        return operand1/operand2;
    case "**":
        return operand1**operand2;
    case "%":
        return operand1%operand2;
    default:
        return "innvalid operator"
    }
}
console.log(calculate1(12,54,"*"))


//arrow function

const swap = (a,b) => 
    {a=a+b, 
    b=a-b,
    a=a-b

    console.log("a= " , a, "b ", b)
    }
    swap(1,2)

    //practice1

    const sum = (a,b) =>
    {
        return a+b
    }
    console.log(sum(1,5))

    //practice2
    const sum1= (a,b) => a+b
    console.log(sum1(5,45))

    //practice3 no parameter
    const num1 = () => console.log(254)
    num1()
   // num1()

    //practice4

    const sum3 = (x) =>x**x
    console.log(sum3(3))