var age = prompt("Enter your age");
var days = 0; 
var leapDays = age % 4;

days = (age * 365) + leapDays;
prompt("You have been alive for " + days + " days");

