import createGame from '../index';

const brainCalc = createGame({
  description: 'What is the result of the expression?',
  logic: () => {
    const MAX_NUM = 100;
    const actions = ['*', '+', '-'];
    const firstNum = Math.round(Math.random() * MAX_NUM);
    const secondNum = Math.round(Math.random() * MAX_NUM);
    const choosedActionIndex = Math.floor(Math.random() * actions.length);
    const choosedAction = actions[choosedActionIndex];
    let answer;
    switch (choosedAction) {
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
      question: `${firstNum} ${choosedAction} ${secondNum}`,
      answer
    };
  }
});

export default brainCalc;
