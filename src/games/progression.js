import getRandomNum from '../utils';

import startGame from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNumber, step) => {
  const iter = (arr) => {
    const len = arr.length;
    if (len === progressionLength) {
      return arr;
    }
    return iter(arr.concat(arr[len - 1] + step));
  };
  return iter([startNumber]);
};

const gameData = () => {
  const startNumber = getRandomNum(1, 50);
  const step = getRandomNum(1, 10);
  const hidenItemIndex = getRandomNum(1, 10);

  const progression = getProgression(startNumber, step);
  const answer = `${progression[hidenItemIndex]}`;
  progression[hidenItemIndex] = '..';
  const question = progression.join('  ');
  return [question, answer];
};

export default () => startGame(gameData, description);
