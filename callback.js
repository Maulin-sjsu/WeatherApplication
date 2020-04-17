// setTimeout(() => {
//     console.log('Maulin')
// }, 2000);

// const names = ['Maulin','Darshil','Dhruvil']
// const shortnames = names.filter((name)=> name.length <= 6)

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            long: 0,
            lat: 0
        }
       callback(data)    
    },2000);   
}

geoCode('Philadelfia', (data)=>{
    console.log(data)
})

const add = (a,b,callback) =>{
    setTimeout(() => {
        const sum = a+b
        callback(sum)
    }, 2000);
}

add(2,4, (sum)=>{
    console.log(sum)
})

