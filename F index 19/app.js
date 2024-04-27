//                   CHAPTER 14 - 16
//                CHAPTER NAME : ARRAYS
// QUESTION 01
// let futureStudentName = [];
// console.log(futureStudentName)

// QUESTION 02
// let futureStudentName = {
//     names = []
// };
// console.log(names)

// QUESTION 03
// let names = ["Ali", "Saad", "Umer", "Saif", "Yousha"]
// console.log(names)

// QUESTION 04
// let number = [100, 200, 300, 400, 500]
// console.log(number)

// QUESTION 05
// let boolean1 = [true]
// console.log(boolean1)
// let boolean2 = [false]
// console.log(boolean2)

// QUESTION 06
// let mixed = ["Ali", "Saad", 100, 200, true, false]
// console.log(mixed)

// QUESTION 07                        
// let pakQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// for (let i = 0; i < pakQualification.length; i++) {
//     console.log(pakQualification[i])
// }

// QUESTION 08
// let studentName = ["Ali", "Saad", "Umer"];
// let scoreNumber = [320, 230, 480];
// let totalMarks = 500;
// for (let i = 0; i < studentName.length; i++) {
//     let percentage = (scoreNumber[i] / totalMarks) * 100;
//     console.log(studentName[i] + "'s score: " + scoreNumber[i] + " out of " + totalMarks + ", Percentage: " + percentage.toFixed(2) + "%");
// }

// QUESTION 09
//        PART (A)
// let originalColor1 = ["Red", "Yellow", "Green"];
// let color1 = prompt("Enter Your Color For Beginning");
// originalColor1.unshift(color1);
// document.write("<h3>" + "Original Color is: Red Yellow Green" + "</br>" + "Add the Color for Beginning is :" + " " + originalColor1 + "</h3>")

//        PART (B)
// let originalColor2 = ["Pink", "Blue", "Silver"];
// let color2 = prompt("Enter Your Color For End");
// originalColor2.push(color2);
// document.write("<h3>" + "Original Color is: Pink Blue Silver" + "</br>" + "Add the Color for End is :" + " " + originalColor2 + "</h3>")

//        PART (C)
// let originalColor3 = ["Black", "Brown", "Blue"];
// let color3 = prompt("Enter Your More Color Add For Beginning");
// originalColor3.unshift(color3);
// document.write("<h3>" + "Original Color is: Black Brown Blue" + "</br>" + "Add More Color for Beginning is :" + " " + originalColor3 + "</h3>")

//        PART (D)
// let originalColor4 = ["Sky Blue", "Red", "Yellow, Pink, Blue"];
// document.write("<h3>" + "Delete First Color :" + originalColor4 + "</h3>")
// originalColor4.shift();
// document.write("<h3>" + "Update the Color :" + originalColor4 + "</h3>")

//        PART (E)
// let originalColor5 = ["Silver", "Pink", "Red ", "Yellow", "Black"];
// document.write("<h3>" + "Delete Last Color :" + originalColor5 + "</h3>")
// originalColor5.pop();
// document.write("<h3>" + "Update the Color :" + originalColor5 + "</h3>")

//        PART (F)
// let originalColor6 = ["Black", "Green", "Blue ", "Pink", "Red"];
// document.write("<h3>" + "Main Colors :" + originalColor6 + "</h3>");
// let colorIndex = prompt("Enter the Index Where You Want To Assign a Color :");
// let colorName = prompt("Enter the color You Want To Assign:");
// originalColor6[colorIndex] = colorName;
// document.write("<h3>" + "Update the Color :" + originalColor6 + "</h3>");

//        PART (G)               (RE CHECK)
// let originalColor7 = ["Brown", "Sky-Blue", "Silver", "Yellow", "Pink"];
// document.write("<h3>" + "Original Color :" + originalColor7 + "</h3>");
// let removeIndex = +prompt("Enter the Index From Which You Want To Remove Color(s) :");
// let removeNumber = +prompt("Enter the Number of Color You Want to Remove:");
// originalColor7.splice(removeIndex,removeNumber);
// document.write("<h3>" + "Updated Colors: " +originalColor7+ "</h3>")

// QUESTION 10                    (RE CHECK)
// let scoreStudent = [320, 230, 480, 120];

// QUESTION 11
// let userCitiesName = prompt("Enter your City Name in Pakistan");
// let citiesName = ["Karachi, Lahore, Islamabad, Peshawar, Quetta"];
// for (let i = 0; i < 1; i++) {
//     document.write("<h1>" + "Cities Name" + "</h1>" + "<h3>" + "Karachi, Lahore, Islamabad, Peshawar, Quetta :" + "</h3>" + "<h1> " + "Selected Cities Name" + "</h1>" + "<h3>" + userCitiesName + "</h3>")
// }

// QUESTION 12
// var arr = ["This", "is ", "my ", "cat"];
// document.write("<h1>" + "Array :" + "</h1>" + "<h3>" + arr + "</h3>" + "<h1>" + "String :" + "</h1>" + "<h3>" + "This is my cat" + "</h3>")