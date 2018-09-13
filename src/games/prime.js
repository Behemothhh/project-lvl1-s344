import createGame from '..';

const brainPrime = createGame({
  description: 'Is this number prime?',
  logic: () => {
    const MAX_NUM = 200;
    const randomNumber = Math.ceil(Math.random() * MAX_NUM);
    const isPrime = num => {
      if (num <= 1) {
        return false;
      }
      const checkIsDivisor = divisor => {
        if (divisor > num / 2) {
          return false;
        }
        if (num % divisor === 0) {
          return true;
        }

        return checkIsDivisor(divisor + 1);
      };

      return !checkIsDivisor(2);
    };

    return {
      question: randomNumber,
      answer: isPrime(randomNumber) ? 'yes' : 'no'
    };
  }
});

export default brainPrime;
