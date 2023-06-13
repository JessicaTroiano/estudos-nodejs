const express = require('express');

//inicializa express
const app = express();
//define a porta
const port = 3000;

//req -> recebe // res -> envia
//acessa rota
app.get('/', (req, res) => {
    //envia algo
    res.send('Olá mundo!')
});

//escuta porta
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})