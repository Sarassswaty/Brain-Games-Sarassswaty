import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));
const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const askQuestion = () => {
  const num = getRandomNum(101);
  const correctAnswer = checkEven(num);
  const question = `Questioin: ${num}`;
  return { question, correctAnswer };
};
