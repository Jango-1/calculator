/*Query selectors for the 'results' portion of the
calculation and for the current input value that the user has selected.*/
const numInput = document.querySelector(".num-input");
const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const calcOperator = document.querySelector(".operator");
const answer = document.querySelector(".answer");

/*Query selectors for the buttons on the calculator*/
const clear = document.querySelector(".clear");
const equalSign = document.querySelector(".equal");
const positiveNegative = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");
const division = document.querySelector(".divide");
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".subtract");
const multiplication = document.querySelector(".multiply");
const numZero = document.querySelector(".num-0");
const numOne = document.querySelector(".num-1");
const numTwo = document.querySelector(".num-2");
const numThree = document.querySelector(".num-3");
const numFour = document.querySelector(".num-4");
const numFive = document.querySelector(".num-5");
const numSix = document.querySelector(".num-6");
const numSeven = document.querySelector(".num-7");
const numEight = document.querySelector(".num-8");
const numNine = document.querySelector(".num-9");

/*Variables that will be changed based on button clicks and calculations.*/
let num1 = "";
let num2 = "";
let operator = "";
let currentInput = "";
let result = null;

/*Event listener for the numbers.*/
numZero.addEventListener("click", () => {
    currentInput += 0;
    numInput.textContent += 0;
    calcOperator.textContent = "";
});
numOne.addEventListener("click", () => {
    currentInput += 1;
    numInput.textContent += 1;
    calcOperator.textContent = "";
});
numTwo.addEventListener("click", () => {
    currentInput += 2;
    numInput.textContent += 2;
    calcOperator.textContent = "";
});
numThree.addEventListener("click", () => {
    currentInput += 3;
    numInput.textContent += 3;
    calcOperator.textContent = "";
});
numFour.addEventListener("click", () => {
    currentInput += 4;
    numInput.textContent += 4;
    calcOperator.textContent = "";
});
numFive.addEventListener("click", () => {
    currentInput += 5;
    numInput.textContent += 5;
    calcOperator.textContent = "";
});
numSix.addEventListener("click", () => {
    currentInput += 6;
    numInput.textContent += 6;
    calcOperator.textContent = "";
});
numSeven.addEventListener("click", () => {
    currentInput += 7;
    numInput.textContent += 7;
    calcOperator.textContent = "";
});
numEight.addEventListener("click", () => {
    currentInput += 8;
    numInput.textContent += 8;
    calcOperator.textContent = "";
});
numNine.addEventListener("click", () => {
    currentInput += 9;
    numInput.textContent += 9;
    calcOperator.textContent = "";
});

/*Operator functions for add, subtract, multiply, divide.*/
function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}

/*Operate function; takes the user-input value of operator, num1,
and num2. Returns the corresponding calculated result.*/
function operate (operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '×') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'Error';
        }
        return divide(num1, num2);
    } else {
        return 'Invalid.';
    }
}

/*Event listener for the clear button. Removes the current input,
any other inputs, and the answer above.*/
clear.addEventListener("click", () => {
    numInput.textContent = " ";
    firstInput.textContent = " ";
    secondInput.textContent = " ";
    calcOperator.textContent = " ";
    answer.textContent = " ";

    currentInput = "";
    num1 = "";
    num2 = "";
    operator = "";
    result = null; //reset the result
});

/*Operator event listeners.*/
addition.addEventListener("click", () => {
    if (result !== null) {
        num1 = result;
        currentInput = "";
    } else {
        num1 += currentInput;
    }
    numInput.textContent = " ";
    calcOperator.textContent = "+";
    currentInput = "";
    operator = "+";
});

subtraction.addEventListener("click", () => {
    if (result !== null) {
        num1 = result;
        currentInput = "";
    } else {
        num1 += currentInput;
    }
    numInput.textContent = " ";
    calcOperator.textContent = "-";
    currentInput = "";
    operator = "-";
});

multiplication.addEventListener("click", () => {
    if (result !== null) {
        num1 = result;
        currentInput = "";
    } else {
        num1 += currentInput;
    }
    numInput.textContent = " ";
    calcOperator.textContent = "×";
    currentInput = "";
    operator = "×";
});

division.addEventListener("click", () => {
    if (result !== null) {
        num1 = result;
        currentInput = "";
    } else {
        num1 += currentInput;
    }
    numInput.textContent = " ";
    calcOperator.textContent = "/";
    currentInput = "";
    operator = "/";
});

equalSign.addEventListener("click", () => {
    if (currentInput !== "") {
        num2 = currentInput;
    }
    if (num1 !== "" && operator !== "" && num2 !== "") {
        result = operate(operator, parseFloat(num1), parseFloat(num2));
        answer.textContent = result;
        num1 = result; // Set the result as the new num1
        currentInput = ""; // Clear current input for next operation
        operator = ""; // Reset operator after calculation
    }
});