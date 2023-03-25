const express = require("express");
const app = express();
const path = require('path');
const rootDir = require("./utils/root");
const homeRouter = require('./Router/home');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');


app.use(homeRouter);
app.use((req,res)=>{
    res.render('errorPage')
})

app.listen(3000);
