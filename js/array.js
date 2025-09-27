let fruits5 = ["apple", "banana", "orange"];
console.log(fruits5.length); 
// ############################################### 2 ###########################################
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
// ############################################### 3 ###########################################
let names = ["Ali", "Omar", "Sara"];
for (let index in names) {
  console.log(index , names[index]);
}
// ############################################### 4 ###########################################
let arr = [1, 2, 3];
let notArr = "hello";
console.log(Array.isArray(arr));     
console.log(Array.isArray(notArr));  
// ############################################### 5 ###########################################
let str4 = "hello";
let arrFromStr = Array.from(str4);
console.log(arrFromStr);
// ############################################### 6 ###########################################
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// ############################################### 7 ###########################################
let animals = ["cat", "dog", "rabbit"];
console.log(animals.indexOf("dog"));   
console.log(animals.indexOf("lion")); 
// ############################################### 8 ###########################################
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result);
// ############################################### 9 ###########################################
let letters = ["a", "b", "c", "d", "e"];
let part = letters.slice(1, 4);
console.log(part); 
// ############################################### 10 ###########################################
let arr3 = ["a", "b", "c", "d"];
arr.splice(2, 1, "x", "y"); 
console.log(arr); 
// ############################################### 11 ###########################################
let words = ["I", "love", "JS"];
console.log(words.join(" ")); 
// ############################################### 12 ###########################################
let text = "apple,banana,orange";
let arr5 = text.split(",");
console.log(arr5); 
// ############################################### 13 ###########################################
let arr8 = Array.of(10, 20, 30);
console.log(arr8); 
// ############################################### 14 ###########################################
let arr4 = new Array(5).fill(0);
console.log(arr4); 
// ############################################### 15 ###########################################
let arr9 = [1, 2, 3, 4, 5];
arr5.copyWithin(0, 3, 5);
console.log(arr9); 
// ############################################### 16 ###########################################
let fruits2 = ["banana", "apple", "cherry"];
fruits2.sort();
console.log(fruits2); 

