import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
    const num = getRandomNum(101);
    const answer = isEven(num);
    const question = `Question: ${num}`;
    return { question, answer };
  };
  
  export default () => gameStart(gameData, rules);
  