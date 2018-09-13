import createGame from '..';

const brainCalc = createGame({
  description: 'What is the result of the expression?',
  logic: () => {
    const MAX_NUM = 100;
    const actions = ['*', '+', '-'];
    const firstNum = Math.round(Math.random() * MAX_NUM);
    const secondNum = Math.round(Math.random() * MAX_NUM);
    const chosenActionIndex = Math.floor(Math.random() * actions.length);
    const chosenAction = actions[chosenActionIndex];
    let answer;
    switch (chosenAction) {
      case '*':
        answer = firstNum * secondNum;
        break;
      case '+':
        answer = firstNum + secondNum;
        break;
      case '-':
        answer = firstNum - secondNum;
        break;
      default:
    }

    return {
      question: `${firstNum} ${chosenAction} ${secondNum}`,
      answer
    };
  }
});

export default brainCalc;
