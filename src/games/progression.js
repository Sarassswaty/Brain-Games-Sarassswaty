import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'What number is missing in the progression?';

const isProgression = () => {
  const progress = [0];
  const diff = getRandomNum(8);
  for (let i = 0; i <= 10; i += 1) {
    progress.push(progress[i] + diff);
  }
  return progress;
};


const gameData = () => {
  const progression = isProgression(getRandomNum(10));
  const question = `Question: ${num}`;
  const answer = 
  return { question, answer };
};

export default () => gameStart(gameData, rules);
