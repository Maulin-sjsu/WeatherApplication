const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibWF1YmluMDMiLCJhIjoiY2s5NGJyN3U5MGJncDN1cDMwZHZnZ2w3ZSJ9.fkSIxSadmQ27yFQgWttuog&limit=2'
    request({url, json: true},(error,{body}) => {
            if(error)
            {
                callback('Unable to connect to location Service', undefined)
            }
            else if(body.features.length === 0)
            {
                callback('No Such location available! Please try with different search term', undefined)
            }else{    
                callback(undefined,{
                    longitude:  body.features[0].center[0],
                    latitude: body.features[0].center[1],
                    location: body.features[0].place_name
               })
            // console.log(' Longitude of our Location : ' + longitude + ' Latitude of our Location : ')
            }
        })
}

module.exports = geocode