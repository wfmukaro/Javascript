///string

// console.log("johndouble quotes")
// console.log('it quotes')
// console.log(`backtick`)
// let name="thato"
// let age=34
// console.log("My name is "+name+" aged "+age)
// console.log(`My name is ${name} aged ${age}`)
// //let fullname="james m. michael";
// //length -return including white space
// console.log(fullname.length)
// ////accessing characters of string using index
// console.log(fullname[4])
// for (let index = 0; index < fullname.length; index++) {
//     console.log(fullname[index]);
    
// }
// let title="Mr"
// console.log(title+fullname)
// console.log(title -fullname)
// console.log(title*fullname)
// //Built methods
// ///uppercase or lowercase
// console.log(fullname.toUpperCase())
// let Namee="peter"
// let namee="john"
// console.log(Namee)
// console.log(namee)
// ///searching your string
// console.log(fullname.indexOf("e"))
// console.log(fullname.indexOf("e",4))
// console.log(fullname.includes("s"))
// ///write a that checks if the  given email address is valid
// // "@"
// let email="457354@belgiumcampus.ac.za"

// console.log(email.includes("@"))
// ///valid belgiumcampus email addres
// //@belgiumcampus.ac.za
// console.log(email.includes("@belgiumcampus.ac.za"))
// /// write a function that checks if the given email adress is valid belgium campus email account
// ///write function that checks if the given number is a pretoria number
// //012 and also it has 10 digits
// function checkemail(email){
//     console.log(email.includes("@belgiumcampus.ac.za"));
//    }
//    checkemail(email)
//    let number =0215550000;
//    function checkNumber(number){
//        if (number.length == 10 && number.startsWith("012")) {
//                     console.log("It is a pretoria number");
//            }
//            else{
//                console.log("It is not a pretoria number");
           
//        }
//    }
//    checkNumber("0124563245")
//    //////////////////////////////////
//    function checkEmail(email = "57558@belgiumcampus.ac.za") {
//     if (email.includes("@") && email.includes("belgiumcampus")) {
//         console.log("This is a valid email adress from belgium campus")
//     } else {
//         console.log("This is not a valid email adress from belgium campus")
//     }
// }
// checkEmail();
// /////////////////////////////////////
// function checkNum(number = "0123000000") {
//     if (number.length ==10 && number.startsWith("012")) {
//         console.log("This is a valid number")
//     } else {
//         console.log("Invalid number, please try again")
//     }
// }
// checkNum();
// let email = prompt("Enter an email address");         
// let number = prompt("Enter a number");         
// var bValid= false;         
// var bPretoria = false;          
// var bEmail = false;                  
// function verify_email() { 
//         if (email.includes("@belgiumcampus.ac.za"))   
//             bEmail = true;         }          
            
// function verify_number()  {               
//     if (number.length == 10)                 
//     bValid = true;             
//     if (number.includes("012")) //number.startsWith("012") will be more suitable                
//      bPretoria = true;          } 
                           
//      verify_email();          
//      verify_number();         
//       if (bEmail)             
//       console.log("The email is a valid belgium campus account");        
//        else            
//         console.log("The email is not a valid belgium campus account");         
//         if (bValid)         
//         console.log("The number is a valid phone number"); else             
//         console.log("The number is a valid phone number");          
//         if (bPretoria)             
//         console.log("The number is from Pretoria");        
//          else            
//          console.log("The number is not from Pretoria");
//write a program to check if the given text is spam because contain unwanted content
//case insensitivity
///viagra, sex, xxx, 
function checkspam(text){
    let lwcase=text.toLowerCase();
    if(lwcase.includes("viagra")||lwcase.includes("sex")||lwcase.includes("xxx")){
        console.log("the text is a spam it contains sensitive information")
    }else{
        console.log("not a spam")
    }
}
let text1="Human reproduction is any form of sexual reproduction resulting in human fertilization. It typically involves sexual intercourse between a man and a woman. During sexual intercourse, the interaction between the male and female reproductive systems results in fertilization of the woman's ovum by the man's sperm."
checkspam(text1)
///////////////
/// extracting part string a from
let fullname="james m. michael";
console.log(fullname.slice(0,5))
console.log(fullname.slice(9)) 
console.log(fullname.substr(0,5))
console.log(fullname.substr(9))
console.log(fullname.substring(0,5))
///given a filename and its extension, write a function that extract the file extension
//maths.docx, function.js, index.html
function extension(filename){
let startIndex=filename.indexOf(".")
return filename.slice(startIndex)
}
console.log(extension("maths.docx"))
console.log(extension("index.html"))