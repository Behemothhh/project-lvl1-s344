import createGame from '..';

const brainEven = createGame({
  description: 'Answer "yes" if number even otherwise answer "no".',
  logic: () => {
    const MAX_NUM = 1000;
    const randomNumber = Math.round(Math.random() * MAX_NUM);
    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return {
      question: randomNumber,
      answer
    };
  }
});

export default brainEven;
