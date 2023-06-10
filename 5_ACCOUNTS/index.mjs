import chalk from 'chalk';
import inquirer from 'inquirer';


import fs from 'fs';

console.log("iniciamos o accounts");

function operation(){
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
  },
])
.then((answer) => {
  const action = answer['action'];
  console.log(action);
}) //solução de alguma das opções que o usuário escolhe.
.catch((err) => console.log(err))
}

operation();