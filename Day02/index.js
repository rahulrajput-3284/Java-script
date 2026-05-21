// variable kese banate hai 

// let name = "rahul";
// let age = 20;

// age = 30;

// console.log(name, age);

// const account = 1234;

// account = 23;

// console.log(account);

// Data types

//primitive data type 

// number,string,boolean,undefined,bigint,null,symbol

// number
let a = 10;
let b = 2.53;
console.log(a,b);

// string
let c = "strike is comming";
let d = "anjali";
console.log(c,d);

// boolean
let login = true;
let f = false
console.log(login,f)

// undefined
let user;
console.log(user);

// bigint
let num = 2375472628283n;
console.log(num);

// null
let weather = null;
console.log(weather);

// symbol 
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1==id2);

// non primitive data type

// array, object, function

// array

let arr = [10,20,11,"rahul",true];
console.log(arr);

// object

// Rahul, 12312, 18, gen

let obj = {
    name:"Rahul",
    Account:12312,
    age: 18,
    category:"gen"
}

// Function 

function add(){
    console.log("hello!!");
}

add()

// non primitive data type is mutable 

let arr1 = [10,20,11,44];
arr1.push(50);
arr1[0] = 70;
console.log(arr1);


// object

let obj1 = {
    name:"mohan",
    age:20
}
obj1.name = "Rohan";

console.log(obj1);