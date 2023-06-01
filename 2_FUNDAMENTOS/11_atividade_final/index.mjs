import inquirer from 'inquirer';
import chalk  from 'chalk';

inquirer.prompt([
  {
    name: 'p1',
    message: 'Qual o seu nome?'
  },
  {
    name: 'p2',
    message: 'Qual a sua idade?'
  }
]).then((answer) => {
  try{
    console.log(chalk.bgYellow.black(answer.p1))
    console.log(chalk.bgYellow.black(answer.p2))
  }catch(err){
    console.log(err)
  }
})