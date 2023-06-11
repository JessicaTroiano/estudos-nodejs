import chalk from 'chalk';
import inquirer from 'inquirer';


import fs from 'fs';

console.log("iniciamos o accounts");

function operation(){
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
  },
])
.then((answer) => {
  const action = answer['action'];
  if(action === 'Criar conta'){
    createAccount();
  }else if(action ==='Consultar saldo'){

  }else if(action === 'Depositar'){

  }else if(action === 'Sacar'){

  }else if(action === 'Sair'){
    console.log(chalk.bgBlue.black('Obrigada por usar o Accounts!'));
    process.exit();
  }
}) //solução de alguma das opções que o usuário escolhe.
.catch((err) => console.log(err))
}

operation();

//create an account
function createAccount(){
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
  buildAcount();
}

//buil account
function buildAcount(){
  inquirer.prompt([{
    name: 'accountName',
    message: 'Digite um nome para a sua conta'
  },
])
.then((answer) => {
  const accountName = answer['accountName'];
  console.info(accountName);

  if(!fs.existsSync('accounts')){
    fs.mkdirSync('accounts');
  }

  if(fs.existsSync(`accounts/${accountName}.json`)){
    console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!'));
    buildAcount();
    return;
  }

  fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err){
    console.log(err);
  })

  console.log(chalk.green.black("Parabéns, sua conta foi criada!"));
  operation();

})
.catch((err) => console.log(err));
}