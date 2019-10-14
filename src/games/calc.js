import gameStart from '../index';

export const characters = ['+', '-', '*'];

export const chooseChar = (a, b, char) => {
  switch (char) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
      // no default
  }
};
