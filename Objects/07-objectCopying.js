// copying properties of one object into another:

const firstObj = {
    a: 1,
    b: 2, 
};

const secondObj = {
    c:3,
    d:4,
    e:5,
};

// object.keys displays the property names in an object
/**
 * for(let item of Collection){
 * 
 * }
 */


for(let key of Object.keys(secondObj)) {
    firstObj[key] = secondObj[key];
}

console.log(firstObj);
// object.assign() is used to define the copying of object, expects 2 or more object as its arguments

/*
 * first argument is the target object, subsequent arguments are values that are copied into the target argument.
* matching properties names in the target argument will be overwritten by the subsequent argument 
 */

const obj = { x: 10, y: 11}, objUser = {x: 12, name: 'Ajennay'}, objLanguage = { lang: 'TS', type: 'OOP', version: 'ES8'};
 const newObj = Object.assign(obj, objUser, objLanguage);  

 console.log(newObj);
 console.log(obj)


// Copying with spread operator ...
const newObj2 = {...objUser, ...objLanguage};
console.log(newObj2);
console.log(objUser);

function mergeWithoutOverride(target, ...sources) {
    for(let source of sources){
        for ( let key of Object.keys(source)){
            if(!(key in target)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

console.log(mergeWithoutOverride({x:1}, {x:2, y:3}, {y: 4, z: 5}));