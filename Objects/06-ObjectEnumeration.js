const user = {
    firstName : "Ajennay",
    lastName : "Noriega",
    age : 13,
    city: "Swindon"
};

//using for in loop to enumerate

for (let properties in user ){
    console.log(properties);
}

for (let properties of Object.keys(user)){
    console.log(properties);
}

for (let keyValue of Object.entries(user)){
    console.log(keyValue);
}

for (let value of Object.values(user)){
    console.log(value);
}

/* //Read up on other methods of enumeration 
1)Object.keys(): return an array of the names of the enumerable own properties of an object. It does not include non-enumerable properties, inherited properties, or properties whose name is a symbol.
2) Object.getOwnPropertyNames(): returns an array of the names of non-enumerable own properties as long as their name is a string
3) Object.getOwnPropertySymbols(): returns own properties whose names are Symbols, whether they are enumerable or not
4) Reflect.ownKeys(): return all own property names, both enumerable and non-enumerable, and both string and symbol */
