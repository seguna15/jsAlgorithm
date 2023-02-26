//Write an array algorithm that reverse string with odd length in an array e.g ['Hello', 'world', 'We', 'Are', 'Here ] to ['olleH', 'dlrow', 'We', 'era' , 'Here'] 

function reverseOddWords(str) { 
    return str.split(" ")
            .map( word => word.length%2 ? [...word].reverse().join("") : word )
            .join(" ");
}

console.log(reverseOddWords('Hello World I am here'));