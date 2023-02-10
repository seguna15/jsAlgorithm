//Creating JS Objects
//Object literals
let objUser0 = {};
//creating objects through object constructor
let objUser1 = new Object();
//using Object.create()
let objUser2 = Object.create({
  name: "ajennay",
  age: 13,
  school: "Marling Grammar School",
});
//effectively name, age and school prototypes of objUser2
let objUser3 = Object.create(Object.prototype); // {} or new Object()
