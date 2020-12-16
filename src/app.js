const path = require("path");
const fs = require('fs');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,"../public")));
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);
//routing
app.get("", (req, res)=>{
    res.render('index')
    // res.send("hello");
})
app.get("/about", (req, res)=>{
    res.render('about');
    // res.send("about page");
})
app.get("/weather", (req, res)=>{
    res.render("weather");
})
app.get("*", (req, res)=>{
    res.render('404');
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})