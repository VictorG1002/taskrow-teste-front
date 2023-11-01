const calculaDV = (value: number) => {
  if (!Number.isInteger(value) || value < 1000 || value > 9999) {
    return console.log('Invalid number');
  }

  const numbers = value.toString().split('').map(Number);
  const weights = [4, 5, 6, 7];

  const product = numbers.map((number, index) => number * weights[index]);
  const sum = product.reduce((acc, curr) => acc + curr, 0);

  const restDivision = sum % 20;
  const finalSum = (restDivision + 7) % 10;

  return finalSum;
};

const validaNumeroXpto = (number: number) => {
  if (!Number.isInteger(number) || number < 10004 || number > 99995) {
    return false;
  }

  const takeFirst4Digits = Math.floor(number / 10); 
  const dv = number % 10;
  const dvCalculated = calculaDV(takeFirst4Digits);

  return dv === dvCalculated;
};

module.exports = { calculaDV, validaNumeroXpto };
