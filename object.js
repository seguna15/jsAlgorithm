// An object is a composite value. It is an unordered collection of properties.
// a property is a key and a value pair. Essentially, property names are mapped to a value.
//Objects in JS go beyond simple key-value pairs. An object can inherit properties of another, this is referred to as PROTOTYPING. This prototype inheritance is a notable feature of JS.
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

//Any value that is not primitive is an object.
//number as an object equivalent of Number(); string -> String(); boolean -> Boolean(); 
//showing how primitive types have object wrappers.
var num1 = Number(7);

console.log(num1); 

//Mutability of a value is its ability to change or tendency to change.
//Object are mutable and they are manipulated by reference rather than by values. Objects are sometimes referred to as reference types, this is owing to the fact that they do not store the actual values but are references to its location. 
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
let y = x; //referential equality 
console.log(`x.a: ${x.a}`);
console.log(`y.a: ${y.a}`);
x.a = 20;
console.log(`x.a: ${x.a}`);
console.log(`y.a: ${y.a}`);

/* 
** Object Operations include in the following;
1. Creating Objects.
2. Set Values to properties and query the values.
3. Deleting properties
4. Test properties 
5. Enumerating Object properties.
*/

//PROPERTIES ARE KEY (NAME) AND VALUE PAIR. An object cannot have two properties of the same name.
let myObj = {a: 2, a: 4}; // this is wrong as the last declared property a  will override the initial property a
console.log(myObj);
//Object values can be JS values or Getter and setter function

let student = {
    name: null,
    age: null,
    setStudent: function(name, age){
        this.name = name;
        this.age = age;
    },
    getStudent: function(){
        return `I am ${this.name} and I am ${this.age} years old.`;
    }
};

student.setStudent('Ajennay', 13);
console.log(student.getStudent());

//Characteristics of JS Object properties
/* 
1) Writable: this determines whether the value can be set.
2) Enumerable: whether a property will be returned when using for/in loop.
3) Configurable: can it be deleted or altered.
All built-in object properties are read-only, non-enumerable or non-configurable. However, custom-object or object you create are writeable, enumerable and configurable.
*/


//Creating JS Objects
//Object literals
let objUser0 = {};
//creating objects through object constructor
let objUser1 = new Object();
//using Object.create()
let objUser2 = Object.create({name: 'ajennay', age: 13, school: "Marling Grammar School"});
//effectively name, age and school prototypes of objUser2 
let objUser3 = Object.create(Object.prototype); // {} or new Object()

//QUERYING AND SETTING PROPERTIES
//querying has to do with accessing JS Object Properties
//Setting has to do with creating properties and their values

const footwear = {
    manufacturer: "yeezy",
    color: "red",
    size: [42, 43, 44],
    type: "foam-runners",
    "parent company": 'Adidas',
};

let sneakerName = footwear.manufacturer;
let userSize = footwear.size[1];
let companyName = footwear["parent company"];

console.log(`I own an ${companyName} ${sneakerName} size ${userSize}`);

footwear["country of origin"] = "Philippines";

//An object in JS has what we call "own properties" and also inherit properties of their parent object (prototype object)

const car = { name: "Toyota", country: "Japan"};
const camry = Object.create(car);
camry.model = 2014;
camry.color = "Carbon Black";
camry.transmission = "Automatic";

console.log(camry.name); //inherited;
console.log(camry.model); // own property
console.log(camry.sits);
