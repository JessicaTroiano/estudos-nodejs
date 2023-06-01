const x = 10;

if (!Number.isInteger(x)) {
  //encerra o programa
  throw new Error("o valor de x não é um número inteiro")
}

try {
  x=2;
} catch(err) {
  console.log(`Erro: ${err}`)
}