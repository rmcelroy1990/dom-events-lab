/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/

let firstValue = null;
let secondValue = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/
let totalDisplay = document.querySelector('.display');
  totalDisplay.innerText = 0;

let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');

let numbers = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');
/*----------------------------- Event Listeners -----------------------------*/

equalsButton.addEventListener('click', handleEqualBtnClick);
clearButton.addEventListener('click', clear);

//button.addEventListener('click', (event) => {}
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(calculator.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });

  numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
      totalDisplay.innerText = Number(
        totalDisplay.innerText + event.target.innerText
      );
    });
  });

  operationButtons.forEach((operation) => {
    operation.addEventListener('click', handleOperatorClick);
  });
/*-------------------------------- Functions --------------------------------*/

const subtract = () => {
  return firstValue - secondValue;
};

const add = () => {
  return firstValue + secondValue;
};

const multiply = () => {
  return firstValue * secondValue;
};

const divide = () => {
  return firstValue / secondValue;
};

  calculator.addEventListener('click'), (addNumbers) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);

    // Example
  }
  if (event.target.classList.contains('number')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }

  const renderCalculation = () => {
    let total;
    if (opertion === 'add') {
      total = add();
    }
  }
  if (operation === 'subtract') {
    total = subtract();
  }
  if (operation === 'multiply') {
    total = multiply();
  }
  if (operation === 'divide') {
    total = divide();
  }

  const clear = () => {
    totalDisplay.innerText = 0;
    firstValue = null;
    secondValue = null;
    operation = null;
  };

 const handleEqualBtnClick = () => {
  secondValue = parseInt(totalDisplay.innerText);
  renderCalculation();
 };

 const handleOperatorClick = () => {
  frstValue = parseInt(totalDisplay.innerText);
  operation = event.target.dispatchEvent;
  totalDisplay.innerText = 0;
 };

