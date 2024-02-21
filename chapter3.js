// Chapter No 3 (VARIABLES FOR NUMBERS) Start

// Q1
var age = 19;
alert("I am " + age + " years old");

// Q2
let visitCount = localStorage.getItem("visitCount");
visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
localStorage.setItem("visitCount", visitCount);
alert(`You have visited this site ${visitCount} times.`);

// Q3
var birthYear = 2005;
document.write(
  "<b>My birth year is </b>" +
    birthYear +
    "<br/>" +
    "<b>Data type of my declared variable is number</b><br>"
);

// Q4
var visitorName = prompt("Please enter your name:");
var productTitle = prompt("What product would you like to order?");
var quantity = prompt(
  "How many " + productTitle + "(s) would you like to order?"
);
document.write(
  visitorName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    "(s) on XYZ Clothing store."
);

// Chapter No 3 (VARIABLES FOR NUMBERS) End
