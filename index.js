// Grabs every button inside class Numbers
const numberButtons = document.querySelectorAll(".numbers button")
const operateButtons = document.querySelectorAll(".operators button");
const display = document.getElementById("display")

// Resets to Default
let currentInput = "";
let x =null;
let y = null;
let operator = null;
let list = []

// Number Buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

// Operate Buttons
operateButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        
        if(value === "CLEAR"){
            clearAll();
            return;
        }

        if(value === "="){
            equals();
            return;
        }
        
        // "+,-,/,*"
        if(value !=="" && value !=="."){
            if(x !== null && operator !== null){
                y = Number(currentInput);
                x = operate();
                display.textContent = x;
            } else {
                x = Number(currentInput);
            }

            operator = value;
            currentInput = "";
        }

        if(value ==="."){
            if(!currentInput.includes(".")){
                currentInput += button.textContent;
                display.textContent = currentInput;
            }
            return;
        }
    });
});


//operation
function operate(){
    if(operator ==="+") return add(x,y);
    if(operator ==="-") return subtract(x,y);
    if(operator ==="/") return divide(x,y);
    if(operator ==="*") return multiply(x,y);
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
function clearAll(){
    currentInput = "";
    x = null;
    y = null;
    operator = null;
    display.textContent ="0";
}
function equals(){
    if(x!==null && operator !==null && currentInput !==""){
        y = Number(currentInput);
        const result = operate();
        display.textContent = result;

        x = result;
        currentInput = "";
        operator = null;
    }
}
