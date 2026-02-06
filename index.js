// Takes in User Input
function input(){
    let x  = prompt("Enter the first number.")
    let operator = prompt("Enter the operator.")
    let y = prompt("Enter the second number.")
    
    // Applies Operation
    let result = operate(x,y,operator);
    // Displays the Result
    alert("Result: " + result);
}

// Applies Operation
function operate(x,y,operator){
    // Return Calculation
    if(operator == "+")
        result = add(x,y);
    else if(operator == "-")
        result = subtract(x,y);
    
    else if(operator == "*")
        result = multiply(x,y);
    
    else if(operator == "/")
        result = divide(x,y);

    return result;
}

// Calculate Functions (+,-,*,/)
function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y
}

function multiply(x,y){
    return (x*y)
}

function divide(x,y){
    return (x/y)
}

input();

// console.log(add(x,y))
// console.log(substract(x,y))
// console.log(multiply(x,y))
// console.log(divide(x,y))

// document.write(add(x,y) + "<br>")
// document.write(add(x,y))

