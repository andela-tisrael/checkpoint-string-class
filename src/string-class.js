'use strict';
const StringClass = {
  hasVowels() {
    return /[aeiouAEIOU]/g.test( this );
  },

  toUpper() {
    return this.replace( /[a-z]/g, ( character ) => {
      return String.fromCharCode( character.charCodeAt() - 32 );
    } );
  },

  toLower() {
    return this.replace( /[A-Z]/g, ( character ) => {
      return String.fromCharCode( character.charCodeAt() + 32 );
    } );
  },

  ucFirst() {
    return `${this.slice(0,1).toUpper()}${this.slice(1).toLower()}`;
  },

  isQuestion() {

  },

  word() {

  },

  wordCount() {

  },

  reverseWord() {

  },

  toCurrency() {

  },

  fromCurrency() {

  },

  inverseCase() {

  },

  alternatingCase() {

  },

  getMiddle() {

  },

  numberWords() {

  },

  isDigit() {

  },
  doubleCheck() {

  }
}
Object.assign( String.prototype, StringClass );
