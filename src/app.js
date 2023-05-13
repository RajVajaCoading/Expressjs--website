const express = require('express')

const app = express();

const path = require('path')

const serverless = require('serverless-http')

console.log(__dirname)

console.log(path.join(__dirname,'../public'))

const websitePath = path.join(__dirname,'../public/seo-agency-website-template')

// create middelware 
app.use(express.static(websitePath))

// to set the view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");


// template engine rout
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.listen(4000,()=>{
    console.log('port listning 4000')
})

// module.exports.handler = serverless(app)