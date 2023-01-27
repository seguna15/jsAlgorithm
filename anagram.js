// Function to check if two words contain the same characters

function anagram(str1, str2) {
    // split the strings into an array so we can check the length and sort
    let split0 = str1.split('');
    let split1 = str2.split('');

    let length1 = split0.length;
    let length2 = split1.length;

    //if they do not have the same length return false
    if(length1 !== length2) 
    { 
        return false; 
    }

    // sorting string values
    split0.sort();
    split1.sort();
    
    //compare sorted string with the aid of a loop
    for (let i = 0; i < length1; i++){
        if(split0[i] !== split1[i]) {
              return false;
        }
    }
    return true;
}

if(anagram('listen','silent')) {
    console.log('The words are anagrams!');
} else {
    console.log('The two words you entered were not anagrams!');
}