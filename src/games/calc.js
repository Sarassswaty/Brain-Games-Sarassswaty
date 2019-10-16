import { getRandomNum } from '../utils';

import gameStart from '..';

const getRules = 'What is the result of the expression?';

const characters = ['+', '-', '*'];

const chooseChar = (sign) => {
  let fn;
  switch (sign) {
    case '+':
      fn = (a, b) => a + b;
      break;
    case '-':
      fn = (a, b) => a - b;
      break;
    case '*':
      fn = (a, b) => a * b;
      break;
      // no default
  }
  return fn;
};

const gameData = () => {
  const a = getRandomNum(101);
  const b = getRandomNum(101);
  const sign = characters[getRandomNum(3)];
  const answer = String(chooseChar(sign)(a, b));
  const question = `${a} ${sign} ${b}`;
  return { question, answer };
};

export default () => gameStart(gameData, getRules);
