//objects, arrays and json

let vehicle = {
    "type": "car"
};

vehicle.colour = "black";

// console.log(vehicle);

let myArray = [
    "hello",
    "everyone"
];

console.log(myArray.length);

myArray.push("1");
myArray.push("2");
myArray.push("3");

console.log(myArray.length);

myArray.shift();

for (let i of myArray){
    console.log(i);
}