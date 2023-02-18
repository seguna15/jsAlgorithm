/* 
*1)Create an array styles with items “Jazz” and “Blues”.
*2)Append “Rock-n-Roll” to the end.
*3)Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
*4)Strip off the first value of the array and show it.
*5)Prepend Rap and Reggae to the array. 
*/

/* let styles = ['Jazz', 'Blues'];
 styles.push('Rock-n-Roll');

let middleValue = styles[Math.floor((styles.length - 1) / 2)];
 console.log(styles.shift());

 styles.unshift('Rap', 'Reggae');
  console.log(styles);
 */
//Sum all the values in this array


function sumArrayVals()  {
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    sum = 0;

    /* for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    } */

    for (let num of numArray){
        sum += num;
    }

    return sum;
 
}

console.log(sumArrayVals());

function dynamicSum(...array){
    sum = 0;
    for(let num of array){
        sum += num;
    }

    return sum;
}

console.log(dynamicSum(1,2));
console.log(dynamicSum(1, 2, 3, 5));
