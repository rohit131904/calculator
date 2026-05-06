let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";
let firstValue = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.dataset.value;

        if (!value) return;

        if (!isNaN(value) || value === ".") {
            handleNumber(value);
        } 
        else if (value === "+" || value === "-") {
            handleOperator(value);
        } 
        else if (value === "=") {
            calculateResult();
        } 
        else if (value === "C") {
            clearAll();
        }
    });
});

function handleNumber(value) {
    if (value === "." && currentInput.includes(".")) return;

    currentInput += value;
    display.value = currentInput;
}

function handleOperator(op) {
    if (currentInput === "") return;

    firstValue = parseFloat(currentInput);
    operator = op;

    display.value = currentInput + " " + op;

    currentInput = "";
}

function calculateResult() {
    if (firstValue === null || currentInput === "") return;

    let secondValue = parseFloat(currentInput);
    let result = 0;

    if (operator === "+") {
        result = firstValue + secondValue;
    } 
    else if (operator === "-") {
        result = firstValue - secondValue;
    }

    display.value = result;

    currentInput = result.toString();
    firstValue = null;
    operator = null;
}

function clearAll() {
    currentInput = "";
    firstValue = null;
    operator = null;
    display.value = "";
}