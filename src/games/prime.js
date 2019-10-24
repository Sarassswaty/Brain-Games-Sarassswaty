import getRandomNum from '../utils';

import gameStart from '..';

const getRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return 'no';
  }
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameData = () => {
  const num = getRandomNum(101);
  const answer = String(isPrime(num));
  const question = `Question: ${num}`;
  return { question, answer };
};

export default () => gameStart(gameData, getRules);
