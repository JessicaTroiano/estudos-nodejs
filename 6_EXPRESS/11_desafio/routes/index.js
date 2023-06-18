const express = require('express');
const path = require('path');
const router = express.Router();

const basePath = path.join(__dirname, '../templates');

router.get('/produtos', (req, res) => {
  res.sendFile(`${basePath}/produtos.html`);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo produto com id ${id}`)

  res.sendFile(`${basePath}/produtoId.html`)
})

module.exports = router;