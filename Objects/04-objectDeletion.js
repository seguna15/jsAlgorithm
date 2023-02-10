const user = {
    name : "Ajennay Noriega",
    age: 13,
    school: "Marling Grammar School",
    city: "Swindon",
    hobbies: ["coding", "music", "anime"],
    favouriteMusicians: ["Kanye", "JayZ", "J.Cole", "Kendrick", "Childish Gambino", "Tyler The Creator"]
};

console.log(user.favouriteMusicians);

//deleting city property
delete user.city;
console.log(user.city);

//the delete keyword will only delete own properties and not inherited properties.
const gameConsoles = {
  gamePad: 2,
  wireless: true,
  extraPorts: true,
  CPU: true,
  GPU: true,
};

const playStation = Object.create(gameConsoles);
playStation.CD = true;
playStation.HDMI = true;
playStation.bluetooth = false;

console.log(playStation.gamePad);
console.log(playStation.extraPorts);
delete playStation.extraPorts;
console.log(playStation.extraPorts); // this will still get displayed because you cannot delete inherited properties except you delete from the parent property.
