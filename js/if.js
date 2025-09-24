// ############################# 1 #######################
let age1 = 20;
if(age1 > 18){
    console.log("You are an adult")
}
// ############################# 2 #######################
let score = 45;
if(score <= 50){
    console.log("You failed the test")
}
// ############################# 3 #######################
let name = "john" ;
if(name === "john"){
    console.log(`Hello, ${name} `)
}
// ############################# 4 #######################
let day = "Monday";
if(day != "Saturday" && day != "Sunday"){
    console.log("It's a weekday")
}
// ############################# 5 #######################
let num5 = 4
if(num5 % 2 === 0){
    console.log("The number is even")
}
// ############################# 6 #######################
let char = "a"
if(char >= "a"){
    console.log("It's a letter")
}
// ############################# 7 #######################
let list = [1, 2 , 3]
if(Array.isArray(list)){
    console.log("It's an array")
}
// ############################# 8 #######################
let x =8
if (x > 0 && x > -1){
    console.log(`${x} is a positive number`)
}
// ############################# 9 #######################
let y = -5
if(y < 0 && y <= -1){
    console.log(`${y} is a negative number`)
}
// ############################# 10 #######################
let z = 9
if(z % 3 === 9){
    console.log(" z is a multiple of 3 ")
}
// ############################# 11 #######################
let GPA = "B";
switch (GPA.toLowerCase()) {
  case "a":
    console.log("Excellent");
    break;
  case "b":
    console.log("Very Good");
    break;
  case "c":
    console.log("Good");
    break;
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("Invalid grade");
}
// ############################# 12 #######################
let month = "January";
switch (month) {
  case "December":
  case "January":
  case "February":
    console.log(`${month} is a winter month`);
    break;
  case "March":
  case "April":
  case "May":
    console.log(`${month} is a spring month`);
    break;
  case "June":
  case "July":
  case "August":
    console.log(`${month} is a summer month`);
    break;
  case "September":
  case "October":
  case "November":
    console.log(`${month} is an autumn month`);
    break;
  default:
    console.log("Invalid month");
}
// ############################# 13 #######################
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}
// ############################# 14 #######################
let email = "admin@admin.com"
let password1 ="12345Admin"
if(email !== "admin@admin.com"){
   console.log("Incorrect email") 
} else if (email === "admin@admin.com" && password1 !== "12345Admin"){
    console.log("Incorrect password")
}else if(email === "admin@admin.com" && password1 === "12345Admin"){
    console.log("Welcome")
}
// ############################# 14 #######################
function isValidNumber(input) {
  let num = Number(input); 
  if (!Number.isNaN(num) && isFinite(num)) {
    console.log(`${input} is a valid number`);
  } else {
    console.log(`${input} is not a number`);
  }
}
isValidNumber(11);      
isValidNumber("19");    
isValidNumber("xyz");   
isValidNumber("17.5");  
isValidNumber("21F");   








