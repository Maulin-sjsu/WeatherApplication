const request = require('request')

const forcast = (latitude,longitude,callback) =>{

const url = 'http://api.weatherstack.com/current?access_key=71525ba418498cd51012866ccdbffa0b&query='+longitude+','+latitude
//console.log(url)

request({url, json: true}, (error, {body}) => {
    //const data = JSON.parse(response.body)
    if(error)
    {
        callback('unable to connect to weather service',undefined)
    }else if(body.error){
        callback('Unable to find Location',undefined)
    }
    else{
        callback(undefined ,body.current.weather_descriptions[0]+". It's currently "+ body.current.temperature+' degrees out. But it feels like '+ body.current.feelslike + ' degrees out there')
        //     {
        //     currenttemp : response.body.current.temperature
            
        // }
            
             
    }
    
})

    
}

module.exports = forcast