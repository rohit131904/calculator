let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";
let numbers = [];
let operators = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.dataset.value;

        if (!value) return;

        // Numbers and decimal
        if (!isNaN(value) || value === ".") {

            handleNumber(value);

        }

        // Operators
        else if (value === "%" || value === "*") {

            handleOperator(value);

        }


        else if (value === "+") {
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


    if (value === "." && currentInput.includes(".")) {
        return;
    }

    currentInput += value;

    updateDisplay();

}

function handleOperator(op) {

    // Prevent operator without number
    if (currentInput === "") return;

<<<<<<< HEAD
    firstValue = parseFloat(currentInput);
    operator = op;

    display.value = currentInput + " " + op;
=======
    numbers.push(parseFloat(currentInput));
    operators.push(op);
>>>>>>> origin/staging

    currentInput = "";

    updateDisplay();

}

function calculateResult() {

    if (currentInput === "") return;

    numbers.push(parseFloat(currentInput));

    for (let i = 0; i < operators.length; i++) {

        let first = numbers[i];

        let second = numbers[i + 1];

        let result = 0;

        // Percentage Logic
        if (operators[i] === "%") {

            let first = numbers[i];
            let second = numbers[i + 1];

            let percentValue = (first / 100) * second;

            numbers.splice(i, 2, percentValue);
            operators.splice(i, 1);

            i--;
        }

        // Addition Logic
        else if (operators[i] === "+") {

            let sum = numbers[i] + numbers[i + 1];

            numbers.splice(i, 2, sum);
            operators.splice(i, 1);

            i--;
        }

        // Multiplication Logic
        else if (operators[i] === "*") {

            result = first * second;
            numbers.splice(i, 2, result);

            operators.splice(i, 1);

            i--;

        }

    }

    let result = numbers[0];

    let finalResult = numbers[0];

    display.value = finalResult;

    currentInput = finalResult.toString();

    numbers = [];

    operators = [];

    currentInput = result.toString();

}

function clearAll() {

    currentInput = "";

    numbers = [];

    operators = [];

    display.value = "0";

}

function updateDisplay() {

    let expression = "";

    for (let i = 0; i < numbers.length; i++) {

        expression += numbers[i];

        if (operators[i]) {
            expression += " " + operators[i] + " ";
        }
    }

    expression += currentInput;

    display.value = expression;

}