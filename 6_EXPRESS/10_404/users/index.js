const express = require('express');
const path = require('path');
const router = express.Router();

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, res) => {
    //Aqui, consigo atrelar o que vem da url, com o que desejo resgatar do banco.
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário ${id}`)
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/users.html`)
});


module.exports = router;