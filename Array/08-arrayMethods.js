// one day i will be the best programmer ever!!!  

// SPLICE() method can be used to insert, remove and replace elements
/**
 * Array.splice() syntax
 * array.splice(start, deleteCount, elem1, ..., elemN)
 * start => the starting index
 * deleteCount => number of elements to remove
 * elem1, ..., elemN  => insert elem1,..., elemN at their place
 * 
 */

/* function spliceArr() {
  let arr = ["hi", "mom", "you", "are", "the", "best"];
  arr.splice(4, 1); //[ 'hi', 'mom', 'you', 'are', 'best' ]
  arr.splice(4, 1, "world's", "greatest"); //[ 'hi', 'mom', 'you', 'are', "world's", 'greatest', 'best' ]
  arr.splice(5, 0, 'world\s','greatest'); //["hi", "mom", "you", "are", "the", "worlds", "greatest", "best"];
  return arr;
}
 */

//SLICE() method is used to remove elements from an array 
/**
 * Array.splice([start], [end])
 * returns an array consisting of the start to end (it excludes the end).
 */

function sliceArr(){
  let arr = [1, 2, 3, 4, 5, 6];
  let sliceArray = arr.slice(1, 4); //[ 2, 3, 4 ]
  return sliceArray;
}

//CONCAT() creates a new array that includes values from other arrays and additional items
/**
 * arr.concat(arg1, arg2...)
 */

/*function concatArr(){
    let arr = [1, 2, 3, 4];
    //let newArray = arr.concat([5, 6]); //[ 1, 2, 3, 4, 5, 6 ]
    //let newArray = arr.concat([5,6], [7,8]); //[1, 2, 3, 4, 5, 6, 7, 8]
    let newArray = arr.concat([5,6], 7,8); //[1, 2, 3, 4, 5, 6, 7, 8]
    return newArray;
}*/

//FOREACH: An iterative method that allows you run a function for every element of the array. The result of the function is often thrown away and ignored.

/* function forEachArr() {
    let arr = [1,2, 3, 4];
    arr.forEach( (item) => console.log(item * 2)); //2 4 6 8
} */

//indexOf(item, from) looks for an item starting from index from, and returns the index where it was found, otherwise -1.
function indexOfItem() {
    let fruits = new Array('Apple', 'Orange', 'Mango', 'Pineapple');
     return fruits.indexOf('Apple');
}

//includes(item, from) looks for an item starting from index from and returns true if found
function includesItem() {
    let fruits = new Array('Apple', 'Orange', 'Mango', 'Pineapple');
     return fruits.includes('Apple');
}

//lastIndexOf  will tell you where an element appeared last
function lastIndexOfItem() {
    let fruit = new Array('Apple', 'Mango', 'Apple', 'Cherry', 'Grape');
    return fruit.lastIndexOf('Apple');
}

/* NOTE: includes() is preferred to indexOf()  because it handles NaN well, where indexOf() will return -1 includes() will return true. */
console.log(lastIndexOfItem()); 
