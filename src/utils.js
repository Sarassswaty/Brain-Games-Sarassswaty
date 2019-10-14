import readlineSync from 'readline-sync';

export const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

export const characters = ['+', '-', '*'];

export const chooseChar = (char) => {
  let fn;
  switch (char) {
    case '+':
      fn = (a, b) => a + b;
      break;
    case '-':
      fn = (a, b) => a - b;
      break;
    case '*':
      fn = (a, b) => a * b;
      break;
      // no default
  }
  return fn;
};

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
