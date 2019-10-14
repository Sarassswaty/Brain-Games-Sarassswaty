import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  userName();
};

const gameStart = (GameData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = userName();
  const count = 3;
  for (let i = 0; i < count; i += 1) {
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
    const correctAnswer = chooseChar(a, b, char);
    const question = `Question: ${a} ${char} ${b}`;
    console.log(question);
    const answ = readlineSync.question('Your answer: ');
    if (answ === String(correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, '${name}'!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { getUserName, gameStart, gameCalc };
