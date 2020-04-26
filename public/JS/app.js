const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript'

weatherform.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = 'Loading.......'
    messageOne.textContent = ''



    fetch('/weather?address='+location).then((Response) =>{
    Response.json().then ((data)=> {
        if(data.error)
        {
            messageOne.textContent  = data.error
        }else{
            messageOne.textContent = 'The Location You are looking For: '+ data.location
            messageTwo.textContent = 'Weather Condition:' + data.forcast
        }

    })
})

})