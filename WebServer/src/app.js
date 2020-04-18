const path = require('path')
const express = require('express')

//console.log(__dirname)
const pubicDirectoryPath = path.join(__dirname,'../public')

const app = express();


app.use(express.static(pubicDirectoryPath))

const port = 3000;

// app.get('',(req, res)=>{
//     res.send('<h1> Hello Express </h1>')
// })

// app.get('/help',(req, res)=>{
//     res.send([{
//         name: 'Maulin',
//         age: 25
//     },{
//         name: 'Darshil',
//         age: 25
//     },{
//         name: 'Dhruvil',
//         age: 23
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('About')
// })

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'clody outside with 12 degrees out there',
        location: 'San Jose'
    })
})


app.listen(port, () => {
    console.log("Server is running on "+ port +" port");
  });