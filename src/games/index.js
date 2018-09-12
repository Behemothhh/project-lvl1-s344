import readlineSync from 'readline-sync';

export default class Game {
  constructor({ description, logic }) {
    this.description = description || '';
    this.logic = logic;
  }

  welcomeUser() {
    console.log(`
Welcome to the Brain Games!
${this.description}
    `);
  }

  askName() {
    this.userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${this.userName}`);
  }

  askQuestions(n) {
    if (n === 0) {
      return this.winGame();
    }
    const { question, answer } = this.logic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(answer)) {
      console.log('Correct!');
      return this.askQuestions(n - 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    return this.loseGame();
  }

  winGame() {
    console.log(`Congratulations, ${this.userName}`);
  }

  loseGame() {
    console.log(`Let's try again, ${this.userName}`);
  }

  startGame(n) {
    this.welcomeUser();
    this.askName();
    this.askQuestions(n);
  }
}
