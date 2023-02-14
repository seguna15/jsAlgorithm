//toString: used to convert an object to a string, although it os not very useful
let myObj = {a: 1, b: 1}.toString();
console.log(myObj);
//because toString is not very useful people often define their own toString methods
const objNum = {
    x: 2,
    y: 5,
    toString: function(){
        return `(${this.x}, ${this.y})`;
    }
};
console.log(objNum.toString());

//toStringLocale this returns a localized representation of the Object
const prices = {
    mac: 1000,
    samsung: 2000,
    toLocaleString: function(){
        return `mac: ${this.mac.toLocaleString()}, samsung: ${this.samsung.toLocaleString()}`;
    }
};
console.log(prices.toLocaleString())

//valueOF does a conversion to something other than a string, typically, a number
let newObj = {
    x: 3,
    y: 4,
    valueOf: function() {
        return Math.hypot(this.x, this.y);
    }
};

console.log(newObj > 4);

//toJSON this is used for Object serialization
let unserialized = {
    x: 10,
    y: 15,
    toString: function () {
        return `(${this.x}, ${this.y})`
    },
    toJSON: function() {
        return this.toString();
    }
};

console.log(JSON.stringify([unserialized]));

