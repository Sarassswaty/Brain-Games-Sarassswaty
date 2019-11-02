import getRandomNum from '../utils';

import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const question = getRandomNum(3, 44);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(gameData, description);
