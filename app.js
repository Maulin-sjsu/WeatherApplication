const request = require('request')
const geocode = require('./utils/geoCode')
const forcast = require('./utils/forcast')

geocode('San Fransisco', (error, data)=>{
    console.log('Error', error)
    console.log('data', data)
    forcast(data.longitude, data.latitude, (error, data) => {
        console.log('Error', error)
        console.log('data', data)
    })
})



// const url = 'http://api.weatherstack.com/current?access_key=71525ba418498cd51012866ccdbffa0b&query=San%20Jose&units=m'

// request({url: url, json: true}, (error, response) => {
//     //const data = JSON.parse(response.body)
//     if(error)
//     {
//         console.log('unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('Unable to find Location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0]+". It's currently "+ response.body.current.temperature+' degrees out. But it feels like '+ response.body.current.feelslike + ' degrees out there')
//     }
    
// })


// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Jose.json?access_token=pk.eyJ1IjoibWF1YmluMDMiLCJhIjoiY2s5NGJyN3U5MGJncDN1cDMwZHZnZ2w3ZSJ9.fkSIxSadmQ27yFQgWttuog&limit=2'

// request({url: geocodeurl, json: true},(error,response) => {
//     if(error)
//     {
//         console.log('Unable to connect to Location Service')
//     }
//     else if(response.body.features.length === 0)
//     {
//         console.log('No Such location available! Please try with different search term')
//     }
//     else if(response.body.error)
//     {
//         console.log('Unable to find the location')
//     }else{    
//     const longitude = response.body.features[1].center[0]
//     const latitude  = response.body.features[1].center[1]
//     console.log(' Longitude of our Location : ' + longitude + ' Latitude of our Location : '+ latitude )
//     }
    
// })





