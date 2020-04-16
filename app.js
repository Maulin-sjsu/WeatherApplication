const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=71525ba418498cd51012866ccdbffa0b&query=San%20Jose&units=s'

request({url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    
    console.log(response.body.current.weather_descriptions[0]+". It's currently "+ response.body.current.temperature+' degrees out. But it feels like '+ response.body.current.feelslike + ' degrees out there')
})