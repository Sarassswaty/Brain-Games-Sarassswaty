import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default (rule, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = userName();
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const { question, correctAnswer } = askQuestion();
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
