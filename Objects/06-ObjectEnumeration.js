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
1) Object.getOwnPropertyNames()
2) Object.getOwnPropertySymbols()
3) Reflect.ownKeys() */
