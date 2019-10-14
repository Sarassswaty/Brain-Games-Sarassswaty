import cons from '@hexlet/pairs';

import startGame from '..';

import getRandomNum from '../utils';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

export const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const GameData = () => {
  const question = getRandomNum(1, 100);
  const answer = checkEven(getRandomNum(1, 100)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  startGame(GameData, rules);
};