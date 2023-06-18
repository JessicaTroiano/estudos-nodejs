const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

//__dirname -> meu diretório atual, no caso seria o render_html
const basePath = path.join(__dirname, 'templates');

app.get('/users/:id', (req, res) => {
    //Aqui, consigo atrelar o que vem da url, com o que desejo resgatar do banco.
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário ${id}`)
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/users.html`)
});

app.get('/', (req, res) => {
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/index.html`)
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})