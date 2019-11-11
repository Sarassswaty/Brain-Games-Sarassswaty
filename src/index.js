import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = gameData();
    console.log(question);
    const userAnsw = readlineSync.question('Your answer: ');
    if (userAnsw === answer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
