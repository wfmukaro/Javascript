let x=4//integer int
console.log(typeof(x))
let y=6.5///floating
console.log(typeof(y))
console.log(x+y)
let z="5"
let v="sam"
console.log(typeof z)
console.log(x+z)
console.log(typeof(x+z))
console.log(x*z)
console.log(typeof(x*z))
console.log(x+v)
console.log(typeof(x+v))
console.log(x-v)
console.log(typeof(x*v))
let billion=1000000000
let billionshrten=1e9
console.log(billionshrten)
let num1=2500000//2,5million
console.log(2.5e6)
let ms=0.0000001
let msshorten=1e-7;
console.log(msshorten)
console.log(ms===msshorten)
//built function math library
let num3=3.356
console.log(Math.floor(num3))
console.log(Math.ceil(num3))
console.log(Math.round(num3))
console.log(num3.toFixed(2))
console.log(num3.toPrecision(2))
//write a program that generates 5 random numbers from 10 to 100
function random(min,max){
    return min +Math.random()*(max-min)
}
for (let index = 0; index < 6; index++) {
    console.log(Math.round(random(10,100)))
    
}
// write a function that capitalise the first letter of the string
//Write a function that counts and returns the number of vowels in the string. 
//(For the purposes of this exercise, 5 vowels -- A, E, I, O, U).