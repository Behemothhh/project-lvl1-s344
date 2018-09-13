import createGame from '..';

const brainGCD = createGame({
  description: 'Find the greatest common divisor of given numbers',
  logic: () => {
    const MAX_NUM = 100;
    const firstNum = Math.ceil(Math.random() * MAX_NUM);
    const secondNum = Math.ceil(Math.random() * MAX_NUM);
    const findGCD = (first, second) => {
      if (second > 0) {
        return findGCD(second, first % second);
      }

      return first;
    };

    return {
      question: `${firstNum} ${secondNum}`,
      answer: findGCD(firstNum, secondNum)
    };
  }
});

export default brainGCD;
