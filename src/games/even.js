import getRandomNum from '../utils';

import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const gameData = () => {
  const question = getRandomNum(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(gameData, description);
