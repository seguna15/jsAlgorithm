/*
* Often times newbies assume that arrays can only store primitive values but array can store all sorts of values
*/

let arr = [6, 'Hello', Date.now(), true];
 console.log(arr[2]);

//JS arrays have a length property which is the total number of elements in the array
console.log(arr.length);

//accessing the last element with array.length property
console.log(arr[arr.length - 1]);