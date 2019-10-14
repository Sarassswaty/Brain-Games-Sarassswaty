import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

export default (gameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const info = gameData();
    const correctAnswer = car(info);
    const question = cdr(info);
    const userAnsw = readlineSync.question(`Question: ${question} `);
    if (userAnsw === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
