const Calculator = {
  addTwoNumber(number1, number2) {
    if (!(typeof number1 === 'number'))
      throw new Error('Parameter number1 harus integer');
    if (!(typeof number2 === 'number'))
      throw new Error('Parameter number2 harus integer');

    if (isNaN(number1) || isNaN(number2))
      throw new Error('Parameter number1 dan number2 tidak boleh NaN');

    return number1 + number2;
  },

  subtractTwoNumber(number1, number2) {
    if (!(typeof number1 === 'number'))
      throw new Error('Parameter number1 harus integer');
    if (!(typeof number2 === 'number'))
      throw new Error('Parameter number2 harus integer');

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error('Parameter number1 dan number2 tidak boleh NaN');
    }

    return number1 - number2;
  },

  multiplyTwoNumber(number1, number2) {
    if (!(typeof number1 === 'number'))
      throw new Error('Parameter number1 harus integer');
    if (!(typeof number2 === 'number'))
      throw new Error('Parameter number2 harus integer');

    if (isNaN(number1) || isNaN(number2))
      throw new Error('Parameter number1 dan number2 tidak boleh NaN');

    return number1 * number2;
  },

  divideTwoNumber(number1, number2) {
    if (!(typeof number1 === 'number'))
      throw new Error('Parameter number1 harus integer');
    if (!(typeof number2 === 'number'))
      throw new Error('Parameter number2 harus integer');

    if (isNaN(number1) || isNaN(number2))
      throw new Error('Parameter number1 dan number2 tidak boleh NaN');

    return number1 / number2;
  },
};

export default Calculator;
