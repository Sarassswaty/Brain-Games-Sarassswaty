
import readlineSync from 'readline-sync';

export const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

export const characters = ['+', '-', '*'];

export const chooseChar = (a, b, char) => {
  switch (char) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    // no default
  }
};

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
