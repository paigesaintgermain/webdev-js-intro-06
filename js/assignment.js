'use strict';

const submissionBtn = document.getElementById('submission-btn');
const evenOrOddElement = document.getElementById('even-or-odd');
const sumTheNumbersElement = document.getElementById('sum-the-numbers');
const createNumberArrayElement = document.getElementById('create-number-array');

function evenOrOdd() {
    const num = 3;
    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value to the string "Even" or "Odd" accordingly

    if (3 % 2 !== 0) {
        evenOrOddElement.innerHTML = 'Odd';
    } else {
        evenOrOddElement.innerHTML = 'Even';
    }
}

function sumTheNumbers() {
    let sum = 0;
    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page

    let total = 0;
    for (let index = 1; index <= 10; index++) {
        total = total + index;
    }

    sumTheNumbersElement.innerHTML = total;
}

function createNumberArray() {
    const numberArray = [];

    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

    for (let index = 1; index <= 10; index++) {
        numberArray.push(index);
    }

    createNumberArrayElement.innerHTML = numberArray;
}

function render() {
    // Call the created functions
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener('click', function () {
    render();
});
