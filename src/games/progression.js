import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'What number is missing in the progression?';

const isProgression = () => {
  const progress = [0];
  const diff = getRandomNum(10);
  for (let i = 0; i <= 10; i += 1) {
    progress.push(progress[i] + diff);
  }
  return progress;
};


const gameData = () => {
  const prog = isProgression(getRandomNum(10));
  const index = getRandomNum(10);
  const answer = prog[index];
  prog[index] = '..';
  let strProgr = '';
  for (let i = 0; i < prog.length; i += 1) {
    strProgr += `${prog[i]} `;
  }
  const question = `Question: ${strProgr}`;
  return { question, answer };
};

export default () => gameStart(gameData, rules);
