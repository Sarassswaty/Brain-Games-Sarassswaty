import gameLoop from '..';

const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));
const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const askQuestion = () => {
  const num = getRandomNum(101);
  const correctAnswer = checkEven(num);
  const question = `Questioin: ${num}`;
  return { question, correctAnswer };
};

export default () => gameLoop(rule, askQuestion);
