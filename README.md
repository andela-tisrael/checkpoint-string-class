[![Build Status](https://travis-ci.org/andela-tisrael/checkpoint-string-class.svg?branch=develop)](https://travis-ci.org/andela-tisrael/checkpoint-string-class)
[![Code Climate](https://codeclimate.com/github/andela-tisrael/checkpoint-string-class/badges/gpa.svg)](https://codeclimate.com/github/andela-tisrael/checkpoint-string-class)
[![Coverage Status](https://coveralls.io/repos/github/andela-tisrael/checkpoint-string-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-tisrael/checkpoint-string-class?branch=develop)

# String-Class

This is an extension of the String class in Javascript. Using Prototype Oriented Programming; methods, procedures and instance attributes are added to the String class to support more string manipulation features.

### Technology, Dependencies, Services

Javascript ES6 (ECMAScript 2015)
Node JS
Mocha
Travis CI
Coveralls
CodeClimate
Hound CI
ESLint
Instabul Test Coverage Generator

### Methods Added

#### These are the methods added:

`hasVowels`: Checks if the argument contains vowels

`toUpper`: Converts the argument to uppercase characters

`toLower`: Converts the argument to lowercase characters

`ucFirst`: Converts the first character of the argument to uppercase

`isQuestion`: Checks if the argument is a question

`words`: Returns the list of words in the specified string as an array

`wordCount`: Counts the number of words in a string

`toCurrency`: Converts the argument to a currency format

`fromCurrency`: Converts the argument in currency format to number

`inverseCase`: Returns the argument passed in with inverted character cases

`alternatingCase`: Returns the argument passed in with alternating character cases

`getMiddle`: Returns the character(s) in the middle of the argument

`numberWords`: Returns the words equivalent of the number passed in.

`isDigit`: Checks if the argument is a single digit

`doubleCheck`: Checks if the string contains double characters

### How to use

1. Clone the repository into your local machine with git clone https://github.com/andela-tisrael/checkpoint-string-class.git
2. Move into the repository directory with cd string-class
3. Run npm install to install all the dependencies. The application is built on Nodejs so verify you have node installed on your local machine first.
4. To run tests, you can run the command below npm test
5. Move the string-class.js file, located in the "src" directory, into any project directory you wish to use it in.