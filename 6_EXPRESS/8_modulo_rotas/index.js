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

//__dirname -> meu diretório atual, no caso seria o render_html
const basePath = path.join(__dirname, 'templates');

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/index.html`)
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

