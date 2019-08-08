const process = require('process');
const fs = require('fs');

const questions = [
  'what is the colour of healthy grass?',
  'Is the sun a planet?',
  'What is the temperature of the boiling water?',
  'Should you touch dry ice with bare hands?',
]

const correctAnswers = [
  'green',
  'no',
  '100 degrees',
  'no'
]

let usersAnswers = [];

let userName;
let validUserName = false;

askName = () => {
    process.stdout.write(`Hello and welcome to the quiz \n What is your name? \n`);
}

function askQuestion(num){
  process.stdout.write(`${questions[num]}\n`);
}

process.stdin.on('data', function(answer){
  const inputAnswer = answer.toString().trim();

  if(validUserName === false){
    userName = inputAnswer;
    const fileName = inputAnswer.replace(/\s/g, '').toLowerCase();
    if(fs.existsSync(`./results/${fileName}.txt`)){
      process.stdout.write(`\nSorry, someone with the name ${userName} has already completed the quiz, please enter another name (full name, nickname, etc)\n`);
    } else {
      const data = `Quiz Results for ${inputAnswer}`;
      fs.writeFile(`./results/${fileName}.txt`, data, (err) => {
        if (err) throw err;
        validUserName = true;
        process.stdout.write(`\n Thank you ${userName} lets start the quiz. \n`);
        askQuestion(0);
      })
    }
  } else {
    // This is where we will run the quiz
    process.stdin.on('data', function(answer){
      let inputAnswer = answer.toString().trim();
      let questionNum = usersAnswers.length;
      if(inputAnswer === correctAnswers[questionNum]){
        usersAnswers.push(inputAnswer);
        if(usersAnswers.length === questions.length){
          process.exit();
        } else {
          askQuestion(usersAnswers.length);
        }
      } else {
        process.stdout.write(`WRONG!!!!, ${inputAnswer} is not the right answer, please try again\n`);
      }
    });
  }
});

askName();
