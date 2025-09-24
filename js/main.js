let  cash=1000;
let currentliabilities =500;
let  CashFlow = cash / currentliabilities;
console.log(CashFlow); 
// ################################# 2 ###########################
let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log(netIncome); 
// ################################ 3 ############################
let liabilities = 1000;
let equity = 500;
let totalAssets = liabilities + equity;
console.log(totalAssets); 
// ################################ 4 ############################
let profit = 1000;
let sales = 500;
let netIncomeBySales = profit * sales;
console.log(netIncomeBySales); 
// ################################ 5 ############################
let numbers = [7, 9, 2];
let average = (7 + 9 + 2) / numbers.length;
console.log(average); 
// ################################ 6 ############################
let price = 150;
let discount = 0.30; 
let finalPrice = price - (price * discount);
console.log(finalPrice); 
// ################################ 7 ############################
let age = 20;
let isAllowed = age > 18 && age < 30;
console.log(isAllowed); 
// ################################ 8 ############################
let num12 = 2;
let num2 = 3;
let exponential = num12 ** num2;
console.log(exponential); 
// ################################ 9 ############################
let n1 = 10;
let n2 = 4;
let remainder = n1 % n2;
console.log(remainder); 
// ################################ OutPut #########################################
// ● typeof(100) --> number
// ● typeof(73.9) --> number
// ● typeof(NaN) --> number
// ● typeof("Water") --> String
// ● typeof(false) --> Boolean
// ● typeof(9 != 11) --> Boolean
// ● "Orang" + "e" --> Orange
// ● "Orange" - "s" --> NaN
// ● "4" + "8" --> 48
// ● "4" - "8" --> -4
// ● "name" + 3 --> name3
// ● "name" - 3 --> NaN
// ● 82 * "word" --> NaN
// ● 1 + "hello" --> 1hello
// ● "hello" + 1 --> hello1
// ● 1 + true --> 2 
// ● "hello" + true --> hellotrue
// ● typeof (Infinity) --> number
// ● 1 == '1' --> true
// ● 1 === '1' --> false
// ############################### if ##########################################
let num =5;
if(num < 10){
    console.log("00"+num)
} else if (num >10 && num < 100 ){
    console.log("0"+num)
} else if (num >=100 ){
    console.log(num)
}

// ############################### 2 #########################
let num1 = 9;
let str ="9";
let str2 = "20";
if(num1 == str){
    console.log(`${num} is the same value as ${str}`)
} else if(num == str && typeof(num) != typeof(str)  ){
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
} else if (num != str2 && typeof(num) != typeof(str2) ){
    console.log(`${num1} Is Not Same Value As ${str2} But Not The Same Type`)
    
}  else if (str != str2 && typeof(str) == typeof(str2) ){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value
        `)
    }
// ############################### 3 ###############################






