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

        // Equal button
        else if (value === "=") {

            calculateResult();

        }

        // Clear button
        else if (value === "C") {

            clearAll();

        }

    });
});

function handleNumber(value) {

    // Prevent multiple decimals
    if (value === "." && currentInput.includes(".")) {

        return;

    }

    currentInput += value;

    updateDisplay();

}

function handleOperator(op) {

    // Prevent operator without number
    if (currentInput === "") return;

    numbers.push(parseFloat(currentInput));

    operators.push(op);

    currentInput = "";

    updateDisplay();

}

function calculateResult() {

    if (currentInput === "") return;

    numbers.push(parseFloat(currentInput));

    // Process operators one by one
    for (let i = 0; i < operators.length; i++) {

        let first = numbers[i];

        let second = numbers[i + 1];

        let result = 0;

        // Percentage Logic
        if (operators[i] === "%") {

            result = (first / 100) * second;

        }

        // Multiplication Logic
        else if (operators[i] === "*") {

            result = first * second;

        }

        // Replace old values with result
        numbers.splice(i, 2, result);

        operators.splice(i, 1);

        i--;

    }

    let finalResult = numbers[0];

    display.value = finalResult;

    currentInput = finalResult.toString();

    numbers = [];

    operators = [];

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
 // Hello
    expression += currentInput;

    display.value = expression;
}