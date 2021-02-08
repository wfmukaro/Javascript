//addition
function add(x,y){
    let sum=0;
sum=x+y;
return sum;
}
// console.log(add(3,4))
// console.log(add(5,7,3))
// console.log(add(3))
// /////
// function modifiedAdd(...values){
//     let total=0
//     for(value of values){
//         total=total+value
//     }
//     return total
// }
// console.log(modifiedAdd(6,4,3,3))
// //// default parameters
// function vatCalc(price, vat=15){
   
//     return price *vat/100
// }
// console.log(vatCalc(1000))
// console.log(vatCalc(1000,12))
//////// higher order function/ callbacks
let subtract=function(x,y){
    return x-y
}
let multiply=(x,y)=>x*y;
function divide(x,y){
    if(y==0){
return "can not divide by 0";

    }else{
        return x/y;
    }
}
function calculator(num1,num2,callback){
let ans=callback(num1,num2)
return ans
}
console.log(calculator(2,3,add))
console.log(calculator(2,3,multiply))
console.log(calculator(2,0,divide))
