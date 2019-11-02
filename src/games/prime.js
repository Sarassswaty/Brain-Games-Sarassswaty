import getRandomNum from '../utils';

import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const halfNum = num / 2;
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
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
