// Chapter 1 - 3 Start

// Chapter 1 (Alerts) Start

// Q1
function promptFirstName() {
  var firstName = prompt("Please enter your first name:");
  alert("Hello, " + firstName + "!");
}

function promptLastName() {
  var lastName = prompt("Please enter your last name:");
  alert("Welcome, Mr./Ms. " + lastName + "!");
}

function promptEmail() {
  var email = prompt("Please enter your email address:");
  alert("Your email address is: " + email);
}

function promptPhoneNumber() {
  var phoneNumber = prompt("Please enter your phone number:");
  alert("Your phone number is: " + phoneNumber);
}

function promptPassword() {
  var password = prompt("Please enter your password:");
  alert("Your password is: " + password);
}

window.onload = function () {
  promptFirstName();
  promptLastName();
  promptEmail();
  promptPhoneNumber();
  promptPassword();
};

// Q2
alert("You're learning JavaScript!");

// Q3
alert("Welcome to our website! Thank you for visiting.");

// Chapter 1 (Alerts) End

// Chapter 2 (Variables for string) Start

// Q1
var Fullname = "Muhammad Saim Khan";

// Q2
var skill; // Declaration without definition
var skill = "Web Development"; // Assigning a string to the variable

// Q3
var teamName = "Jawan Pakistan";
alert(teamName);

// Q4
var bestMan = "Cherlie";
bestMan = "Muhammad Saim Khan";

// Chapter 2 (Variables for string) End

// Chapter 3 (Variables for numbers) Start

// Q1
var caseQty;

// Q2
var caseQty;
caseQty = 144;

// Q3
var num = 9;

// Q4
var sum;
sum = 5 + 7;

// Q5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

// Q6
var myNumber = 10;
myNumber = myNumber + 5;

// Chapter 3 (Variables for numbers) End

// Chapter 1 - 3 End
