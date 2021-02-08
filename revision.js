///switch
////fruits-bananas, apples,mangoes
//let choice=prompt("choose your fruit")
// if(choice==="bananas"){
//     console.log("bananas selected")
// }else if(choice==="apples"){
//     console.log("apples selected")
// }else if(choice==="mangoes"){
//     console.log("mangoes selected")
// }else{
//     console.log("no selected")
// }
/////
// switch(choice){
//     case "bananas":
//         console.log("bananas selected");
//         break;
//     case "apples":
//         console.log("apples selected")
//         break;
//     case "mangoes":
//         console.log("mangoes selected")
//         break;
//     default:
//         console.log("no selected") 
// }
/////////////////
//logical operator
// pass >>attend  and assessment and  exam
//pay >> mother or  father
// console.log( true && true)
// console.log( false && true)
// console.log( false && false)
// console.log( true || true)
// console.log( false || true)
// console.log( false || false)
////////////////////////////////
///write a login application for a college system
///dean-password-dean123
//lecturer-password-lecturer123
//student-student123
///admin-admin123
//let user=prompt("Enter user:\ndean\nlecturer\nstudent\nadmin")
//let password=prompt("Enter the password");
// switch(user && password){
//     case "dean"&&"dean123":
//         alert("dean publishes exam marks");
//         break;
//     case "lecturer"&&"lecturer123":
//         alert("lecturer create assessments");
//         break;
//     case "student"&&"student123":
//         alert("student submit assessments and view marks");
//         break;
//     case "admin"&&"admin123":
//         alert("admin sends emails to learners and parents");
//         break;
//     default:
//         alert("wrong login detail")
// }
///
 /// write program that returns/print the person's age category;
///ages(0-12) child; (13-19)-teenager;(20-29) young adult; (30-50)-adult; (51-above) pensioner
///switch or if
//      let age = 1*prompt('Please enter the age');

// if (age < 13) 
// {
//     alert('Child');
// }

// else if ( age < 20) 
// {
//     alert('Teenager');
// }

// else if ( age < 30) 
// {
//     alert('Young adult');
// }

// else if ( age < 51) 
// {
//     alert('Adult');
// }

// else if ( age >= 51) 
// {
//     alert('Pensioner');
// }

// else
// {
//     alert('Invalid age')
// }
///////////////
//let age = prompt("Enter a age")
// let age=78
// if (age < 13) {
//     console.log("child")
// } else if (age < 20) {
//     console.log("teenager")        
// }else if (age < 30) {
//     console.log("young adult")        
// }else if (age < 51) {
//     console.log("adult")        
// } else if (age > 50) {
//     console.log("pensioner")        
// } else {
//     console.log("No age")
// }
///////////////////////////////
//      let age = 1*prompt('Please enter the age');

//      switch(true){
//          case age < 13:
//             alert('Child');
//             break;
//         case age < 20:
//             alert('Teenager');
//             break;
//         case age < 30: 
//             alert('Young adult');
//             break;
//         case  age < 51:
//              alert('Adult');
//              break;
//         case age >= 51: 
//             alert('Pensioner');
//             break
//         default:
//     alert('Invalid age')
// }
///
// let num1=prompt("enter first number");
// let num2=prompt("enter second number")
// alert(num1*num2)
/// add "4"+"5"="45"
//add "6"+7="67"
//subtract "4"-2=2
//multiply "4"*"6"=24
//multiply "7"*"zane"=NaN
//// loops
// write a program that prints the sum of numbers from to the given number.
//given 5, 1+2+3+4+5
//let number=1*prompt("Enter the number");
// let number=12
// let sum=0;
// for (let index = 0; index <=number ; index++) {
//  sum=sum+index
//    }
//    console.log(sum)
// /// write a program that prints leap years from 2020 to 2050
// //modulus leap is divisible by 4
// for (let year = 2020; year <= 2050; year++) {
//     if(year%4===0){
//         console.log(year)
//     }
    
// }
///write a program that calculates how much the customer will pay, for  anything above R3000 attract 10% discount.
//2000 no discount
// 3000 above gets discount

// let amount = 5000;
// let pay;

// if(amount >= 3000)
// {
//     amount=amount-amount*0.1;
//     console.log(amount)
// }
// else
// {
//     console.log("There's no discount for amounts less than R3000",amount);
// }
//// 
// let amount2 = 6500;
// let pay;
// let total;

// if (amount2 >= 3000) {
//     pay = amount2 * 0.10;
//     total = amount2 - pay;
//     console.log(total);
// } else {
//     console.log("No discount, needs to be more than R3000")
//     console.log(amount2);
// }
// compound interest = P(1+r)^n
//simple interest =P(1+rn)
// P-amount borrowed (250000), r -interest rate 10% n-numbers of years 4
let p = 250000;
let r = 0.1;
let n = 4;
let result1;
let result2;
 
//Simple
let brac = 1+r*n;
   result1 = p*brac;
   console.log(result1);
 
   //compound
let brac1 = 1+r;
let brac2 = Math.pow(brac1,n);
result2 = p*brac2;
console.log(result2);