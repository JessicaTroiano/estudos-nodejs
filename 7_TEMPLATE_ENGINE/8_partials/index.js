const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c", "item d"]
    res.render('dashboard', { items });
})

app.get('/post', (req, res) => {

    const post = {
        title: "Teste",
        category: "Node.js",
        body: "Este artigo se refere a...",
        comments: 4
    }
    res.render('post', { post });
})

app.get('/blog', (req, res) => {
    const blog = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Este artigo se refere a...",
            comments: 4
        },
        {
            title: "Aprender .Net",
            category: "C#",
            body: "Este artigo se refere a...",
            comments: 4
        },
        {
            title: "Aprender Java",
            category: "Java",
            body: "Este artigo se refere a...",
            comments: 4
        },
    ]
    res.render('blog', {blog})
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