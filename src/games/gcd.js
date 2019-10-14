import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const isEven = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return isEven(b, a % b);
};

const gameData = () => {
  const a = getRandomNum(101);
  const b = getRandomNum(101);

};

export default () => gameStart(gameData, rules);
