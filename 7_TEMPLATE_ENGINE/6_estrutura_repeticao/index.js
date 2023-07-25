const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c", "item d"]
    res.render('dashboard', { items });
})

app.get('/', (req, res) => {

    const user = {
        name: 'Jéssica',
        surname: 'Troiano',
    }

    const auth = true;
    const approved = false;
    res.render('home', { user: user, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando...')
})