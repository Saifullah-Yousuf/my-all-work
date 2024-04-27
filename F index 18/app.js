//                  CHAPTER 09-11
//   CHAPTER NAME : USER INPUT & CONDITIONAL STATEMENT;
// QUESTION 01
// var cityName = prompt("Enter your City Name")
// if (cityName === "karachi", "Karachi") {
//     alert("Welcome to city of lights")
// } else {
//     alert("Incorrect your City name")
// }

// QUESTION 02
// var gender = prompt("Enter your Gender name")
// if (gender == "male") {
//     alert("Good Morning Sir")
// } else if (gender == "female") {
//     alert("Good Morning Ma'am")
// } else {
//     alert("Incorrect your gender name")
// }

// QUESTION 03
// var signalColor = prompt("Enter the color of the road traffic signal (red/yellow/green):")
// if (signalColor === "red") {
//     document.write("<h1>Signal Color Red</h1>" + " " + "<h4>Must Stop</h4>")
// } else if (signalColor === "yellow") {
//     document.write("<h1>Signal Color Green</h1>" + " " + "<h4>Ready to move</h4>")
// } else if (signalColor === "green") {
//     document.write("<h1>Signal Color Yellow</h1>" + " " + "<h4>Move now</h4>")
// } else if (signalColor !== "red", "yellow", "green") {
//     alert("Incorrect your Signal Name" + " " + "\n" + "RED YELLOW GREEN")
// }

// QUESTION 04
// var fuelNum = prompt("Enter your Correct Fuel Number")
// if (fuelNum > 0.25) {
//     alert("The Fuel is 0.25 Plus")
// } else if (fuelNum < 0.25) {
//     alert("Please refill the fuel in your car")
// }

// QUESTION 05
// PART (A)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// PART (B)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// } else {
//     alert("given condition for variable b is false");
// }

// PART (C)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// } else {
//     alert("condition 1 is false");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// } else {
//     alert("condition 2 is false");
// }

// if (++c < 14) {
//     alert("condition 3 is true");
// } else {
//     alert("condition 3 is false");
// }

// if (c === 14) {
//     alert("condition 4 is true");
// } else {
//     alert("condition 4 is false");
// }

// PART (D)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// PART (E)
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// } else {
//     alert("Condition is True");
// }

// PART (F)
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// QUESTION 06
// var marks1 = +prompt("Enter your Marks Number1");
// var marks2 = +prompt("Enter your Marks Number2");
// var marks3 = +prompt("Enter your Marks Number3");
// var totalMarks = 300;
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Marks Sheet</h1>" + "</br>")
// document.write("Total Marks :" + " " + totalMarks + "</br>")
// document.write("Marks Obtained :" + " " + marksObtained + "</br>")
// document.write("Percentage :" + " " + percentage + "</br>")
// if (percentage >= 80) {
// document.write("Grade :" + " " + "A-one" + "</br>" + "Remarks :" + " " + "Excellent")
// } else if (percentage >= 70) {
//     document.write("Grade :" + " " + "A" + "</br>" + "Remarks :" + " " + "Good")
// } else if (percentage >= 60) {
//     document.write("Grade :" + " " + "B" + "</br>" + "Remarks :" + " " + "You need to improve")
// } else if (percentage <= 60) {
//     document.write("Grade :" + " " + "Fail" + "</br>" + "Remarks :" + " " + "Fail")
// }

// QUESTION 07

// QUESTION 08
// var userNum = prompt("Enter you divisible number");
// if (userNum % 3 === 0) {
//     document.write("Number" + " " + userNum + " " + "ko 3 se divide kar sakte he")
// } else {
//     document.write("Number" + " " + userNum + " " + "ko 3 se divide nahi kar sakte he")
// }

// QUESTION 09
// var userNum = prompt("Enter your Number")
// if (userNum % 2 === 0) {
//     alert(userNum + " " + "is a even number")
// } else {
//     alert(userNum + " " + "is a odd number")
// }

// QUESTION 10
// var temperature = prompt("Enter temperature ")
// if (temperature > 40) {
//     alert("It is too hot outside")
// } else if (temperature > 30) {
//     alert("The Weather today is Normal")
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool")
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool")
// } else {
//     alert("Incorrect Your Temperature")
// }

// QUESTION 11
// var firstNum = +prompt("Enter your First Number")
// var operatorSign = prompt("Enter your Operation Sign (+,-,*,/,%)")
// var secondNum = +prompt("Enter your Second Number")
// if (operatorSign === "+") {
//     add = firstNum + secondNum
//     document.write("Your answer is" + " " + add)
// } else if (operatorSign === "-") {
//     sub = firstNum - secondNum
//     document.write("Your answer is" + " " + sub)
// } else if (operatorSign === "*") {
//     multiply = firstNum * secondNum
//     document.write("Your answer is" + " " + multiply)
// } else if (operatorSign === "/") {
//     divide = firstNum / secondNum
//     document.write("Your answer is" + " " + divide)
// } else if (operatorSign === "%") {
//     modulus = firstNum % secondNum
//     document.write("Your answer is" + " " + modulus)
// } else {
//     document.write("Re-Check your value")
// }