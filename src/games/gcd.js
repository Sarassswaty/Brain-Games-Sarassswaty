import getRandomNum from '../utils';

import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const commonGreatestDivisor = (a, b) => {
  if (a === 0) return b;
  if (a < b) return commonGreatestDivisor(b, a);
  return commonGreatestDivisor(a - b, b);
};


const getData = () => {
  const a = getRandomNum(1, 100);
  const b = getRandomNum(1, 100);
  const question = `${a} ${b}`;
  const answer = String(commonGreatestDivisor(a, b));
  return [question, answer];
};

export default () => startGame(getData, description);
