const process = require('process');

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];

function askQuestion(num){
  process.stdout.write(`${questions[num]}\n`);
}

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

askQuestion(0);

process.on('exit', function(){
  process.stdout.write(`\nWell done, you got all the questions correct\n`);
});
