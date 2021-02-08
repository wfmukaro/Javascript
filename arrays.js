// let collection=["peter","john",65,45,[6,7,87],true,{name:"zane",age:34}]; //popular
//let collection=new Array("peter","john",65,45,[6,7,87],true,{name:"zane",age:34})
// console.log(collection)
// ///array are indexed collection
// console.table(collection)
// //empty
// let empty=[];
// /// array element
// console.log(collection[2])
// console.log(collection[4][2])
// ///length -return the number of items in an array
// console.log(collection.length)
// //adding elements an array
// collection[7]="wpr251"
// console.log(collection)
// collection[collection.length]="javascript";
// console.log(collection)
// //updating arrays element
// collection[2]=78;
// console.log(collection)
// //delete elements
// delete collection[2];
// console.log(collection)
// ///create an array of fruits-banana,apples
// //then change apples to pineapples 
// // add mangoes at the of array
// ///////////////////////////
// //print arrays elements
// for (let index = 0; index < collection.length; index++) {
//     console.log(collection[index]);
    
// }
// for(let item of collection){
//     console.log(item)
// // }
// /// change all the string element in an to upperCase and double all the number
// for (const item of collection) {
//     if (typeof(item)=="string") {
//        console.log(item.toLocaleUpperCase())
//     }else if(typeof(item)=="number"){
//         console.log(item*2)
//     }else{
//         console.log(item)
//     }
// }
// ///multidimensional array
// let test1=[["jahn",45],["thato",89],["samuel",78]]
// console.log("Name\tMark")
// // for (let index = 0; index < test1.length; index++) {
// //     console.log(test1[index][0]+"\t "+test1[index][1]);
    
// // }
// for (const item of test1) {
//     console.log(item[0]+"\t"+item[1])
// }
///built array methods
let students=["james","john"]
// add element >>push(end), unshift(start)
students.push("thato")
console.log(students)
students.unshift("zane")
console.log(students)
///delete element>>>pop(end),shift(start)
console.log(students.pop())
console.log(students)
console.log(students.shift())
console.log(students)
/////splice-adds, deletes anywhere 
//splice(startpoint, numberofelementsToDelete, [addelem,addelement])
//add jane at position 1 no deletion
students.splice(1,0,"jane")
console.log(students)
//delete jane from the array
students.splice(1,1)
console.log(students)
//// add more than element
students.splice(2,0,"smauael","smith","jacques","Nkoto")
console.log(students)
console.table(students)
//students.splice(3,6,45,56,78,89,2345)
console.table(students)
///searching element in array
console.log(students.indexOf("smith"))
console.log(students.indexOf("jjgjhg"))
console.log(students.includes("smith"));
// sort
console.log(students.sort())
let ages=[34,12,5,78,8,100]
console.log(ages.sort((a, b) => a - b))
//concat, join, split
//array iterators  you pass to that acts on each element of the array
function double(x){
    console.log(x*2)
}
//forEach
// ages.forEach(double)
// ages.forEach(element => {
//     console.log(element*2);
// });
// students.forEach(element => {
//     console.log(element.toUpperCase());
// });
// map
ages.map(double)
console.log(ages.map(element=>  element*2))
//filter --select some the elemnent from array that meet certain criteria
//select only the voting ages->18 and above
let votingage=[]
for (const age of ages) {
    if (age>=18) {
        votingage.push(age)
    }
}
console.log(votingage);

console.log(ages.filter(element=>element>=18));

// reduce 
let marks=[45,67,23,89,34]
// calculate the sum of arrays marks
let sum=0;
for (let index = 0; index < marks.length; index++) {
    sum=sum+marks[index];
    
}

console.log("sum",sum);
console.log("average mark",sum/marks.length);
console.log(marks.reduce((sum,curr)=>sum+curr));
/// calculate the average mark
console.log(marks.reduce((sum,curr)=>sum+curr)/marks.length)

let Incomeexpense=[45000,6000,8000,5000,2000,1000]
//calculate the amount left for saving
//45000-6000-8000-5000-2000-1000
console.log(Incomeexpense.reduce((left,curr)=>left-curr));
/////// write a program that calculates how much a person will pay for a given fruit and quantity
let fruitsprices = [["Apples", 3, 2], ["Oranges", 12, 5], ["Bananas", 15, 2.50]]
//3*2+12*5+15*2.50