import { cons } from '@hexlet/pairs';

import gameStart from '..';

import { getRandomNum } from '../utils';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

export const checkEven = (num) => num % 2 === 0;

const gameData = () => {
  const question = getRandomNum(1, 100);
  const answer = checkEven(getRandomNum(1, 100)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  gameStart(gameData, rules);
};
