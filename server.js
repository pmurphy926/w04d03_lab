// const { response } = require('express');
const express = require('express')
const app = express();
const pastWork = require('./models/events.js')
const staff = require('./models/staff.js')
const menu = require('./models/menu.js')
const links = require('./models/links.js')
app.use(express.static('public'));

app.get('/staff', (request, response) => {
    response.render(
        'staff.ejs',
        {
            ourStaff:staff,
        }
    )
});

app.get('/pastwork', (request, response) => {
    response.render(
        'past_work.ejs',
        {
            ourEvents:pastWork,
        }
    )  
});

app.get('/menu', (request, response) => {
    response.render(
        'menu.ejs',
        {
            ourMenu:menu,
        }
    )  
});

app.get('/home', (request, response) => {
    response.render('home.ejs',)  
});

app.get('/history', (request, response) => {
    response.render('history.ejs',)  
});

app.get('/links', (request, response) => {
    response.render(
        'links.ejs',
        {
            ourLinks:links,   
        }
    )
})

app.listen(3000, () => {
    console.log('listening')
})

