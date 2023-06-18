const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

const usersRoutes = require('./users');

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

//com esse middleware é possível adicionar css ao projeto com express.
app.use(express.static('public'))

//__dirname -> meu diretório atual, no caso seria o render_html
const basePath = path.join(__dirname, 'templates');

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/index.html`)
});

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

