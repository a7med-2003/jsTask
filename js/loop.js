// ############################# 1 #######################
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// ############################# 2 #######################
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// ############################# 3 #######################
let arr = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// ############################# 4 #######################
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// ############################# 5 #######################
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum =", sum); 
// ############################# 6 #######################
let nums = [10, 25, 7, 40, 3];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Largest =", max); 
// ############################# 7-8 #######################
let numbers = [10, 20, 5, 15, 30];
let min = numbers[0];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  total += numbers[i];
}

let average = total / numbers.length;
console.log("Smallest =", min);  
console.log("Average =", average); 
// ############################# 9 #######################
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log("Factorial =", fact);
// ############################# 10 #######################
let limit = 20;

for (let num = 2; num <= limit; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
// ############################# 11 #######################
let number6 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number6} x ${i} = ${number6 * i}`);
}
// ############################# 12 #######################
let items = ["a", "b", "c", "d", "e", "f"];
for (let i = 0; i < items.length; i += 2) {
  console.log(items[i]);
}
// ############################# 13 #######################
let arr2 = [1, 2, 3, 4, 5];
for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}
// ############################# 14 #######################
let arr3 = ["red", "green", "blue", "yellow", "black"];
for (let i = 1; i <= 3; i++) {
  console.log(arr3[i]);
}
// ############################# 15 #######################
let arr4 = [10, 20, 30, 40];
let target = 30;
let found = false;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] === target) {
    found = true;
    break;
  }
}
console.log(found ? "Found" : "Not Found");
// ############################# 16 #######################
let arr5 = [1, 2, 3, 2, 4, 2, 5];
let searchNum = 2;
let count = 0;

for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] === searchNum) {
    count++;
  }
}
console.log("Frequency of", searchNum, "=", count); 
// ############################# 17 #######################
let fibLimit = 10;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < fibLimit; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}
