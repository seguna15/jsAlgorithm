/* JS objects can be considered to be a set of properties. You can test if a property is a member of the set. To test if an object has a property with a given name. We can use the following;
i) in operator
ii) hasOwnProperty
iii) propertyIsEnumerable 
 */
// kanye is the G.O.A.T

const entertainment = {
    awards: ['Oscar', 'Grammy', 'Golden Globe' ]
};

const kanye = Object.create(entertainment);

kanye.grammy = 9;
kanye.lyricsRating = 1.0;
kanye.beatsRating = 1.0;
kanye.videoRating = 1.0;
kanye.flowRating = 1.0;
kanye.bestAlbum = "Yeezus II";


// let us use the in operator to test 
console.log("grammy" in kanye); // true

//hasOwnProperty returns true for own property and returns false for inherited properties
console.log(kanye.hasOwnProperty("lyricsRating")); //true

console.log(kanye.hasOwnProperty('beatsRating')); // should print true

console.log(kanye.hasOwnProperty("awards")); //false

console.log(`Check if beatsRating is enumerable: ${kanye.propertyIsEnumerable("beatsRating")}`); //true because it is enumerable and an own property
console.log(`Check if toString is enumerable: ${kanye.propertyIsEnumerable("toString")}`);  // false it is not enumerable and not an own property
