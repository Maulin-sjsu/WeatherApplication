const request = require('request')

const forcast = (lat,lon,callback) =>{

const url = 'http://api.weatherstack.com/current?access_key=71525ba418498cd51012866ccdbffa0b&query='+lon+','+lat
console.log(url)

request({url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    if(error)
    {
        callback('unable to connect to weather service',undefined)
    }else if(response.body.error){
        callback('Unable to find Location',undefined)
    }
    else{
        callback(undefined ,response.body.current.weather_descriptions[0]+". It's currently "+ response.body.current.temperature+' degrees out. But it feels like '+ response.body.current.feelslike + ' degrees out there')
        //     {
        //     currenttemp : response.body.current.temperature
            
        // }
            
             
    }
    
})

    
}

module.exports = forcast