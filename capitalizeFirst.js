//Write an algorithm to capitalize the first letter of every word.
//hello world we are here => Hello World We Are Here
function capitalizeWords(phrase){
    const words = [];

    //loop through the phrase by splitting it into an array
    for(let word of phrase.split(" ")){
        //hello          h=>H + ello
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(" ");
}

console.log(capitalizeWords("hello world we are here"));