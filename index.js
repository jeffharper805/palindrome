// Palindrome code - Learn Enough JavaScript


// Reverses a string

//Adds `reverse` to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

/* 
function reverse( string ) {
  return Array.from(string).reverse().join("");
}
 */

// Test for a palindrome
function palindrome( string ) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}


// Defines a Phrase object
/* 
function Phrase( content ) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
  
 
 // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
 
  //Makes the phrase LOUDER!
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}
 */

// Defines a Phrase object
function Phrase( content ) {
  this.content = content;

  this.processor = function( string ) {
  	return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
 
  //Makes the phrase LOUDER!
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object
function TranslatedPhrase( content, translation ) {
	this.content = content;
	this.translation = translation;
	
	// Returns a translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();

// TESTCASES
let phrase = new Phrase("Racecar");
console.log(phrase.content);
console.log(phrase.processedContent());
console.log(phrase.palindrome());
console.log(phrase.louder());
let frase = new TranslatedPhrase("recognize","reconocer");
console.log(frase.content);
console.log(frase.translation);
console.log(frase.palindrome());

// Exercise 7.3.1

//Adds `blank` method to all strings.
String.prototype.blank = function() {
	return !this.match(/\S/);
}

console.log("Test new string 'blank' method");
console.log("".blank());
console.log(" ".blank());
console.log("Jeff".blank());
console.log(" Jeff ".blank());

// Add a `last` method to all Arrays
Array.prototype.last = function() {
// 	return this[this.length - 1];
  return this.pop();
}

console.log("Test new array 'last' method");
console.log([1,2,3,4,5].last());