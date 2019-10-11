import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const askQuestion = () => {
  const num = getRandomNum(101);
  const correctAnswer = checkEven(num);
  const question = `Questioin: ${num}`;
  return { question, correctAnswer };
};


const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
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

export { getUserName, gameStart };
