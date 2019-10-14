import readlineSync from 'readline-sync';

import {
  getRandomNum,
  userName,
  chooseChar,
  characters,
  checkEven,
} from './utils';

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
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = userName();
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const char = characters[getRandomNum(3)];
    const a = getRandomNum(101);
    const b = getRandomNum(101);
    const correctAnswer = chooseChar(char)(a, b);
    const question = `Question: ${a} ${char} ${b}`;
    console.log(question);
    const answ = readlineSync.question('Your answer: ');
    if (answ === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, '${name}'!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { getUserName, gameStart, gameCalc };
