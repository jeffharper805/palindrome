module.exports = Phrase;

// Palindrome code - Learn Enough JavaScript


// Reverses a string

//Adds `reverse` to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

/*
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
*/  
  // Returns content processed for palindrome testing.
  // discards punctuation and whitespace.
  this.processedContent = function processedContent() {
    return this.content.split(/[\W]+/g).join("").toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  } 
  this.letters = function(  ) {
  	return this.content.split(/[\W]+/g).join("");        // stub return value
  }
}

let punct = new Phrase("A man, a plan, a canal—Panama!");
console.log(punct.palindrome());
console.log(punct.processedContent());

