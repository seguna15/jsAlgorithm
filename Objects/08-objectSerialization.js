//Object serialization is the process of converting objects to string and then back to objects
//JSON.stringify() and JSON.parse use used to serialize and restore JS Objects.

let myObject = {
    name: 'Ajennay',
    Age: 13,  
    hobbies: ["coding", "music", "anime"]
};

//conversion to string with JSON.stringify
let stringify = JSON.stringify(myObject);
console.log(stringify);

//restoring Objects with JSON.parse
let reversal = JSON.parse(stringify);
console.log(reversal);