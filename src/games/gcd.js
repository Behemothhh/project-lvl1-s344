import Game from './index';

const brainGCD = new Game({
  description: 'Find the greatest common divisor of given numbers',
  logic: () => {
    const MAX_NUM = 100;
    const firstNum = Math.ceil(Math.random() * MAX_NUM);
    const secondNum = Math.ceil(Math.random() * MAX_NUM);
    let minNumber = Math.min(firstNum, secondNum);
    while (firstNum % minNumber !== 0 || secondNum % minNumber !== 0) {
      minNumber -= 1;
    }

    return {
      question: `${firstNum} ${secondNum}`,
      answer: minNumber
    };
  }
});

export default brainGCD;
