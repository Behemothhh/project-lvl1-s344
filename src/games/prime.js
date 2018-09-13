import createGame from '..';

const brainPrime = createGame({
  description: 'Is this number prime?',
  logic: () => {
    const MAX_NUM = 200;
    const randomNumber = Math.ceil(Math.random() * MAX_NUM);
    const checkIsDivisor = (num) => {
      if (num > randomNumber / 2) {
        return false;
      }
      if (randomNumber % num === 0) {
        return true;
      }

      return checkIsDivisor(num + 1);
    };

    return {
      question: randomNumber,
      answer: !checkIsDivisor(2) && randomNumber > 1 ? 'yes' : 'no'
    };
  }
});

export default brainPrime;
