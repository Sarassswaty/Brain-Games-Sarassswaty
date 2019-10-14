import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'What number is missing in the progression?';




const gameData = () => {
  
  const question = `Question: ${num}`;
  return { question, answer };
};

export default () => gameStart(gameData, rules);
