// JavaScript me Memory Management

// JavaScript mostly automatic memory management use karti hai.

// Matlab:

// Memory allocate bhi khud karti hai
// Free bhi khud karti hai

// Iske liye JS me ek system hota hai:

// Garbage Collector 🗑️

// Ye unused memory ko automatically clean karta hai.

// Memory ke 2 Important Parts
// 1. Stack Memory

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Fast hoti hai.
// Primitive data types yaha store hote hain.

// 2. Heap Memory

// Objects aur arrays heap me store hote hain.

let user1 = {
    name: "Rahul"
};

let user2 = user1;

user2.name = "Aman";

console.log(user1.name); // Aman
console.log(user2.name); // Aman

// 3. Garbage Collection Concept

let data = {
    name: "Rahul"
};

data = null;

console.log(data);

// 4. Function Memory Example
function hello() {
    let name = "Rahul";
    console.log(name);
}

hello();

// 5. Array in Heap Memory
let arr1 = [1, 2, 3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);