var inquirer = require('inquirer');

function processAnswers(answers){
  console.log("And your answers are:", answers);
}
var questions = [
{
    message: "What's your first name?",
    type: "input",
    name: "firstName"
}];
inquirer.prompt(questions, processAnswers);