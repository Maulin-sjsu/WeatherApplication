const path = require('path')
const express = require('express')
const hbs =  require('hbs')

//console.log(__dirname)

const app = express();

// Define Paths For Express Config
const pubicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Set up Static Directory to serve
app.use(express.static(pubicDirectoryPath))

const port = 3000;

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weathe Application',
        name: 'Maulin Bodiwala'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        title: 'Need Help! :)',
        name: 'Maulin Bodiwala'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Me',
        name: 'Maulin Bodiwala'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'clody outside with 12 degrees out there',
        location: 'San Jose'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title: 404,
        ErrorMessage: 'Help Article not Found',
        name: 'Maulin Bodiwala' 
    })
})


// app.get('/index/*',(req,res)=>{
//     res.send('Home Page not Found')
// })


// app.get('/about/*',(req,res)=>{
//     res.send('Help Article not Found')
// })

app.get('*',(req,res)=>{
    res.render('error',{
        title: 404,
        ErrorMessage: 'Page not Found',
        name: 'Maulin Bodiwala'
    })
})

app.listen(port, () => {
    console.log("Server is running on "+ port +" port");
  });