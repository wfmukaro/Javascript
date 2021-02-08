// for (let index = 1; index < 11; index++) {
//    console.log(index)
    
// }
///while loop
//start point, condition, end point, counter , increment
// let counter=1;
// while(counter<11){
//     console.log(counter);
//     counter++
// }
////////////
///print numbers from 10 to 1
// let counter=10;
// while (counter>0) {
//     console.log(counter)
//     counter--
// }
/// write a program to add number from 1 to 5
//1+2+3+4+5=15;
// let sum=0;
// let counter=1;
// while (counter<6) {
//     sum=sum+counter////sum +=counter
//     counter++
    
// }
// console.log(sum)
///////
//write program that print the multiple of 3 from 10 to 30
//12,15,18,21,24,27,30
// ///
// let counter=12;
// while (counter<=30) {
//     console.log(counter)
//     counter+=3;
    
// }

// for (let i = 10; i >= 10 && i <= 30; i++) {
//     if (isMultipleOfThree(i)) {
//         console.log(i);
//     }
// }
///////////
///do while loop
// //print numbers from 1 to 10
// let counter=1;
// do {
//     console.log(counter)
//     counter++;
// } while (counter <11);
////write a login  application that allows the user to enter login detail-3attempts
// let user="user1";
// let password="pass123"
// let attempts=1;
// while (attempts<=3) {
//     let inputuser=prompt("Please enter your username");
//     let inputpassword=prompt("please enter your password")
//     if(inputuser==user && password==inputpassword){
//         alert("welcome to the system, access allowed")
// break;
//     }else{
//         confirm("Your entered wrong login details")
//     }
// attempts++
// if(attempts==4){
//     alert("You entered wron login details three times, please come back after 24 hours")
// }
    
// }
////write a login  application that allows the user to enter login details until the deatils are entered
///number of attempts are infinite
// let user="user1";
// let password="pass123"
// let attempts=1;
// while (true) {
//     let inputuser=prompt("Please enter your username");
//     let inputpassword=prompt("please enter your password")
//     if(inputuser==user && password==inputpassword){
//         alert("welcome to the system, access allowed")
// break;
//     }else{
//         confirm("Your entered wrong login details")
//     }
// attempts++

    
// }
// alert(`You entered the correct login details after ${attempts} attempts`)
///break statement
//print numbers from 1 to 10 but exit the loop  when the number 4 is encountered

// let counter=1;
// while(counter<11){
//     if(counter==4){
//         break
//     }
//     console.log(counter);
//     counter++
// }
///
/// continue
//print numbers from 1 to 10 but skip number 4  
// let counter=1;
// while(counter<11){
//     if(counter==4){
//         counter ++
//         continue;
//     }
//     console.log(counter);
//     counter++
// }
////write program that prints numbers from 10 to 0 but skips 7 and 3;
///10,9,8,6,5,4,2,1,0
let counter =10;
while (counter >=0) 
{
    if (counter == 7 || counter == 3) 
    {
        counter--;
        continue;
    }
    console.log(counter);
    counter--;
    
}
////
//Write  a  program  to  simulate  a  simple calculator  using the  switch statement  that
//performs  arithmetic operations like addition, subtraction, multiplication, 
//and division only on integers.This program takes an arithmetic operator +, -, *, / and two operands from the user.
// Then, it performs the calculation on the two operands depending upon the operator entered by the user.
// let num1 =1*prompt('Enter 1st number');
// let num2 = 1*prompt('Enter 2nd number');
// let operator = prompt('Enter operator');

// function Calculator(num1, num2, operator) 
// {
//      var result;
//     switch (operator) {
        
//         case "add":
//            result = num1 + num2;
//            alert(result);
//            break;
//         case "divide":
//           result = num1 / num2;
//           alert(result);
//           break;
//         case "subtract":
//           result = num1 - num2;
//           alert(result);
//           break;
//         case "multiply":
//           result = num1 * num2;
//           alert(result);
//           break;
//         default:
//             alert("something went wrong")

        
//      }
          
// }
// Calculator(num1,num2,operator)

   /////////////////
   let option =1*prompt("Purchase:\n1. EverydayGigs\n2. Ska Wara  Sale\n3. Super Power bundles\n4. Voice\n5. Airtime")
        switch (option) {
            case 1:
                alert("Buy your everyday Gigs");
                break;
            case 2:
                let sale = 1 * prompt("Select from Ska Wara Sale\n\n1. Ska wara R5 Bundles\n2. Ska Wara Data\n3. Ska Wara Voice\n4. Ska Wara Social\n5 Ska Wara Night\n 99. Back ")
                switch (sale) {
                    case 1:
                        alert("Buy R5 Bundles")
                        break;
                    case 2:
                        prompt("Select from Ska Wara Data below:\n1.1 Day 50MB-75% Off (R2.00)");
                        break;
                    case 3:
                        alert("Buy Ska Wara Voice")
                        break;
                    case 4:
                        alert("Buy Ska Wara Social")
                        break;
                    case 5:
                        alert("Buy Ska Wara Night")
                        break;
                    case 99:
                        alert(" Go Back")
                        break;
                    default:
                        alert("wrong option")
                    }
                break;
            case 3:
                alert("Buy Super Power bundles");
                break;
            case 4:
                alert("Buy Voice bundles");
                break;
            case 5:
                alert("Buy Airtime bundles");
                break;
            default:
                alert("wrong option")
                }


