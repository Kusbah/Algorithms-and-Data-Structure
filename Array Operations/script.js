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
//4. Sorting an Array

let scores = [50, 20, 70, 10, 40];
scores.sort();
console.log(scores)
scores.sort((a,b)=> b-a);
console.log(scores)
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names)
//5. Inserting Elements
let animals = ["dog", "cat", "rabbit"];
animals.push("elephant");
animals.unshift("lion")
animals.splice(2,0,"tiger")
console.log(animals)
//6. Deleting Elements
let fruits = ["apple", "banana", "cherry", "date"];
fruits.pop();
fruits.shift();
fruits.splice(0,1)
console.log(fruits)
//7. Combining Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);
//8. Splitting an Array
let items = ["a", "b", "c", "d", "e"];
let items2 = items.splice(0,3)
console.log(items2+ " " +items)
//9. Filtering Elements
let numberss = [1, 5, 10, 15, 20, 25, 30];
let  arrayy = []
for(var i = 0; i<numberss.length;i++){
    if(numberss[i]>15){
        arrayy.push(numberss[i])
    }
}
console.log(arrayy)
//10. Advanced Challenge
var array10 = [1,2,2,3,4,4,5];
var result = [];
for(var i = 0 ; i < array10.length;i++){
    if(!result.includes(array10[i])){
        result.push(array10[i])
    }
}
console.log(result)
//b
var arrayb = [1,2,3,4,5];
var n = 2
let part1 = arrayb.slice(-n);
let part2 = arrayb.slice(0, -n);

console.log(part1.concat(part2)); 
