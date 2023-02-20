function checkVowels(str) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];

    //loop over all characters in our string
    for(let character of str.toLowerCase()){
        //if our character is in vowels array increase count by 1
        if(vowels.includes(character)){
            count++;
        }
    }
    return count;
}

console.log(checkVowels('correction'));

