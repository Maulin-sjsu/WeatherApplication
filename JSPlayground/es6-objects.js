// Object Property Short Hand : 


const name = 'Maulin'
const userage = 25

const user = {
    name,
    age: userage,
    location: 'San Jose'
}

console.log(user)

// object destructuring

const Product = {
    name : 'Maulin',
    age : 25,
    city : 'San Jose',
    degree : 'Computer Engineering',
    company : 'Searching....' 
}

// const {name: username, age, degree: course= 'Computer Software Engineering' } = Product
// console.log(username + "'s age is "+age+". He is studying " + course)

const details = (type,{name, age}) =>{
    console.log(type,name,age)
}

details('User Details' , Product)

