//=============================================
//=============================================
//Q1)Write a program that take two numbers & add them in a new variable. Show the result in your browser
var a, b;
a = parseInt(prompt("Enter 1st number"));
b = parseInt(prompt("Enter 2nd number"));
var c = (a + b);
document.getElementById("nabs").innerHTML = "Sum of " + a + " and " + b + " is " + c;
//=============================================
//=============================================
//Q2) Repeat task1 for subtraction, multiplication, division & modulus.
c = a - b;
document.getElementById("nabs").innerHTML = "subtraction " + a + " and " + b + " is " + c;
c = a * b;
document.getElementById("nabs").innerHTML = "multiplication " + a + " and " + b + " is " + c;
c = a / b;
document.getElementById("nabs").innerHTML = "division " + a + " and " + b + " is " + c;
c = a % b;
document.getElementById("nabs").innerHTML = "modulus " + a + " and " + b + " is " + c;
//=============================================
//=============================================
//Q3) Do the following using JS Mathematic Expressions a.Declare a variable.b.Show the value of variable in your browser like“ Value after variable declaration is: ? ? ”.c.Initialize the variable with some number.d.Show the value of variable in your browser like“ Initial value : 5”.e.Increment the variable.f.Show the value of variable in your browser like“ Value after increment is : 6”.g.Add 7 to the variable.h.Show the value of variable in your browser like“ Value
// after addition is: 13”.i.Decrement the variable.j.Show the value of variable in your browser like“ Value after decrement is: 12”.k.Show the remainder after dividing the variable’ s value by 3.
// l.Output: “The remainder is: 0”.
var ab;
document.getElementById("nabs").innerHTML = "Value after variable declaration is: " + ab + "<br>";
ab = 5;
document.getElementById("nabs").innerHTML += " Initial Value is: " + ab;
ab++;
document.getElementById("nabs").innerHTML += "<br> Value after increment is: " + ab;
ab += 7;
document.getElementById("nabs").innerHTML += "<br> Value after addition is: " + ab;
ab--;
document.getElementById("nabs").innerHTML += "<br> Value after decrement is: " + ab;

ab %= 3;
document.getElementById("nabs").innerHTML += "<br> The Remainder is: " + ab;
//=============================================
//=============================================
//Q4)Cost of one movie ticket is 600 PKR.Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.Example output:
var cost1 = 600;
document.getElementById("nabs").innerHTML = "Total Cost to buy 5 tickets to a movie is " + cost1 * 5 + " PKR";
//=============================================
//=============================================
//Q5) Write a script to display multiplication table of any number in your browser
var table;
table = parseInt(prompt("Enter any number"));
document.getElementById("he").innerHTML = "Table of " + table;
for (var i = 1; i <= 10; i++) {
    document.getElementById("nabs").innerHTML += "<br>" + table + "x" + i + " = " + table * i;
}
//=============================================
//=============================================
//Q6)The Temperature Converter: It’ s hot out!Let’ s make a converter based on the steps here.
// a.Store a Celsius temperature into a variable.
// b.Convert it to Fahrenheit & output“ NNoC is NNoF”.
// c.Now store a Fahrenheit temperature into a variable.
// d.Convert it to Celsius & output“ NNoF is NNoC”.
var cel;
cel = parseInt(prompt("Enter Temp in C"));
var fore = (cel * 9 / 5) + 32;
document.getElementById("nabs").innerHTML = cel + "°C is " + fore + " °F";
var foren = parseInt(prompt("Enter Temp in F"))
var cels = (foren - 32) * 5 / 9;
document.getElementById("nabs").innerHTML += "<br>" + foren + "°F is " + cels + " °C";
//=============================================
//=============================================
//Q7)Write a program to implement checkout process of a shopping cart system
// for an e - commerce website.Store the following in variablesPrice of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var item1 = 650;
var item2 = 100;

var itq1 = 3;
var itq2 = 7;
var shp = 100;
document.getElementById("he").innerHTML = "Shopping Cart";
document.getElementById("nabs").innerHTML = "price of item 1 is " + item1 + "<br>Quantity of item1 is " + itq1 + "<br>Price of item 2 is " + item2 + "<br>Quantity of item2 is " + itq2 + "<br>Shipping Cost " + shp + "<br><br>Total Cost of your order is " + ((item1 * itq1) + (item2 * itq2) + 100);
//=============================================
//=============================================
//Q8)Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser
var totalmarks = 1000,
    marksob;
marksob = parseInt(prompt("Enter marks obtained"));
document.getElementById("he").innerHTML = "Marksheet";
document.getElementById("nabs").innerHTML = "Total marks " + totalmarks + "<br>Marks obtained " + marksob + "<br>Percentage " + (marksob / totalmarks) * 100 + "%";
//=============================================
//=============================================
//Q9)Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.getElementById("he").innerHTML = "Currency in PKR";
document.getElementById("nabs").innerHTML = "Total Currency in PKR " + (parseFloat(parseInt(10) * parseFloat(104.8)) + parseFloat(parseInt(25) * parseInt(28)));
//=============================================
//=============================================
//Q10) Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
var abc = 20;
document.getElementById("nabs").innerHTML = "Ans is " + (((parseFloat(abc) + (5)) * 10) / 2);
//=============================================
//=============================================
//Q11)The Age Calculator: Forgot how old someone is ? Calculate it!a.Store the current year in a variable.b.Store their birth year in a variable.c.Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
var curr = 2020;
var h = parseInt(prompt("Enter your birth year"));
document.getElementById("he").innerHTML = "Age Calculator";
document.getElementById("nabs").innerHTML = "Current Year is: " + curr + "<br>Birth Year: " + h + "<br>your age is: " + (parseInt(curr) - h);
//=============================================
//=============================================
//Q12)The Geometrizer: Calculate properties of a circle.a.Store a radius into a variable.
// b.Calculate the circumference based on the radius, and output“ The circumference is NN”.(Hint: Circumference of a circle = 2 π r, π = 3.142) Calculate the area based on the radius, and output“ The area is NN”.(Hint: Area of a circle = π r2, π = 3.142)
var rad = parseInt(prompt("Enter Circle Radius"));
document.getElementById("he").innerHTML = "The Geometrizer";
document.getElementById("nabs").innerHTML = "Radius of Circle is: " + rad + "<br>The Circumference is: " + (2 * rad * 3.142) + "<br>The area is: " + (3.142 * rad * rad);
//=============================================
//=============================================
//Q12)The Lifetime Supply Calculator: Ever wonder how much a“ lifetime supply” of your favorite snack is ? Wonder no more.a.Store your favorite snack into a variable b.Store your current age into a variable.c.Store a maximum age into a variable.d.Store an estimated amount per day(as a number).e.Calculate how many would you eat total
// for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var snacks = prompt("enter your fav. snacks name");
var curre = parseInt(prompt("Enter curr age"));
var estm = parseInt(prompt("Enter estm. age"));
var amo = parseInt(prompt("Enter amount of snacks per day"));
document.getElementById("he").innerHTML = "The Lifetime Supply Calculator";
document.getElementById("nabs").innerHTML = "Favorite Snack: " + snacks + "<br>Current Age: " + curre + "<br>Estimated Maximum Age: " + estm + "<br>Amount of Snacks Per day: " + amo + "<br>You Will need " + (parseInt(parseInt(estm) - parseInt(curre)) * parseInt(amo)) + " " + snacks + " to last you until the ripe old age of " + estm;