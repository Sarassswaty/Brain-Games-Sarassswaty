import readlineSync from 'readline-sync';

export default (gameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const { question, answer } = gameData();
    console.log(question);
    const userAnsw = readlineSync.question('Your answer: ');
    if (userAnsw === answer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${answer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
