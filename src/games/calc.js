import getRandomNum from '../utils';

import startGame from '..';

const description = 'What is the result of the expression?';

const signs = '+-*';

const calculateExpression = (operation, a, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getData = () => {
  const x = getRandomNum(-100, 100);
  const y = getRandomNum(-100, 100);
  const sign = signs[getRandomNum(0, signs.length - 1)];

  const question = `${(x)} ${sign} ${(y)}`;
  const answer = String(calculateExpression(sign, x, y));

  return [question, answer];
};

export default () => startGame(getData, description);
