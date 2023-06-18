const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

//__dirname -> meu diretório atual, no caso seria o render_html
const basePath = path.join(__dirname, 'templates');

//utilizando o middleware
const checkAuth = function(req, res, next){
    req.authStatus = true;

    if(req.authStatus){
        console.log("Está logado, pode continuar");
        //next é necessário para não travarmos a aplicação, para que após a execução do middleware ela siga para execução da próxima etapa do código.
        next();
    }else{
        console.log("Não está logado, faça o ligin para continuar");
        next();
    }
}

app.use(checkAuth);

app.get('/', (req, res) => {
    //acessa pasta/arquivo desejado
    res.sendFile(`${basePath}/index.html`)
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})