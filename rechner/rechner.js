document.addEventListener("DOMContentLoaded", function() {
    const displayElement = document.getElementById('display');
    const calculatorButtons = document.querySelectorAll('.buttons button');
    const resetButton = document.getElementById('reset');

    let currentInput = '';
    let operator = '';
    let previousValue = '';

    calculatorButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    resetButton.addEventListener('click', resetCalculator);

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;
        if (buttonValue === '=') {
            calculateResult();
        } else if (isOperator(buttonValue)) {
            handleOperator(buttonValue);
        } else {
            appendInput(buttonValue);
        }
    }

    function isOperator(value) {
        return ['+', '-', '×', '÷'].includes(value);
    }

    function appendInput(value) {
        currentInput += value;
        updateDisplay(currentInput);
    }

    function handleOperator(value) {
        if (currentInput !== '') {
            operator = value;
            previousValue = currentInput;
            currentInput += ' ' + value + ' '; // Füge den Operator mit Leerzeichen hinzu
            updateDisplay(currentInput);
            currentInput = '';
        }
    }

    function calculateResult() {
        if (previousValue !== '' && currentInput !== '' && operator !== '') {
            const previous = parseFloat(previousValue);
            const current = parseFloat(currentInput);

            switch (operator) {
                case '+':
                    currentInput = previous + current;
                    break;
                case '-':
                    currentInput = previous - current;
                    break;
                case '×':
                    currentInput = previous * current;
                    break;
                case '÷':
                    currentInput = previous / current;
                    break;
            }

            updateDisplay(currentInput);
            previousValue = '';
            operator = '';
        }
    }

    function resetCalculator() {
        currentInput = '';
        operator = '';
        previousValue = '';
        updateDisplay('0');
    }

    function updateDisplay(value) {
        displayElement.textContent = value;
    }
});