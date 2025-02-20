//1. Accessing Elements
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]+" "+colors[colors.length-1]);
console.log(colors[1]);
colors[2]="orange";
console.log(colors[2])
//2. Traversing an Array
let numbers = [10, 20, 30, 40, 50];
for(var i = 0 ; i<numbers.length;i++)
    console.log(numbers[i])
for(var i = numbers.length-1 ; i >=0 ; i--)
    console.log(numbers[i])
//3. Searching in an Array
let numbers2 = [5, 10, 15, 20, 25];
var test = numbers2.includes(25);
if(test)
    console.log("Found at position: "+numbers2.indexOf(25))
else
    console.log("Not Found")
