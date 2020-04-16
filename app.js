console.log('Statement 1')

setTimeout(() => {
    console.log('Statement 4')
}, 2000);

setTimeout(() => {
    console.log('Statement 3')
}, 0);


console.log('Statement 2')