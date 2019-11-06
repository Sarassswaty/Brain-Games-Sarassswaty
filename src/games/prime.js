import getRandomNum from '../utils';

import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const half = num / 2;
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = getRandomNum(3, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(getData, description);
