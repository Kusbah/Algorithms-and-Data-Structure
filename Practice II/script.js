//Write a program that checks if a number is positive or negative.
var number = -5;
if(number>0)
    console.log("positive number")
else
    console.log("Negative Number")

//Write a program that prints "Good morning" if the time is less than 12 and "Good afternoon" otherwise.
var time = 11;
if(time < 12)
    console.log("Good morning")
else
    console.log("Good afternoon")

//Write a program that assigns grades based on scores:

// 90 and above: A
// 80–89: B
// 70–79: C
// Below 70: F
var grades = 79;
if(grades>=90)
    console.log("A")
else if(grades>=80 && grades <= 89)
    console.log("B")
else if(grades>= 70 && grades <=79)
    console.log("C")
else
    console.log("F")

//Write a program that takes a day of the week and prints whether it’s a weekday or weekend.
var day = "Friday"
switch (day) {
    case "Monday":
        console.log("weekday")
        break;
    case "Tuesday":
        console.log("weekday")
        break;
    case "Wednesday":
        console.log("weekday")
        break;
    case "Thursday":
        console.log("weekday")
        break;
    case "Friday":
        console.log("weekend")
        break;
    case "Saturday":
        console.log("weekend")
        break;
    case "Sunday":
        console.log("weekday")
        break;
    default:
        console.log("it's not a day")
        break;
}