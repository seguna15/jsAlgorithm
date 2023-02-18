// When an array is assigned to another array, both arrays point to the same memory location.
//Essentially a change in Array A will reflect in Array B and vice versa

let array = ['Hello Uncle!'];
let array1 = array;

console.log(array === array1);

array1.push('Hello Ajennay');
console.log(array);
 