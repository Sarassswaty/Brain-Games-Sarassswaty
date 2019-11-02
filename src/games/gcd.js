import getRandomNum from '../utils';

import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const commonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return commonDivisor(b, a % b);
};

const gameData = () => {
  const a = getRandomNum(1, 101);
  const b = getRandomNum(1, 101);
  const answer = String(commonDivisor(a, b));
  const question = `${a} ${b}`;
  return [answer, question];
};

export default () => startGame(gameData, description);
