' use strict';

const StringClass = {
  /**
   * has vowels
   * Tests if a string contains vowels
   * @return {Boolean} True or false depending on the match
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * to Upper
   * converts strings to uppercase
   * @return {String} string that has been converted to uppercase
   */
  toUpper() {
    return this.replace(/[a-z]/g, (character) => {
      return String.fromCharCode(character.charCodeAt() - 32);
    });
  },

  /**
   * to Lower
   * converts strings to lowercase
   * @return {String} string that has been converted to lowercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, (character) => {
      return String.fromCharCode(character.charCodeAt() + 32);
    });
  },

  /**
   * upper case first
   * converts strings to title case
   * @return {String} string that has been converted to title case
   */
  ucFirst() {
    return `${this[0].toUpper()}${this.slice(1)}`;
  },

  /**
   * is question
   * checks if a string is a question by looking for '?' sign
   * @return {Boolean} true or false depending on the match
   */
  isQuestion() {
    return /^[a-z0-9\s]+\?$/i.test(this.trim());
  },

 /**
  * word
  * checks for words in a string
  * @return {String} returns array of words in the string
  */
  word() {
    return this.replace(/[^\w\s]/g, '').split(/\s+/);
  },

  /**
   * word count
   * checks the number of words present in a string
   * @return {Number} the number of words in the string
   */
  wordCount() {
    return this.word().length;
  },

  /**
   * to currency
   * converts currency representation to string
   * @return {String} currency representation of the the number in String
   */
  toCurrency() {
    return Number(this)
    ? Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : 'Invalid Input';
  },

  /**
   * from currency
   * converts strings representation of currency
   * @return {Number} number representation of the currency String
   */
  fromCurrency() {
    const result = Number(this.replace(/(,|\.00)/g, ''));
    if (result) {
      return result;
    }
    return 'Invalid Input';
  },

  /**
   * inverse case
   * converts each letter in the string as an inverse of its current case
   * @return {String} inverse case of each character of the String
   */
  inverseCase() {
    return this.replace(/\w/g, (character) => {
      return /[A-Z]/.test(character) ? character.toLower() : character.toUpper();
    });
  },

  /**
   * alternating case
   * converts each character of a String to alternating case
   * @return {String} alternate case of each character of the String
   */
  alternatingCase() {
    return this.replace(/\w/g, (character, index) => {
      return index % 2 !== 0 ? character.toUpper() : character.toLower();
    });
  },

  /**
   * get middle
   * gets the middle character(s) of a String
   * @return {String} middle character(s) of the String
   */
  getMiddle() {
    const middle = this.length / 2;
    return (middle === Math.floor(middle)) ?
      this.substr(middle - 1, 2) : this.charAt(middle);
  },

  /**
   * number to words
   * converts each Number to its String name
   * @return {String} String representation of a number
   */
  numberWords() {
    const mapNumbers = {
      0: 'zero ',
      1: 'one ',
      2: 'two ',
      3: 'three ',
      4: 'four ',
      5: 'five ',
      6: 'six ',
      7: 'seven ',
      8: 'eight ',
      9: 'nine '
    };

    return this.replace(/\d/g, number => mapNumbers[number]).trim();
  },

  /**
   * is digit
   * Checks if a String is a digit i.e one Number
   * @return {Boolean} True of false depending on thne match
   */
  isDigit() {
    return /^\d$/.test(this);
  },

  /**
   * double check
   * checks for double characters in a string
   * @return {Boolean} True of false depending on thne match
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }

};
Object.assign(String.prototype, StringClass);
