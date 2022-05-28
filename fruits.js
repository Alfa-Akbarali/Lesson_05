const prompt= require('prompt-sync')()
let fruits = [
    {name: 'Apple', price:0.10, expiration:'6 Month'},
    {name: 'Orange', price:0.15, expiration:'6 Month'},
    {name: 'Cherry', price:0.25, expiration:'6 Month'},
    {name: 'Pineapple', price:0.50, expiration:'6 Month'}
]


// let a = (prompt('enter count'))
// let b=(price);
// console.log(name, a );
let  name= prompt('Enter fruit name:')
let count =+prompt('Enter count:')

let fount = fruits.find(fruit => fruit.name === name)

if (fount === undefined) {
    console.log(name + 'fruit not fount');
}
else{
    console.log(`${fount.name} ${count}: $${fount.price *count}`);
}