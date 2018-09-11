import readlineSync from 'readline-sync';

export const askName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const askIsEvenQuestion = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { rightAnswer, userAnswer };
};
