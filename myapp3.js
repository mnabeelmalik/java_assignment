//=============================================
//=============================================
//Q1) Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 25;
alert("i am " + age + " years old");
//=============================================
//=============================================
//Q2)Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var i = 1;
alert("You have visited this site " + i++ + " times");
//=============================================
//=============================================
//Q3)Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birth = 1995;
document.getElementById("nabs").innerHTML = "My Birth year is " + birth;
//=============================================
//=============================================
//Q3)A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var name, products, quantity, shop = "xyzClothing";
name = prompt("Enter Your name");
products = prompt("Select product we have t-shirts, shirts, pants, trousers");
quantity = prompt("Select quantity of product");
document.getElementById("nabs").innerHTML = "<b>" + name + "</b>" + " ordered <b>" + quantity + " " + products + "</b>(s) on " + shop + " store";