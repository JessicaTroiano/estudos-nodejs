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
    getAccountBalance();
  }else if(action === 'Depositar'){
    deposit();
  }else if(action === 'Sacar'){
    withDraw();
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

function deposit(){
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then((answer) => {
    const accountName = answer['accountName'];

    if(!checkAccount(accountName)){
      return deposit();
    }

    inquirer.prompt([{
      name: 'ammount',
      message: 'Quanto você deseja depositar?'
    }])
    .then((answer) => {
      const ammount = answer['ammount'];
      addAmmount(accountName, ammount);
      operation();
    })
    .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err));
}

function checkAccount(accountName){
  if(!fs.existsSync(`accounts/${accountName}.json`)){
    console.log(chalk.bgRed.black('Essa conta não existe!'));
    return false;
  }
  return true
}

function addAmmount(accountName, ammount){
  const accountData = getAccount(accountName);

  if(!ammount){
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'));
    return deposit();
  }
  accountData.balance = parseFloat(ammount) + parseFloat(accountData.balance);

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),
    function(err){
      console.log(err)
    }
  )
  console.log(chalk.green(`Foi depositado o valor de R$${ammount} na sua conta!`));
}

function getAccount(accountName){
  const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r' // quer dizer que só quer ler esse arquivo!
  })
  return JSON.parse(accountJson); // transforma texto em json
}

function getAccountBalance(){
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then((answer) => {
    const accountName = answer['accountName'];

    if(!checkAccount(accountName)){
      return getAccountBalance();
    }

  const accountData = getAccount(accountName);

  console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`));
  operation();
  })
  .catch((err) => console.log(err))
}

function withDraw(){
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then((answer) => {
    const accountName = answer['accountName'];

    if(!checkAccount(accountName)){
      return withDraw();
    }

    inquirer.prompt([{
      name: 'ammount',
      message: 'Quanto você deseja sacar?'
    }])
    .then((answer) => {
      const ammount = answer['ammount'];
      removeAmmount(accountName, ammount)
    })
    .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err))
}

function removeAmmount(accountName, ammount){
  const accountData = getAccount(accountName);
  if(!ammount){
    console.log(chalk.bgRed.black('Tente novamente mais tarde!'))
    return withDraw();
  }
  if(accountData.balance < ammount){
    console.log(chalk.bgRed.black('Valor indisponível!'));
    return withDraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(ammount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function(err){
      console.log(err)
    }
  )

  console.log(chalk.green(`Foi realizado um saque de R$${ammount} da sua conta!`));
  operation();
}