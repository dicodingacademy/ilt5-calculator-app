import Calculator from '../src/scripts/Calculator';

describe('Calculator', () => {
  const firstNumber = 2;
  const secondNumber = 5;

  const firstString = '2';
  const secondString = '5';

  /*Adding*/
  it('should be able to add two number properly', () => {
    const result = Calculator.addTwoNumber(firstNumber, secondNumber);
    expect(result).toBe(7);
  });

  /*Subtracting*/
  it('should be able to subtract two number properly', () => {
    const result = Calculator.subtractTwoNumber(firstNumber, secondNumber);
    expect(result).toBe(-3);
  });

  /*Multiplying*/
  it('should be able to multiply two number properly', () => {
    const result = Calculator.multiplyTwoNumber(firstNumber, secondNumber);
    expect(result).toBe(10);
  });

  /*Dividing*/
  it('should be able to multiply two number properly', () => {
    const result = Calculator.divideTwoNumber(firstNumber, secondNumber);
    expect(result).toBe(0.4);
  });

  /*Others testing*/
  it('should fail and throw an error when passing two string as arguments', () => {
    expect(() => {
      Calculator.addTwoNumber(firstString, secondString);
    }).toThrow();

    expect(() => {
      Calculator.subtractTwoNumber(firstString, secondString);
    }).toThrow();

    expect(() => {
      Calculator.multiplyTwoNumber(firstString, secondString);
    }).toThrow();

    expect(() => {
      Calculator.divideTwoNumber(firstString, secondString);
    }).toThrow();
  });

  it('should be able to return number when called', () => {
    const addResultType = typeof Calculator.addTwoNumber(
      firstNumber,
      secondNumber,
    );
    const subtractResultType = typeof Calculator.subtractTwoNumber(
      firstNumber,
      secondNumber,
    );
    const multiplyResultType = typeof Calculator.multiplyTwoNumber(
      firstNumber,
      secondNumber,
    );
    const divideResultType = typeof Calculator.divideTwoNumber(
      firstNumber,
      secondNumber,
    );

    expect(addResultType).toBe('number');
    expect(subtractResultType).toBe('number');
    expect(multiplyResultType).toBe('number');
    expect(divideResultType).toBe('number');
  });

  it('should fail if pass not a number value', function () {
    const firstNumber = NaN;
    const secondNumber = NaN;

    expect(() => {
      Calculator.addTwoNumber(firstNumber, secondNumber);
    }).toThrowError(Error);
    expect(() => {
      Calculator.subtractTwoNumber(firstNumber, secondNumber);
    }).toThrowError(Error);
    expect(() => {
      Calculator.multiplyTwoNumber(firstNumber, secondNumber);
    }).toThrowError(Error);
    expect(() => {
      Calculator.divideTwoNumber(firstNumber, secondNumber);
    }).toThrowError(Error);
  });
});
