import getRandomNum from '../utils';

import startGame from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startElement, progressionStep, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = startElement + progressionStep * i;
  }
  return progression;
};

const getData = () => {
  const firstElementProgression = getRandomNum(1, 50);
  const step = getRandomNum(1, progressionLength);
  const hidenItemIndex = getRandomNum(1, progressionLength);
  const progression = getProgression(firstElementProgression, step, progressionLength);
  const answer = String(progression[hidenItemIndex]);
  progression[hidenItemIndex] = '..';
  const question = progression.join('  ');
  return [question, answer];
};

export default () => startGame(getData, description);
