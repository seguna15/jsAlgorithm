//find(), findIndex() and findLastIndex();
/**
 * Find() method is used to find elements of an array most likely an object which meets a certain condition
 * array.find((item, index, array)=> {})
 */

let students = [
    {studentId: '0001', name: "Josh Fish"},
    {studentId: '0002', name: "John Whale"},
    {studentId: '0003', name: "30 rock writer"},
    {studentId: '0004', name: "Childish Gambino"},
    {studentId: '0005', name: "Donald Glover"},
    {studentId: '0006', name: "Troy Barnes"},
    {studentId: '0007', name: "Earnest Marks"},
    {studentId: '0008', name: "Derrick comedy member"},
];

let student = students.find((item) => item.studentId == '0003');

//console.log(student.name);

//create an array that contain objects of rappers. each object should contain properties such as rapperId, name, album, city,. Write a function that displays the rapper's name and city


let rapperArray = new Array(
    {rapperId: 0, name: 'Kanye west', album: 'YEEZUS II', city: 'CHI-Town'},
    {rapperId: 1, name: 'Childish gambino', album: '3.15.20', city: 'Atlanta'},
    {rapperId: 2, name: 'Danny Brown', album: '', city: 'Atlanta'},
    {rapperId: 3, name: 'Paper Boi', album: 'Postal', city: 'Atlanta'},
    {rapperId: 4, name: 'Tyler the creator', album: 'Goblin', city: 'L.A'},
    {rapperId: 5, name: 'Snoop DOGG', album: 'DoggyStyle', city: 'L.A'},
    {rapperId: 6, name: '2pac', album: 'Makaveli', city: 'L.A'},
    {rapperId: 7, name: 'Kendrick Lamar', album: 'DAMN.', city: 'Compton'},
    {rapperId: 8, name: 'Kendrick Lamar', album: 'Good Kid, Maad City', city: 'Houston'}
);

let rapper = rapperArray.find(function(item) {
    if (item.rapperId == 2){
        console.log(`Rapper's Name: ${item.name}  Rapper's Album: ${item.album}`);
    }
});

//findIndex returns the index of the first item that matches the condition
let firstIndexResult = rapperArray.findIndex(rapper => rapper.name === 'Kendrick Lamar');
console.log(firstIndexResult);

//filter() method returns an array of all matching elements
let filteredResult = rapperArray.filter(item => item.name === 'Kendrick Lamar');

console.log(filteredResult);

//write a function that filers L.A based rappers

let onlyLA = rapperArray.filter(function(item) {
    if(item.city === 'L.A') {
     return 'Your rapper lives in: ' + item.name;
    } 
});

console.log(onlyLA)