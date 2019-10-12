import readlineSync from 'readline-sync';
import { getRandomNum, userName, checkEven } from './utils';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const name = userName();
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const num = getRandomNum(101);
    const correctAnswer = checkEven(num);
    const question = `Question: ${num}`;
    console.log(question);
    const answ = readlineSync.question('Your answer: ');
    if (answ === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const gameCalc = () => {

};
export { getUserName, gameStart, gameCalc };
