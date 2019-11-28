# JavaScript Assingmnet 2 (Chapter 2, 3)

**This assignment is all about variables and data types. We will also be going over the different ways to store data in javascript, it would be a good idea to read this article [JavaScript: var, let and const](https://programmingwithmosh.com/javascript/javascript-var-let-and-const/)**

The purpose of programming languages is to manipulate and process data. That being said we need a way to store data in our program and manipulate it. In JavaScript we store values in what is called a variable, and in JavaScript there are 3 different types, var, let and const. The main difference is that var has a global scope, and can be accessed anywhere in your code. let is scoped, meaning you can only access it withing the structure it has been declaired in, and const is a variable that cannot be reassigned after creation. Most often yu will use let.

JavaScript is what is known as a dynamically typed language, which means you do not really need to worry much about types, it will autmatically cast certain types to others depending on how they are used. The main datatypes are boolean, null, string, number and after reading the chapters you should have a good idea of what each means.

in order to change data types you use 2 main functions:
String(--variable--); -> this will convert the variable to a string.
Number(--variable--); -> this will convert the variable to a number.

We will be creating a small program to add 2 numbers together.

<br>

## Steps

1. Create a JavaScript file and link it to the starting HTML file with the defer attrinute.
2. create 2 prompts that ask for 2 different numbers.
3. Make sure that the values returned from the prompt are numbers and not strings.
4. Calculate the sum of the 2 user entered numbers.
5. Create a p tag with the id of sum.
6. Output the sum of the 2 numbers by changing the value of the p tag.

<br>

## Conclutions

First note is that you should never use var, you should always use let for storing variable data and const for data that is not going to change.

By default that data type returned from the prompt is a string.
