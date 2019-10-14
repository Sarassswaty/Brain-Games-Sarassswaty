
import readlineSync from 'readline-sync';

export const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
