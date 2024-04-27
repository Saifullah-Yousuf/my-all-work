//                CHAPTER  04
// CHAPTER NAME : VARIABLE NAMES: LEGAL & ILLEGAL

// QUESTION 01
// var a = 1,
//     b = 2,
//     c = 3;
// var d = a + b + c;
// console.log(d)

//               QUESTION 02
//         (5) lEGAL VARIAVBLE NAMES
// var alis = "<h1>alis</h1>",
//     $ = "<h1>$</h1>",
//     ali123 = "<h1>Ali123</h1>",
//     aliName = "<h1>Ali Name</h1>",
//     ali_Name = "<h1>ali_Name</h1>";
// var alisFamily = alis + $ + ali123 + aliName + ali_Name;
// document.write(alisFamily)

//         (5) IllEGAL VARIAVBLE NAMES
// var 123 = "321",
//     @ = "@",
//     va1r = "VAR",
//     -123 = "-321",
//     VAR - VAR = "VAR-VAR"
// var## = 123 + "<br>" + @ + "<br>" + va1r + "<br>" + -123 + "<br>" + VAR - VAR;
// console.log(##)

//               QUESTION 03
//                 PART A
// document.write("<h1>Rulesfor naming JS variables</h1>")

//                 PART B
// document.write("Variable names can only contain numbers, $ and __. For example $my_1stVariable")

//                 PART C
// document.write("Variables must begin with a Letter, 5 or __. For example $name, _name or name")

//                 PART D
// document.write("Variable names are case sensitive.")

//                 PART E
// document.write("Variable names should not be JS keyword")

//                CHAPTER  05
// CHAPTER NAME : MATH EXPRESSIONS

// QUESTION 01
// var num1 = prompt("Inter Your First Number:")
// var num2 = prompt("Inter Your Second Number:")
// var num = parseFloat(num1) + parseFloat(num2);
// document.write("Sum" + " " + "of" + " " + num1 + " " + "and" + " " + num2 + " " + "is:" + " " + num)

// QUESTION 02
//               SUBTRACTION
// var num3 = 7,
//     num4 = 8,
//     num = num3 - num4;
// console.log("Division" + " " + "of" + " " + num3 + " " + "By" + " " + num4 + " " + "is" + " " + num)

//             MULTIPLICATION
// var num5 = 10,
//     num6 = 20,
//     num = num5 * num6;
// console.log("Division" + " " + "of" + " " + num5 + " " + "By" + " " + num6 + " " + "is" + " " + num)

//               DIVISION
// var num7 = 71,
//     num8 = 5,
//     num = num7 / num8;
// console.log("Division" + " " + "of" + " " + num7 + " " + "By" + " " + num8 + " " + "is" + " " + num)

//               MODULUS
// var num7 = 17,
//     num8 = 71,
//     num = num7 / num8;
// console.log("modulus" + " " + "of" + " " + num7 + " " + "By" + " " + num8 + " " + "is" + " " + num)

// QUESTION 03
//       PART A (DECLARE A VARIABLE)
// var Q = "Declare a variable"
// alert(Q)

//       PART B (VARIABLE DECLARATION)
// var myVariable;
// document.write("Value after variable declaration is: " + myVariable);

//       PART C (INITIALIZE THE VARIABLE)
// var initializeNumber = 100;
// document.write(initializeNumber)

//       PART D (INITIAL THE VARIABLE)
// var initialNumber = 5;
// document.write("Initial value:" + " " + initialNumber)

//       PART E (INCREMENT THE VARIABLE)
// var a = 10;
// a++;
// document.write("Value 10 Increment Is:" + " " + a)

//       PART F (VALUE AFTER INCREMENT)
// var increment = 5;
// increment++;
// document.write("Value after increment is " + increment)

//       PART G (ADD 7 TO THE VARIABLE)
// var variable = 6;
// variable++;
// alert("Value after addition is: " + variable);

//       PART H (VALUE AFTER ADDITION)
// var addition = 6;
// addition += 7;
// document.write("Value After Addition is:" + " " + addition)

//       PART I (DECREMENT THE VARIABLE)
// var decrement = 10;
// --decrement
// document.write("Value 10 Decrement Is:" + " " + decrement)

//       PART J (DECREMENT THE VARIABLE)
// var decrement = 13;
// --decrement;
// document.write("Value 13 Decrement Is:" + " " + decrement)

//       PART K (DIVIDING THE VARIABLE)
// var decrement1 = 6,
//     decrement2 = 2,
//     decrement = decrement1 / decrement2;
// document.write("Value 6/2 Dividing Is:" + " " + decrement)

//       PART L (OUTPUT THE REMAINDER)
// var reminder1 = 10,
//     reminder2 = 5,
//     reminder = reminder1 % reminder2;
// document.write("The remainder is :" + " " + reminder)

// QUESTION 04
// var ticketPrice = 600,
//     totalTicket = 5,
//     tickest = ticketPrice * 5;
// document.write("Total cost of buys" + " " + totalTicket + " " + "tickets to a movie is" + " " + tickest + "PKR")

// QUESTION 05 (DISPLAY MULTIPLICATION TABLE)
// var num = prompt("Enter Your Table Number")
// document.write(
//     num + " " + "x" + " " + "1" + " " + "=" + " " + num * 1 + "<br>" +
//     num + " " + "x" + " " + "2" + " " + "=" + " " + num * 2 + "<br>" +
//     num + " " + "x" + " " + "3" + " " + "=" + " " + num * 3 + "<br>" +
//     num + " " + "x" + " " + "4" + " " + "=" + " " + num * 4 + "<br>" +
//     num + " " + "x" + " " + "5" + " " + "=" + " " + num * 5 + "<br>" +
//     num + " " + "x" + " " + "6" + " " + "=" + " " + num * 6 + "<br>" +
//     num + " " + "x" + " " + "7" + " " + "=" + " " + num * 7 + "<br>" +
//     num + " " + "x" + " " + "8" + " " + "=" + " " + num * 8 + "<br>" +
//     num + " " + "x" + " " + "9" + " " + "=" + " " + num * 9 + "<br>" +
//     num + " " + "x" + " " + "10" + " " + "=" + " " + num * 10)

// QUESTION 06  (THR TEMPERATURE COVERED:)
// var celsiusTemperature = 25,
//     fahrenheitTemperature1 = (celsiusTemperature * 9 / 5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature1 + "°F<br>");

// var fahrenheitTemperature2 = 71. - 1,
//     celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// QUESTION 07  (THR TEMPERATURE COVERED:)
// var item1 = 650,
//     item2 = 100;
// item1_1 = item1 * 3,
//     item1_2 = item2 * 7,
//     shipCharges = 100,
//     item = item1_1 + item1_2 + shipCharges;
// document.write("<h1>Shopping Cart</h1>" + "</br>" + "Price of item 1 is" + " " + item1 + "</br>")
// document.write("Quantity of item 1 is" + " " + 3 + "</br>")
// document.write("Price of item 2 is" + " " + item2 + "</br>")
// document.write("Quantity of item 2 is" + " " + 7 + "</br>")
// document.write("Shipping charges 100" + "</br>" + "</br>")
// document.write("Total cost of your order is")
// document.write(item)

// QUESTION 08  (COMPUTE THE PERCENTAGE)
// var totalMarks = 980,
//     marksObtained = 804,
//     dividing = marksObtained / totalMarks,
//     multiplication = dividing * 100;
// document.write("<h1>Marks Sheet</h1>" + "</br>" +
//     "</br>" + "Total Marks:" + " " + marksObtained +
//     "</br>" + "Obtained Marks:" + " " + totalMarks +
//     "</br>" + "Percentage:" + " " + multiplication + "%")

// QUESTION 09  (CURRENCY EXCHANGE)
// var dollar1 = 104.80,
//     saudiRiyal1 = 28,
//     dollar2 = dollar1 * 10,
//     saudiRiyal2 = saudiRiyal1 * 25,
//     total = dollar2 + saudiRiyal2;
// document.write("<h1>Total Currency in PKR</h1>" + "</br>" + "Total Currency in PKR:" + " " + total)

// QUESTION 10  (INITIALIZE A VARIABLE)
// var initialNum = 20,
//     num = ((initialNum + 5) * 10 / 2);
// document.write("initialize a variable is:" + " " + num)

// QUESTION 11  (THE AGE CALCULATOR)
// var currentYear = prompt("Enter your Current Year", "2016");
// var birthYear = prompt("Enter your Birth Year", "2000");
// var age1 = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>" + "</br>" + "</br>" + "Current Year is:" + " " + currentYear + "</br>" + "Birth Year is:" + " " + birthYear + "</br>" + "Your Age is:" + age1)

// QUESTION 12  (THE GEOMETRIZER)


// QUESTION 13  (THE LIFETIME SUPPLY CALCULATOR)
// var favoriteSnack = prompt("Enter your Favorite Snack", "CHOCOLATE BAR"),
//     currentAge = prompt("Enter your Current Age"),
//     maximumAge = 100,
//     amountPerday = 3,
//     remainingYears = maximumAge - currentAge,
//     oldAge = currentAge - 1,
//     totalAmount = remainingYears * 365 * amountPerday;
// document.write("<h1>The Lifetime Supply Calculator:</h1>" + "</br>" + "</br>" + "Favorite Snack:" + " " + favoriteSnack + "</br>" + "Current Age:" + " " + currentAge + "</br>" + "Maximum Age:" + " " + maximumAge + "</br>" + "Amount of snacks per day:" + " " + amountPerday + "</br>" + "You will need:" + " " + totalAmount + " " + favoriteSnack + " " + "to last of unit the ripe old age of " + " " + oldAge)

//                CHAPTER  6-9
//        CHAPTER NAME : MATH EXPRESSIONS
// QUESTION 01 
// document.write("<h1>Result:</h1>")
// var value1 = 10,
//     value2 = ++value1,
//     value3 = value1++,
//     value4 = --value1,
//     value5 = value1--;
// document.write("The value of a is:" + " " + value1 + "</br>" + "-------------------------------------------" + "</br>")
// document.write("The value of ++a is:" + " " + value2 + "</br>" + "Now the value of a is:" + " " + value2 + "</br>" + "</br>")
// document.write("The value of a++ is:" + " " + value3 + "</br>" + "Now the value of a is: 12" + "</br>" + "</br>")
// document.write("The value of --a is:" + " " + value4 + "</br>" + "Now the value of a is:" + " " + value2 + "</br>" + "</br>")
// document.write("The value of --a is:" + " " + value5 + "</br>" + "Now the value of a is:" + " " + value1 + "</br>" + "</br>")

// QUESTION 02
// var a = 2,
//     b = 1,
//     result = --a - --b + ++b + b--;
// document.write("a is" + " " + a + "</br>" + "b is" + " " + b + "</br>" + "result is" + " " + result)

// QUESTION 03
// var userName = prompt("Enter your full name")
// document.write("Assalam o Alaikum MR." + " " + userName + " " + "Welcome my First Website:")

// QUESTION 05
// var num = prompt("Enter a New Table Number")
// document.write(
//     "<h2>Multiplication Table of " + num + "</h2>" + "</br>" +
//     num + " " + "x" + " " + 1 + " " + "=" + " " + num * 1 + "</br>",
//     num + " " + "x" + " " + 2 + " " + "=" + " " + num * 2 + "</br>",
//     num + " " + "x" + " " + 3 + " " + "=" + " " + num * 3 + "</br>",
//     num + " " + "x" + " " + 4 + " " + "=" + " " + num * 4 + "</br>",
//     num + " " + "x" + " " + 5 + " " + "=" + " " + num * 5 + "</br>",
//     num + " " + "x" + " " + 6 + " " + "=" + " " + num * 6 + "</br>",
//     num + " " + "x" + " " + 7 + " " + "=" + " " + num * 7 + "</br>",
//     num + " " + "x" + " " + 8 + " " + "=" + " " + num * 8 + "</br>",
//     num + " " + "x" + " " + 9 + " " + "=" + " " + num * 9 + "</br>",
//     num + " " + "x" + " " + 10 + " " + "=" + " " + num * 10 + "</br>"
// )

// QUESTION 06
// var sub1 = prompt("Enter your First Subject Name");
// var sub2 = prompt("Enter your Second Subject Name");
// var sub3 = prompt("Enter your Third Subject Name");
// var subjectMarks = 100;
// var subNum1 = 54;
// var subNum2 = 54;
// var subNum3 = 48;
// var totalNum = subNum1 + subNum2 + subNum3;
// var subjectTotalmarks = subjectMarks + subjectMarks + subjectMarks;
// var totalSubjectmarks = sub1 + sub2 + sub3;
// var allPercentage = (totalNum / subjectTotalmarks) * 100;
// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>")
// document.write(sub1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + subjectMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + subNum1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (subNum1 / subjectMarks) * 100 + "%" + "</br>")
// document.write(sub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + subjectMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + subNum2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (subNum2 / subjectMarks) * 100 + "%" + "</br>")
// document.write(sub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + subjectMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + subNum3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + (subNum3 / subjectMarks) * 100 + "%" + "</br>")
// document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + subjectTotalmarks + "<b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + totalNum + "</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<b>" + allPercentage + "%" + "</b>")

//                CHAPTER  6-7-8-9
//                 SIR EXTRA WORK
// QUESTION 01
// var a = 1,
//     a = ++a;
// console.log(a);

// QUESTION 02
// var a = 100,
//     a = --a;
// console.log(a);

// QUESTION 03
// var x = 50,
//     y = x++;
// console.log(y);

// QUESTION 04
// var y = 50,
//     z = --y;
// console.log(z);

// QUESTION 05
// var num = 10,
//     newNum = --num;;
// console.log(newNum)

// QUESTION 06
// var num = 10,
//     newNum = ++num;
// console.log(newNum);

// QUESTION 07
// var num = 20,
//     newNum = ++num;
// alert("Value of a variable: 20" + "\n" + "The value of Increment the variable:" + " " + newNum);

//                CHAPTER  7
// QUESTION 01
// var a = 2,
//     b = 6,
//     calculatedNum = a + (a * b);
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 02
// var a = 2,
//     b = 6,
//     calculatedNum = (a + a) * b;
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 03
// var a = 2,
//     b = 4,
//     calculatedNum = (a + a) * (b + a);
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 04
// var a = 2,
//     b = 4,
//     calculatedNum = ((a + a) * b) + 2;
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 05
// var a = 2,
//     b = 4,
//     c = 10;
// calculatedNum = (a + a + c) * b;
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 06
// var a = 2,
//     b = 4,
//     c = 10;
// calculatedNum = (a + a * b) + 10;
// console.log("Calculated Number is:" + " " + calculatedNum);

// QUESTION 07
// var a = 5,
//     b = 4;
// calculatedNum = (a / b) * b;
// console.log("Calculated Number is:" + " " + calculatedNum);

//                CHAPTER  8
// QUESTION 01
// var a = "2" + "2";
// console.log("Value of number is:" + " " + a);

// QUESTION 02
// var a = "Hello," + "Dolly";
// alert(a);

// QUESTION 03
// var a = "33" + 3;
// alert(a);

// QUESTION 04
// var firstWord = "''Pakistan",
//     secondWord = "Zindabad''";
// alert(firstWord + " " + secondWord);

// QUESTION 05
// var a = "33",
//     b = 4;
// alert(a + " " + b);

// QUESTION 06
// var a = "33",
//     b = "44",
//     c = a + b;
// alert(c);

//                CHAPTER  9
// QUESTION 01
// var a = prompt("Enter first name");
// alert(a);

// QUESTION 02
// var a = prompt("Enter your Country name", "China");
// alert(a);

// QUESTION 03
// var yourName = prompt("Enter Your Name");
// alert(yourName)

// QUESTION 04
// var a = prompt("Enter your Name", "John");
// alert(a);

// QUESTION 05
// var message = "Enter your name",
//     defaultResponse = "John";
// var userResponse = prompt(message, defaultResponse);
// alert(userResponse);

// QUESTION 05
// var firstName = prompt("Enter your First Name", "Muhammad"),
//     secondName = prompt("Enter you Second Name", "Hanif");
// alert(firstName);
// alert(secondName);