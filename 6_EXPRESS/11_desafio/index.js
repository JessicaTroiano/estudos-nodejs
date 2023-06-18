const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

const routes = require('./routes');

app.use(
  express.urlencoded({
      extended: true,
  })
)

app.use(express.json());

app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/loja', routes);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
})

app.listen(port, (req, res) => {
  console.log(`App rodando na porta ${port}`);
})