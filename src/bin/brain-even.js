#!/usr/bin/env node

import { askName, askIsEvenQuestion } from './index';

const NUMBER_OF_QUESTIONS = 3;
let failed = false;

console.log(`
  Welcome to the Brain Games!
  Answer "yes" if number even otherwise answer "no".
  `);

const userName = askName();

for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
  const { rightAnswer, userAnswer } = askIsEvenQuestion();
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    failed = true;
    break;
  }
}

if (failed) {
  console.log(`Let's try again, ${userName}`);
} else {
  console.log(`Congratulations, ${userName}`);
}
