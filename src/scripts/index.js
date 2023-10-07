import '../styles/styles.css';

import Calculator from './utils/Calculator';
import { convertStringToNumber, setInputElementsToEmpty } from './utils/utils';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const operand1El = document.querySelector('#operand1');
  const operand2El = document.querySelector('#operand2');
  const resultEl = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const operands = {
      firstNumber: operand1El.value,
      secondNumber: operand2El.value,
    };

    // Convert value input to number
    const inputKeys = Object.keys(operands);
    inputKeys.forEach((item) => {
      operands[item] = convertStringToNumber(operands[item]);
    });

    const operatorType = event.submitter.textContent.toLowerCase();

    try {
      let result = calculate(operatorType, operands);

      // Display the result
      setResult(result);

      // Set input element to empty
      setInputElementsToEmpty(operand1El);
      setInputElementsToEmpty(operand2El);
    } catch (error) {
      alert(error.message);
    }
  });

  function setResult(content) {
    resultEl.textContent = content;
  }

  function calculate(operator, data) {
    let result = 0;

    switch (operator) {
      case 'add':
        result = Calculator.addTwoNumber(data.firstNumber, data.secondNumber);
        break;
      case 'subtract':
        result = Calculator.subtractTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      case 'multiply':
        result = Calculator.multiplyTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      case 'divide':
        result = Calculator.divideTwoNumber(
          data.firstNumber,
          data.secondNumber,
        );
        break;
      default:
        alert('Operator tak diketahui');
        break;
    }

    return result;
  }
});
