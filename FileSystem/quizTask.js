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

function askName(){
  process.stdout.write(`Hello and welcome to the quiz \n What is your name? \n`);
}

process.stdin.on('data', function(answer) {
  let inputAnswer = answer.toString().trim();
  const fileName = inputAnswer.replace(/\s/g, '').toLowerCase();
  if(fs.existsSync(`./results/${fileName}.txt`)) {
    process.stdout.write(`\nSorry, someone with the name ${inputAnswer} has already completed the quiz, please choose another name!\n`);
  } else {
    console.log('Lets begin!');
  }
})















askName();
