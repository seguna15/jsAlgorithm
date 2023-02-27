// We will take a look at methods that either transform or reorder our array
//map() method runs a function over elements of your array and in essence, transforms your array

let arrayNum = [2, 5, 8, 9, 4].map(item => item * 10);

//console.log(arrayNum);

// create an array of names. Using map method write a function that appends Hello before every name.

let arr = new Array('Donald', 'Kanye', 'Alfred', 'Tyler');
 arr.map(function(item) {
    console.log("Hello " + item );
 });

 //sort() used to sort array in a lexical order, converting into string 

 let unsorted = [1, 21, 15, 2, 4, 32 ];
 let sorted = unsorted.sort();
 console.log(sorted);

 function compareNumbers(a,b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1
 }

 let numSort = unsorted.sort(compareNumbers);

 console.log(numSort);