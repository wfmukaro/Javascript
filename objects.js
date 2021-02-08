// ////literal way of declaring objects
// let student={
//     name:"jane",
//     "surname":"smith",
//     age:26,
//     courses:["WPR","STAT","DBD"],
//     marks:[67,57,79],
//     average:function(){
//         return this.marks.reduce((sum,curr)=>sum+curr)/this.marks.length
//     },
//     meals:{breakfast:"burger",lunch:"potato mash",super:"rice"},
//     isRegistered:true
// }
// // console.log(student);
// // ///access object properties
// // console.log(student.name);
// // console.log(student["name"]);
// // console.log(student.meals.lunch);
// // console.log(student.marks[1]);
// // console.log(student.average());
// // //add property
// // student.gender="Female"
// // console.log(student);
// // //delete property
// // delete student.isRegistered
// // console.log(student);
// // //loop for..in
// // for(let prop in student ){
// //     console.log(prop +" "+student[prop]);
// // }
// ///function constructor(& new operator)

// // function newStudent(name,surname,age,isRegistered){
// //     this.name=name;
// //     this.surname=surname;
// //     this.age=age;
// //     this.isRegistered=isRegistered
// //     // this.courses=courses;
// //     // this.marks=marks
    
// // }

// //let student1=new newStudent("sam","smith",35,["WPR","STAT","DBD"],[67,57,79],false)
// //console.log(student1);
// //write a program that create  5 student object;
// //let studentData=[];
// // for (let index = 0; index < 5; index++) {
// //   let name=prompt("Enter name");
// //   let surname=prompt("Enter surname");
// //   let age=prompt("Enter age");
// //   let registered=prompt("Is registered");
// //   studentData.push(new newStudent(name,surname,age,registered))
// //   }
// //   console.log(studentData);
// //// Arrays of objects
// let workers=[
//     {name:"peter",age:45,job:"IT suport",salary:2000},
//     {name:"sma",age:45,job:"DBD developer",salary:222000},
//     {name:"james",age:45,job:"BI analyst",salary:72000},
//     {name:"thato",age:45,job:"Manager",salary:26000},
//     {name:"samuel",age:45,job:"IT suport",salary:42000},
//     {name:"zane",age:45,job:"Accountant",salary:207800}
// ]
// /// print the name and job of all workers
// for (let i = 0; i < workers.length; i++) {
//     console.log(workers[i].name+" "+workers[i].job);;
    
// }
// // calculate the total salary bill 
// console.log(workers.map(function(element){
//     return element.salary 
// }).reduce(function(sum,curr){
//     return sum+curr
// }));
// ///
// console.log(workers.map(element=>element.salary).reduce((sum,curr)=>sum+curr));
// ///
// let total=0;
// for (let i = 0; i < workers.length; i++) {
// total=total+workers[i].salary;
   
// }
// console.log(total);
// //sort the workers according salary in descending
// console.log(workers.sort((a,b)=>b.salary-a.salary));
// // extract only the workers who earns 50000 and above

// for (let i = 0; i < workers.length; i++) {
//     if (workers[i].salary>=50000) {
//         console.log(workers[i]);
//     }
//  }
//  console.log(workers.filter(element=>element.salary>=50000));
 //write program to enter the following car details to the database>>array
        //name  model year price
        //benz   c180 2008 80000
        //toyota D4D  2019 250000
        //BMW   e250i  2014 160000

        //a print only the car and model
        //b claculate the total values of all cars
        //c print all car that are above 100000
    
        
        //a print only the car and model
        
        // let cars=[
        //     {name:"Benz", model:"c180", year:2008, price:80000},
        //     {name:"toyota", model:"D4D", year:2019, price:250000},
        //     {name:"BMW", model:"e250i", year:2014, price:160000}
        // ]
        // //A
        // for (let i = 0; i < cars.length; i++) {
        //     console.log(cars[i].name+" "+ cars[i].model);    
        // }
        // //B
        // var total =0;
        // for (let i = 0; i < cars.length; i++) {
        //     total = total+ cars[i].price;    
        // }
        // console.log(total);
        // //C
        // for (let i = 0; i < cars.length; i++) {
        //     if (cars[i].price>=100000) {
        //         console.log(cars[i]);
        //     }    
        // }
        ////////////////////////////////////////////////////////
        //Map objects
    //     let workers=new Map();
    //     //add element
    //     workers.set("John",45);
    //     workers.set("Peter",33).set("Mary",56).set("Sam",31);
    //     console.log(workers);
    //     // numbers of items
    //     console.log(workers.size);
    //     // check existence of element
    //     console.log(workers.has("Mary"));
    //     //extract values
    //     console.log(workers.get("Mary"));
    //     //delete
    //    // console.log(workers.delete("Mary"));
    //     console.log(workers);
    //     /// delete all the elements
    //     //workers.clear();
    //     console.log(workers);
    //     // map object entries , key, values
    //     console.log(workers.keys());
    //     //keys
    //     for (let worker of workers.keys()) {
    //         console.log(worker);
    //     }
    //     //values
    //     for (let worker of workers.values()) {
    //         console.log(worker);
    //     }
    //     //key and value
    //     for (let [name,age] of workers) {
    //         console.log(name,"\t\t",age);
    //     }
        ///
        // let workers=[
//     {name:"peter",age:45,job:"IT suport",salary:2000},
//     {name:"sma",age:45,job:"DBD developer",salary:222000},
//     {name:"james",age:45,job:"BI analyst",salary:72000},
//     {name:"thato",age:45,job:"Manager",salary:26000},
//     {name:"samuel",age:45,job:"IT suport",salary:42000},
//     {name:"zane",age:45,job:"Accountant",salary:207800}
// ]
//////////////////
// let workersData=new Map();
// workersData.set(95832786322,{name:"peter",age:45,job:"IT suport",salary:2000})
// workersData.set(00332765422,{name:"sma",age:45,job:"DBD developer",salary:222000})
// .set(32657856463,{name:"james",age:45,job:"BI analyst",salary:72000})
// console.log(workersData);
// console.log(workersData.get(95832786322));
// for (let worker of workersData.values()) {
//     console.log(worker.name+" "+worker.age+" "+worker.job+" "+worker.salary);
// }
//////////////////////////////////
///sets objects
let students=new Set()
//add element
students.add("John")
students.add("Peter").add("Sam").add("Zane").add("Peter").add("Sam").add("Za").add("Peter")
console.log(students);
//access
console.log(students);
console.log(students.size);
students.delete("Peter")
console.log(students);
students.clear();
console.log(students);
