

// Create a variable called add and store a function
// in it that adds two numbers

var add = function(a, b) {
    return a + b;
} 


var sum = add(3, 5);
document.write("3 + 5 = ");
document.writeln(sum);


// Get Name
name = prompt("Please enter your name", "First Name");
alert("Welcome " + name);

// Dates
var date = new Date();
var month_int = date.getMonth();
var day = date.getDay() - 1;


var month;
switch (month_int) {
    case 0: month = "January";
            break;
    case 1: month = "February";
            break;
    case 2: month = "March";
            break;
    case 3: month = "April";
            break;
    case 4: month = "May";
            break;
    case 5: month = "June";
            break;
    case 6: month = "July";
            break;
    case 7: month = "August";
            break;
    case 8: month = "September";
            break;
    case 9: month = "October";
            break;
    case 10: month = "November";
            break;
    case 11: month = "December";
            break;
    default: month = "month";
}
    


document.writeln("\ntoday's date: " + month + " " + day + ", " + date.getFullYear());
document.writeln("last modified: " + document.lastModified);

// Status Bar Message
function stat_write(yourtext){
    window.status=yourtext;
}

// Display Good Morning, Afternoon, or Evening depending on time of day
var hour = date.getHours();

document.writeln("<br><br>");
if (hour < 11)
    document.writeln("Good Morning!");
else if (hour < 6)
    document.writeln("Good Afternoon!");
else
    document.writeln("Good Evening!");


