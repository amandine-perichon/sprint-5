/* 

Write a loop that makes seven calls to console.log to output the following 
triangle:

#
##
###
####
#####
######
#######

*/

for (var line = '#'; line.length <= 7; line += '#') {
  console.log(line);
}

/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

/*
When you have that working, modify your program to print "FizzBuzz", for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
divisible by only one of those).
*/

for (var i = 0; i <= 100; i++) {
  var words = '';
  // if the number is divisible by 3, Fizz should be added to words
  if (i % 3 === 0) {
    words += 'Fizz';
  } 
  // if the number is divisible by 5, Buzz should be added to words
  if (i % 5 === 0) {
    words += 'Buzz';
  } 
  console.log(words || i);
}

/*

Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either a 
space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

var symbol = '#';
var chessBoard = '';
for (var lineNum = 0; lineNum < 8; lineNum++){
  // Set odd and even characters to be printed
  if (lineNum % 2 === 0) {
    oddChar = symbol;
    evenChar = ' ';
  } else {
    oddChar = ' ';
    evenChar = symbol;
  }
  // Print line
  var line = '';
  for (var charNum = 0; charNum < 8; charNum++) {
    if (charNum % 2 === 0) {
      line += evenChar;
    } else {
      line += oddChar;
    }
  }
  // Returm at the end of the line
  chessBoard += line + '\n';
}

console.log(chessBoard);


/* When you have a program that generates this pattern, define a variable 
size = 8 and change the program so that it works for any size, outputting 
a grid of the given width and height. */


var symbol = '#', height = 32, width = 21;
var chessBoard = '';
for (var lineNum = 0; lineNum < height; lineNum++){
  // Set odd and even characters to be printed
  if (lineNum % 2 === 0) {
    oddChar = symbol;
    evenChar = ' ';
  } else {
    oddChar = ' ';
    evenChar = symbol;
  }
  // Print line
  var line = '';
  for (var charNum = 0; charNum < width; charNum++) {
    if (charNum % 2 === 0) {
      line += evenChar;
    } else {
      line += oddChar;
    }
  }
  // Returm at the end of the line
  chessBoard += line + '\n';
}

console.log(chessBoard);