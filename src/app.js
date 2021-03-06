const path = require('path')
const express = require('express')
const hbs =  require('hbs')
const request = require('request')
const geocode = require('./utils/geoCode')
const forcast = require('./utils/forcast')


//console.log(__dirname)

const app = express();

const port = process.env.PORT || 3000;



// Define Paths For Express Config
const pubicDirectoryPath = path.join(__dirname,'../public/')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Set up Static Directory to serve
app.use(express.static(pubicDirectoryPath))


app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather Application',
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
    if(!req.query.address){
        return res.send({
            error: "You must provide a valid search term"
        })
    }
    geocode(req.query.address, (error, {longitude, latitude, location}={})=>{
        if (error)
        {
            return res.send({error})
        }
        //console.log('data', data)
        forcast(longitude, latitude, (error, forcastdata) => {
           if(error)
           {
            return res.send({error})
           }res.send({
                location :  location,
                forcast :  forcastdata,
                address: req.query.address
           })
 
        })
    })
    
    // res.send({
    //     forecast: 'clody outside with 12 degrees out there',
    //     location: 'San Jose',
    //     address: req.query.address
    // })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: "You must provide a search term"
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
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