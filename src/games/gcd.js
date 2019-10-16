import { getRandomNum } from '../utils';

import gameStart from '..';

const getRules = 'Find the greatest common divisor of given numbers.';

const isGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return isGcd(b, a % b);
};

const gameData = () => {
  const a = getRandomNum(101);
  const b = getRandomNum(101);
  const answer = String(isGcd(a, b));
  const question = `${a} ${b}`;
  return { answer, question };
};

export default () => gameStart(gameData, getRules);
