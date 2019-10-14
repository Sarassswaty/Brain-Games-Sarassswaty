import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameData = () => {
  const num = getRandomNum(101);
  const answer = isEven(num);
  const question = `Question: ${num}`;
  return { question, answer };
};

export default () => gameStart(gameData, rules);
