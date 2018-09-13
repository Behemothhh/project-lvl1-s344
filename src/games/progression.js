import createGame from '..';

const brainProgression = createGame({
  description: 'What number is missing in the given progession?',
  logic: () => {
    const MAX_NUM = 100;
    const MAX_STEP = 30;
    const MAX_LENGTH = 10;
    const firstNum = Math.round(Math.random() * MAX_NUM);
    const step = Math.round(Math.random() * MAX_STEP);
    const iter = (acc, lastNum) => {
      const newLastNum = lastNum + step;
      const newLength = acc.push(newLastNum);
      if (newLength === MAX_LENGTH) {
        return acc;
      }

      return iter(acc, newLastNum);
    };
    const questionArray = iter([firstNum], firstNum);
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    const answer = questionArray.splice(randomIndex, 1, '..');

    return {
      question: questionArray.join(' '),
      answer: answer[0]
    };
  }
});

export default brainProgression;
