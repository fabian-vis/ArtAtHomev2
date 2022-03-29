const hostname = '127.0.0.1';
const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000
let artLength = '10';

require('dotenv').config({
    path: '.env-dev'
})

const {
    API_KEY
} = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&imgonly=true`)
        .then(async response => {
            const artWorks = await response.json()
            res.render('index', {
                pageTitle: 'ArtAtHomev2', // We use this for the page title, see views/partials/head.ejs
                data: artWorks.artObjects
            })
        })
        .catch(err => res.send(err))
})

// detail page
app.get('/kunst/:id', function (req, res) {
    fetch(`https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${API_KEY}`)
        .then(async response => {
            const artWorks = await response.json()
            res.render('detail', {
                pageTitle: 'Art Museum' + req.params.id,
                kunst: artWorks.artObject
            });
        })
        .catch(err => res.send(err))
})

// search function
app.get('/search', (req, res) => {
    const searchValue = req.query.query
    fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=${searchValue}&ps=${artLength}&imgonly=true`)
        .then(async (response) => {
            const artWorks = await response.json();
            res.render("index", {
                pageTitle: 'Results for ' + searchValue,
                data: artWorks.artObjects,
            });
        })
        .catch((err) => res.send(err));
})

app.get('/offline', (req, res) => {
    res.render('offline', {
        pageTitle: 'Art Museum offline'
    });
})

app.listen(port, () => {
    console.log(`Ai we live at http://${hostname}:${port}/`);
})