let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  describe("#palindrome", function() {
  
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    })
    
    it("should return true for a palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
    
    it("should return rue for a mixed-case palindrome", function() {
      let mixedPalindrome = new Phrase("RaceCar");
      assert(mixedPalindrome.palindrome());
    });
    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("A man, a plan, a canal—Panama!");
      assert.strictEqual(punctuatedPalindrome.processedContent(), "amanaplanacanalpanama");
    });
    it("should return the empty string on no match", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
  
  describe("#letters",  function() {
    it("should only return letters", function() {
    	let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
    	assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    })
  })
});