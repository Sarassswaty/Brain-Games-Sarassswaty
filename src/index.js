import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

import { userName } from './utils';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

const gameStart = (gameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = userName();
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const correctAnswer = car(gameData());
    const question = cdr(gameData());
    console.log(question);
    const userAnsw = readlineSync.question('Your answer: ');
    if (userAnsw === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { getUserName, gameStart };
