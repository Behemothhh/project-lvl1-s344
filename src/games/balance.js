import createGame from '..';

const brainBalance = createGame({
  description: 'Balance the given number',
  logic: () => {
    const MAX_NUM = 10000;
    const randomNumber = Math.round(Math.random() * MAX_NUM);
    const numberAsString = String(randomNumber);
    const numbersSum = [].slice.call(numberAsString)
      .reduce((acc, number) => acc + Number(number), 0);
    const highestNum = Math.ceil(numbersSum / numberAsString.length);
    const ansArray = new Array(numberAsString.length).fill(highestNum);
    const overflow = highestNum * numberAsString.length - numbersSum;
    if (overflow) {
      ansArray.splice(0, overflow, ...Array(overflow).fill(highestNum - 1));
    }

    return {
      question: String(randomNumber),
      answer: ansArray.join('')
    };
  }
});

export default brainBalance;
