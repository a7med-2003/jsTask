// ################################## 1 ###################################
let person = {
  name: "Ahmad",
  age: 22,
  gender: "Male"
};
console.log(person.name);
console.log(person.age);
console.log(person.gender);
// ################################## 2 ###################################
let information = {
  name: "Ahmad",
  age: 22,
};
information.gender = "Male";   
console.log(information);
// ################################## 3 ###################################
let person1 = {
    name: "Ahmad",
    age: 22,
    gender: "Male"
};
person1["Univarsty"] = "Zarqa";   
console.log(person1);
// ################################## 4 ###################################
let student = {
  name: "Ahmad",
  grade: "A"
};
console.log(student.name);  
// ################################## 5 ###################################
let student2 = {
  name: "Hossam",
  grade: "A+"
};
console.log(student2["name"]);  
// ################################## 6 ###################################
let laptop = {
  brand: "HUAWEI",
  ram: "8GB",
  cpu: "i5"
};
for (let i in laptop) {
  console.log(i + " : " + laptop[i]);
}
// ################################## 7 ###################################
let phone = {
  brand: "Samsung",
  model: "A52s-5g",
  price: 1500
};
console.log(Object.keys(phone));
// ################################## 8 ###################################
console.log(Object.values(phone));
// ################################## 9 ###################################
console.log(Object.entries(phone));
// ################################## 10 ###################################
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let num22 = Object.assign({}, obj1, obj2);
console.log(num22);
// ################################## 11 ###################################
const person3 = {
  firstName: "Ahmad",
  lastName: "Hossam",
  age: 22,
  eyeColor: "Brown"
};
Object.freeze(person3)
person3.age = 23;
console.log(person3);
// ################################## 12 ###################################
const person4 = {
  firstName: "Ahmad",
  lastName: "Hossam",
  age: 22,
  eyeColor: "Brown"
};
Object.seal(person4)
 person4.age = 23;
 console.log(person4);
