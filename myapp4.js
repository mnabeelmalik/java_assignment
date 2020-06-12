//=============================================
//=============================================
//Q1)Declare 3 variables in one statement.
var a, b, c;

//=============================================
//=============================================
//Q2)Declare 5 legal & 5 illegal variable names.
// var 1 a, #d, -J, > n, 12; //illegal
var _1, $nabs, check, C_1, thisVar; //legal
//=============================================
//=============================================
//Q3)Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
var heading = "Rules for naming JS variables";
document.getElementById("he").innerHTML = heading;
var a = " Variable names can only contain numbers, $ sign, _. For example $my_1stVariable";
var b = "Variables must begin with a letter, & or _. For example $name, _name or name";
var c = "Variable names are case sensitive";
var d = "Variable names should not be JS keywords";
document.getElementById("nabs").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d;