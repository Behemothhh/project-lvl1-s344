import readlineSync from 'readline-sync';

const createGame = ({ description, logic }) => {
  console.log(`
Welcome to the Brain Games!
${description}
  `);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  const askQuestions = n => {
    if (n === 0) {
      return console.log(`Congratulations, ${userName}`);
    }
    const { question, answer } = logic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(answer)) {
      console.log('Correct!');
      return askQuestions(n - 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    console.log(`Let's try again, ${userName}`);
  };

  return askQuestions;
}

export default createGame;
