import { getRandomNum } from '../utils';

import gameStart from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if( n === 1) 
	return false;
  for(let i = 2; i*i <= n; i += 1) { 
	if (n % i === 0) {
	  return false;
	}
  return true;
  }
};
    
const gameData = () => {
    const num = getRandomNum(101);
    const answer = isEven(num);
    const question = `Question: ${num}`;
    return { question, answer };
  };
  
  export default () => gameStart(gameData, rules);
