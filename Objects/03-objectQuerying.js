//QUERYING AND SETTING PROPERTIES
//querying has to do with accessing JS Object Properties
//Setting has to do with creating properties and their values

const footwear = {
  manufacturer: "yeezy",
  color: "red",
  size: [42, 43, 44],
  type: "foam-runners",
  "parent company": "Adidas",
};

let sneakerName = footwear.manufacturer;
let userSize = footwear.size[1];
let companyName = footwear["parent company"];

console.log(`I own an ${companyName} ${sneakerName} size ${userSize}`);

footwear["country of origin"] = "Philippines";

//An object in JS has what we call "own properties" and also inherit properties of their parent object (prototype object)

const car = { name: "Toyota", country: "Japan" };
const camry = Object.create(car);
camry.model = 2014;
camry.color = "Carbon Black";
camry.transmission = "Automatic";

console.log(camry.name); //inherited;
console.log(camry.model); // own property
console.log(camry.sits);

