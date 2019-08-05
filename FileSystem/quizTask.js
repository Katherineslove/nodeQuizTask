const fs = require('fs');
const process = require('process');

const questions = [
  // 'what is the colour of healthy grass?',
  // 'Is the sun a planet?',
  // 'What is the temperature of the boiling water?',
  // 'Should you touch dry ice with bare hands?',
]

const correctAnswers = [
  'green',
  'no',
  '100 degrees',
  'no'
]

let usersAnswers = [];


function startMessage(){
  process.stdout.write(`What is your name?\n`);
}

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
  const data = `Your answers are: ${inputAnswer}`;
  fs.writeFile(`${inputAnswer}.txt`, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      process.exit();
  })
});

startMessage();
