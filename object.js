// An object is a composite value. It is an unordered collection of properties.
// a property is a key and a value pair. Essentially, property names are mapped to a value.
//Objects in JS go beyond simple key-value pairs. An object can inherit properties of another, this is referred to as PROTOTYPING. This prototype inheritance is a notable feature of JS.
//Any value that is not primitive is an object.
//number as an object equivalent of Number(); string -> String(); boolean -> Boolean(); 
//Mutability of a value is its ability to change or tendency to change.
//Object are mutable and they are manipulated by reference rather than by values. Objects are sometimes referred to as reference types, this is owing to the fact that they do not store the actual values but are references to its location. 

const user  = {
    name : "Ajennay Noriega",
    age : 13,
    schoolName: "Marling Grammar School",
    gender: "Male",
    email: "technerd.js@gmail.com",
    isHome: true,
    hobbies: ['coding', 'listening to Kanye']
};

const user2 = {
    name : "Uncle Segun",
    age : null,
    schoolName: "School of HardKnocks",
    gender: "Male",
    email: "segun5@gmail.com",
    isHome: true,
    hobbies: ['coding', 'listening to jay-z']
};

console.log(user.name);

//showing how primitive types have object wrappers.
var num1 = Number(7);

console.log(num1);

//Primitive types store actual values so changes to a variable may not take effect on another.
let a  = 10;
console.log(`a: ${a}`);
let b = a;
console.log(`b: ${b}`);
a += 10;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

//Let us see the mutability of objects;

let x = {a: 2, b: 3, c: 4};
let y = x;
console.log(`x.a: ${x.a}`);
console.log(`y.a: ${y.a}`);
x.a = 20;
console.log(`x.a: ${x.a}`);
console.log(`y.a: ${y.a}`);
